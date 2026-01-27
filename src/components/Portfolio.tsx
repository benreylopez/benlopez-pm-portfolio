import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Users, Zap, Building2, Scale, Smartphone, Target, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  impact: string[];
  arr?: string;
  icon: any;
  gradient: string;
  category: string;
  proofLink?: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      title: "ClaimCoach.AI - Product Strategy & AI Innovation",
      company: "ClaimCoach.AI",
      period: "2024 - Present",
      description: "Co-founding and leading product strategy for an AI PropTech platform that automates insurance claims through AI-powered expert analysis, leveraging policy analysis to find missed revenue and deliver data-driven strategies to maximize settlements.",
      impact: [
        "$10K MRR secured via LOIs",
        "Alpha customers: property manager & law firm",
        "AI-powered claims automation"
      ],
      arr: "$10K",
      icon: Zap,
      gradient: "from-violet-400 to-purple-500",
      category: "AI/ML"
    },
    {
      title: "White-Label SaaS Add-On for Interactive Emails",
      company: "Nel Marketing",
      period: "2023 - Present",
      description: "Created a $300K ARR white-label SaaS add-on by packaging a repeatable offer and enabling specialists to sell and deliver it seamlessly.",
      impact: [
        "$300K ARR generated",
        "60% client adoption rate",
        "Enabled new revenue stream"
      ],
      arr: "$300K",
      icon: Zap,
      gradient: "from-sky-400 to-blue-500",
      category: "MarTech"
    },
    {
      title: "AI-Powered Campaign Creation",
      company: "Nel Marketing",
      period: "2023 - Present",
      description: "Improved email campaign creation productivity 60% by deploying Gemini-based, client-trained AI assistants with prompt guardrails and feedback loops.",
      impact: [
        "60% productivity improvement",
        "AI-driven automation",
        "Reduced manual effort"
      ],
      icon: Target,
      gradient: "from-fuchsia-400 to-pink-400",
      category: "AI/ML"
    },
    {
      title: "KPI Reporting & Revenue Attribution",
      company: "Nel Marketing",
      period: "2023 - Present",
      description: "Lifted attributed revenue 20% in 6 months across 10 enterprise accounts by building KPI reporting that turned lifecycle metrics into weekly insights.",
      impact: [
        "20% revenue lift",
        "10 enterprise accounts",
        "Weekly actionable insights"
      ],
      icon: TrendingUp,
      gradient: "from-emerald-400 to-green-500",
      category: "MarTech"
    },
    {
      title: "Time-Tracking MVP",
      company: "Lytho",
      period: "2022 - 2023",
      description: "Retained $5M ARR and delivered 100% renewal for at-risk enterprise accounts by shipping a manual time-tracking MVP with 70% adoption in 90 days.",
      impact: [
        "$5M ARR retained",
        "70% user adoption",
        "100% renewal rate"
      ],
      arr: "$5M",
      icon: DollarSign,
      gradient: "from-blue-400 to-sky-500",
      category: "B2B SaaS",
      proofLink: "https://support.lytho.com/support/solutions/articles/151000189899-timesheets-workflow-"
    },
    {
      title: "Unified Suite Experience",
      company: "Lytho",
      period: "2022 - 2023",
      description: "Generated $2.5M ARR in cross-sell by unifying two standalone products into a single suite experience, converting 150 accounts.",
      impact: [
        "$2.5M ARR from cross-sell",
        "150 accounts converted",
        "Unified product experience"
      ],
      arr: "$2.5M",
      icon: Users,
      gradient: "from-cyan-400 to-sky-500",
      category: "B2B SaaS",
      proofLink: "https://support.lytho.com/support/solutions/articles/151000190088-navigating-between-dam-workflow"
    },
    {
      title: "Rich-Text Editor Migration",
      company: "Lytho",
      period: "2022 - 2023",
      description: "Reduced support tickets 80% and avoided $50K per year in licensing costs by implementing an open-source rich-text editor.",
      impact: [
        "80% ticket reduction",
        "$50K annual savings",
        "Improved user experience"
      ],
      icon: Zap,
      gradient: "from-lime-400 to-emerald-500",
      category: "B2B SaaS"
    },
    {
      title: "Credit Builder Integration",
      company: "ResMan",
      period: "2021 - 2022",
      description: "Reached a $1.5M ARR run-rate in 12 months by launching Credit Builder via partner integration and embedding enrollment into the resident experience.",
      impact: [
        "$1.5M ARR run-rate",
        "Partner integration",
        "Embedded user experience"
      ],
      arr: "$1.5M",
      icon: Building2,
      gradient: "from-orange-400 to-amber-500",
      category: "PropTech"
    },
    {
      title: "White-Label Renters Insurance",
      company: "ResMan",
      period: "2021 - 2022",
      description: "Delivered $1M ARR in year one by launching white-label renters insurance and integrating purchase into the leasing flow.",
      impact: [
        "$1M ARR year one",
        "Seamless leasing integration",
        "New revenue stream"
      ],
      arr: "$1M",
      icon: Building2,
      gradient: "from-amber-400 to-yellow-500",
      category: "PropTech"
    },
    {
      title: "Okta 2FA for Enterprise Security",
      company: "LegalZoom",
      period: "2020 - 2021",
      description: "Closed $300K ARR in 6 months by shipping Okta 2FA that unblocked enterprise security requirements.",
      impact: [
        "$300K ARR in 6 months",
        "Unblocked enterprise deals",
        "Enhanced security"
      ],
      arr: "$300K",
      icon: Scale,
      gradient: "from-violet-400 to-purple-500",
      category: "LegalTech",
      proofLink: "https://authenticator.2stable.com/services/earthclassmail.com/"
    },
    {
      title: "Checkout Funnel Optimization",
      company: "LegalZoom",
      period: "2020 - 2021",
      description: "Increased checkout completion from 20% to 40% in 30 days, adding $120K ARR, by fixing funnel drop-off with feature flags.",
      impact: [
        "20% to 40% completion",
        "$120K ARR added",
        "30-day turnaround"
      ],
      arr: "$120K",
      icon: TrendingUp,
      gradient: "from-rose-400 to-pink-500",
      category: "LegalTech"
    },
    {
      title: "iOS Mobile App Launch",
      company: "LegalZoom",
      period: "2020 - 2021",
      description: "Launched an iOS MVP, driving 6,000 downloads in 6 months and reaching 700 weekly active users by prioritizing high-value mobile workflows.",
      impact: [
        "6,000 downloads",
        "700 weekly active users",
        "Mobile-first experience"
      ],
      icon: Smartphone,
      gradient: "from-blue-400 to-indigo-500",
      category: "Mobile",
      proofLink: "https://apps.apple.com/us/app/earth-class-mail-mailbox-scan/id1484077329"
    }
  ];

  const categories = ['all', 'B2B SaaS', 'PropTech', 'LegalTech', 'MarTech', 'AI/ML', 'Mobile'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [filteredProjects]);

  const totalARR = projects
    .filter(p => p.arr)
    .reduce((sum, p) => {
      const value = p.arr!;
      const number = parseFloat(value.replace(/[^0-9.]/g, ''));

      if (value.includes('K')) {
        return sum + (number / 1000);
      } else if (value.includes('M')) {
        return sum + number;
      }
      return sum + number;
    }, 0);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2306B6D4%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">
            Product Portfolio
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            12 revenue-generating products shipped across PropTech, LegalTech, MarTech, and B2B SaaS
          </p>

          {/* Impact Summary */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12">
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">
                ${totalARR.toFixed(1)}M+
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Total ARR Impact</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">
                {projects.length}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Products Shipped</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-3xl sm:text-4xl font-bold text-blue-500 mb-2">
                4
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Companies</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-800 hover:shadow-md border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index % 3) * 100}ms` : '0ms'
                }}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-4 sm:p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs sm:text-sm opacity-90">{project.company}</span>
                      {project.arr && (
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                          {project.arr} ARR
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Impact List */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                      Key Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Proof Link Button */}
                  {project.proofLink && (
                    <div className="mb-4">
                      <a
                        href={project.proofLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>See Live Example</span>
                      </a>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
            Want to learn more about my product approach?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
