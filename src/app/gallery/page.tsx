"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

import derma from "@/assets/derma.jpeg"
import microneedling from "@/assets/microneedling.jpeg"
import iv from "@/assets/iv.jpeg"
import neuro from "@/assets/neuro.jpeg"

import bna1 from "@/assets/bna1.jpeg"
import bna2 from "@/assets/bna2.jpeg"
import bna3 from "@/assets/bna3.jpeg"
import bna4 from "@/assets/bna4.jpeg"
import bna5 from "@/assets/bna5.jpeg"
import bna6 from "@/assets/bna6.jpeg"
import bna7 from "@/assets/bna7.jpeg"

// ─── Gallery Data ─────────────────────────────────────────────
interface GalleryItem {
  id: number;
  src: string | StaticImageData;
  alt: string;
  category: string;
  span: "normal" | "tall" | "wide";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: derma,
    alt: "Dermaplaning Treatment",
    category: "Skin Rejuvenation",
    span: "tall",
  },
  {
    id: 2,
    src: neuro,
    alt: "Neuromodulator Treatment",
    category: "Injectables",
    span: "normal",
  },
  {
    id: 3,
    src: microneedling,
    alt: "Microneedling Session",
    category: "Skin Rejuvenation",
    span: "normal",
  },
  {
    id: 4,
    src: iv,
    alt: "IV Hydration Therapy",
    category: "Wellness",
    span: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80",
    alt: "Wellness Therapy",
    category: "Wellness",
    span: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
    alt: "Luxury Treatment Space",
    category: "Clinic",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    alt: "Relaxing Spa Experience",
    category: "Clinic",
    span: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80",
    alt: "Rejuvenation Session",
    category: "Wellness",
    span: "normal",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    alt: "Consultation Room",
    category: "Clinic",
    span: "wide",
  },
];

// ─── Before/After Data ──────────────────────────────────────────
interface BeforeAfter {
  id: number;
  src: StaticImageData;
  label: string;
  treatment: string;
}

const beforeAfterItems: BeforeAfter[] = [
  { id: 1, src: bna1, label: "Smooth, Youthful Skin", treatment: "Neuromodulators — Botox & Dysport" },
  { id: 2, src: bna2, label: "Restored Volume & Contour", treatment: "Dermal Fillers — Juvederm, Restylane & Versa" },
  { id: 3, src: bna3, label: "Refined Skin Texture", treatment: "Microneedling — Collagen Induction Therapy" },
  { id: 4, src: bna4, label: "Revitalized Wellness", treatment: "IV Hydration Therapy" },
  { id: 5, src: bna5, label: "Enhanced Glow", treatment: "Skin Rejuvenation" },
  { id: 6, src: bna6, label: "Sculpted Contour", treatment: "Dermal Fillers" },
  { id: 7, src: bna7, label: "Refreshed Appearance", treatment: "Neuromodulators" },
];

// ─── Filter Categories ──────────────────────────────────────────
const categories = ["All", "Injectables", "Skin Rejuvenation", "Wellness", "Clinic"];

// ─── Before/After Card ─────────────────────────────────────
function BeforeAfterCard({ item }: { item: BeforeAfter }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-charcoal-900 font-serif text-lg">{item.label}</p>
        <p className="text-charcoal-500 text-sm uppercase tracking-wider mt-1">{item.treatment}</p>
      </div>
    </div>
  );
}

// ─── Lightbox Component ─────────────────────────────────────────
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-charcoal-900/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div
        className="relative w-full max-w-5xl aspect-[3/2] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={item.src} alt={item.alt} fill className="object-contain" />
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-serif text-xl">{item.alt}</p>
        <p className="text-white/50 text-sm uppercase tracking-wider mt-1">{item.category}</p>
      </div>
    </div>
  );
}

// ─── Main Gallery Page ──────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxItem) return;
    const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const newIdx =
      direction === "prev"
        ? (idx - 1 + filteredItems.length) % filteredItems.length
        : (idx + 1) % filteredItems.length;
    setLightboxItem(filteredItems[newIdx]);
  };

  return (
    <main className="bg-sand-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-6 block">
            gallery
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal-900 leading-tight mb-8">
            Our <span className="italic">results</span> speak <br className="hidden md:block" />
            for themselves
          </h1>
          <p className="text-lg md:text-xl text-charcoal-800/70 max-w-2xl mx-auto">
            See the transformations, explore our clinic, and get inspired by the artistry behind every treatment.
          </p>
        </div>
      </section>

      {/* Before & After Section — Placeholder cards for real clinical photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-4 block flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-charcoal-900 block"></span>
              Before &amp; After
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">
              Real <span className="italic">transformations</span>
            </h2>
            <p className="text-charcoal-600 mt-4 max-w-lg mx-auto">
              Add your real client before &amp; after photos here to showcase genuine treatment results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {beforeAfterItems.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-charcoal-900 text-sand-50 shadow-lg"
                    : "bg-white text-charcoal-800 border border-sand-200 hover:border-charcoal-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${
                    item.span === "tall"
                      ? "aspect-[3/4]"
                      : item.span === "wide"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white font-serif text-xl">{item.alt}</p>
                    <p className="text-sand-200/80 text-xs uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={() => navigateLightbox("prev")}
          onNext={() => navigateLightbox("next")}
        />
      )}
    </main>
  );
}
