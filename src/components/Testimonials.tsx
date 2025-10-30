import React from 'react';
import { Quote, Code, TrendingUp, Briefcase } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ben bridges the gap between technical teams and business stakeholders exceptionally well.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "Lytho",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "Ben doesn't just ship features, he ships business outcomes. His focus on revenue impact sets him apart.",
      author: "Jennifer Rodriguez",
      role: "VP of Sales",
      company: "ResMan",
      icon: TrendingUp,
      color: "from-teal-500 to-green-500"
    },
    {
      quote: "He's the rare PM who can dive deep into technical discussions with engineers while crafting compelling narratives for executives.",
      author: "Amanda Foster",
      role: "CTO",
      company: "Lytho",
      icon: Briefcase,
      color: "from-slate-600 to-gray-700"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-lg flex items-center justify-center`}>
                  <testimonial.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
              <Quote className="w-8 h-8 text-teal-400 mb-3" />
              <p className="text-slate-600 leading-relaxed mb-4 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="text-sm text-slate-500 font-medium">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
