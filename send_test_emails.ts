import nodemailer from "nodemailer";
import { 
  getBookedEmail1, getBookedEmail2, 
  getCancelledEmail1, getCancelledEmail2, 
  getNoSaleEmail1, getNoSaleEmail2,
  getNoShowEmail1, getNoShowEmail2, getNoShowEmail3,
  BookingData 
} from "./src/lib/emailTemplates";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendTests() {
  const dummyBooking: BookingData = {
    id: "test-uuid-1234",
    first_name: "Jean",
    email: "villajean83@gmail.com",
    meeting_time: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    zoom_link: "https://zoom.us/j/123456789",
  };

  const emailsToTest = [
    { name: "Booked Email 1", ...getBookedEmail1(dummyBooking) },
    { name: "Booked Email 2", ...getBookedEmail2(dummyBooking) },
    { name: "Cancelled Email 1", ...getCancelledEmail1(dummyBooking) },
    { name: "Cancelled Email 2", ...getCancelledEmail2(dummyBooking) },
    { name: "No Sale Email 1", ...getNoSaleEmail1(dummyBooking) },
    { name: "No Sale Email 2", ...getNoSaleEmail2(dummyBooking) },
    { name: "No Show Email 1", ...getNoShowEmail1(dummyBooking) },
    { name: "No Show Email 2", ...getNoShowEmail2(dummyBooking) },
    { name: "No Show Email 3", ...getNoShowEmail3(dummyBooking) },
  ];

  console.log("Starting to send test emails to", dummyBooking.email);

  for (const email of emailsToTest) {
    try {
      console.log(`Sending: ${email.name}...`);
      await transporter.sendMail({
        from: `"Intra-Systems Test" <${process.env.GMAIL_USER}>`,
        to: dummyBooking.email,
        subject: `[TEST: ${email.name}] ${email.subject}`,
        html: email.html,
      });
      console.log(`✅ Sent: ${email.name}`);
      // Sleep a bit to avoid hitting Gmail rate limits too fast
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Failed to send ${email.name}:`, error);
    }
  }

  console.log("Finished sending all test emails!");
}

sendTests();
