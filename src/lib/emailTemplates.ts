export type BookingData = {
  id: string;
  first_name: string;
  email: string;
  meeting_time: string;
  zoom_link: string;
  language?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

function getLinks(id: string) {
  return {
    reschedule: `${baseUrl}/booking/edit?id=${id}`,
    cancel: `${baseUrl}/booking/cancel?id=${id}`
  };
}

function formatDate(dateStr: string, lang: string = 'en') {
  return new Date(dateStr).toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB', {
    timeZone: "America/Guayaquil",
    dateStyle: "full",
  });
}

function formatTime(dateStr: string, lang: string = 'en') {
  return new Date(dateStr).toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB', {
    timeZone: "America/Guayaquil",
    timeStyle: "short",
  });
}

// ----------------------------------------------------
// Booked Appointment Email Workflow
// ----------------------------------------------------

export function getBookedEmail1(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time, booking.language);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "¡Tu cita está confirmada!" : "Your Appointment is Confirmed!";
  
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <img src="https://img.youtube.com/vi/TXPZD_1fUl0/maxresdefault.jpg" alt="Video Placeholder" style="width: 100%; border-radius: 8px; margin-bottom: 20px;" />
        <p>Hi ${booking.first_name},</p>
        <p>I hope this message finds you well.</p>
        <p>We are genuinely thrilled to have you scheduled for an upcoming appointment with us. We genuinely appreciate your decision to connect with us, and we want to ensure you fully understand the significance of this upcoming call.</p>
        <p>This call is very important as it’s an opportunity of a lifetime. This appointment is much more than a regular meeting. It's a crucial step towards improving your dental practice.</p>
        <p>During our call, we'll focus on your specific needs and goals, providing tailored solutions and a roadmap for your practice success.</p>
        <p>Expect a productive and inspiring conversation with:</p>
        <ul>
          <li>A deep look at your current practice situation.</li>
          <li>Customized strategies for your unique dental laser procedures.</li>
          <li>Practical advice to enhance your practice with lasers.</li>
          <li>An opportunity to ask questions and get clarity.</li>
        </ul>
        <p>Come prepared with any questions or concerns you have. Your active participation will help us cater to your needs better.</p>
        <p>We're eager for this appointment, and we're confident it will drive positive change in your business. Your time will be well-spent, and the insights gained will propel you towards success.</p>
        <p>If you have questions or need to adjust the appointment, feel free to reach out to us.</p>
        <p>We look forward to a productive and inspiring conversation on <strong>${date}</strong> at <strong>${time}</strong>.</p>
        <br/>
        <p><strong>Meeting Location:</strong> <a href="${booking.zoom_link}">Join via Zoom</a></p>
        <p><strong>Reschedule Link:</strong> <a href="${reschedule}">Click here to reschedule</a></p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <img src="https://img.youtube.com/vi/TXPZD_1fUl0/maxresdefault.jpg" alt="Video Placeholder" style="width: 100%; border-radius: 8px; margin-bottom: 20px;" />
        <p>Hola ${booking.first_name},</p>
        <p>Espero que este mensaje te encuentre bien.</p>
        <p>Estamos genuinamente emocionados de tenerte programado para una próxima cita con nosotros. Apreciamos genuinamente tu decisión de conectarte con nosotros y queremos asegurarnos de que entiendas completamente la importancia de esta próxima llamada.</p>
        <p>Esta llamada es muy importante ya que es una oportunidad única en la vida. Esta cita es mucho más que una reunión habitual. Es un paso crucial hacia la mejora de tu práctica dental.</p>
        <p>Durante nuestra llamada, nos centraremos en tus necesidades y objetivos específicos, proporcionando soluciones a medida y una hoja de ruta para el éxito de tu práctica.</p>
        <p>Espera una conversación productiva e inspiradora con:</p>
        <ul>
          <li>Una mirada profunda a la situación actual de tu práctica.</li>
          <li>Estrategias personalizadas para tus procedimientos únicos con láser dental.</li>
          <li>Consejos prácticos para mejorar tu práctica con láseres.</li>
          <li>La oportunidad de hacer preguntas y obtener claridad.</li>
        </ul>
        <p>Ven preparado con cualquier pregunta o inquietud que tengas. Tu participación activa nos ayudará a atender mejor tus necesidades.</p>
        <p>Estamos ansiosos por esta cita, y estamos seguros de que impulsará un cambio positivo en tu negocio. Tu tiempo estará bien invertido, y las ideas obtenidas te impulsarán hacia el éxito.</p>
        <p>Si tienes preguntas o necesitas ajustar la cita, no dudes en contactarnos.</p>
        <p>Esperamos una conversación productiva e inspiradora el <strong>${date}</strong> a las <strong>${time}</strong>.</p>
        <br/>
        <p><strong>Ubicación de la reunión:</strong> <a href="${booking.zoom_link}">Unirse vía Zoom</a></p>
        <p><strong>Enlace para reprogramar:</strong> <a href="${reschedule}">Haz clic aquí para reprogramar</a></p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getBookedEmail2(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time, booking.language);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "Información importante para nuestra llamada" : "Important Information for our Call";

  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hi ${booking.first_name},</p>
        <p>It’s me again. Once again thank you for booking an appointment with us.</p>
        <p>Allow me to express how important this email is – its content is designed to provide you with valuable knowledge, so please take a moment to read it carefully from beginning to end.</p>
        <p>We believe that knowledge is the cornerstone of informed decision-making and the key to getting the desired results you want.</p>
        <p>To kickstart your journey, we have prepared an enlightening video that we believe will be beneficial in expanding your understanding of dental lasers. This video is more than just content; it's a valuable resource that can transform your perspective and drive your success to new heights.</p>
        <p>Thank you for allowing us the privilege of being part of your educational journey. We believe that this content will not only inform but also inspire you, and we look forward to the exciting discussions and opportunities it may spark.</p>
        <p>Click the image below to access the video:</p>
        <a href="https://youtu.be/cm5wsDZPlzY" target="_blank">
          <img src="https://img.youtube.com/vi/cm5wsDZPlzY/maxresdefault.jpg" alt="Educational Video" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <p>We are eager to hear your feedback and insights once you've had a chance to view it. Please don't hesitate to share your thoughts or questions with us. Your engagement is important to us.</p>
        <br/>
        <p><strong>Your Appointment is:</strong> ${date} at ${time}</p>
        <p><strong>Meeting Location:</strong> <a href="${booking.zoom_link}">Join via Zoom</a></p>
        <p><strong>Reschedule Link:</strong> <a href="${reschedule}">Click here to reschedule</a></p>
        <br/>
        <p>Kind regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hola ${booking.first_name},</p>
        <p>Soy yo de nuevo. Una vez más, gracias por agendar una cita con nosotros.</p>
        <p>Permíteme expresar lo importante que es este correo: su contenido está diseñado para brindarte conocimientos valiosos, así que tómate un momento para leerlo detenidamente de principio a fin.</p>
        <p>Creemos que el conocimiento es la piedra angular de la toma de decisiones informada y la clave para obtener los resultados que deseas.</p>
        <p>Para iniciar tu viaje, hemos preparado un video esclarecedor que creemos será beneficioso para ampliar tu comprensión sobre los láseres dentales. Este video es más que simple contenido; es un recurso valioso que puede transformar tu perspectiva y llevar tu éxito a nuevas alturas.</p>
        <p>Gracias por permitirnos el privilegio de ser parte de tu viaje educativo. Creemos que este contenido no solo informará sino que también te inspirará, y esperamos las emocionantes discusiones y oportunidades que pueda generar.</p>
        <p>Haz clic en la imagen a continuación para acceder al video:</p>
        <a href="https://youtu.be/cm5wsDZPlzY" target="_blank">
          <img src="https://img.youtube.com/vi/cm5wsDZPlzY/maxresdefault.jpg" alt="Video Educativo" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <p>Estamos ansiosos por escuchar tus comentarios e ideas una vez que hayas tenido la oportunidad de verlo. Por favor, no dudes en compartir tus pensamientos o preguntas con nosotros. Tu participación es importante para nosotros.</p>
        <br/>
        <p><strong>Tu cita es el:</strong> ${date} a las ${time}</p>
        <p><strong>Ubicación de la reunión:</strong> <a href="${booking.zoom_link}">Unirse vía Zoom</a></p>
        <p><strong>Enlace para reprogramar:</strong> <a href="${reschedule}">Haz clic aquí para reprogramar</a></p>
        <br/>
        <p>Saludos cordiales,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

// ----------------------------------------------------
// Cancelled Appointment Email Flow
// ----------------------------------------------------

export function getCancelledEmail1(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "Cancelación Confirmada" : "Cancellation Confirmed";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I hope this message finds you well. We received notification that you have cancelled the upcoming appointment scheduled for ${time}. We understand that unforeseen circumstances can arise, and we respect your decision.</p>
        <p>If you find that your schedule doesn't allow you to attend the call and you'd like to explore an alternative time, we've provided a reschedule link for your convenience:</p>
        <p><a href="${reschedule}">Reschedule your appointment here</a></p>
        <p>This allows you to select a time that better suits your availability.</p>
        <p>Should you have any specific concerns or questions, please feel free to reach out.</p>
        <p>We value your interest and look forward to the possibility of connecting with you in the near future.</p>
        <p>Thank you for considering our services, and we wish you all the best.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Espero que este mensaje te encuentre bien. Recibimos la notificación de que has cancelado la próxima cita programada para las ${time}. Entendemos que pueden surgir circunstancias imprevistas y respetamos tu decisión.</p>
        <p>Si consideras que tu horario no te permite asistir a la llamada y deseas explorar un horario alternativo, hemos proporcionado un enlace para reprogramar para tu comodidad:</p>
        <p><a href="${reschedule}">Reprograma tu cita aquí</a></p>
        <p>Esto te permite seleccionar un horario que se adapte mejor a tu disponibilidad.</p>
        <p>Si tienes alguna inquietud o pregunta específica, no dudes en comunicarte con nosotros.</p>
        <p>Valoramos tu interés y esperamos la posibilidad de conectarnos contigo en el futuro cercano.</p>
        <p>Gracias por considerar nuestros servicios, y te deseamos lo mejor.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getCancelledEmail2(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "Oferta especial solo para ti" : "Special Offer Just For You";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hi ${booking.first_name},</p>
        <p>I hope you're doing well.</p>
        <p>We noticed that the upcoming appointment on ${time} has been cancelled, and we understand that life can throw unexpected curveballs.</p>
        <p>On a positive note, kudos to you for taking that important first step!</p>
        <p>We appreciate your interest in our content and booking an appointment to explore what's possible.</p>
        <p>Now, there's a reason you read our ads, clicked on our funnel, and booked that initial appointment. We solve a problem of yours.</p>
        <p>To make things even more exciting, we have a special offer just for you: <strong>FREE Online Diode Laser Course.</strong></p>
        <p>The best part is, that the results you're looking for are within reach, but it all starts with the next step—rebooking your appointment.</p>
        <p>In a world where actions speak louder than intentions, we invite you to move forward and make progress toward your goals.</p>
        <p>Secure your spot now, and let's journey together towards your aspirations.</p>
        <br/>
        <p><strong>Book Your Appointment Now:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>We're here and ready to assist you.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hola ${booking.first_name},</p>
        <p>Espero que estés bien.</p>
        <p>Notamos que la próxima cita a las ${time} ha sido cancelada, y entendemos que la vida puede presentar imprevistos.</p>
        <p>¡En una nota positiva, felicitaciones por dar ese importante primer paso!</p>
        <p>Apreciamos tu interés en nuestro contenido y por agendar una cita para explorar lo que es posible.</p>
        <p>Ahora, hay una razón por la que leíste nuestros anuncios, hiciste clic en nuestro embudo y agendaste esa cita inicial. Nosotros resolvemos un problema tuyo.</p>
        <p>Para hacer las cosas aún más emocionantes, tenemos una oferta especial solo para ti: <strong>Curso gratuito en línea de láser de diodo.</strong></p>
        <p>La mejor parte es que los resultados que buscas están a tu alcance, pero todo comienza con el siguiente paso: reprogramar tu cita.</p>
        <p>En un mundo donde las acciones hablan más que las intenciones, te invitamos a avanzar y progresar hacia tus metas.</p>
        <p>Asegura tu lugar ahora y viajemos juntos hacia tus aspiraciones.</p>
        <br/>
        <p><strong>Agenda tu cita ahora:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Estamos aquí y listos para ayudarte.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

// ----------------------------------------------------
// No Sale Email Flow
// ----------------------------------------------------

export function getNoSaleEmail1(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);

  const subject = isEs ? "Gracias y Resumen de nuestra llamada" : "Thank You & Recap of our Call";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I hope this message finds you well. I wanted to express my sincere gratitude for the conversation about lasers we had during our recent appointment. Your openness about your practice challenges and aspirations provided valuable insights.</p>
        <p>As we navigate the next steps, here's what I have in mind:</p>
        <p><strong>1. Comprehensive Recap:</strong> I've compiled a detailed recap of our discussion, highlighting the key challenges and goals you shared. This document is not only a reflection of our conversation but also a foundation for any future endeavors.</p>
        <p><strong>2. Follow-Up Discussion:</strong> While our previous discussion might not have led to a decision, I believe there may still be untapped opportunities. I'd love to schedule a follow-up call to explore any lingering questions or potential adjustments that could better align with your practice objectives.</p>
        <br/>
        <p><strong>Scheduling Link:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Your time is genuinely appreciated, and I'm looking forward to the possibility of continuing our collaboration.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Espero que este mensaje te encuentre bien. Quería expresar mi sincera gratitud por la conversación sobre láseres que tuvimos durante nuestra reciente cita. Tu apertura sobre los desafíos y aspiraciones de tu práctica proporcionó información valiosa.</p>
        <p>Mientras navegamos por los siguientes pasos, esto es lo que tengo en mente:</p>
        <p><strong>1. Resumen integral:</strong> He recopilado un resumen detallado de nuestra discusión, destacando los desafíos clave y los objetivos que compartiste. Este documento no es solo un reflejo de nuestra conversación, sino también una base para cualquier esfuerzo futuro.</p>
        <p><strong>2. Discusión de seguimiento:</strong> Si bien nuestra discusión anterior podría no haber llevado a una decisión, creo que todavía puede haber oportunidades sin explotar. Me encantaría programar una llamada de seguimiento para explorar cualquier pregunta pendiente o ajustes potenciales que podrían alinearse mejor con los objetivos de tu práctica.</p>
        <br/>
        <p><strong>Enlace de programación:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Apreciamos genuinamente tu tiempo y espero la posibilidad de continuar nuestra colaboración.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getNoSaleEmail2(booking: BookingData) {
  const isEs = booking.language === 'es';

  const subject = isEs ? "Una historia de éxito que podría resonar" : "A Success Story that Might Resonate";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I trust this message finds you reflecting on our recent conversation. Your dental practice challenges are unique, and I wanted to share a relevant success story that might resonate with your situation.</p>
        <p>Attached is a compelling case study featuring a client who faced similar hurdles. Despite the differences, their journey could offer valuable insights into potential strategies for your own venture.</p>
        <p>I invite you to review the case study and consider the possibilities. If there's any aspect you'd like to discuss further, or if you have new thoughts after our recent conversation, I'm here and ready to engage.</p>
        <p>Thank you for your openness, and I look forward to the opportunity of continued dialogue.</p>
        <br/>
        <a href="https://youtu.be/zsJFRl3Jow0" target="_blank">
          <img src="https://img.youtube.com/vi/zsJFRl3Jow0/maxresdefault.jpg" alt="Case Study Video" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Confío en que este mensaje te encuentre reflexionando sobre nuestra reciente conversación. Los desafíos de tu práctica dental son únicos, y quería compartir una historia de éxito relevante que podría resonar con tu situación.</p>
        <p>Adjunto se encuentra un estudio de caso convincente que presenta a un cliente que enfrentó obstáculos similares. A pesar de las diferencias, su viaje podría ofrecer información valiosa sobre posibles estrategias para tu propia empresa.</p>
        <p>Te invito a revisar el estudio de caso y considerar las posibilidades. Si hay algún aspecto que te gustaría discutir más a fondo, o si tienes nuevos pensamientos después de nuestra reciente conversación, estoy aquí y listo para participar.</p>
        <p>Gracias por tu apertura, y espero la oportunidad de continuar el diálogo.</p>
        <br/>
        <a href="https://youtu.be/zsJFRl3Jow0" target="_blank">
          <img src="https://img.youtube.com/vi/zsJFRl3Jow0/maxresdefault.jpg" alt="Video del Caso de Estudio" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

// ----------------------------------------------------
// No Show Email Flow
// ----------------------------------------------------

export function getNoShowEmail1(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);

  const subject = isEs ? "Te perdiste nuestra reunión de hoy" : "Missed our meeting today";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I hope you are doing well. I acknowledge that unforeseen circumstances prevented your attendance at our recent appointment, and I understand the challenges that demanding schedules can pose.</p>
        <p>Your flexibility is greatly appreciated.</p>
        <p>I want to emphasize that the opportunity at hand has the potential to be transformative, as it has been proven and tested previously.</p>
        <p>In life, individuals fall into two categories: those who seize valuable opportunities to their advantage "The Doers", and those who refrain from taking action, which leads to dissatisfaction and unfulfilled goals "The Thinkers".</p>
        <p>I strongly encourage you to align yourself with the Doers—be the person who seizes this opportunity and takes meaningful action. Opportunities of this nature are rare, and their impact can be profound.</p>
        <p>To facilitate your participation, I invite you to reschedule our meeting using the following link: <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Thank you for your understanding, and I eagerly anticipate the prospect of connecting at a time that suits you.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Espero que estés bien. Reconozco que circunstancias imprevistas impidieron tu asistencia a nuestra reciente cita, y entiendo los desafíos que pueden plantear los horarios exigentes.</p>
        <p>Apreciamos enormemente tu flexibilidad.</p>
        <p>Quiero enfatizar que la oportunidad que tienes a mano tiene el potencial de ser transformadora, ya que ha sido probada y comprobada anteriormente.</p>
        <p>En la vida, las personas se dividen en dos categorías: aquellos que aprovechan oportunidades valiosas para su beneficio "Los Hacedores", y aquellos que se abstienen de tomar acción, lo que conduce a la insatisfacción y objetivos no cumplidos "Los Pensadores".</p>
        <p>Te animo encarecidamente a que te alinees con los Hacedores: sé la persona que aprovecha esta oportunidad y toma medidas significativas. Oportunidades de esta naturaleza son raras, y su impacto puede ser profundo.</p>
        <p>Para facilitar tu participación, te invito a reprogramar nuestra reunión usando el siguiente enlace: <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Gracias por tu comprensión, y espero con entusiasmo la perspectiva de conectarnos en un momento que te convenga.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getNoShowEmail2(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);

  const subject = isEs ? "¿Aún te interesa dar el siguiente paso?" : "Still interested in taking the next step?";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hi ${booking.first_name},</p>
        <p>I hope this message finds you well. I wanted to offer a friendly reminder that you haven't yet taken advantage of the opportunity for another call with us. I assure you; that our aim is solely to provide valuable education without any hard selling or pushiness.</p>
        <p>Consider the remarkable success stories of some of the world's most accomplished individuals—they share a common thread of taking decisive action, driven by belief and dedication. In a fast-paced world like ours, achieving one's goals often requires effort and commitment.</p>
        <p>Securing an appointment doesn't need to be a difficult task; it's a simple step towards potential transformation. Our upcoming call is designed to be enriching, offering insights that could pave the way for your success.</p>
        <p>A single click is all it takes to initiate this journey, and together, we can explore possibilities and perhaps even create history. If this intrigues you, kindly reschedule your call at your earliest convenience: <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>We are eager to connect with you and look forward to the prospect of assisting you on your path to success.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hola ${booking.first_name},</p>
        <p>Espero que este mensaje te encuentre bien. Quería ofrecerte un recordatorio amistoso de que aún no has aprovechado la oportunidad de otra llamada con nosotros. Te aseguro que nuestro objetivo es únicamente proporcionar educación valiosa sin ninguna venta agresiva o insistencia.</p>
        <p>Considera las notables historias de éxito de algunas de las personas más exitosas del mundo: comparten un hilo común de tomar medidas decisivas, impulsadas por la creencia y la dedicación. En un mundo acelerado como el nuestro, lograr los propios objetivos a menudo requiere esfuerzo y compromiso.</p>
        <p>Asegurar una cita no tiene por qué ser una tarea difícil; es un simple paso hacia la transformación potencial. Nuestra próxima llamada está diseñada para ser enriquecedora, ofreciendo ideas que podrían allanar el camino hacia tu éxito.</p>
        <p>Un solo clic es todo lo que se necesita para iniciar este viaje, y juntos, podemos explorar posibilidades y tal vez incluso hacer historia. Si esto te intriga, reprograma tu llamada lo antes posible: <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Estamos ansiosos por conectarnos contigo y esperamos la perspectiva de ayudarte en tu camino hacia el éxito.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getNoShowEmail3(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule, cancel } = getLinks(booking.id);

  const subject = isEs ? "¿Pastilla roja o pastilla azul?" : "Red Pill or Blue Pill?";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I hope this message finds you in good spirits. I'm reaching out to offer you a choice:</p>
        <ul>
          <li><strong>Red Pill - Book Your Appointment:</strong> <a href="${reschedule}">${reschedule}</a></li>
          <li><strong>Blue Pill - Decline the Appointment:</strong> <a href="${cancel}">${cancel}</a></li>
        </ul>
        <p>Your decision will determine the path ahead. If you choose the red pill, we're ready to schedule a call and explore possibilities together.</p>
        <p>Opting for the blue pill signals that our paths won't cross again, and I wish you the very best on your journey.</p>
        <p>This will be the last email you receive from us.</p>
        <br/>
        <p>Thank you for your time and consideration.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Espero que este mensaje te encuentre con buen ánimo. Me pongo en contacto para ofrecerte una opción:</p>
        <ul>
          <li><strong>Pastilla Roja - Agenda tu Cita:</strong> <a href="${reschedule}">${reschedule}</a></li>
          <li><strong>Pastilla Azul - Rechaza la Cita:</strong> <a href="${cancel}">${cancel}</a></li>
        </ul>
        <p>Tu decisión determinará el camino a seguir. Si eliges la pastilla roja, estamos listos para programar una llamada y explorar posibilidades juntos.</p>
        <p>Optar por la pastilla azul indica que nuestros caminos no se volverán a cruzar, y te deseo lo mejor en tu viaje.</p>
        <p>Este será el último correo electrónico que recibas de nosotros.</p>
        <br/>
        <p>Gracias por tu tiempo y consideración.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getCancelledEmail3(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);

  const subject = isEs ? "¿Una Segunda Oportunidad?" : "A Second Chance?";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hi ${booking.first_name},</p>
        <p>We hope this message finds you well.</p>
        <p>We understand that plans can change, and we want you to know it's not a problem at all.</p>
        <p>Life happens, and we're here to make things easier for you.</p>
        <p>To help you stand out from the crowd and achieve the results you desire, we're extending a special opportunity just for you.</p>
        <p>Whether it's a second chance or a fresh start, we believe in your potential and want to support your journey.</p>
        <p>Rebooking your appointment is the next step toward unlocking this exclusive opportunity.</p>
        <br/>
        <p><strong>Click the link below to secure your spot:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>If you have any questions or specific concerns, we're here to address them.</p>
        <p>Your success is our priority, and we're excited about the possibility of working together.</p>
        <p>Thank you for considering this unique opportunity. We look forward to seeing you soon.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Hola ${booking.first_name},</p>
        <p>Esperamos que este mensaje te encuentre bien.</p>
        <p>Entendemos que los planes pueden cambiar, y queremos que sepas que no es ningún problema.</p>
        <p>La vida pasa, y estamos aquí para facilitarte las cosas.</p>
        <p>Para ayudarte a destacar entre la multitud y lograr los resultados que deseas, te extendemos una oportunidad especial solo para ti.</p>
        <p>Ya sea una segunda oportunidad o un nuevo comienzo, creemos en tu potencial y queremos apoyar tu viaje.</p>
        <p>Reprogramar tu cita es el siguiente paso para desbloquear esta oportunidad exclusiva.</p>
        <br/>
        <p><strong>Haz clic en el enlace a continuación para asegurar tu lugar:</strong> <a href="${reschedule}">${reschedule}</a></p>
        <br/>
        <p>Si tienes alguna pregunta o inquietud específica, estamos aquí para abordarla.</p>
        <p>Tu éxito es nuestra prioridad, y estamos entusiasmados con la posibilidad de trabajar juntos.</p>
        <p>Gracias por considerar esta oportunidad única. Esperamos verte pronto.</p>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function getNoSaleEmail3(booking: BookingData) {
  const isEs = booking.language === 'es';

  const subject = isEs ? "Otra historia de éxito relevante" : "Another Relevant Success Story";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Dear ${booking.first_name},</p>
        <p>I trust this message finds you reflecting on our recent conversation. Your practice challenges are unique, and I wanted to share a relevant success story that might resonate with your situation.</p>
        <p>Attached is a compelling case study featuring a client who faced similar hurdles. Despite the differences, their journey could offer valuable insights into potential strategies for your own dental practice.</p>
        <p>I invite you to review the case study and consider the possibilities. If there's any aspect you'd like to discuss further, or if you have new thoughts after our recent conversation, I'm here and ready to engage.</p>
        <p>Thank you for your openness, and I look forward to the opportunity of continued dialogue.</p>
        <br/>
        <a href="https://youtu.be/mybPVnCQoUY" target="_blank">
          <img src="https://img.youtube.com/vi/mybPVnCQoUY/maxresdefault.jpg" alt="Case Study Video" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <p>Estimado/a ${booking.first_name},</p>
        <p>Confío en que este mensaje te encuentre reflexionando sobre nuestra reciente conversación. Los desafíos de tu práctica son únicos, y quería compartir una historia de éxito relevante que podría resonar con tu situación.</p>
        <p>Adjunto se encuentra un estudio de caso convincente que presenta a un cliente que enfrentó obstáculos similares. A pesar de las diferencias, su viaje podría ofrecer información valiosa sobre posibles estrategias para tu propia práctica dental.</p>
        <p>Te invito a revisar el estudio de caso y considerar las posibilidades. Si hay algún aspecto que te gustaría discutir más a fondo, o si tienes nuevos pensamientos después de nuestra reciente conversación, estoy aquí y listo para participar.</p>
        <p>Gracias por tu apertura, y espero la oportunidad de continuar el diálogo.</p>
        <br/>
        <a href="https://youtu.be/mybPVnCQoUY" target="_blank">
          <img src="https://img.youtube.com/vi/mybPVnCQoUY/maxresdefault.jpg" alt="Video del Caso de Estudio" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
        </a>
        <br/>
        <p>Atentamente,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems LTD</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}

export function get30MinReminderEmail(booking: BookingData) {
  const isEs = booking.language === 'es';
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time, booking.language);
  const time = formatTime(booking.meeting_time, booking.language);

  const subject = isEs ? "¡Empezamos en 30 Minutos!" : "Starting in 30 Minutes!";
  const htmlEn = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2>Hi ${booking.first_name},</h2>
        <p>I trust this email finds you in good health. It's just a quick note to inform you that we are only 30 minutes away from your scheduled appointment on ${date} at ${time}.</p>
        <p>The moment for transformative change is upon us, and I'm excited about the positive shifts that await you.</p>
        <p>Get ready to embark on this journey towards positive transformation. Your commitment to this appointment is a crucial step toward achieving the results you desire.</p>
        <p><strong>Meeting Location:</strong> <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>
        <br/>
        <p>If you need to reschedule, you can do so here:</p>
        <p><a href="${reschedule}">Reschedule Link</a></p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;
  const htmlEs = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2>Hola ${booking.first_name},</h2>
        <p>Espero que este correo te encuentre bien. Es solo una nota rápida para informarte que estamos a solo 30 minutos de tu cita programada el ${date} a las ${time}.</p>
        <p>El momento del cambio transformador está sobre nosotros, y estoy emocionado por los cambios positivos que te esperan.</p>
        <p>Prepárate para embarcarte en este viaje hacia la transformación positiva. Tu compromiso con esta cita es un paso crucial para lograr los resultados que deseas.</p>
        <p><strong>Ubicación de la reunión:</strong> <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>
        <br/>
        <p>Si necesitas reprogramar, puedes hacerlo aquí:</p>
        <p><a href="${reschedule}">Enlace para reprogramar</a></p>
        <br/>
        <p>Saludos cordiales,</p>
        <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
      </div>
    `;

  return { subject, html: isEs ? htmlEs : htmlEn };
}
