import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';

import { services } from '@/data/services';

export const metadata = {
  title: 'Our Services | Nu Body of Dallas',
  description: 'Explore our premium medspa treatments including injectables, skin rejuvenation, and wellness therapies.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section (Dermato clean style) */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
            services
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 leading-tight mb-8">
            Our <span className="italic">treatments</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto">
            Expert care, proven results. We offer a comprehensive suite of aesthetic and wellness treatments tailored to reveal your best self.
          </p>
        </div>
      </section>

      {/* Services Grid (Blending Dermato clean layout with Serenique image cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-2 block">
                      {service.category}
                    </span>
                    <h2 className="text-3xl font-serif text-charcoal-900 mb-3 group-hover:text-charcoal-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-charcoal-800/70 line-clamp-2 pr-8">
                      {service.overview}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-900 group-hover:bg-charcoal-900 group-hover:text-white transition-colors duration-300 shrink-0">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />


    </main>
  );
}
