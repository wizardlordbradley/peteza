'use client';

import { menuItems } from '../../data/menu';
import Card from '../components/ui/Card';

export default function MenuPage() {
  return (
    <section className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-brand-red mb-4 text-center">Our Menu</h2>
        <p className="text-gray-600 text-center mb-12">Fresh ingredients, authentic recipes</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((pizza, index) => (
            <Card key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
              <p className="text-gray-600 mb-4">{pizza.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {pizza.toppings.map((topping, i) => (
                  <span key={i} className="bg-brand-red-light/20 text-brand-red px-3 py-1 rounded-full text-sm font-medium">
                    {topping}
                  </span>
                ))}
              </div>
              <p className="text-xl font-bold text-brand-red">{pizza.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
