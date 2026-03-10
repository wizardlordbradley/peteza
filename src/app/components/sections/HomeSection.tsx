'use client';

import Button from '../ui/Button';

interface HomeSectionProps {
  onNavigate: (section: 'menu' | 'contact') => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/ivan-torres-MQUqbmszGGM-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Pete's Za
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Authentic Italian Pizza Made with Love
        </p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <Button 
            onClick={() => onNavigate('menu')}
            variant="primary"
          >
            View Our Menu
          </Button>
          <Button 
            onClick={() => onNavigate('contact')}
            variant="secondary"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
