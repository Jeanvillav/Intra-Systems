"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#091124] text-white p-4 border-t border-white/20 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-sm md:text-base">
        {locale === 'es' ? (
          <p>
            Utilizamos cookies para mejorar su experiencia. Al continuar visitando este sitio web, acepta nuestro uso de cookies. 
            Lea nuestra <Link href="/es/privacy" className="underline text-[var(--color-accent-green)]">Política de Privacidad</Link>.
          </p>
        ) : (
          <p>
            We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies. 
            Read our <Link href="/en/privacy" className="underline text-[var(--color-accent-green)]">Privacy Policy</Link>.
          </p>
        )}
      </div>
      <button 
        onClick={acceptCookies}
        className="bg-[var(--color-accent-green)] text-[#091124] px-6 py-2 rounded-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        {locale === 'es' ? 'Aceptar' : 'Accept'}
      </button>
    </div>
  );
}
