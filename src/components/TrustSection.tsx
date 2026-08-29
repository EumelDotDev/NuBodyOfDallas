"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function TrustSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
            Why Patients Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
            Care that puts <br className="hidden md:block" />
            <span className="italic">your results first.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[700px]">
          
          {/* Left Large Bento Box: Before & After Slider */}
          <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden bg-sand-200 h-[500px] lg:h-full group">
            
            {/* Slider Container */}
            <div 
              ref={containerRef}
              className="relative w-full h-full cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/after.jpg"
                  alt="After Treatment"
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>

              {/* Before Image (Foreground, clipped) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full min-w-[max-content]">
                  {/* Using a filter to simulate the 'Before' state (dull, less contrast) from the same placeholder image */}
                  <div className="relative w-[100vw] lg:w-[calc(700px*12/7)] h-full"> 
                    {/* The width hack above ensures the image doesn't squish when the container clips it. 
                        A better approach is using object-cover on the Image component while clipping the wrapper. */}
                  </div>
                  <Image
                    src="/images/before.jpg"
                    alt="Before Treatment"
                    fill
                    className="object-cover filter contrast-[0.85] brightness-[0.95] saturate-[0.7]"
                    style={{ objectPosition: 'left center' }}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center -ml-[2px]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L21 12L15 6" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6L3 12L9 18" stroke="#2D2A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-6 left-6 z-30 pointer-events-none">
                <span className="px-4 py-2 bg-charcoal-900/80 backdrop-blur-md text-sand-50 text-xs uppercase tracking-wider font-semibold rounded-full">
                  Before
                </span>
              </div>
              <div className="absolute top-6 right-6 z-30 pointer-events-none">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-charcoal-900 text-xs uppercase tracking-wider font-semibold rounded-full">
                  After
                </span>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8 z-30 pointer-events-none">
                <div className="p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl">
                  <h3 className="text-2xl font-serif text-white mb-1 drop-shadow-md">Real results, real patients</h3>
                  <p className="text-white/90 text-sm drop-shadow-md">12 Weeks • Comprehensive Acne & Texture Treatment</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Smaller Bento Boxes */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 h-full">
            
            {/* Top Right: Testimonial/Experience Box */}
            <div className="flex-1 rounded-[2rem] bg-charcoal-900 text-sand-50 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
                  "My skin has never looked better. The team at Nu Body truly understands facial harmony. A completely seamless, luxury experience."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-charcoal-900 font-serif font-bold text-lg">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Sarah M.</h4>
                  <p className="text-sand-50/60 text-sm">Verified Patient</p>
                </div>
              </div>
            </div>

            {/* Bottom Right: Stats/Features Boxes (Split row) */}
            <div className="flex gap-6 lg:gap-8 h-48 lg:h-56">
              
              <div className="flex-1 rounded-[2rem] bg-sand-100 p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl lg:text-5xl font-serif text-charcoal-900 mb-2">10+</h3>
                <p className="text-charcoal-800 text-sm font-medium uppercase tracking-wide">Years of Medical Excellence</p>
              </div>

              <div className="flex-1 rounded-[2rem] bg-sand-200 p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-4xl lg:text-5xl font-serif text-charcoal-900 mb-2">50+</h3>
                <p className="text-charcoal-800 text-sm font-medium uppercase tracking-wide">Curated Treatments</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
