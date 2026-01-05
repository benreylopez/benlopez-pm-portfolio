import React from 'react';
import { ArrowDown, Linkedin, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2306B6D4%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-slate-800 space-y-6">
            <div className="space-y-3">
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Strategic Product Leader</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-800">
                Ben Lopez
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700">
                Building Revenue-Generating Products That Solve Real Problems
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                5+ years launching B2B SaaS products across PropTech, LegalTech, and creative software. <span className="font-bold text-teal-600">25+ products</span> shipped, <span className="font-bold text-teal-600">$10M+ in new revenue</span> generated, <span className="font-bold text-teal-600">500K+ users</span> impacted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>View My Product Work</span>
              </button>
              <a
                href="https://www.linkedin.com/in/benreylopez"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 hover:border-teal-500 text-gray-600 hover:text-teal-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 flex items-center justify-center space-x-2"
              >
                <Linkedin size={20} />
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Profile Image - Reduced Size */}
          <div className="relative lg:flex lg:justify-end">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-lg">
                <img
                  src="/ben-photo.jpg"
                  alt="Ben Lopez - Strategic Product Manager"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Failed to load profile image');
                    console.log('Attempted to load:', e.currentTarget.src);
                  }}
                  onLoad={() => {
                    console.log('Profile image loaded successfully');
                  }}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-300/20 to-cyan-300/20 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-teal-500 hover:text-teal-600 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;