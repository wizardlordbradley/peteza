'use client';

import { useState } from 'react';

export type Section = 'home' | 'menu' | 'about' | 'contact';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections: { key: Section; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'menu', label: 'Menu' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-red shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Pete's Za</h1>
          <div className="flex space-x-4">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => onSectionChange(section.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === section.key
                    ? 'bg-white text-brand-red'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
