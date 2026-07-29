const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('messages/es.json', 'utf8'));

en.LetterSection = {
  "title": "WORKING TOGETHER FOR BETTER DENTISTRY.",
  "greeting": "Dear Dental Practice Owner/Associate,",
  "p1": "Applying retraction cord can turn an otherwise straightforward task into a laborious one.",
  "p2": "And you know this already...",
  "li1": "It is frustrating,",
  "li2": "It is difficult to control blood & fluids,",
  "li3": "It is stressful,",
  "tldr": "TL;DR- RETRACTION CORD DOES NOT MAKE IT EASY...",
  "solutionMeans": "The Solution Means:",
  "sol1": "You don't have to worry about how many cords to use.",
  "sol2": "You don't have to worry about waiting for bleeding to stop.",
  "sol3": "You don't have to worry about gums colapsing.",
  "instead": "Instead...",
  "inst1": "You get a quick and easy lateral retraction.",
  "inst2": "You get instant hemostasis.",
  "inst3": "You get total moisture control.",
  "inst4": "You get perfect clear margins every time.",
  "inst5": "You are guaranteed result in under ONE minute.",
  "inst6": "You get to speed up your procedures 3X.",
  "solutionIs": "The Solution: Soft Tissue Lasers!",
  "solutionDesc": "Perfect clear margins and all the new production revenue comes from the soft tissue applications which most practices don't have a good way of doing.",
  "difference": "THAT'S THE DIFFERENCE.",
  "ctaTitle": "IF YOU ARE INTERESTED TO LEARN MORE ABOUT SOFT TISSUE LASERS...<br/>BOOK A CALL WITH ME OR MY TEAM.",
  "ctaP1": "We will explain exactly how this approach would work for your dental practice.",
  "ctaP2": "This call is not a hard sell.<br/>It's simply giving you the information you need to either say:<br/>Yes... or No.",
  "ctaP3": "Click the button below.<br/>Book a time and date that works for you.",
  "talkSoon": "Talk soon!",
  "makeAppointment": "MAKE AN APPOINTMENT"
};

es.LetterSection = {
  "title": "TRABAJANDO JUNTOS POR UNA MEJOR ODONTOLOGÍA.",
  "greeting": "Estimado Propietario/Asociado de Clínica Dental,",
  "p1": "Aplicar hilo retractor puede convertir una tarea sencilla en una muy laboriosa.",
  "p2": "Y esto ya lo sabes...",
  "li1": "Es frustrante,",
  "li2": "Es difícil controlar la sangre y los fluidos,",
  "li3": "Es estresante,",
  "tldr": "EN RESUMEN- EL HILO RETRACTOR NO LO HACE FÁCIL...",
  "solutionMeans": "La Solución Significa:",
  "sol1": "No tienes que preocuparte por cuántos hilos usar.",
  "sol2": "No tienes que preocuparte por esperar a que deje de sangrar.",
  "sol3": "No tienes que preocuparte por el colapso de las encías.",
  "instead": "En cambio...",
  "inst1": "Obtienes una retracción lateral rápida y fácil.",
  "inst2": "Obtienes hemostasia instantánea.",
  "inst3": "Obtienes control total de la humedad.",
  "inst4": "Obtienes márgenes perfectos y claros siempre.",
  "inst5": "Tienes resultados garantizados en menos de UN minuto.",
  "inst6": "Aceleras tus procedimientos 3 veces más.",
  "solutionIs": "La Solución: ¡Láseres de Tejidos Blandos!",
  "solutionDesc": "Márgenes perfectos y toda la nueva producción proviene de aplicaciones en tejidos blandos que la mayoría de consultorios no tienen cómo realizar adecuadamente.",
  "difference": "ESA ES LA DIFERENCIA.",
  "ctaTitle": "SI ESTÁS INTERESADO EN APRENDER MÁS SOBRE LÁSERES DE TEJIDOS BLANDOS...<br/>AGENDA UNA LLAMADA CONMIGO O CON MI EQUIPO.",
  "ctaP1": "Explicaremos exactamente cómo este enfoque funcionaría para tu consultorio dental.",
  "ctaP2": "Esta llamada no es una venta agresiva.<br/>Es simplemente darte la información que necesitas para decir:<br/>Sí... o No.",
  "ctaP3": "Haz clic en el botón de abajo.<br/>Agenda una fecha y hora que te convenga.",
  "talkSoon": "¡Hablamos pronto!",
  "makeAppointment": "AGENDAR UNA CITA"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/es.json', JSON.stringify(es, null, 2));
console.log('Dictionaries updated.');
