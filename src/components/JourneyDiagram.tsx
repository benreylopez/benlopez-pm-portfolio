import React from 'react';
import { ArrowRight, ArrowDown, AlertTriangle, CheckCircle, TrendingUp, Users, Zap, Target } from 'lucide-react';

interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface JourneyDiagramProps {
  beforeSteps: JourneyStep[];
  afterSteps: JourneyStep[];
  beforePainPoints: string[];
  afterBenefits: string[];
  beforeEmotion: string;
  afterEmotion: string;
}

const JourneyDiagram: React.FC<JourneyDiagramProps> = ({
  beforeSteps,
  afterSteps,
  beforePainPoints,
  afterBenefits,
  beforeEmotion,
  afterEmotion,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">User Journey Transformation</h3>
        <p className="text-slate-300">From fragmented chaos to seamless efficiency</p>
      </div>

      {/* Main Diagram */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* BEFORE Section */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 border-r border-gray-200">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <div>
              <h4 className="text-xl font-bold text-red-700">BEFORE</h4>
              <p className="text-red-600 text-sm">Manual & Inefficient</p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
              {beforeSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center space-y-2 min-w-0">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="text-center">
                      <step.icon className="w-6 h-6 text-red-600 mx-auto mb-1" />
                      <div className="text-xs font-medium text-slate-800 max-w-20 leading-tight">
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < beforeSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-red-400 hidden lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-red-200">
            <h5 className="font-semibold text-red-700 mb-3 text-sm flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Pain Points
            </h5>
            <ul className="grid grid-cols-1 gap-2">
              {beforePainPoints.slice(0, 3).map((pain, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-slate-600">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emotion */}
          <div className="bg-red-500 text-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">😤</div>
            <div className="font-semibold text-sm">User Feeling</div>
            <div className="text-red-100 text-xs">{beforeEmotion}</div>
          </div>
        </div>

        {/* AFTER Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-8 h-8 text-teal-500" />
            <div>
              <h4 className="text-xl font-bold text-teal-700">AFTER</h4>
              <p className="text-teal-600 text-sm">Seamless & Integrated</p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
              {afterSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center space-y-2 min-w-0">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="text-center">
                      <step.icon className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                      <div className="text-xs font-medium text-slate-800 max-w-20 leading-tight">
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {index < afterSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-teal-400 hidden lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-teal-200">
            <h5 className="font-semibold text-teal-700 mb-3 text-sm flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Key Benefits
            </h5>
            <ul className="grid grid-cols-1 gap-2">
              {afterBenefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emotion */}
          <div className="bg-teal-500 text-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">🚀</div>
            <div className="font-semibold text-sm">User Feeling</div>
            <div className="text-teal-100 text-xs">{afterEmotion}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyDiagram;