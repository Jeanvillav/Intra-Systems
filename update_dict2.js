const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('messages/es.json', 'utf8'));

en.AboutSection = {
  "headerTitle": "WHAT DRIVES ME AND HOW I CAN SUPPORT YOU",
  "title": "KEVIN EASTER- CO-FOUNDER OF INTRA SYSTEMS",
  "p1": "My name is Kevin Easter, Co-Founder of INTRA Systems, and I bring over 20 years of experience in the dental industry, starting in the UK in 1997. I’ve had the privilege of working with some of the biggest names in the field and have spent the last 12+ years specializing in dental lasers for both hard and soft tissue applications.",
  "p2": "I’m passionate about helping dental practices and professionals discover how laser technology can transform patient care and enhance practice efficiency. Let’s explore how I can support your team in leveraging these advancements..",
  "journeyTitle": "MY JOURNEY",
  "journeyDesc": "My journey in the dental industry has been one of growth and discovery. With over 12 years specializing in dental lasers, I’ve witnessed firsthand how this technology can transform patient care and practice efficiency. My mission is to help dental professionals unlock the full potential of lasers, guiding them toward success and innovation in their practices..",
  "educationTitle": "EDUCATION",
  "educationDesc": "My formal education and certifications have given me the expertise to provide impactful guidance in dental laser technology.",
  "hobbiesTitle": "MY HOBBIES",
  "hobbiesDesc": "Beyond my work, I find balance and inspiration in spending quality time with my family and maintaining a healthy, active lifestyle through regular workouts. This commitment keeps me energized but also sharpens my focus and determination, qualities I bring to guiding dental professionals",
  "supportTitle": "SUPPORT EXPERT",
  "supportDesc": "As your go-to resource for dental laser technology, I bring years of experience and a genuine passion for helping practices thrive. I'm here to offer friendly, tailored support, providing you with the tools and strategies you need to enhance patient care, boost efficiency, and take your practice to the next level.",
  "bookCall": "BOOK A CALL"
};

es.AboutSection = {
  "headerTitle": "LO QUE ME MOTIVA Y CÓMO PUEDO APOYARTE",
  "title": "KEVIN EASTER- COFUNDADOR DE INTRA SYSTEMS",
  "p1": "Mi nombre es Kevin Easter, cofundador de INTRA Systems. Aporto más de 20 años de experiencia en la industria dental, comenzando en el Reino Unido en 1997. He tenido el privilegio de trabajar con algunos de los nombres más importantes en este campo y he pasado más de 12 años especializándome en láseres dentales para aplicaciones en tejidos duros y blandos.",
  "p2": "Me apasiona ayudar a los consultorios y profesionales dentales a descubrir cómo la tecnología láser puede transformar el cuidado del paciente y mejorar la eficiencia del consultorio. Exploremos cómo puedo apoyar a tu equipo a aprovechar estos avances.",
  "journeyTitle": "MI TRAYECTORIA",
  "journeyDesc": "Mi trayectoria en la industria dental ha sido de crecimiento y descubrimiento. Con más de 12 años especializándome en láseres dentales, he sido testigo de cómo esta tecnología puede transformar el cuidado del paciente y la eficiencia. Mi misión es ayudar a los profesionales dentales a desbloquear todo el potencial de los láseres, guiándolos hacia el éxito y la innovación.",
  "educationTitle": "EDUCACIÓN",
  "educationDesc": "Mi educación formal y mis certificaciones me han brindado la experiencia necesaria para proporcionar una orientación impactante en la tecnología láser dental.",
  "hobbiesTitle": "MIS PASATIEMPOS",
  "hobbiesDesc": "Más allá del trabajo, encuentro equilibrio e inspiración pasando tiempo de calidad con mi familia y manteniendo un estilo de vida saludable y activo mediante rutinas regulares de ejercicio. Este compromiso me mantiene lleno de energía y agudiza mi enfoque y determinación, cualidades que aporto al guiar a profesionales dentales.",
  "supportTitle": "EXPERTO EN SOPORTE",
  "supportDesc": "Como tu recurso de referencia para la tecnología láser dental, aporto años de experiencia y una genuina pasión por ayudar a las clínicas a prosperar. Estoy aquí para ofrecerte un soporte amigable y personalizado, brindándote las herramientas y estrategias que necesitas para mejorar el cuidado del paciente, aumentar la eficiencia y llevar tu clínica al siguiente nivel.",
  "bookCall": "AGENDAR LLAMADA"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/es.json', JSON.stringify(es, null, 2));
console.log('Dictionaries updated.');
