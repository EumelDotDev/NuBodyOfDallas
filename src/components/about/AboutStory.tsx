"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Custom hook for the animated counter
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return { count, ref };
}

export default function AboutStory() {
  const stat1 = useCountUp(10);
  const stat2 = useCountUp(2000);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text & Stats Content (Left) */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight mb-6">
              A modern approach to <br />
              <span className="italic">beautiful, healthy skin</span>
            </h2>
            <p className="text-lg text-charcoal-800/70 mb-10 leading-relaxed">
              We started with a simple belief: everyone deserves to feel confident in their own skin. 
              By combining medical-grade safety with a deeply comforting environment, we provide treatments 
              that don't just transform your look—they restore your inner glow.
            </p>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-charcoal-100">
              <div ref={stat1.ref}>
                <h3 className="text-5xl font-serif text-charcoal-900 mb-2">
                  {stat1.count}+
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-charcoal-800/60">
                  Years of medical excellence
                </p>
              </div>
              <div ref={stat2.ref}>
                <h3 className="text-5xl font-serif text-charcoal-900 mb-2">
                  {stat2.count}+
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-charcoal-800/60">
                  Satisfied Patients
                </p>
              </div>
            </div>
          </div>

          {/* Media / Two Images (Right) */}
          <div className="w-full lg:w-1/2 relative h-[600px] md:h-[700px] flex justify-center items-center">
            {/* Background Blob/Shape optional, but let's stick to clean Dermato style */}
            
            {/* Image 1 (Back/Left) */}
            <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="/images/about_bg.jpg" 
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Image 2 (Front/Right) */}
            <div className="absolute bottom-0 right-0 w-3/5 h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20 border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
