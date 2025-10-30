import React from 'react';
import { Code, TrendingUp, Target } from 'lucide-react';

const CrossFunctionalLeadership = () => {
  const collaborations = [
    {
      icon: Code,
      team: "Engineering",
      title: "Technical Partnership",
      description: "Speak the language of engineers to build trust and enable collaborative problem-solving.",
      example: "Led technical discovery for third-party credit bureau integration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      team: "Sales & Marketing",
      title: "Go-to-Market",
      description: "Partner on positioning, messaging, and launch strategy for market success.",
      example: "Created sales enablement materials, training 50+ reps on value proposition",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Target,
      team: "Executive Stakeholders",
      title: "Strategic Communication",
      description: "Translate product work into business outcomes and secure buy-in for initiatives.",
      example: "Presented quarterly roadmap to C-suite, connecting initiatives to revenue goals",
      color: "from-slate-600 to-gray-700"
    }
  ];

  return (
    <section id="cross-functional" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Cross-Functional Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building consensus across engineering, sales, and leadership to ship successful products.
          </p>
        </div>

        {/* Collaborations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${collab.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <collab.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">{collab.team}</div>
                  <h3 className="text-xl font-bold text-slate-800">{collab.title}</h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-4">
                {collab.description}
              </p>

              <div className="bg-gray-50 rounded-lg p-3 border-l-2 border-teal-500">
                <p className="text-sm text-slate-600 italic">{collab.example}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CrossFunctionalLeadership;
