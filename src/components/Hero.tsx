import React from 'react';
import { ArrowDown, Download, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeView = () => {
    // Open the resume PDF in a new tab
    window.open('/Ben-Lopez-Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2306B6D4%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-slate-800 space-y-6">
            <div className="space-y-4">
              <p className="text-teal-600 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-800">
                Ben Lopez
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 mb-6">
                Senior Product Manager
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                Driving AI-powered growth in B2B SaaS through strategic product innovation
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                I transform data insights into customer-centric product experiences that boost revenue and retention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6">
              <button 
                onClick={handleResumeView}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Download size={20} />
                <span>View Resume</span>
              </button>
              <button 
                onClick={scrollToAbout}
                className="border-2 border-gray-300 hover:border-teal-500 text-gray-600 hover:text-teal-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50"
              >
                Explore My Work
              </button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a 
                href="https://www.linkedin.com/in/benreylopez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-lg">
                <img 
                  src="/ben-photo.jpg" 
                  alt="Ben Lopez - Senior Product Manager"
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