"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Book Your Appointment",
    description:
      "Choose your preferred treatment, date, and specialist through our seamless online booking system. We confirm instantly & send reminders.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    title: "Personalized Wellness Session",
    description:
      "Upon arrival, our experts assess your skin, needs, and wellness goals to customize treatment and deliver an exceptional experience.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
  },
  {
    num: "03",
    title: "Restore & Glow",
    description:
      "Enjoy a luxurious medspa experience with calming ambiance, premium products, soothing therapies, and professional care.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
            Treatment Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
            Transforming your journey <br className="hidden md:block" />
            <span className="italic">into pure relaxation.</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col space-y-24 md:space-y-40">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-0 relative`}
              >
                {/* Image */}
                <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-auto md:h-[600px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle dark overlay for contrast if needed */}
                  <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply"></div>
                </div>

                {/* Floating Content Card */}
                <div className={`w-full md:w-1/2 md:absolute top-1/2 md:-translate-y-1/2 z-10 ${isEven ? 'md:left-0 md:pr-12' : 'md:right-0 md:pl-12'}`}>
                  <div className="bg-charcoal-900 text-sand-50 p-10 md:p-14 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-95">
                    <span className="text-sand-300 font-serif text-2xl italic mb-4 block">
                      {step.num}.
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sand-50/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
