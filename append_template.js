const fs = require('fs');

let code = fs.readFileSync('src/lib/emailTemplates.ts', 'utf8');

const newTemplate = `
export function get30MinReminderEmail(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time, booking.language);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "¡Empezamos en 30 Minutos!" : "Starting in 30 Minutes!";
  const htmlEn = \`
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2>Hi \${booking.first_name},</h2>
        <p>I trust this email finds you in good health. It's just a quick note to inform you that we are only 30 minutes away from your scheduled appointment on \${date} at \${time}.</p>
        <p>The moment for transformative change is upon us, and I'm excited about the positive shifts that await you.</p>
        <p>Get ready to embark on this journey towards positive transformation. Your commitment to this appointment is a crucial step toward achieving the results you desire.</p>
        <p><strong>Meeting Location:</strong> <a href="\${booking.zoom_link}">\${booking.zoom_link}</a></p>
        <br/>
        <p>If you need to reschedule, you can do so here:</p>
        <p><a href="\${reschedule}">Reschedule Link</a></p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    \`;
  const htmlEs = \`
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2>Hola \${booking.first_name},</h2>
        <p>Espero que este correo te encuentre bien. Es solo una nota rápida para informarte que estamos a solo 30 minutos de tu cita programada el \${date} a las \${time}.</p>
        <p>El momento del cambio transformador está sobre nosotros, y estoy emocionado por los cambios positivos que te esperan.</p>
        <p>Prepárate para embarcarte en este viaje hacia la transformación positiva. Tu compromiso con esta cita es un paso crucial para lograr los resultados que deseas.</p>
        <p><strong>Ubicación de la reunión:</strong> <a href="\${booking.zoom_link}">\${booking.zoom_link}</a></p>
        <br/>
        <p>Si necesitas reprogramar, puedes hacerlo aquí:</p>
        <p><a href="\${reschedule}">Enlace para reprogramar</a></p>
        <br/>
        <p>Saludos cordiales,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    \`;

  return { subject, html: isEs ? htmlEs : htmlEn };
}
`;

fs.appendFileSync('src/lib/emailTemplates.ts', newTemplate);
