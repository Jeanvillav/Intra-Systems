import { useLocale } from 'next-intl';

export default function PrivacyPolicy() {
  const locale = useLocale();

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-[#091124] min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
        {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
      </h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p><strong>Last Updated:</strong> September 2026</p>
        
        <h2 className="text-2xl font-bold mt-8">1. Introduction</h2>
        <p>
          Welcome to INTRA Systems. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
        </p>

        <h2 className="text-2xl font-bold mt-8">2. Data We Collect</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you, including:
          <br/>- <strong>Identity Data:</strong> First name, last name.
          <br/>- <strong>Contact Data:</strong> Email address, telephone numbers.
          <br/>- <strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting.
        </p>

        <h2 className="text-2xl font-bold mt-8">3. How We Use Your Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          <br/>- To schedule and manage consultation bookings.
          <br/>- To communicate with you regarding your appointments.
          <br/>- To improve our website, products/services, marketing, and customer experiences.
        </p>

        <h2 className="text-2xl font-bold mt-8">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
        </p>

        <h2 className="text-2xl font-bold mt-8">5. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
        </p>

        <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
          <strong>Email:</strong> intra.systems.uk@gmail.com
        </p>
      </div>
    </div>
  );
}
