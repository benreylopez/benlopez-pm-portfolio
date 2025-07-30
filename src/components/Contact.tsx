import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ben.lopez2911@gmail.com',
      link: 'mailto:ben.lopez2911@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Antonio, TX',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-sm sm:text-base text-slate-800 font-medium hover:text-teal-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm sm:text-base text-slate-800 font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LinkedIn Connection */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 text-center">Connect on LinkedIn</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 text-center">
                Let's connect and discuss product opportunities, collaboration, or share insights about the industry.
              </p>
              <a
                href="https://www.linkedin.com/in/benreylopez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg group text-sm sm:text-base"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Connect with Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm sm:text-base text-slate-600">
            © 2024 Product Manager Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;