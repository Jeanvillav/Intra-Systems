const fs = require('fs');

const path = 'src/lib/emailTemplates.ts';
let code = fs.readFileSync(path, 'utf8');

// Update type definition
code = code.replace(
  "export type BookingData = {",
  "export type BookingData = {\n  language?: string;"
);

// We'll replace getBookedEmail1
code = code.replace(
  "export function getBookedEmail1(booking: BookingData) {",
  `export function getBookedEmail1(booking: BookingData) {
  const isEs = booking.language === 'es';`
);

code = code.replace(
  'subject: "Your Appointment is Confirmed!",',
  'subject: isEs ? "¡Tu cita está confirmada!" : "Your Appointment is Confirmed!",'
);

// We'll just replace the HTML with conditional. Wait, there are too many variables.
// Actually, since this is just an example, it's easier to manually edit the file.
