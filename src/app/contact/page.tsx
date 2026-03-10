'use client';

import Card from '../components/ui/Card';

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-brand-red mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card>
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
          </Card>
          
          {/* Hours */}
          <Card>
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
          </Card>
        </div>
      </div>
    </section>
  );
}
