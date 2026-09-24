import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import CookieBanner from '@/components/CookieBanner';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const isEs = resolvedParams.locale === 'es';
  
  return {
    title: isEs ? "Intra-Systems | Control Total de Márgenes Gingivales" : "Intra-Systems | Total Control of Gingival Margins",
    description: isEs 
      ? "Control total de márgenes gingivales, fluidos y humedad en menos de 1 minuto sin usar hilos retractores complicados."
      : "Total control of gingival margins, fluids, and moisture in under 1 minute without using complicated, time-consuming retraction cords.",
    openGraph: {
      title: isEs ? "Intra-Systems | Revolución Dental" : "Intra-Systems | Dental Revolution",
      description: isEs 
        ? "Reserva una llamada para descubrir cómo controlar los márgenes gingivales en menos de 1 minuto."
        : "Book a call to discover how to control gingival margins in under 1 minute.",
      images: ['/og-image.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEs ? "Intra-Systems | Revolución Dental" : "Intra-Systems | Dental Revolution",
      description: isEs 
        ? "Reserva una llamada para descubrir cómo controlar los márgenes gingivales en menos de 1 minuto."
        : "Book a call to discover how to control gingival margins in under 1 minute.",
      images: ['/og-image.jpg'],
    }
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  if (!routing.locales.includes(resolvedParams.locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

