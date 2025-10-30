import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Brain, Cpu, Bot, Zap, Github, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('traditional');
  const navigate = useNavigate();

  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleViewCaseStudy = (title: string) => {
    const slug = createSlug(title);
    navigate(`/case-study/${slug}`);
  };

  const traditionalProjects = [
    {
      title: "Credit Builder for Renters",
      company: "ResMan Software",
      description: "Identified untapped revenue opportunity in PropTech by solving a real resident pain point. Led discovery, validated market demand through customer interviews, and orchestrated complex third-party integration. Balanced regulatory compliance with user experience to unlock $2M ARR while delivering genuine financial value to residents.",
      results: [
        "Unlocked $2M in new yearly revenue (ARR) with a credit-builder feature",
        "80% adoption rate among eligible residents",
        "90% increase in positive property management feedback"
      ],
      technologies: ["Third-Party APIs", "Pendo (Analytics)", "Jira"],
      image: "🏢",
      category: "PropTech"
    },
    {
      title: "Integrated Time Tracking for Creative Teams",
      company: "Lytho",
      description: "Used churn analysis and customer interviews to identify critical feature gap threatening $2M ARR. Led full product lifecycle from discovery to GTM, prioritizing seamless integration over feature richness. Partnered with marketing on launch strategy, resulting in 70% adoption and 15% churn reduction.",
      results: [
        "Preserved $2M in ARR by solving key user frustrations",
        "Cut workflow time by 50%, boosting user satisfaction by 25%",
        "Slashed customer churn by 15% with 70% feature adoption"
      ],
      technologies: ["Pendo", "Figma", "Miro", "Gainsight"],
      image: "⏱️",
      category: "B2B SaaS"
    },
    {
      title: "Launching a New Renters Insurance Product",
      company: "ResMan",
      description: "Identified competitive gap through market analysis and led company's first insurance product from concept to launch. Managed complex stakeholder alignment across legal, compliance, sales, and engineering. Built entire GTM strategy including sales enablement, resulting in $100K MRR and new ancillary revenue stream.",
      results: [
        "Generated $100K in new monthly recurring revenue",
        "Launched ResMan's first insurance product, creating a new revenue stream for both the company and for property managers",
        "Simplified the insurance sign-up process to be seamless for residents"
      ],
      technologies: ["API Integration", "Jira", "Postman", "Salesforce"],
      image: "🛡️",
      category: "PropTech"
    },
    {
      title: "Expanding from Web to Native Mobile",
      company: "Legal Zoom",
      description: "Validated mobile opportunity through user research showing high demand for on-the-go access. Led prioritization of web features for mobile-first experience using data-driven frameworks. Coordinated dual-platform launch while managing App Store optimization strategy, driving 28% MAU growth and expanding addressable market.",
      results: [
        "Drove a 28% surge in Monthly Active Users (MAUs)",
        "Increased new app downloads by 30% through App Store optimization and push notification campaigns",
        "Expanded platform availability by successfully launching on both iOS and Android"
      ],
      technologies: ["Figma", "Google Analytics", "iOS", "Android"],
      image: "📱",
      category: "Mobile/Legal Tech"
    }
  ];

  const aiProjects = [
    {
      title: "AI Hospitality Agent",
      status: "Prototyping",
      description: "Building an AI-powered guest concierge for short-term rentals designed to boost host ratings. The agent uses conversational AI to resolve guest issues 24/7 and analyzes feedback to provide hosts with data-driven property recommendations.",
      impact: [
        "Aiming for a 30% increase in positive host ratings",
        "Targeting a 50% reduction in guest issue response time",
        "Designed to automate over 90% of routine guest inquiries"
      ],
      technologies: ["OpenAI", "DeepSeek", "Twilio", "API", "Firebase Studio"],
      icon: Bot,
      color: "from-teal-400 to-cyan-500",
      demo: false
    },
    {
      title: "Generative AI for Creative Briefs",
      status: "Concept Proposal",
      description: "Championed a concept to integrate OpenAI's generative AI into our newly developed rich text editor. The feature was designed to allow users to autogenerate robust campaign directions and descriptions from simple prompts, dramatically reducing the manual effort required to create detailed project briefs and aligning our product with emerging AI trends in the industry.",
      impact: [
        "Projected a 40% reduction in time spent writing campaign briefs",
        "Designed to drive user adoption of the new rich text editor feature",
        "Aimed to establish competitive parity with similar AI features in tools like Asana and ClickUp"
      ],
      technologies: ["OpenAI API", "Generative AI"],
      icon: Zap,
      color: "from-purple-400 to-pink-500",
      demo: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Production': return 'bg-teal-100 text-teal-800';
      case 'Beta Testing': return 'bg-cyan-100 text-cyan-800';
      case 'Development': return 'bg-yellow-100 text-yellow-800';
      case 'Concept Proposal': return 'bg-blue-100 text-blue-800';
      case 'Prototype': return 'bg-purple-100 text-purple-800';
      case 'Prototyping': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactTitle = (status: string) => {
    switch (status) {
      case 'Prototyping': return 'Projected Impact & Goals';
      case 'Concept Proposal': return 'Potential Impact & Business Case';
      default: return 'Impact & Results';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Product Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            From identifying market opportunities to shipping revenue-generating products,
            these case studies demonstrate my end-to-end product management capabilities.
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Each project showcases strategic decision-making, cross-functional leadership,
            and measurable business impact across PropTech, LegalTech, and SaaS industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'traditional'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Traditional Projects
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              AI/ML Projects
            </button>
          </div>
        </div>

        {/* Traditional Projects */}
        {activeTab === 'traditional' && (
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {traditionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 sm:p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl sm:text-4xl mb-2">{project.image}</div>
                    <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-teal-100">
                    <span className="text-sm sm:text-base">at {project.company}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-teal-600" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleViewCaseStudy(project.title)}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Projects */}
        {activeTab === 'ai' && (
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {aiProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-4 sm:p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <project.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(project.status)} text-slate-800 bg-white`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-teal-600" />
                      {getImpactTitle(project.status)}
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleViewCaseStudy(project.title)}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md text-sm sm:text-base"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;