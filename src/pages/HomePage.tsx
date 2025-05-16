import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import MembersSection from '../components/MembersSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ResourcesSection from '../components/ResourcesSection';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MembersSection />
      <TestimonialsSection />
      <ResourcesSection />
      <EventsSection />
      <ContactSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;