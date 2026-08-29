import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-sm border border-sand-200/50">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="outline-none focus-visible:ring-2 focus-visible:ring-charcoal-900 rounded">
              <Image
                src="/images/nubodyplain.png"
                alt="Nu Body of Dallas"
                width={160}
                height={48}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Services', 'Gallery'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-charcoal-800 hover:text-charcoal-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm uppercase tracking-wider font-semibold rounded-full text-sand-50 bg-charcoal-900 hover:bg-charcoal-800 transition-colors"
            >
              Book Now
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 -mr-2 text-charcoal-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
