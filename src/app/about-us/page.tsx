import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import ProcessSection from '@/components/ProcessSection';
import ExcellenceSection from '@/components/about/ExcellenceSection';

export const metadata = {
  title: 'About Us | Nu Body of Dallas MedSpa',
  description: 'Learn about Nu Body of Dallas, a modern sanctuary for mind, body, and beauty.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <ProcessSection />
      <ExcellenceSection />
    </>
  );
}
