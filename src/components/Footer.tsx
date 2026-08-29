import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-sand-50 relative overflow-hidden">
      
      {/* Top Banner (CTA) */}
      <div className="border-b border-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white max-w-md text-center md:text-left">
            Transform your skin <span className="italic">with us</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-charcoal-900 bg-white rounded-full hover:bg-sand-50 transition-colors w-full sm:w-auto text-center"
            >
              Book an Appointment
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif text-white tracking-wider uppercase">
                Nu Body<span className="italic text-sand-400 lowercase text-xl"> of Dallas</span>
              </span>
            </Link>
            <p className="text-sand-50/70 text-sm leading-relaxed max-w-sm mb-8">
              A premium medspa experience dedicated to enhancing your natural beauty. We blend medical expertise with luxurious care to deliver transformative results in a relaxing environment.
            </p>
            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-sand-200 bg-white/5">
                FDA Approved
              </div>
              <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-sand-200 bg-white/5">
                Board Certified
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-6">
              Get in Touch
            </h3>
            <ul className="flex flex-col space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sand-400 shrink-0 mt-0.5" />
                <span className="text-sand-50/70 text-sm leading-relaxed">
                  123 Wellness Way, Suite 100<br />
                  Dallas, TX 75201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sand-400 shrink-0" />
                <a href="tel:+1234567890" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  (214) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sand-400 shrink-0" />
                <a href="mailto:hello@nubodydallas.com" className="text-sand-50/70 hover:text-white transition-colors text-sm">
                  hello@nubodydallas.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sand-50/50 text-xs">
            &copy; {new Date().getFullYear()} Nu Body of Dallas. All rights reserved.
          </p>
          
          {/* Social Links as requested */}
          <div className="flex items-center gap-6 text-xs font-semibold tracking-widest uppercase">
            <Link href="#" className="text-sand-50/70 hover:text-white transition-colors">
              Nu Body on Instagram
            </Link>
            <Link href="#" className="text-sand-50/70 hover:text-white transition-colors">
              Nu Body on Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
