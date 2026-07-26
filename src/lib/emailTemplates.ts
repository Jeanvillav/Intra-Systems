export type BookingData = {
  id: string;
  first_name: string;
  email: string;
  meeting_time: string;
  zoom_link: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

function getLinks(id: string) {
  return {
    reschedule: `${baseUrl}/booking/edit?id=${id}`,
    cancel: `${baseUrl}/booking/cancel?id=${id}`
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-GB", {
    timeZone: "America/Guayaquil",
    dateStyle: "full",
  });
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-GB", {
    timeZone: "America/Guayaquil",
    timeStyle: "short",
  });
}

// ----------------------------------------------------
// Booked Appointment Email Workflow
// ----------------------------------------------------

export function getBookedEmail1(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time);
  const time = formatTime(booking.meeting_time);

  return {
    subject: "Your Appointment is Confirmed!",
    html: `
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
    `
  };
}

export function getBookedEmail2(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);
  const date = formatDate(booking.meeting_time);
  const time = formatTime(booking.meeting_time);

  return {
    subject: "Important Information for our Call",
    html: `
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
    `
  };
}

// ----------------------------------------------------
// Cancelled Appointment Email Flow
// ----------------------------------------------------

export function getCancelledEmail1(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);
  const time = formatTime(booking.meeting_time);

  return {
    subject: "Cancellation Confirmed",
    html: `
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
    `
  };
}

export function getCancelledEmail2(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);
  const time = formatTime(booking.meeting_time);

  return {
    subject: "Special Offer Just For You",
    html: `
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
    `
  };
}

// ----------------------------------------------------
// No Sale Email Flow
// ----------------------------------------------------

export function getNoSaleEmail1(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);

  return {
    subject: "Thank You & Recap of our Call",
    html: `
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
    `
  };
}

export function getNoSaleEmail2(booking: BookingData) {
  return {
    subject: "A Success Story that Might Resonate",
    html: `
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
    `
  };
}

// ----------------------------------------------------
// No Show Email Flow
// ----------------------------------------------------

export function getNoShowEmail1(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);

  return {
    subject: "Missed our meeting today",
    html: `
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
    `
  };
}

export function getNoShowEmail2(booking: BookingData) {
  const { reschedule } = getLinks(booking.id);

  return {
    subject: "Still interested in taking the next step?",
    html: `
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
    `
  };
}

export function getNoShowEmail3(booking: BookingData) {
  const { reschedule, cancel } = getLinks(booking.id);

  return {
    subject: "Red Pill or Blue Pill?",
    html: `
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
    `
  };
}
