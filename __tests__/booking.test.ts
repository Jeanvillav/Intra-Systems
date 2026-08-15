import { submitBooking } from '../src/app/actions/booking';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Mock dependencies
jest.mock('@supabase/supabase-js', () => {
  const insertMock = jest.fn();
  const updateMock = jest.fn();
  const selectMock = jest.fn();
  const eqMock = jest.fn();
  const singleMock = jest.fn();

  return {
    createClient: jest.fn(() => ({
      from: jest.fn(() => ({
        insert: insertMock.mockReturnValue({
          select: selectMock.mockReturnValue({
            single: singleMock,
          }),
        }),
        update: updateMock.mockReturnValue({
          eq: eqMock,
        }),
      })),
    })),
    // Export mocks so we can manipulate them in tests
    _insertMock: insertMock,
    _singleMock: singleMock,
    _updateMock: updateMock,
    _eqMock: eqMock,
  };
});

jest.mock('nodemailer', () => {
  const sendMailMock = jest.fn();
  return {
    createTransport: jest.fn(() => ({
      sendMail: sendMailMock,
    })),
    _sendMailMock: sendMailMock,
  };
});

// Mock fetch for Zoom API
global.fetch = jest.fn();

describe('Booking Logic (submitBooking)', () => {
  const mockEnv = {
    NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'test-key',
    ZOOM_ACCOUNT_ID: 'zoom-acc',
    ZOOM_CLIENT_ID: 'zoom-client',
    ZOOM_CLIENT_SECRET: 'zoom-secret',
    GMAIL_USER: 'test@gmail.com',
    GMAIL_APP_PASSWORD: 'app-password',
  };

  beforeEach(() => {
    // Reset env vars and mocks
    process.env = { ...mockEnv };
    jest.clearAllMocks();

    const { _singleMock, _eqMock } = require('@supabase/supabase-js');
    _singleMock.mockResolvedValue({ data: { id: 'booking-123' }, error: null });
    _eqMock.mockResolvedValue({ error: null });

    // Mock Zoom API fetch responses
    (global.fetch as jest.Mock).mockImplementation((url) => {
      if (url.includes('oauth/token')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ access_token: 'zoom-token-123' }),
        });
      }
      if (url.includes('users/me/meetings')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ join_url: 'https://zoom.us/j/123456789' }),
        });
      }
      return Promise.reject(new Error('Unknown URL'));
    });
  });

  it('1. Successful Booking: inserts into DB, generates Zoom link, and sends emails', async () => {
    // Future date to bypass 30-min buffer
    const meetingTime = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
    
    const result = await submitBooking({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
      meeting_time: meetingTime,
      language: 'en'
    });

    const { _insertMock } = require('@supabase/supabase-js');
    const { _sendMailMock } = require('nodemailer');

    expect(result.success).toBe(true);
    expect(result.zoomLink).toBe('https://zoom.us/j/123456789');

    // Verify DB insert
    expect(_insertMock).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ email: 'john@example.com', status: 'pending' })
      ])
    );

    // Verify Emails (2 emails: 1 to client, 1 to admin)
    expect(_sendMailMock).toHaveBeenCalledTimes(2);
    expect(_sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'john@example.com' })
    );
  });

  it('2. Double Booking Prevention: returns error if DB unique constraint fails', async () => {
    const meetingTime = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
    
    const { _singleMock } = require('@supabase/supabase-js');
    _singleMock.mockResolvedValueOnce({ data: null, error: { code: '23505', message: 'duplicate key' } });

    const result = await submitBooking({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '1234567890',
      meeting_time: meetingTime,
    });

    const { _sendMailMock } = require('nodemailer');

    expect(result.success).toBe(false);
    expect(result.error).toContain('exact time slot has just been booked');
    
    // Email and Zoom should NOT have been called
    expect(_sendMailMock).not.toHaveBeenCalled();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('3. Zoom Failure Graceful Handling: saves booking but warns user about Zoom failure', async () => {
    const meetingTime = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
    
    // Force Zoom OAuth to fail
    (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({
      ok: false,
      text: () => Promise.resolve('Invalid credentials'),
    }));

    const result = await submitBooking({
      firstName: 'Mark',
      lastName: 'Smith',
      email: 'mark@example.com',
      phone: '1234567890',
      meeting_time: meetingTime,
    });

    const { _insertMock } = require('@supabase/supabase-js');

    expect(result.success).toBe(false);
    expect(result.error).toContain('Zoom link generation failed');
    
    // But it SHOULD have been inserted in the DB
    expect(_insertMock).toHaveBeenCalled();
  });
});
