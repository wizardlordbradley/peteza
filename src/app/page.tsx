'use client';

import { useState } from 'react';

interface Pizza {
  name: string;
  description: string;
  price: string;
  toppings: string[];
}

const menuItems: Pizza[] = [
  {
    name: "Pete's Classic",
    description: "Our signature pizza with house-made sauce and premium mozzarella",
    price: "$16.99",
    toppings: ["Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"]
  },
  {
    name: "Meat Lovers",
    description: "Loaded with your favorite Italian meats",
    price: "$21.99",
    toppings: ["Pepperoni", "Italian Sausage", "Bacon", "Mozzarella"]
  },
  {
    name: "Garden Fresh",
    description: "Fresh vegetables on a crispy crust",
    price: "$18.99",
    toppings: ["Bell Peppers", "Onions", "Mushrooms", "Olives", "Tomatoes"]
  },
  {
    name: "Spicy Italian",
    description: "For those who like it hot!",
    price: "$19.99",
    toppings: ["Pepperoni", "Sausage", "Hot Peppers", "Red Pepper Flakes"]
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-red shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pete's Za</h1>
            <div className="flex space-x-4">
              {['home', 'menu', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === section
                      ? 'bg-white text-brand-red'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-6xl mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-red mb-6">
              Pete's Za
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Authentic Italian Pizza Made with Love
            </p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <button 
                onClick={() => setActiveSection('menu')}
                className="bg-brand-red text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-red-light transition-colors"
              >
                View Our Menu
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className="border-2 border-brand-red text-brand-red px-8 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Menu Section */}
      {activeSection === 'menu' && (
        <section className="min-h-screen pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-brand-red mb-4 text-center">Our Menu</h2>
            <p className="text-gray-600 text-center mb-12">Fresh ingredients, authentic recipes</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.map((pizza, index) => (
                <div key={index} className="bg-white border-2 border-brand-red rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen pt-24 pb-20 flex items-center">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-brand-red mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
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
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen pt-24 pb-20 flex items-center">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-brand-red mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-brand-red">Address:</p>
                    <p className="text-gray-700">123 Pizza Street<br/>Foodie Town, FT 12345</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-red">Phone:</p>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-red">Email:</p>
                    <p className="text-gray-700">hello@petesza.com</p>
                  </div>
                </div>
              </div>
              
              {/* Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-brand-red">Monday - Thursday:</span>
                    <span className="text-gray-700">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-brand-red">Friday - Saturday:</span>
                    <span className="text-gray-700">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-brand-red">Sunday:</span>
                    <span className="text-gray-700">12:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-brand-red text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Pete's Za. All rights reserved.</p>
      </footer>
    </div>
  );
}
