const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('messages/es.json', 'utf8'));

en.TestimonialsSection = {
  "title": "WHAT DOCTORS SAY ABOUT US",
  "t1": "Everything is great, I have used it a few times and I have to say I am really impresed. The quality and performance have exceeded my expectations, and it's been a pleasure to use. It’s reliable, easy to use, and definitely worth it. I am very happy with it.",
  "author1": "Dr. Ruxandra.",
  "clinic1": "3 Dental Dublin.",
  "t2": "I have been using the laser and it is performing just as I hoped. It’s been reliable, smooth, and overall a great experience. Looking forward to more results with continued use.",
  "author2": "Dr. Brent.",
  "clinic2": "Chapel House Dentistry."
};

es.TestimonialsSection = {
  "title": "LO QUE DICEN LOS DOCTORES SOBRE NOSOTROS",
  "t1": "Todo es genial, lo he usado un par de veces y debo decir que estoy realmente impresionado. La calidad y el rendimiento han superado mis expectativas, y ha sido un placer usarlo. Es confiable, fácil de usar y definitivamente vale la pena. Estoy muy feliz con él.",
  "author1": "Dr. Ruxandra.",
  "clinic1": "3 Dental Dublin.",
  "t2": "He estado usando el láser y funciona justo como esperaba. Ha sido confiable, suave y, en general, una gran experiencia. Espero ver más resultados con el uso continuo.",
  "author2": "Dr. Brent.",
  "clinic2": "Chapel House Dentistry."
};

en.BookingSection = {
  "title": "BOOK YOUR FREE CONSULTATION",
  "subtitle": "Select a time below to speak with Kevin or our team about how lasers can transform your practice.",
  "firstName": "First Name *",
  "lastName": "Last Name *",
  "email": "Email *",
  "phone": "Phone Number *",
  "question": "Any questions before our call?",
  "bookingButton": "CONFIRM BOOKING",
  "bookingLoading": "PROCESSING...",
  "successMessage": "Thank you! Your appointment has been confirmed. Please check your email for the Zoom link.",
  "selectTime": "Select a Time",
  "selectedTime": "Selected Time",
  "change": "Change",
  "selectDate": "Please select a date on the calendar to see available times.",
  "timezone": "Your Timezone:"
};

es.BookingSection = {
  "title": "AGENDA TU CONSULTA GRATUITA",
  "subtitle": "Selecciona una hora abajo para hablar con Kevin o nuestro equipo sobre cómo los láseres pueden transformar tu consultorio.",
  "firstName": "Nombre *",
  "lastName": "Apellido *",
  "email": "Correo Electrónico *",
  "phone": "Número de Teléfono *",
  "question": "¿Alguna pregunta antes de nuestra llamada?",
  "bookingButton": "CONFIRMAR CITA",
  "bookingLoading": "PROCESANDO...",
  "successMessage": "¡Gracias! Tu cita ha sido confirmada. Por favor revisa tu correo para obtener el enlace de Zoom.",
  "selectTime": "Selecciona una Hora",
  "selectedTime": "Hora Seleccionada",
  "change": "Cambiar",
  "selectDate": "Por favor, selecciona una fecha en el calendario para ver los horarios disponibles.",
  "timezone": "Tu Zona Horaria:"
};

en.Footer = {
  "copyright": "Copyright 2025. All rights reserved",
  "email": "Email: info@intra-systems.com"
};

es.Footer = {
  "copyright": "Derechos de autor 2025. Todos los derechos reservados",
  "email": "Correo electrónico: info@intra-systems.com"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/es.json', JSON.stringify(es, null, 2));
console.log('Dictionaries updated.');
