"use client";

import { FormEvent, useEffect, useState } from "react";

type Treatment = {
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  goals: string[];
};

const treatments: Treatment[] = [
  {
    name: "Laser Hair Removal",
    eyebrow: "Smooth",
    description:
      "Personalized laser hair reduction for women and men, with technology selected around skin and hair type.",
    image: "/images/laser-treatment.jpg",
    imageAlt: "Laser hair removal handpiece being used during a professional treatment",
    goals: ["smooth", "men"],
  },
  {
    name: "Photofacials",
    eyebrow: "Clarify",
    description:
      "A light-based option for concerns such as visible redness, flushing and broken capillaries.",
    image: "/images/real-skin.jpg",
    imageAlt: "Natural portrait showing real skin texture",
    goals: ["refresh"],
  },
  {
    name: "Laser Skin Resurfacing",
    eyebrow: "Renew",
    description:
      "Designed to address discoloration and textural irregularities for a more vibrant-looking complexion.",
    image: "/images/hero-skin.jpg",
    imageAlt: "Editorial close-up showing natural facial skin",
    goals: ["refresh", "rejuvenate"],
  },
  {
    name: "Chemical Peels",
    eyebrow: "Refine",
    description:
      "A targeted resurfacing treatment used for sun damage, fine lines, wrinkles and acne scarring.",
    image: "/images/consultation.jpg",
    imageAlt: "Aesthetic professional caring for a client during a facial treatment",
    goals: ["refresh"],
  },
  {
    name: "Microdermabrasion",
    eyebrow: "Polish",
    description:
      "Even exfoliation without chemicals or lasers, suitable for many areas of the face and body.",
    image: "/images/real-skin.jpg",
    imageAlt: "Natural portrait with visible, unretouched skin",
    goals: ["refresh"],
  },
  {
    name: "Botox® & Dermal Fillers",
    eyebrow: "Rejuvenate",
    description:
      "Consultation-led injectable options including Botox®, Restylane®, Juvederm® and Radiesse®.",
    image: "/images/skin-detail.jpg",
    imageAlt: "Portrait emphasizing facial expression and natural skin texture",
    goals: ["rejuvenate", "men"],
  },
  {
    name: "Services for Men",
    eyebrow: "Men",
    description:
      "A straightforward route to explore hair-removal, skin and injectable services for men.",
    image: "/images/clinic.jpg",
    imageAlt: "Modern treatment room with aesthetic technology",
    goals: ["men"],
  },
];

const filters = [
  { id: "all", label: "View all" },
  { id: "smooth", label: "Reduce unwanted hair" },
  { id: "refresh", label: "Refresh my skin" },
  { id: "rejuvenate", label: "Soften visible aging" },
  { id: "men", label: "Services for men" },
];

const faqs = [
  {
    question: "How do I know which laser is right for me?",
    answer:
      "Skin tone, hair color, hair texture and the treatment area all matter. Nu Body lists GentleLASE, GentleYAG and Harmony technologies and begins with a consultation to determine suitability.",
  },
  {
    question: "How many laser hair removal sessions are typical?",
    answer:
      "Nu Body’s current guidance says many people need approximately three to six treatments, often spaced four to eight weeks apart. Individual needs can vary.",
  },
  {
    question: "How should I prepare for laser hair removal?",
    answer:
      "The current guidance recommends arriving with the area cleanly shaved and avoiding waxing, plucking or threading for at least three to six weeks beforehand.",
  },
  {
    question: "Are consultations complimentary?",
    answer:
      "Yes. Nu Body currently offers a free consultation so you can discuss your goals, learn what to expect and decide whether treatment is right for you.",
  },
  {
    question: "Do I need to purchase a package?",
    answer:
      "No. Nu Body states that there are no packages to buy, contracts to sign, maintenance packages or touch-up packages.",
  },
];

export default function NuBodyExperience() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleTreatments =
    activeFilter === "all"
      ? treatments
      : treatments.filter((treatment) => treatment.goals.includes(activeFilter));

  const closeMenu = () => setMenuOpen(false);

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="utility-bar">
        <p>Premium laser & aesthetic care in Dallas, Texas</p>
        <a href="tel:+19722482639">Call 972-248-BODY</a>
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Nu Body of Dallas home">
          <img src="/brand-logo.png" alt="Nu Body of Dallas" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#treatments" onClick={closeMenu}>Treatments</a>
          <a href="#difference" onClick={closeMenu}>Why Nu Body</a>
          <a href="#technology" onClick={closeMenu}>Technology</a>
          <a href="#education" onClick={closeMenu}>FAQs</a>
          <a href="#visit" onClick={closeMenu}>Visit</a>
        </nav>

        <a className="button button-primary header-cta" href="#consultation">
          Request a consultation <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Dallas laser & aesthetic center · 15+ years of industry experience</p>
            <h1 id="hero-heading">
              Confidence,
              <em>refined.</em>
            </h1>
            <p className="hero-intro">
              Advanced laser and aesthetic treatments, considered around your skin,
              your goals and the way you want to feel.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#consultation">
                Request a free consultation <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#treatments">
                Explore treatments <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-location">17110 Dallas Parkway · Dallas, TX 75248</p>
          </div>

          <div className="hero-visual">
            <img
              src="/images/hero-skin.jpg"
              alt="Close-up editorial portrait showing natural skin texture"
              fetchPriority="high"
            />
            <div className="hero-note">
              <span>01</span>
              <p>Personalized care, guided by experience.</p>
            </div>
          </div>
        </section>

        <section className="trust-rail" aria-label="Why clients choose Nu Body">
          <div>
            <strong>15+ years</strong>
            <span>Industry experience</span>
          </div>
          <div>
            <strong>No packages</strong>
            <span>No contracts or pressure</span>
          </div>
          <div>
            <strong>Advanced systems</strong>
            <span>Technology selected for you</span>
          </div>
          <div>
            <strong>Women & men</strong>
            <span>Care across skin and body goals</span>
          </div>
        </section>

        <section className="editorial-intro section-shell">
          <div className="section-kicker">
            <span>01</span>
            <p>A different kind of Dallas aesthetic practice</p>
          </div>
          <div className="editorial-statement">
            <h2>
              Beauty begins with being <em>understood.</em>
            </h2>
            <p>
              Nu Body starts by identifying your personal aesthetic needs, then
              explains how the technology works and what you can expect. The result is
              a clearer, more considered path to care.
            </p>
          </div>
        </section>

        <section id="treatments" className="treatments-section section-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Treatment discovery</p>
              <h2>What would you like to improve?</h2>
            </div>
            <p>
              Start with your goal. We’ll help connect it to the treatment options
              already offered by Nu Body.
            </p>
          </div>

          <div className="filter-list" role="group" aria-label="Filter treatments by goal">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="filter-button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="treatment-grid" aria-live="polite">
            {visibleTreatments.map((treatment, index) => (
              <article className="treatment-card" key={treatment.name}>
                <div className="treatment-image">
                  <img src={treatment.image} alt={treatment.imageAlt} loading="lazy" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="treatment-copy">
                  <p className="eyebrow">{treatment.eyebrow}</p>
                  <h3>{treatment.name}</h3>
                  <p>{treatment.description}</p>
                  <a href="#consultation">
                    Ask about this treatment <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="technology" className="signature-section">
          <div className="signature-image">
            <img
              src="/images/laser-treatment.jpg"
              alt="Laser handpiece in use during a professional hair-removal treatment"
              loading="lazy"
            />
          </div>
          <div className="signature-copy">
            <p className="eyebrow">Signature expertise · Laser hair removal</p>
            <h2>Technology matters. Experience matters more.</h2>
            <p className="signature-lead">
              Laser hair removal is not the same everywhere. Nu Body pairs more than
              15 years of industry experience with technology chosen around skin tone,
              hair color and treatment area.
            </p>
            <dl className="technology-list">
              <div>
                <dt>GentleLASE</dt>
                <dd>Alexandrite technology listed for fast, effective hair removal.</dd>
              </div>
              <div>
                <dt>GentleYAG</dt>
                <dd>Designed to treat all skin types, including tanned skin.</dd>
              </div>
              <div>
                <dt>Built-in cooling</dt>
                <dd>A cryogen cooling system intended to support comfort and safety.</dd>
              </div>
            </dl>
            <a className="button button-dark" href="#consultation">
              Discuss laser options <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section id="difference" className="difference-section section-shell">
          <div className="section-kicker light">
            <span>02</span>
            <p>The Nu Body difference</p>
          </div>
          <div className="difference-heading">
            <h2>Care that feels personal, never packaged.</h2>
            <p>
              Nu Body’s current philosophy is refreshingly direct: educate first,
              avoid high-pressure sales and build continuity through close personal
              care.
            </p>
          </div>
          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Personalized by design</h3>
              <p>
                Recommendations begin with your needs, treatment history and what you
                want to understand—not a preset package.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Education before action</h3>
              <p>
                The team explains how the technology works, what to expect and how to
                care for your skin after treatment.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Comfort with clinical intent</h3>
              <p>
                Safety, comfort, consistent communication and careful quality control
                are stated priorities of the practice.
              </p>
            </article>
          </div>
        </section>

        <section className="care-section section-shell">
          <div className="care-image">
            <img
              src="/images/consultation.jpg"
              alt="Aesthetic professional attending to a client in a calm treatment room"
              loading="lazy"
            />
          </div>
          <div className="care-copy">
            <p className="eyebrow">Your care path</p>
            <h2>One thoughtful conversation at a time.</h2>
            <ol className="journey-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Consult</h3>
                  <p>Share your goals, questions and treatment history.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Understand</h3>
                  <p>Learn which options may suit your skin, hair or aesthetic goals.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Treat</h3>
                  <p>Move forward with a tailored protocol and clear expectations.</p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <h3>Continue</h3>
                  <p>Support the result with communication and considered aftercare.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="proof-section">
          <div className="proof-image">
            <img
              src="/images/real-skin.jpg"
              alt="Confident woman with natural, minimally retouched skin"
              loading="lazy"
            />
          </div>
          <figure>
            <p className="eyebrow">From the current Nu Body site</p>
            <blockquote>
              “I did my research, and I am so happy I found Nu Body of Dallas. This is
              the right choice.”
            </blockquote>
            <figcaption>— Nu Body client</figcaption>
          </figure>
        </section>

        <section id="education" className="education-section section-shell">
          <div className="education-heading">
            <p className="eyebrow">Before you begin</p>
            <h2>Clear answers make confident decisions.</h2>
            <p>
              A few essentials from Nu Body’s current laser hair removal guidance.
              Your consultation is the place for advice specific to you.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-marker" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="consultation" className="consultation-section">
          <div className="consultation-intro">
            <p className="eyebrow">A more considered first step</p>
            <h2>Let’s talk about what feels right for you.</h2>
            <p>
              Request a complimentary consultation to explore your goals, understand
              the available treatments and decide on your next step without pressure.
            </p>
            <div className="consultation-contact">
              <a href="tel:+19722482639">972-248-BODY (2639)</a>
              <address>17110 Dallas Parkway, Suite 180<br />Dallas, Texas 75248</address>
            </div>
          </div>

          <form className="consultation-form" onSubmit={submitConsultation}>
            <div className="form-heading">
              <span>Consultation request</span>
              <span>Free</span>
            </div>
            <label>
              Full name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <div className="form-row">
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>
            <label>
              What would you like to discuss?
              <select name="interest" defaultValue="" required>
                <option value="" disabled>Select a treatment or goal</option>
                <option>Laser hair removal</option>
                <option>Skin tone or texture</option>
                <option>Injectables</option>
                <option>Services for men</option>
                <option>I’m not sure yet</option>
              </select>
            </label>
            <label>
              Tell us a little about your goals <span>(optional)</span>
              <textarea name="goals" rows={4} />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Request my consultation <span aria-hidden="true">↗</span>
            </button>
            <p className="form-note">
              This design preview does not transmit medical or personal information.
            </p>
            {submitted && (
              <p className="form-feedback" role="status">
                Thank you. This preview is UI-only, so please call 972-248-BODY to
                complete your request.
              </p>
            )}
          </form>
        </section>
      </div>

      <footer id="visit" className="site-footer">
        <div className="footer-brand">
          <img src="/brand-logo.png" alt="Nu Body of Dallas" />
          <p>Premium laser and aesthetic care, grounded in experience and personal attention.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#treatments">Treatments</a>
          <a href="#difference">Why Nu Body</a>
          <a href="#technology">Technology</a>
          <a href="#education">FAQs</a>
        </div>
        <div className="footer-column">
          <h2>Visit</h2>
          <address>17110 Dallas Parkway<br />Suite 180<br />Dallas, TX 75248</address>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href="tel:+19722482639">972-248-BODY</a>
          <a href="#consultation">Free consultation</a>
          <p>Hours and availability by phone</p>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Nu Body of Dallas. UI/UX concept.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <a className="mobile-consultation" href="#consultation">
        Request a consultation <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
