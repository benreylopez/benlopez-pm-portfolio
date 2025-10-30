import React from 'react';
import { Target, Users, TrendingUp, UserCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Products Launched', value: '25+' },
    { icon: Users, label: 'Users Impacted', value: '500K+' },
    { icon: TrendingUp, label: 'Revenue Growth', value: '$10M+' },
    { icon: UserCheck, label: 'Client Retention', value: '95%' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">My Approach</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I combine design thinking with data-driven product strategy. My design background lets me bridge engineering, design, and business stakeholders to ship products that drive measurable outcomes.
          </p>
        </div>

        {/* Career Impact Metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Career Impact at a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Product Strategy</h4>
                <p className="text-sm text-slate-600">Aligning product vision with business goals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Customer Discovery</h4>
                <p className="text-sm text-slate-600">User research to uncover real needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Data-Driven Decisions</h4>
                <p className="text-sm text-slate-600">Analytics to validate and measure success</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Cross-Functional Leadership</h4>
                <p className="text-sm text-slate-600">Building alignment across teams</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;