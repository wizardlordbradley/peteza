'use client';

import Card from '../ui/Card';

export default function AboutSection() {
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-brand-red mb-8 text-center">Our Story</h2>
        <Card className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to Pete's Za, where the love of pizza meets tradition and quality. 
            Founded in 1985 by Pete Rossi, our restaurant has been serving authentic Italian-style 
            pizzas to our community for over three decades.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every pizza we make starts with our secret family recipe for dough, which is 
            hand-tossed daily and allowed to rise slowly overnight. We source our ingredients 
            from local farmers and trusted suppliers, ensuring the freshest flavors in every slice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our wood-fired ovens bake each pizza to perfection, creating that signature crispy 
            crust with a slightly charred edge that our customers have come to love. At Pete's Za, 
            we don't just make pizza – we create memories.
          </p>
        </Card>
      </div>
    </section>
  );
}
