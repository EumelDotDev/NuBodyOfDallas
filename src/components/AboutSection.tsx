import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Container with Image and Glass Overlay */}
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[600px] flex items-center">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about_bg.jpg"
              alt="Nu Body of Dallas Clinic Interior"
              fill
              className="object-cover object-center"
            />
            {/* Very subtle dark gradient to ensure text readability if needed */}
            <div className="absolute inset-0 bg-charcoal-900/10"></div>
          </div>

          {/* Glassmorphism Content Box */}
          <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 ml-0 md:ml-12 lg:ml-20 p-8 md:p-12 
                          backdrop-blur-xl bg-white/30 border border-white/40 
                          shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                          rounded-3xl flex flex-col justify-center">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-900 mb-6 leading-tight">
              Elevating Your <br/>
              <span className="italic font-light">Natural Beauty</span>
            </h2>
            
            <div className="space-y-6 text-charcoal-800/90 text-lg leading-relaxed font-sans mb-10">
              <p>
                At Nu Body of Dallas, we believe that true beauty is simply a reflection of your optimal health and confidence. Our mission is to provide a sanctuary where clinical expertise meets luxury aesthetics.
              </p>
              <p>
                We blend state-of-the-art non-surgical treatments with a highly personalized approach, ensuring every patient walks out feeling rejuvenated, empowered, and naturally flawless.
              </p>
            </div>
            
            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center text-charcoal-900 font-medium tracking-wide uppercase text-sm border-b border-charcoal-900 pb-1 hover:text-charcoal-800 hover:border-charcoal-800 transition-colors"
              >
                Read Our Story
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
