"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About Us', 'Services', 'Gallery'];

  return (
    <header className="absolute top-6 left-0 right-0 z-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <nav className="relative z-20 flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-sm border border-sand-200/50">
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
            {navItems.map((item) => (
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
            <button 
              className="md:hidden p-2 -mr-2 text-charcoal-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-lg border border-sand-200/50 p-6 md:hidden z-10 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-medium text-charcoal-800 hover:text-charcoal-900 transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-sand-200">
                <Link
                  href="/booking"
                  className="flex items-center justify-center w-full px-6 py-4 border border-transparent text-sm uppercase tracking-wider font-semibold rounded-full text-sand-50 bg-charcoal-900 hover:bg-charcoal-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
