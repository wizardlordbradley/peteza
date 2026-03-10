'use client';

import { useState } from 'react';
import Navigation, { Section } from './components/navigation/Navigation';
import HomeSection from './components/sections/HomeSection';
import MenuSection from './components/sections/MenuSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Hero Section */}
      {activeSection === 'home' && <HomeSection onNavigate={setActiveSection} />}

      {/* Menu Section */}
      {activeSection === 'menu' && <MenuSection />}

      {/* About Section */}
      {activeSection === 'about' && <AboutSection />}

      {/* Contact Section */}
      {activeSection === 'contact' && <ContactSection />}

      {/* Footer */}
      <Footer />
    </div>
  );
}
