import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Book a Treatment | Nu Body of Dallas MedSpa',
  description: 'Book your luxury spa treatment or consultation at Nu Body of Dallas.',
};

export default function BookingPage() {
  return (
    <main className="bg-sand-50 pt-32 pb-24 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-widest uppercase text-charcoal-800 mb-4 block">
            booking & contact
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal-900 leading-tight mb-6">
            Begin your <span className="italic">journey</span>
          </h1>
          <p className="text-lg text-charcoal-600">
            Schedule a consultation or treatment with our expert team. We are here to guide you toward your aesthetic goals in a luxurious, welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Booking Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand-200">
            <h2 className="text-3xl font-serif text-charcoal-900 mb-8">Request an Appointment</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal-700 mb-2">Service of Interest</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all appearance-none text-charcoal-900">
                  <option value="">Select a service...</option>
                  <option value="injectables">Injectables (Botox, Fillers)</option>
                  <option value="skin-rejuvenation">Skin Rejuvenation (Microneedling, etc.)</option>
                  <option value="wellness">Wellness (IV Therapy)</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">Message or Questions</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-charcoal-900 text-sand-50 rounded-xl font-semibold uppercase tracking-wider hover:bg-charcoal-800 transition-colors mt-4">
                Submit Request
              </button>
              
              <p className="text-xs text-charcoal-500 text-center mt-4">
                * This form is a request only. A team member will contact you to confirm your appointment.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-charcoal-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-sand-200 shrink-0 mr-6">
                  <MapPin className="w-5 h-5 text-charcoal-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Location</h4>
                  <p className="text-charcoal-600">
                    123 Luxury Lane<br />
                    Suite 100<br />
                    Dallas, TX 75201
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-sand-200 shrink-0 mr-6">
                  <Phone className="w-5 h-5 text-charcoal-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Call Us</h4>
                  <p className="text-charcoal-600">
                    (214) 555-0199
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-sand-200 shrink-0 mr-6">
                  <Mail className="w-5 h-5 text-charcoal-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Email</h4>
                  <p className="text-charcoal-600">
                    hello@nubodydallas.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-sand-200 shrink-0 mr-6">
                  <Clock className="w-5 h-5 text-charcoal-900" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-2">Hours</h4>
                  <div className="text-charcoal-600 space-y-1">
                    <p className="flex justify-between w-48"><span>Monday - Friday</span> <span>9am - 6pm</span></p>
                    <p className="flex justify-between w-48"><span>Saturday</span> <span>10am - 4pm</span></p>
                    <p className="flex justify-between w-48"><span>Sunday</span> <span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
