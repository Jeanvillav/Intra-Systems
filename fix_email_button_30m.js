const fs = require('fs');

let code = fs.readFileSync('src/lib/emailTemplates.ts', 'utf8');

const oldEnZoom = '<p><strong>Meeting Location:</strong> <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>';
const newEnZoom = `
        <div style="text-align: center; margin: 30px 0; padding: 20px; background-color: #f8f9fa; border: 2px solid #141b4d; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #141b4d; font-size: 20px;">Join Your Meeting Now</h3>
          <p style="margin-bottom: 20px; color: #333;">We are starting soon! Click the button below to join the call:</p>
          <a href="\${booking.zoom_link}" style="background-color: #fdf354; color: #141b4d; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 18px; display: inline-block;">JOIN ZOOM MEETING</a>
        </div>
`;

const oldEsZoom = '<p><strong>Ubicación de la reunión:</strong> <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>';
const newEsZoom = `
        <div style="text-align: center; margin: 30px 0; padding: 20px; background-color: #f8f9fa; border: 2px solid #141b4d; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #141b4d; font-size: 20px;">Únete a tu reunión ahora</h3>
          <p style="margin-bottom: 20px; color: #333;">¡Comenzamos pronto! Haz clic en el botón de abajo para unirte a la llamada:</p>
          <a href="\${booking.zoom_link}" style="background-color: #fdf354; color: #141b4d; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 18px; display: inline-block;">UNIRSE A LA REUNIÓN DE ZOOM</a>
        </div>
`;

code = code.replace(oldEnZoom, newEnZoom);
code = code.replace(oldEsZoom, newEsZoom);

fs.writeFileSync('src/lib/emailTemplates.ts', code);
