export interface ProcessStep {
  title: string;
  description: string;
}

export interface AddOn {
  name: string;
  price: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  overview: string;
  price: string;
  duration: string;
  whatToExpect: string;
  whoCanBenefit: string;
  treatmentAreas: string[];
  process: ProcessStep[];
  addOns?: AddOn[];
}

export const services: ServiceData[] = [
  {
    id: "1",
    slug: "neuromodulators",
    title: "Neuromodulators",
    subtitle: "Botox & Dysport for smooth, youthful skin",
    category: "Injectables",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    overview: "Smooth fine lines and prevent wrinkles with precise, subtle injections that relax facial muscles. Our expert application ensures you look naturally refreshed, never overdone.",
    price: "$13 / unit",
    duration: "30 Minutes",
    whatToExpect: "The treatment involves a few tiny injections into the targeted facial muscles. It is quick, minimally invasive, and requires virtually no downtime. Results typically begin to show within 3-5 days, peaking at 14 days.",
    whoCanBenefit: "Ideal for anyone looking to reduce the appearance of dynamic wrinkles (frown lines, crow's feet, forehead lines) or those looking for preventative anti-aging care.",
    treatmentAreas: ["Forehead Lines", "Frown Lines (11s)", "Crow's Feet", "Lip Flip", "Masseters (Jaw Slimming)"],
    process: [
      {
        title: "Consultation & Assessment",
        description: "We analyze your facial anatomy and discuss your specific aesthetic goals to determine the exact dosage needed."
      },
      {
        title: "Preparation",
        description: "The treatment area is cleansed, and a topical numbing cream or ice may be applied if desired for maximum comfort."
      },
      {
        title: "Precise Injection",
        description: "Using ultra-fine needles, the neuromodulator is delicately injected into the targeted muscles."
      },
      {
        title: "Aftercare Guidance",
        description: "You'll receive instructions on post-treatment care to ensure optimal, long-lasting results."
      }
    ],
    addOns: [
      { name: "Lip Flip", price: "$100" },
      { name: "Brow Lift", price: "$150" }
    ]
  },
  {
    id: "2",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    subtitle: "Juvederm, Restylane & Versa",
    category: "Injectables",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    overview: "Restore lost volume, plump lips, and contour your facial features. We use premium hyaluronic acid fillers to softly enhance your natural beauty.",
    price: "Starting at $650 / syringe",
    duration: "45-60 Minutes",
    whatToExpect: "After a thorough consultation, the filler is precisely injected to add volume or contour. The fillers we use contain lidocaine to minimize discomfort. You will see immediate results, though full integration takes about two weeks.",
    whoCanBenefit: "Perfect for clients wanting to enhance lip volume, restore cheek contour, smooth deep smile lines, or sculpt the jawline and chin.",
    treatmentAreas: ["Lips", "Cheeks", "Jawline", "Chin", "Nasolabial Folds", "Under Eyes (Tear Troughs)"],
    process: [
      {
        title: "Facial Balancing Analysis",
        description: "We map your facial proportions to ensure the enhancements harmonize perfectly with your natural features."
      },
      {
        title: "Numbing",
        description: "A strong topical anesthetic is applied to the treatment area for 15-20 minutes."
      },
      {
        title: "Strategic Placement",
        description: "Filler is injected and sculpted using either a fine needle or a micro-cannula for safety and precision."
      },
      {
        title: "Review & Refine",
        description: "We review the immediate results together and provide comprehensive aftercare instructions."
      }
    ]
  },
  {
    id: "3",
    slug: "microneedling",
    title: "Microneedling",
    subtitle: "Collagen Induction Therapy",
    category: "Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80",
    overview: "Stimulate your body's natural collagen and elastin production. This treatment improves skin texture, reduces acne scarring, and tightens the skin for a youthful glow.",
    price: "$350 / session",
    duration: "60 Minutes",
    whatToExpect: "A medical-grade pen creates controlled micro-injuries in the skin, prompting the body to heal itself by producing new collagen. The face will be red (similar to a sunburn) for 24-48 hours post-treatment.",
    whoCanBenefit: "Anyone struggling with acne scars, enlarged pores, uneven skin texture, fine lines, or mild skin laxity.",
    treatmentAreas: ["Full Face", "Neck", "Décolletage", "Hands", "Surgical Scars"],
    process: [
      {
        title: "Deep Cleansing & Numbing",
        description: "Skin is thoroughly cleansed and a medical-grade numbing cream is applied for 20-30 minutes."
      },
      {
        title: "Targeted Microneedling",
        description: "The device glides over the skin with a specialized hyaluronic acid serum to create micro-channels."
      },
      {
        title: "Soothing Mask",
        description: "A cooling, hydrating peptide mask is applied to calm the skin and reduce redness immediately."
      },
      {
        title: "Barrier Protection",
        description: "Healing balms and medical-grade SPF are applied to protect the fresh skin."
      }
    ],
    addOns: [
      { name: "PRP (Platelet-Rich Plasma)", price: "$250" },
      { name: "Exosomes", price: "$300" },
      { name: "Neck & Chest Add-On", price: "$150" }
    ]
  },
  {
    id: "4",
    slug: "iv-hydration",
    title: "IV Hydration Therapy",
    subtitle: "Direct nutrient absorption for optimal wellness",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    overview: "Instantly replenish essential vitamins, minerals, and fluids. Bypassing the digestive system ensures 100% absorption to boost energy, immunity, and recovery.",
    price: "Starting at $150",
    duration: "45-60 Minutes",
    whatToExpect: "You will relax in our comfortable lounge while a custom blend of vitamins and fluids is administered intravenously. Many clients report feeling an immediate boost in energy and clarity.",
    whoCanBenefit: "Ideal for those suffering from fatigue, dehydration, jet lag, hangover, recovering from illness, or simply wanting an immunity or beauty boost.",
    treatmentAreas: ["Systemic Wellness", "Immune System", "Energy Levels", "Skin Hydration"],
    process: [
      {
        title: "Wellness Assessment",
        description: "We check your vitals and discuss your wellness goals to select the perfect IV drip formulation."
      },
      {
        title: "Comfortable Placement",
        description: "Our skilled nurses place the IV with minimal discomfort while you settle into our lounge chair."
      },
      {
        title: "Relax & Recharge",
        description: "Enjoy a blanket, quiet music, or read a book while the fluids and nutrients infuse over 45 minutes."
      },
      {
        title: "Bandage & Go",
        description: "The IV is removed, a small bandage is placed, and you leave feeling instantly revitalized."
      }
    ],
    addOns: [
      { name: "Glutathione Push", price: "$50" },
      { name: "B12 Shot", price: "$30" }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
