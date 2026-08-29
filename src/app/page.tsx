import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero3.jpeg"
            alt="Nu Body of Dallas Luxury Spa"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
        </div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
              Award-Winning Spa Experience
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 leading-[1.1] mb-8">
              Elevate your well-being with <span className="italic">luxury spa.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-sm uppercase tracking-wider font-semibold rounded-full text-sand-50 bg-charcoal-900 hover:bg-charcoal-800 transition-colors"
              >
                Book a Treatment
                <svg className="ml-3 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal-900 text-sm uppercase tracking-wider font-semibold rounded-full text-charcoal-900 hover:bg-charcoal-900 hover:text-sand-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <AboutSection />
      
      <TrustSection />
      
      <ProcessSection />
      
      <FaqSection />
    </main>
  );
}
