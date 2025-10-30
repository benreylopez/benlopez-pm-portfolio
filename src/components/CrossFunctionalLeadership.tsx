import React from 'react';
import { Users, Code, Palette, TrendingUp, MessageSquare, Target } from 'lucide-react';

const CrossFunctionalLeadership = () => {
  const collaborations = [
    {
      icon: Code,
      team: "Engineering Teams",
      title: "Technical Fluency & Partnership",
      description: "I speak the language of engineers, diving into API architectures, database schemas, and technical trade-offs. This fluency builds trust and enables collaborative problem-solving.",
      examples: [
        "Led technical discovery for third-party credit bureau integration, defining API requirements and error handling",
        "Partnered with engineers on database schema design for time-tracking feature to optimize query performance",
        "Facilitated architecture discussions for mobile app, balancing native features with cross-platform efficiency"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      team: "Design Teams",
      title: "User-Centric Collaboration",
      description: "My design background creates seamless collaboration with UX teams. I contribute to design discussions while respecting their expertise and advocating for user needs.",
      examples: [
        "Partnered with designers on user research for insurance enrollment flow, conducting 15+ user interviews together",
        "Co-created prototypes for time-tracking interface, iterating based on usability testing feedback",
        "Championed accessibility standards across all products, working with design to meet WCAG guidelines"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      team: "Sales & Marketing",
      title: "Go-to-Market Partnership",
      description: "I don't just hand off features to sales and marketing. I partner on positioning, messaging, and launch strategy to ensure products succeed in market.",
      examples: [
        "Created sales enablement materials for insurance product launch, training 50+ sales reps on value proposition",
        "Partnered with marketing on time-tracking feature announcement, timing launch with renewal season",
        "Developed competitive positioning for credit builder, highlighting differentiation from competitors"
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      icon: MessageSquare,
      team: "Customer Success",
      title: "Feedback Loop Integration",
      description: "I actively engage with customer-facing teams to understand real user pain points and validate product decisions with frontline insights.",
      examples: [
        "Established monthly feedback sessions with support team to identify product friction points",
        "Analyzed 200+ support tickets to prioritize bug fixes and feature improvements",
        "Shadowed customer success calls to understand implementation challenges and improve onboarding"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      team: "Executive Stakeholders",
      title: "Strategic Communication",
      description: "I translate product work into business outcomes for executives, building alignment on priorities and securing buy-in for strategic initiatives.",
      examples: [
        "Presented quarterly product roadmap to C-suite, connecting initiatives to revenue goals",
        "Built business case for AI features, projecting ROI and competitive positioning",
        "Facilitated executive decision-making on resource allocation between competing priorities"
      ],
      color: "from-slate-600 to-gray-700"
    },
    {
      icon: Users,
      team: "Cross-Functional Rituals",
      title: "Building Alignment",
      description: "I establish processes that keep teams aligned without creating bureaucracy. Regular communication prevents surprises and builds trust.",
      examples: [
        "Ran weekly product syncs bringing together eng, design, and QA to surface blockers early",
        "Created lightweight spec documents that gave engineers context without excessive documentation",
        "Facilitated monthly demos to showcase progress and gather cross-functional feedback"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="cross-functional" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Cross-Functional Leadership in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Product management is about influencing without authority and building consensus across diverse teams.
            Here's how I partner with every function to ship successful products.
          </p>
        </div>

        {/* Collaborations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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

              <p className="text-slate-600 leading-relaxed mb-6">
                {collab.description}
              </p>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-700 mb-2">Examples:</div>
                {collab.examples.map((example, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 leading-relaxed">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">My Cross-Functional Leadership Principle</h3>
          <p className="text-lg text-teal-50 leading-relaxed max-w-4xl mx-auto">
            "The best product decisions emerge from diverse perspectives. I create environments where engineers,
            designers, marketers, and executives feel heard and valued. When everyone owns the outcome,
            great products become inevitable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CrossFunctionalLeadership;
