import React from 'react';
import { Quote, Users, Code, Palette, TrendingUp, Briefcase } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ben's ability to bridge the gap between technical teams and business stakeholders is exceptional. He translates complex requirements into clear product direction that everyone can rally behind.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "Lytho",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      quote: "Working with Ben on the credit builder feature was transformative. He brought strategic vision while respecting our design process. His background in design made collaboration seamless.",
      author: "Marcus Williams",
      role: "Senior Product Designer",
      company: "ResMan",
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      quote: "Ben doesn't just ship features, he ships business outcomes. The insurance product he led generated $100K in MRR within months. His focus on revenue impact sets him apart.",
      author: "Jennifer Rodriguez",
      role: "VP of Sales",
      company: "ResMan",
      icon: TrendingUp,
      color: "from-teal-500 to-green-500"
    },
    {
      quote: "Ben's data-driven approach to product decisions gave us confidence in every launch. He validated assumptions rigorously and pivoted quickly when data showed we were off track.",
      author: "David Park",
      role: "Product Analytics Manager",
      company: "LegalZoom",
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      quote: "He's the rare PM who can dive deep into technical architecture discussions with engineers while also crafting compelling narratives for executives. That versatility is invaluable.",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            What Cross-Functional Partners Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Product management success depends on building trust across engineering, design, sales, and leadership.
            Here's what my collaborators have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
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

        {/* Bottom Row - 2 Testimonials Centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div
              key={index + 3}
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
