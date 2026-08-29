import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
          alt="Nu Body of Dallas MedSpa Treatment"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-sand-300 font-semibold tracking-widest uppercase mb-6 block">
          Ready to get started
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight mb-8">
          Ready to Begin Your <br />
          <span className="italic text-sand-100">Spa Treatment Journey?</span>
        </h2>
        <p className="text-lg md:text-xl text-sand-50/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Book your consultation today and take the first step towards a refreshed, radiant version of yourself.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center gap-3 bg-white text-charcoal-900 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-sand-100 transition-colors duration-300 group"
        >
          Book Your Appointment
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
