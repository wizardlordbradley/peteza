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
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-0">
          <Link href="/" className="text-base sm:text-xl lg:text-2xl font-bold text-white hover:text-white/80 transition-colors whitespace-nowrap">
            Pete's Za
          </Link>
          <div className="flex space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink">
            {sections.map((section) => (
              <Link
                key={section.key}
                href={sectionPaths[section.key]}
                className={`px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
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
