import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Open to Senior Product Manager roles in fintech, payments, and high-growth SaaS
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href="mailto:ben.lopez2911@gmail.com"
            className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>ben.lopez2911@gmail.com</span>
          </a>
          <a
            href="tel:210-387-2141"
            className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>210-387-2141</span>
          </a>
          <div className="flex items-center space-x-3 text-slate-300">
            <MapPin className="w-5 h-5" />
            <span>San Antonio, Texas</span>
          </div>
          <a
            href="https://www.linkedin.com/in/benreylopez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="text-center border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm">
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