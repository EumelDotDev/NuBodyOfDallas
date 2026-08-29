"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What treatment is right for my skin type?",
    answer:
      "During your initial consultation, our specialists will perform a comprehensive skin analysis. Based on your unique skin concerns and goals, we will recommend a customized treatment plan tailored specifically for you.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies depending on the treatment and your individual goals. While some treatments offer immediate results, others may require a series of 3 to 6 sessions for optimal, long-lasting outcomes.",
  },
  {
    question: "Are the procedures painful?",
    answer:
      "Most of our procedures are minimally invasive and relatively comfortable. We prioritize your comfort and can apply topical numbing creams when necessary to ensure a pain-free experience.",
  },
  {
    question: "Is there any downtime after a treatment?",
    answer:
      "Downtime depends on the specific service. Many of our treatments, like Hydrafacials or light peels, have zero downtime. More intensive treatments may require a few days of recovery, which will be fully explained during your consultation.",
  },
  {
    question: "How do I prepare for my first appointment?",
    answer:
      "We recommend arriving with a clean face, free of makeup. Please discontinue use of retinol or strong exfoliating acids 3-5 days prior to your appointment, and avoid excessive sun exposure.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Title and Contact */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight mb-6">
              Frequently asked <br className="hidden md:block" />
              <span className="italic">questions</span>
            </h2>
            
            {/* Image (similar to Dermato, a small illustrative image) */}
            <div className="w-full max-w-sm aspect-[4/3] relative rounded-2xl overflow-hidden mb-8 mt-4">
               <img 
                 src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
                 alt="Spa Consultation" 
                 className="object-cover w-full h-full"
               />
            </div>

            <p className="text-charcoal-800/80 mb-8 max-w-md">
              Still have questions? Our team is here to help. Get in touch for personalized answers.
            </p>
            
            <div>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white bg-charcoal-900 rounded-full hover:bg-charcoal-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 lg:pl-10">
            <div className="flex flex-col space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border border-charcoal-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-sand-50' : 'bg-white hover:bg-sand-50/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                      <h3 className="text-lg md:text-xl font-serif text-charcoal-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-charcoal-900 text-white' : 'bg-charcoal-100 text-charcoal-900'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 md:p-8 pt-0 text-charcoal-800/80 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
