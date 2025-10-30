import React from 'react';
import { Compass, BarChart3, Target } from 'lucide-react';

const ProductPhilosophy = () => {
  const principles = [
    {
      icon: Compass,
      title: "Customer-First Discovery",
      description: "Start with customer pain points through research and interviews"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Validate with metrics and ship features with clear success criteria"
    },
    {
      icon: Target,
      title: "Business Impact Focus",
      description: "Prioritize features that drive revenue growth and market positioning"
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">How I Work</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Great products balance customer needs, business goals, and technical feasibility.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <principle.icon className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-slate-300 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductPhilosophy;
