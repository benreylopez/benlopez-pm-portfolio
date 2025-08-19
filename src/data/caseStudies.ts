import { Target, Users, TrendingUp, Brain, Cpu, Bot, Zap, Github, Play, ArrowRight, ArrowDown, AlertTriangle, CheckCircle, Search, PenTool, FileText, Calendar } from 'lucide-react';

export interface CaseStudyStep {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface CaseStudySolution {
  name: string;
  description: string;
}

export interface CaseStudyJourney {
  beforeSteps: CaseStudyStep[];
  afterSteps: CaseStudyStep[];
  beforePainPoints: string[];
  afterBenefits: string[];
  beforeEmotion: string;
  afterEmotion: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  category: string;
  overview: string;
  challenge: string[];
  solution: CaseStudySolution[];
  impact: string[];
  technologies: string[];
  journey: CaseStudyJourney;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'marketing-agency-ai-assistant-suite',
    title: 'Marketing Agency AI Assistant Suite',
    company: 'Nel Marketing',
    category: 'AI/ML',
    overview: 'I built a comprehensive suite of four specialized AI assistants designed to revolutionize operations for a modern marketing agency. Each assistant handles a specific aspect of the business - from high-level strategy and client management to new business acquisition and internal project organization. Together, they create a seamless workflow that eliminates manual processes and amplifies productivity.',
    challenge: [
      'The agency was struggling with fragmented workflows and time-consuming manual tasks across all areas of operations.',
      'Leadership lacked centralized strategic oversight and consistent content generation for agency growth and positioning.',
      'Client campaign development and copywriting were slow, inconsistent, and required significant manual effort from senior staff.',
      'New business acquisition processes were inefficient, with proposal creation taking too long and lacking data-driven insights.',
      'Internal project management was overwhelming and disorganized, creating mental overhead and missed deadlines.'
    ],
    solution: [
      {
        name: 'Samantha - The Agency CSO',
        description: 'Acts as the strategic brain of the agency, analyzing market trends, evaluating competitors, and generating thought-leadership content. Samantha serves as the single source of truth for agency strategy, helping leadership make data-driven decisions and maintain consistent messaging across all marketing efforts.'
      },
      {
        name: 'Hannah / Iris - Client Strategists',
        description: 'Dedicated AI experts assigned to specific client accounts, ensuring deep focus and data privacy. They develop tailored campaign strategies, create A/B tested email and SMS copy that matches each client\'s brand voice, and serve as the go-to resource for all client-specific strategic decisions.'
      },
      {
        name: 'Rory - The Audit Expert',
        description: 'Specializes in new business acquisition by analyzing prospect data to identify critical issues and opportunities. Rory creates compelling, data-driven ROI projections and generates complete audit proposals with client-ready presentations, dramatically streamlining the sales process.'
      },
      {
        name: 'Megan - The Project Manager',
        description: 'Transforms chaotic task lists into clear, prioritized daily action plans. Megan takes raw data exports from project management tools, organizes them by priority and time estimates, identifies potential bottlenecks, and creates ready-to-send delegation messages for seamless workflow management.'
      }
    ],
    impact: [
      'Accelerated new business development with automated audit proposals that include compelling ROI projections and data-driven insights.',
      'Improved client campaign performance through AI-powered strategy development and A/B tested copy variations.',
      'Enhanced agency marketing presence with AI-generated blog posts, case studies, and thought leadership content.',
      'Eliminated task management overwhelm by converting messy to-do lists into organized, actionable weekly plans.',
      'Reduced manual effort across all operations by 70%, allowing leadership to focus on high-value strategic work.',
      'Increased proposal win rate by 40% through data-driven audit insights and professional presentation formatting.'
    ],
    technologies: ['OpenAI API', 'DeepSeek', 'Twilio API', 'Firebase Studio', 'ClickUp API', 'Slack Integration', 'Canva API', 'Data Analytics Pipeline'],
    journey: {
      beforeSteps: [
        { step: 1, title: 'Manual Research', icon: Search, description: 'Hours spent on manual market research and competitor analysis' },
        { step: 2, title: 'Draft Copy', icon: PenTool, description: 'Writing all client campaigns and copy from scratch' },
        { step: 3, title: 'Build Proposals', icon: FileText, description: 'Creating audit proposals manually, often inconsistent' },
        { step: 4, title: 'Manage Tasks', icon: Calendar, description: 'Juggling overwhelming task lists and project deadlines' }
      ],
      afterSteps: [
        { step: 1, title: 'AI Insights', icon: Brain, description: 'Instant market analysis and strategic recommendations' },
        { step: 2, title: 'AI Campaigns', icon: Zap, description: 'Tailored, A/B tested campaign copy generated efficiently' },
        { step: 3, title: 'Auto Proposals', icon: Target, description: 'Data-driven audit proposals with ROI projections' },
        { step: 4, title: 'Smart Planning', icon: CheckCircle, description: 'Clear, prioritized daily action plans' }
      ],
      beforePainPoints: [
        'Hours wasted on repetitive research and content creation',
        'Inconsistent strategic direction across client accounts',
        'Slow proposal turnaround hurting sales conversion',
        'Overwhelming task management causing missed deadlines',
        'Limited scalability due to manual processes'
      ],
      afterBenefits: [
        'Instant access to strategic insights and market analysis',
        'Consistent, high-quality content across all touchpoints',
        'Professional proposals delivered in fraction of the time',
        'Clear visibility into workload and project priorities',
        'Scalable operations that grow with the business'
      ],
      beforeEmotion: 'Overwhelmed and scattered',
      afterEmotion: 'Confident and focused'
    }
  }
  {
    slug: 'credit-builder-for-renters',
    title: 'Credit Builder for Renters',
    company: 'ResMan Software',
    category: 'PropTech',
    overview: 'I built a new online financial tool for apartment residents that allowed them to improve their credit score by paying rent on time. This innovation simplified processes for residents and generated significant new revenue for the company, achieved by collaborating closely with outside partners, designers, and data experts.',
    challenge: [
      'Property management companies lacked value-added services to differentiate their properties and increase resident satisfaction.',
      'Residents had limited opportunities to build credit history through their rent payments, which are typically not reported to credit bureaus.',
      'The company needed new revenue streams beyond traditional property management fees to drive growth.',
      'Integration with existing property management systems required seamless data flow and user experience.',
      'Compliance and regulatory requirements for financial products created complex implementation challenges.'
    ],
    solution: [
      {
        name: 'Third-Party Credit Bureau Integration',
        description: 'Partnered with established credit reporting agencies to ensure rent payments are accurately and consistently reported to all major credit bureaus, providing residents with legitimate credit building opportunities.'
      },
      {
        name: 'Seamless Platform Integration',
        description: 'Built the credit builder tool directly into the existing ResMan platform, ensuring residents could access the feature without leaving their familiar property management portal, reducing friction and increasing adoption.'
      },
      {
        name: 'Automated Enrollment and Tracking',
        description: 'Developed an automated system that identifies eligible residents, guides them through enrollment, and tracks their payment history to ensure consistent credit reporting without manual intervention.'
      },
      {
        name: 'Revenue Sharing Model',
        description: 'Created a sustainable business model where property management companies earn recurring revenue from resident participation, aligning incentives and encouraging promotion of the feature.'
      }
    ],
    impact: [
      'Unlocked $2M in new yearly revenue (ARR) with a credit-builder feature',
      '80% adoption rate among eligible residents',
      '90% increase in positive property management feedback'
    ],
    technologies: ['Third-Party APIs', 'Pendo (Analytics)', 'Jira'],
    journey: {
      beforeSteps: [
        { step: 1, title: 'Pay Rent', icon: Calendar, description: 'Residents pay rent monthly with no credit benefit' },
        { step: 2, title: 'Miss Opportunity', icon: AlertTriangle, description: 'Payments go unreported to credit bureaus' },
        { step: 3, title: 'Seek Alternatives', icon: Search, description: 'Residents look for other ways to build credit' },
        { step: 4, title: 'Limited Options', icon: Target, description: 'Few accessible credit-building tools available' }
      ],
      afterSteps: [
        { step: 1, title: 'Auto-Enroll', icon: CheckCircle, description: 'Seamless enrollment in credit builder program' },
        { step: 2, title: 'Pay Rent', icon: Calendar, description: 'Continue paying rent as normal' },
        { step: 3, title: 'Build Credit', icon: TrendingUp, description: 'Payments automatically reported to credit bureaus' },
        { step: 4, title: 'Track Progress', icon: Target, description: 'Monitor credit score improvements over time' }
      ],
      beforePainPoints: [
        'Rent payments provided no credit building benefit',
        'Residents struggled to find accessible credit building options',
        'Property managers had limited value-added services to offer',
        'No additional revenue streams from existing resident relationships',
        'Manual processes for any credit-related services'
      ],
      afterBenefits: [
        'Every rent payment now builds credit history automatically',
        'Residents gain access to valuable financial tool at no extra cost',
        'Property managers can promote additional value to residents',
        'Significant new recurring revenue stream established',
        'Fully automated system requires minimal ongoing management'
      ],
      beforeEmotion: 'Frustrated by missed opportunities',
      afterEmotion: 'Empowered and financially progressive'
    }
  }
];