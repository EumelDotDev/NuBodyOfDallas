import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, Clock, DollarSign, Plus, ArrowRight } from 'lucide-react';

import { getServiceBySlug, services } from '@/data/services';

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: `${service.title} | Nu Body of Dallas`,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get related services (excluding current)
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="bg-sand-50">
      {/* Hero Section (Dermato style) */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 lg:px-8 bg-charcoal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="w-full md:w-1/2">
              <span className="text-sand-300 font-semibold tracking-widest uppercase mb-4 block">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-sand-50/80 leading-relaxed font-serif italic">
                {service.subtitle}
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout (Serenique/Dermato Blend) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Main Content (Left Column) */}
            <div className="w-full lg:w-[65%]">
              <div className="prose prose-lg prose-charcoal max-w-none">
                
                <h2 className="text-4xl font-serif text-charcoal-900 mb-6">What to expect</h2>
                <p className="text-charcoal-800/80 leading-relaxed mb-12">
                  {service.whatToExpect}
                </p>

                <h2 className="text-4xl font-serif text-charcoal-900 mb-6">Who it&apos;s for</h2>
                <p className="text-charcoal-800/80 leading-relaxed mb-12">
                  {service.whoCanBenefit}
                </p>

                {/* Treatment Areas Grid (Dermato Style) */}
                <h3 className="text-3xl font-serif text-charcoal-900 mb-8 mt-16">Treatment Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                  {service.treatmentAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-sand-200/50">
                      <CheckCircle2 className="text-charcoal-900 shrink-0" size={20} />
                      <span className="font-medium text-charcoal-800">{area}</span>
                    </div>
                  ))}
                </div>

                {/* How it Works (Serenique Style Step-by-Step) */}
                <h3 className="text-3xl font-serif text-charcoal-900 mb-10 mt-16 border-t border-sand-200/50 pt-16">
                  How the Treatment Works
                </h3>
                <div className="space-y-12">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative">
                      {/* Vertical line connecting steps (except last one) */}
                      {idx !== service.process.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-[-3rem] w-px bg-sand-200/60 z-0"></div>
                      )}
                      
                      <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-charcoal-900 text-sand-50 flex items-center justify-center font-serif text-xl shadow-md">
                        {idx + 1}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-2xl font-serif text-charcoal-900 mb-3">{step.title}</h4>
                        <p className="text-charcoal-800/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Sticky Sidebar (Right Column - Serenique Style) */}
            <div className="w-full lg:w-[35%]">
              <div className="sticky top-32">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-sand-200/50">
                  <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Service Overview</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 border-b border-sand-100 pb-6">
                      <div className="w-12 h-12 rounded-full bg-sand-50 flex items-center justify-center text-charcoal-900">
                        <Clock size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider text-charcoal-500 font-semibold mb-1">Duration</p>
                        <p className="text-lg font-medium text-charcoal-900">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-sand-50 flex items-center justify-center text-charcoal-900">
                        <DollarSign size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider text-charcoal-500 font-semibold mb-1">Price</p>
                        <p className="text-lg font-medium text-charcoal-900">{service.price}</p>
                      </div>
                    </div>
                  </div>

                  {service.addOns && service.addOns.length > 0 && (
                    <div className="mb-8 p-6 bg-sand-50 rounded-2xl">
                      <h4 className="font-semibold text-charcoal-900 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                        <Plus size={16} /> Optional Add-Ons
                      </h4>
                      <ul className="space-y-3">
                        {service.addOns.map((addon, idx) => (
                          <li key={idx} className="flex justify-between items-center text-charcoal-800 text-sm">
                            <span>{addon.name}</span>
                            <span className="font-medium text-charcoal-900">{addon.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-2 w-full bg-charcoal-900 text-sand-50 py-4 rounded-xl font-semibold uppercase tracking-wider hover:bg-charcoal-800 transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore More Treatments (Dermato Style) */}
      <section className="py-24 bg-white border-t border-sand-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
                Explore more <br />
                <span className="italic">treatments</span>
              </h2>
            </div>
            <Link 
              href="/services" 
              className="hidden md:flex items-center gap-2 text-charcoal-900 font-semibold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
            >
              View all services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal-900 mb-2 group-hover:text-charcoal-700 transition-colors">
                  {related.title}
                </h3>
                <p className="text-charcoal-800/60 line-clamp-2">
                  {related.overview}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 md:hidden flex justify-center">
            <Link 
              href="/services" 
              className="flex items-center gap-2 text-charcoal-900 font-semibold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
            >
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
}
