import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Open to Senior Product Manager roles in fintech, payments, and high-growth SaaS
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href="mailto:ben.lopez2911@gmail.com"
            className="flex items-center space-x-3 text-slate-700 hover:text-blue-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>ben.lopez2911@gmail.com</span>
          </a>
          <a
            href="tel:210-387-2141"
            className="flex items-center space-x-3 text-slate-700 hover:text-blue-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>210-387-2141</span>
          </a>
          <div className="flex items-center space-x-3 text-slate-700">
            <MapPin className="w-5 h-5" />
            <span>San Antonio, Texas</span>
          </div>
          <a
            href="https://www.linkedin.com/in/benreylopez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-slate-700 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-slate-600 text-sm">
            Senior Product Manager • 6+ Years Experience • $10M+ ARR Generated • 500K+ Users Impacted
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} Ben Lopez. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;