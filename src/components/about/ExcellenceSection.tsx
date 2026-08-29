import React from 'react';
import Image from 'next/image';
import { Sparkles, Stethoscope, HeartHandshake } from 'lucide-react';

export default function ExcellenceSection() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Portrait Image (Left) */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80" 
                alt="Our Specialist"
                fill
                className="object-cover"
              />
              {/* Optional Name Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-sand-100 p-2 rounded-full text-charcoal-900">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-charcoal-900 font-bold">Nu Body of Dallas</h4>
                  <p className="text-xs uppercase tracking-wider text-charcoal-600">Aesthetic Specialists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content & List (Right) */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-charcoal-900 block"></span>
                Excellence in every detail
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight mb-6">
                A clinic committed <br />
                <span className="italic">to your care</span>
              </h2>
              <p className="text-lg text-charcoal-800/70 leading-relaxed">
                We believe good skin starts with understanding. Every treatment begins with a detailed consultation, a long-term plan, and science-backed care designed entirely around you.
              </p>
            </div>

            {/* List items */}
            <div className="space-y-8">
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-charcoal-900">
                  <Stethoscope size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-charcoal-900 mb-2">Advanced Science-Backed Treatment Methods</h4>
                  <p className="text-charcoal-800/60 leading-relaxed">Utilizing the latest technology and proven protocols for unmatched results.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-charcoal-900">
                  <Sparkles size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-charcoal-900 mb-2">A highly skilled and certified expert team</h4>
                  <p className="text-charcoal-800/60 leading-relaxed">Our specialists are extensively trained to provide the highest standard of care.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center text-charcoal-900">
                  <HeartHandshake size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-charcoal-900 mb-2">Personalized care tailored to your unique skin</h4>
                  <p className="text-charcoal-800/60 leading-relaxed">No two faces are the same, and your treatment plan reflects exactly what you need.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
