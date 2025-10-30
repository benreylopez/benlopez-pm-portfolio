import React from 'react';
import { Compass, Users, BarChart3, Lightbulb, Target, Layers } from 'lucide-react';

const ProductPhilosophy = () => {
  const principles = [
    {
      icon: Compass,
      title: "Customer-First Discovery",
      description: "I start every product initiative by deeply understanding customer pain points through interviews, user research, and data analysis. Solutions come after validation, not before."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "I combine quantitative metrics with qualitative insights to validate hypotheses and measure success. Every feature ships with clear success criteria and KPIs."
    },
    {
      icon: Users,
      title: "Cross-Functional Collaboration",
      description: "Great products require alignment across engineering, design, sales, and marketing. I build consensus by focusing on shared outcomes and transparent communication."
    },
    {
      icon: Target,
      title: "Business Impact Focus",
      description: "I prioritize features that drive measurable business outcomes. Every product decision ties back to revenue growth, cost reduction, or strategic market positioning."
    },
    {
      icon: Lightbulb,
      title: "Strategic Trade-offs",
      description: "Not everything can be built. I use frameworks like RICE and value vs. effort matrices to make transparent prioritization decisions that maximize impact."
    },
    {
      icon: Layers,
      title: "Iterative Development",
      description: "I ship MVPs quickly to validate assumptions, then iterate based on real user feedback. Perfect is the enemy of learning fast and adapting."
    }
  ];

  const frameworks = [
    "Jobs-to-be-Done",
    "RICE Prioritization",
    "OKRs",
    "Design Thinking",
    "Agile/Scrum",
    "A/B Testing",
    "User Story Mapping",
    "Product-Market Fit"
  ];

  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Product Management Approach</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Great products emerge at the intersection of customer needs, business viability, and technical feasibility.
            Here's how I bring that intersection to life.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Philosophy Statement */}
        <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 border border-teal-400/30 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Core Philosophy</h3>
          <p className="text-lg text-slate-200 leading-relaxed text-center max-w-4xl mx-auto">
            "As a product manager, I believe great products are born at the intersection of customer needs,
            business viability, and technical feasibility. My approach combines rigorous customer discovery with
            data-driven decision-making, always keeping the business impact front and center. With a background
            in design, I bring a unique perspective that helps engineering teams understand user needs while
            helping design teams understand technical constraints."
          </p>
        </div>

        {/* Frameworks & Methodologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Frameworks & Methodologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {frameworks.map((framework, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
