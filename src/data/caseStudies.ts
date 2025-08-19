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
];