import React from 'react';
import { Target, Users, TrendingUp, UserCheck, Camera, Heart, Mountain, Trophy, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Products Launched', value: '25+' },
    { icon: Users, label: 'Users Impacted', value: '500K+' },
    { icon: TrendingUp, label: 'Revenue Growth', value: '$10M+' },
    { icon: UserCheck, label: 'Client Retention', value: '95%' },
  ];

  const personalPhotos = [
    {
      id: 1,
      title: "Team Player",
      subtitle: "Competition & Collaboration",
      src: "/pickleball-comm-min.jpg",
      description: "Love the competition and teamwork that comes with playing in pickleball tournaments. Had a great time winning with this team."
    },
    {
      id: 2,
      title: "Champion Mindset",
      subtitle: "Achievement & Goals",
      src: "/pickleball-trophy.jpg",
      description: "Celebrating a championship win after a tough tournament. Great to see the hard work and practice pay off."
    },
    {
      id: 3,
      title: "Entrepreneur",
      subtitle: "Building & Innovation",
      src: "/mkc.jpg",
      description: "I'm passionate about building from the ground up. I took my patented product from concept to market, generating over $60k in revenue in its first 6 months and managing the entire business cycle from ideation to distribution."
    },
    {
      id: 4,
      title: "Adventure Seeker",
      subtitle: "Exploration & Discovery",
      src: "/hobbiton.jpg",
      description: "An unforgettable trip to New Zealand and getting to explore the incredible Hobbiton movie set."
    },
    {
      id: 5,
      title: "Global Perspective",
      subtitle: "Culture & Travel",
      src: "/greece-ben.jpg",
      description: "Taking in the history at the Acropolis during a trip to Athens, Greece."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate product manager with 5+ years of experience building products that users love. 
            I combine strategic thinking, data-driven insights, and emerging AI technologies to deliver 
            exceptional results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Photo Gallery - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
              Behind the Scenes
            </h3>
            
            {/* Photo Grid - Responsive layout for 5 photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {personalPhotos.slice(0, 3).map((photo) => (
                <div
                  key={photo.id}
                  className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${photo.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="font-semibold text-xs sm:text-sm mb-1">{photo.title}</div>
                      <div className="text-xs text-gray-200">{photo.subtitle}</div>
                    </div>
                  </div>
                  
                  {/* Hover Description */}
                  <div className="absolute inset-0 bg-teal-600/95 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Bottom row - centered 2 photos */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                {personalPhotos.slice(3, 5).map((photo) => (
                  <div
                    key={photo.id}
                    className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${photo.src}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="font-semibold text-xs sm:text-sm mb-1">{photo.title}</div>
                        <div className="text-xs text-gray-200">{photo.subtitle}</div>
                      </div>
                    </div>
                    
                    {/* Hover Description */}
                    <div className="absolute inset-0 bg-teal-600/95 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4">
                      <p className="text-white text-xs sm:text-sm text-center leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-slate-600 italic">
                "The most effective way to do it, is to do it." - Amelia Earhart
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;