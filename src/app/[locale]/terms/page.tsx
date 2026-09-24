import { useLocale } from 'next-intl';

export default function TermsAndConditions() {
  const locale = useLocale();

  return (
    <div className="w-full bg-white text-[#091124] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
          {locale === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
        </h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p><strong>Last Updated:</strong> September 2026</p>
          
          <h2 className="text-2xl font-bold mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
            In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Provision of Services</h2>
          <p>
            INTRA Systems provides consulting and advisory services in the dental industry. We reserve the right to modify or discontinue, temporarily or permanently, the services (or any part thereof) with or without notice.
          </p>

          <h2 className="text-2xl font-bold mt-8">3. Booking and Cancellations</h2>
          <p>
            When you book a consultation through our website, you agree to provide accurate and complete information. If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance using the link provided in your confirmation email.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by INTRA Systems and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Limitation of Liability</h2>
          <p>
            In no event shall INTRA Systems, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <br/>
            <strong>Email:</strong> intra.systems.uk@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
