'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type Section = 'home' | 'menu' | 'about' | 'contact';

const sectionPaths: Record<Section, string> = {
  home: '/',
  menu: '/menu/',
  about: '/about/',
  contact: '/contact/'
};

export default function Navigation() {
  const pathname = usePathname();
  
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
          <Link href="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            Pete's Za
          </Link>
          <div className="flex space-x-4">
            {sections.map((section) => (
              <Link
                key={section.key}
                href={sectionPaths[section.key]}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  pathname === sectionPaths[section.key]
                    ? 'bg-white text-brand-red'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
