import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Brain, Target } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import JourneyDiagram from '../components/JourneyDiagram';
import Header from '../components/Header';

const CaseStudyPage = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const navigate = useNavigate();

  const caseStudy = caseStudies.find(cs => cs.slug === projectSlug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-24 pb-12 flex flex-col items-center justify-center text-center p-8 min-h-[60vh]">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Case Study Not Found</h1>
          <p className="text-lg text-slate-600 mb-8">The case study you are looking for does not exist.</p>
          <button
            onClick={() => navigate('/#portfolio')}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>
    );
  }

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollTo: 'portfolio' } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBackToPortfolio}
          className="mb-8 flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium group transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {caseStudy.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-600 font-medium">{caseStudy.company}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {caseStudy.title}
          </h1>
        </div>

        {/* Overview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Project Overview</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">{caseStudy.overview}</p>
        </div>

        {/* Challenge */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">The Challenge</h2>
          </div>
          <div className="space-y-4">
            {caseStudy.challenge.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">The Solution</h2>
          </div>
          <div className="grid gap-6">
            {caseStudy.solution.map((sol, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-teal-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  {sol.name}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed ml-11">{sol.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Diagram */}
        <div className="mb-8">
          <JourneyDiagram
            beforeSteps={caseStudy.journey.beforeSteps}
            afterSteps={caseStudy.journey.afterSteps}
            beforePainPoints={caseStudy.journey.beforePainPoints}
            afterBenefits={caseStudy.journey.afterBenefits}
            beforeEmotion={caseStudy.journey.beforeEmotion}
            afterEmotion={caseStudy.journey.afterEmotion}
          />
        </div>

        {/* Impact & Results */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Impact & Results</h2>
          </div>
          <div className="grid gap-4">
            {caseStudy.impact.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {caseStudy.technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-3 rounded-lg text-center font-medium border border-gray-300 hover:shadow-md transition-shadow">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Back to Portfolio Button */}
        <div className="text-center">
          <button
            onClick={handleBackToPortfolio}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg text-lg flex items-center space-x-2 mx-auto"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;