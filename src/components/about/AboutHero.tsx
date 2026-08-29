import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 leading-tight mb-6">
            A Modern Sanctuary for <span className="italic">Mind, Body, and Beauty</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto">
            At Nu Body of Dallas, we believe wellness is more than a treatment — it’s a ritual. 
            Our expert specialists blend traditional healing with modern aesthetics, delivering moments of deep renewal.
          </p>
        </div>

        {/* Video / Hero Media */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden group shadow-2xl cursor-pointer">
          <Image 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            alt="Nu Body of Dallas MedSpa Experience"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Overlay to darken image slightly for the play button */}
          <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/30 transition-colors duration-500"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white transition-transform duration-300 group-hover:scale-110 shadow-xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
