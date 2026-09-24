import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#091124] text-white px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-black text-[var(--color-accent-green)] mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">Page Not Found</h2>
      <p className="text-lg md:text-xl text-white/80 mb-12 max-w-md">
        Oops! It looks like this tooth has fallen out... The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-[#fdf354] text-[#091124] px-8 py-3 uppercase tracking-wider font-bold hover:bg-transparent hover:text-[#fdf354] transition-all duration-300 border-2 border-[#fdf354]"
      >
        Return to Home
      </Link>
    </div>
  );
}
