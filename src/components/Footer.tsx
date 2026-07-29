import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full bg-[#091124] text-white py-12 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-8">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <span className="font-medium tracking-wide">{t('email')}</span>
      </div>
      
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-72 h-24">
          <Image src="/logo.png" alt="Intra-Systems Logo" fill className="object-contain" />
        </div>
        <Link href="/admin" className="text-gray-400 text-sm tracking-widest uppercase mt-4 hover:text-gray-300 transition-colors">
          {t('copyright')}
        </Link>
      </div>
    </footer>
  );
}
