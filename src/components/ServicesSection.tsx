import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "injectables",
    title: "Injectables",
    description: "Botox, Restylane, Juvederm, and Radiesse for youthful, flawless skin.",
    image: "/images/service_injectables.jpg",
    link: "/services/injectables",
  },
  {
    id: "laser",
    title: "Laser Services",
    description: "Advanced laser hair removal, photofacials, and skin resurfacing.",
    image: "/images/service_laser.jpg",
    link: "/services/laser",
  },
  {
    id: "skin",
    title: "Skin Treatments",
    description: "Rejuvenating microdermabrasion and medical-grade chemical peels.",
    image: "/images/service_skin.jpg",
    link: "/services/skin",
  },
  {
    id: "mens",
    title: "Men's Services",
    description: "Specialized aesthetic and grooming treatments tailored for men.",
    image: "/images/service_mens.jpg",
    link: "/services/mens",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">
              Our <span className="italic">Curated</span> Services
            </h2>
            <p className="text-lg text-charcoal-800/80">
              Where clinical precision meets luxury aesthetics. Discover treatments designed to elevate your natural beauty.
            </p>
          </div>
          <Link href="/services" className="mt-6 md:mt-0 text-charcoal-900 font-medium tracking-wide uppercase text-sm border-b border-charcoal-900 pb-1 hover:text-charcoal-800 hover:border-charcoal-800 transition-colors">
            View All Services
          </Link>
        </div>

        {/* Expanding Cards Container */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
          {services.map((service) => (
            <Link 
              key={service.id}
              href={service.link}
              className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-2xl bg-sand-100 transition-all duration-700 ease-in-out hover:md:flex-[1.8] h-[400px] md:h-auto cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end text-sand-50 transform md:translate-y-16 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                
                {/* Hidden description that reveals on hover (hidden on desktop until hover, always visible on mobile) */}
                <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <p className="text-sm text-sand-50/90 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider">
                    Explore Treatment
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
