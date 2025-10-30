import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, TrendingUp, Target, CheckCircle, AlertCircle, Lightbulb, AlertTriangle, GitBranch, XCircle, Scale } from 'lucide-react';
import { Clock, FileSpreadsheet, MousePointer, BarChart3, Home, DollarSign, Shield, Smartphone, Bell, Bot, PenTool, Zap, MessageSquare, FileText, Star, HeartHandshake } from 'lucide-react';
import JourneyDiagram from '../components/JourneyDiagram';

const CaseStudyPage = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Project data - would typically come from a CMS or API
  const projectData = {
    'credit-builder-for-renters': {
      type: 'traditional',
      title: "Credit Builder for Renters",
      company: "ResMan Software",
      timeline: "2023",
      role: "Senior Product Manager",
      team: "6 people total - 4 Software engineers, 1 designer, 1 QA",
      image: "🏢",
      category: "PropTech",
      overview: "Identified untapped revenue opportunity in PropTech by solving a real resident pain point. Led discovery, validated market demand through customer interviews, and orchestrated complex third-party integration to unlock $2M ARR while delivering genuine financial value to residents.",
      discovery: {
        title: "Market Discovery & Validation",
        description: "Through competitive analysis, I identified that major competitors like Yardi and AppFolio were already monetizing credit-building services. Customer interviews with 30+ property managers revealed strong demand, with 85% expressing interest. Resident surveys showed 72% wanted to build credit from rent payments. This validated a clear market opportunity with proven willingness to pay.",
        methodology: [
          "Conducted 30+ customer interviews using Jobs-to-be-Done framework",
          "Analyzed competitive landscape: Yardi (RentCafe), AppFolio, Buildium",
          "Surveyed 500+ residents across 15 properties (72% response rate)",
          "Analyzed churn data correlating lack of value-added services to 12% higher cancellation rates"
        ]
      },
      competitiveAnalysis: {
        title: "Competitive Positioning",
        competitors: [
          { name: "Yardi RentCafe", strength: "Established credit reporting", weakness: "Complex enrollment, 40% drop-off", ourAdvantage: "One-click auto-enrollment" },
          { name: "AppFolio", strength: "Strong property mgmt platform", weakness: "Manual opt-in process", ourAdvantage: "Automated during lease signing" },
          { name: "Buildium", strength: "Mid-market presence", weakness: "No credit builder option", ourAdvantage: "First-mover in segment" }
        ],
        strategicChoice: "We chose to compete on ease of enrollment rather than credit score improvement features. Analysis showed 68% of failed adoptions were due to complex sign-up processes, not feature limitations."
      },
      challenge: {
        title: "The Challenge",
        description: "Many apartment residents struggled to build credit, and property managers needed new ways to add value and generate revenue. The key hurdle was building a seamless financial product that served both while meeting strict regulations."
      },
      strategicDecisions: {
        title: "Strategic Decisions & Trade-offs",
        description: "I made several critical prioritization decisions using RICE scoring framework (Reach, Impact, Confidence, Effort). Each decision involved explicit trade-offs between speed, risk, and business value.",
        decisions: [
          {
            decision: "Partner vs. Build In-House",
            chosen: "Partnered with RentTrack (established credit bureau partner)",
            rejected: "Build proprietary credit reporting system",
            rationale: "Reduced regulatory risk from 'High' to 'Low', accelerated launch by 8 months, but sacrificed 15% margin on per-transaction fees. ROI analysis showed break-even in 18 months vs. 36+ for in-house.",
            risk: "Vendor dependency and lower margins"
          },
          {
            decision: "Auto-Enrollment vs. Manual Opt-In",
            chosen: "Auto-enrollment with opt-out (default-on)",
            rejected: "Manual opt-in model",
            rationale: "Competitive data showed 60-70% higher adoption with opt-out models. Required additional legal review (3 weeks delay) and more complex compliance requirements, but projected to 3x adoption rates.",
            risk: "Higher compliance burden and potential pushback"
          },
          {
            decision: "Mobile-First vs. Desktop Parity",
            chosen: "Mobile-optimized experience as MVP",
            rejected: "Full desktop feature parity at launch",
            rationale: "User analytics showed 78% of resident logins on mobile. Focusing on mobile allowed us to ship 6 weeks earlier. Desktop version followed in Phase 2.",
            risk: "Property manager desktop users had limited visibility initially"
          }
        ],
        whatWeDidntBuild: [
          "Manual payment reporting (residents wanted automation)",
          "Credit monitoring dashboard (nice-to-have, not critical path)",
          "Multi-bureau reporting (started with Experian only to reduce complexity)"
        ]
      },
      challengesAndSetbacks: {
        title: "Challenges & What Went Wrong",
        challenges: [
          {
            challenge: "Integration Delay with Credit Partner",
            impact: "Launch delayed 5 weeks due to API authentication issues",
            resolution: "Worked directly with partner's engineering team, discovered undocumented rate limits. Created fallback queue system for failed reports.",
            learning: "Always build buffer time for third-party integrations. Added 30% contingency to future partner-dependent timelines."
          },
          {
            challenge: "Regulatory Compliance Complexity",
            impact: "Legal review identified FCRA compliance gaps that required feature redesign",
            resolution: "Collaborated with legal team to redesign consent flow. Added explicit opt-out mechanism and clearer disclosure language.",
            learning: "Involve legal/compliance earlier in discovery phase. Now standard practice to have compliance review at wireframe stage."
          },
          {
            challenge: "Initial Adoption Lower Than Projected",
            impact: "First month adoption was 45% vs. 80% target",
            resolution: "User research revealed residents didn't understand value prop. Redesigned onboarding to show credit score improvement examples. Adoption climbed to 80% within 90 days.",
            learning: "Never assume users understand the 'why.' Education is as important as features."
          }
        ]
      },
      solution: {
        title: "My Approach",
        description: "I led the development of an innovative credit-building tool that automatically reported on-time rent payments to credit bureaus. This involved managing third-party API integrations, designing user flows for easy enrollment, and implementing analytics to track adoption and impact. The solution demanded careful coordination across legal, compliance, and technical teams to ensure regulatory adherence while maintaining a seamless user experience."
      },
      results: {
        title: "Impact & Results",
        metrics: [
          {
            metric: "Annual Recurring Revenue",
            before: "Baseline",
            after: "$2M ARR",
            improvement: "New Revenue",
            icon: TrendingUp
          },
          {
            metric: "Resident Adoption",
            before: "0%",
            after: "80%",
            improvement: "80% Adoption",
            icon: Users
          },
          {
            metric: "Management Feedback",
            before: "Baseline",
            after: "90% Positive",
            improvement: "+90% Increase",
            icon: Target
          }
        ]
      },
      technologies: ["Third-Party APIs", "Pendo (Analytics)", "Jira"],
      learnings: {
        title: "Key Learnings",
        insights: [
          {
            title: "Partnership Management is Critical",
            description: "Success required careful coordination with external financial partners and maintaining compliance with regulatory requirements while ensuring smooth user experience."
          },
          {
            title: "Data Validates Business Impact",
            description: "Implementing robust analytics from the start was crucial for tracking adoption and proving the significant revenue generated by the feature."
          }
        ]
      },
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "Pay Rent Monthly",
            description: "The user performs their largest recurring payment",
            icon: DollarSign
          },
          {
            step: 2,
            title: "Receive No Credit Benefit",
            description: "The direct consequence, the payment isn't reported",
            icon: AlertTriangle
          },
          {
            step: 3,
            title: "Credit Score Stagnates",
            description: "The long-term result of the inaction",
            icon: BarChart3
          },
          {
            step: 4,
            title: "Financial Goals Hindered",
            description: "The ultimate impact on the user's life",
            icon: Target
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "Apply for Apartment",
            description: "Resident completes rental application process",
            icon: Home
          },
          {
            step: 2,
            title: "Enroll in Credit Builder",
            description: "One-click enrollment in credit-building program",
            icon: MousePointer
          },
          {
            step: 3,
            title: "Pay Rent Monthly",
            description: "Resident pays rent through existing system",
            icon: DollarSign
          },
          {
            step: 4,
            title: "Build Credit Automatically",
            description: "Payments automatically reported to credit bureaus",
            icon: TrendingUp
          }
        ],
        beforePainPoints: [
          "Largest payment provides no credit benefit",
          "Missing opportunities to build financial future",
          "No value beyond housing requirement"
        ],
        afterBenefits: [
          "Automatic credit reporting from rent",
          "Seamless enrollment process",
          "Integrated financial benefits"
        ],
        beforeEmotion: "Frustrated, missing opportunities for growth",
        afterEmotion: "Empowered, building financial future"
      }
    },
    'integrated-time-tracking-for-creative-teams': {
      type: 'traditional',
      title: "Integrated Time Tracking for Creative Teams",
      company: "Lytho",
      timeline: "2023",
      role: "Senior Product Manager",
      team: "6 people - 3 software engineers, 1 designer, 1 QA, 1 Product Analyst",
      image: "⏱️",
      category: "B2B SaaS",
      overview: "Used churn analysis and customer interviews to identify critical feature gap threatening $2M ARR. Led full product lifecycle from discovery to GTM, prioritizing seamless integration over feature richness to preserve at-risk revenue.",
      discovery: {
        title: "Discovery Process",
        description: "Analyzed churn data revealing time-tracking gaps mentioned in 40% of exit interviews. Conducted 25 customer interviews uncovering frustration with external tools like spreadsheets. Competitive analysis showed Asana and Monday.com had integrated time tracking. Used Jobs-to-be-Done framework to understand managers needed real-time visibility into team capacity, not just historical reporting. This research shaped our MVP scope.",
        methodology: [
          "Churn analysis: 40% of exit interviews cited time-tracking gaps (N=50 churned customers over 6 months)",
          "Customer interviews: 25 in-depth sessions with creative team managers using JTBD framework",
          "Competitive teardown: Analyzed Asana, Monday.com, Wrike, and Teamwork time-tracking features",
          "Quantitative survey: 120 active customers rated pain points (time-tracking scored 8.2/10 importance)",
          "Usage data analysis: 65% of users maintained separate spreadsheets for time tracking"
        ]
      },
      competitiveAnalysis: {
        title: "Competitive Landscape & Strategic Positioning",
        competitors: [
          { name: "Asana", strength: "Simple timer widget", weakness: "No project budget tracking", ourAdvantage: "Integrated budget vs. actual reporting" },
          { name: "Monday.com", strength: "Visual dashboards", weakness: "Complex setup process", ourAdvantage: "Zero-config time logging" },
          { name: "Wrike", strength: "Enterprise features", weakness: "Overwhelming for small teams", ourAdvantage: "Right-sized for creative teams" }
        ],
        strategicChoice: "We prioritized simplicity over comprehensiveness. Rather than building a full timesheet system, we focused on frictionless time capture at the task level. This aligned with our existing workflow-first philosophy and differentiated us from enterprise-focused competitors."
      },
      challenge: {
        title: "The Challenge",
        description: "Customer data revealed that the lack of an integrated time tracker was a primary driver of churn. Our clients were forced to use external tools like spreadsheets to track project hours, creating a disjointed and inefficient user experience. This feature gap made us uncompetitive, causing us to lose customers to other platforms that offered a built-in time tracking solution."
      },
      strategicDecisions: {
        title: "Strategic Product Decisions",
        description: "Applied RICE scoring framework (Reach × Impact × Confidence ÷ Effort) to prioritize features. Focused on decisions that would preserve at-risk $2M ARR while maintaining product velocity.",
        decisions: [
          {
            decision: "Simple Timer vs. Timesheet Import",
            chosen: "Built lightweight click-to-log timer",
            rejected: "Complex timesheet import from Excel/CSV",
            rationale: "User research showed 82% of users wanted real-time logging, not retrospective entry. Simple timer reduced dev time by 4 weeks and matched actual user behavior. RICE score: 9.6 vs 4.2 for imports.",
            risk: "Edge cases where users needed to log historical time"
          },
          {
            decision: "Task-Level vs. Project-Level Tracking",
            chosen: "Task-level time granularity",
            rejected: "Project-only time buckets",
            rationale: "Managers specifically requested visibility into which tasks consumed time, not just overall project hours. Required more complex data model but addressed root cause of churn. Added 2 sprints to timeline.",
            risk: "Increased technical complexity and performance concerns"
          },
          {
            decision: "Manager Dashboard First vs. Team Member Features",
            chosen: "Prioritized manager reporting dashboard",
            rejected: "Rich team member time analysis views",
            rationale: "Churn data showed managers made renewal decisions. 85% of interviewees were managers who needed capacity planning. Team member features delivered in Phase 2.",
            risk: "Team members initially had limited value from feature"
          }
        ],
        whatWeDidntBuild: [
          "Timesheet approvals workflow (manual approval slowed teams down)",
          "Billable vs. non-billable categorization (not primary use case for creative teams)",
          "Advanced time forecasting (nice-to-have, focused on actual tracking first)"
        ]
      },
      challengesAndSetbacks: {
        title: "Challenges & Course Corrections",
        challenges: [
          {
            challenge: "Performance Issues with Large Projects",
            impact: "Beta users with 500+ tasks experienced 3-5 second load times for time logs",
            resolution: "Engineering implemented pagination and lazy loading. Added database indexing on time_entry queries. Load times reduced to <500ms.",
            learning: "Should have load-tested with realistic data volumes earlier. Now standard practice to test with 10x expected scale during development."
          },
          {
            challenge: "Feature Adoption Lower Than Expected",
            impact: "First 30 days post-launch showed only 40% adoption vs. 70% target",
            resolution: "User interviews revealed friction: users forgot to log time. Added Slack/email reminders and browser extension. Adoption climbed to 70% within 60 days.",
            learning: "Building the feature is only half the battle. Habit formation requires prompts and reminders. Now build notification strategy into every workflow feature."
          },
          {
            challenge: "Cross-Team Stakeholder Misalignment",
            impact: "Sales team promised timesheet exports to prospects before feature was roadmapped",
            resolution: "Created shared roadmap visibility for sales team. Accelerated timesheet export feature to next sprint. Established weekly alignment meetings between PM and Sales leadership.",
            learning: "Lack of roadmap transparency creates misaligned expectations. Implemented quarterly roadmap sharing sessions with all go-to-market teams."
          }
        ]
      },
      solution: {
        title: "Strategic Solution",
        description: "I drove this solution by first validating the problem with customer interviews and competitor analysis. From there, I worked with UX designers to define an intuitive feature that fit into existing workflows. I then led the agile development process with engineering, managing the project from roadmap to launch. After release, I used Pendo to measure success and partnered with marketing on a go-to-market plan, creating a feedback loop to guide future iterations."
      },
      results: {
        title: "Exceptional Results",
        metrics: [
          {
            metric: "Annual Recurring Revenue",
            before: "At Risk",
            after: "Preserved",
            improvement: "$2M ARR",
            icon: TrendingUp
          },
          {
            metric: "Workflow Efficiency",
            before: "Baseline",
            after: "50% Faster",
            improvement: "-50% Time",
            icon: Target
          },
          {
            metric: "Customer Churn",
            before: "High",
            after: "Reduced",
            improvement: "-15% Churn",
            icon: Users
          },
          {
            metric: "Feature Adoption",
            before: "0%",
            after: "70%",
            improvement: "70% Adoption",
            icon: Calendar
          }
        ]
      },
      technologies: ["Pendo", "Figma", "Miro", "Gainsight", "PostgreSQL", "React"],
      learnings: {
        title: "Key Learnings",
        insights: [
          {
            title: "Go Beyond the \"What\" to the \"Why\"",
            description: "Analytics identified what was happening (user churn), but direct customer interviews revealed why—the frustration of using external tools. This taught me that combining both quantitative and qualitative data is essential for building a solution that solves the right problem and drives adoption."
          },
          {
            title: "Success is More Than Shipping a Feature",
            description: "A great feature can fail without a strong launch. Partnering with marketing on the go-to-market strategy was just as critical as the development work itself. This cross-functional alignment was key to achieving high adoption and ensuring the feature delivered on its business impact."
          }
        ]
      },
      // User Journey Map Data
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "Work on Tasks",
            description: "Team members complete work in our platform",
            icon: Users
          },
          {
            step: 2,
            title: "Switch to External Tool",
            description: "Users exit the platform to open a spreadsheet application",
            icon: FileSpreadsheet
          },
          {
            step: 3,
            title: "Manual Data Entry",
            description: "Manually enter project names, tasks, and hours spent",
            icon: Clock
          },
          {
            step: 4,
            title: "Manager Collation",
            description: "The manager must gather and consolidate data from multiple spreadsheets",
            icon: BarChart3
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "Work on Tasks",
            description: "Team members complete work directly in our platform",
            icon: Users
          },
          {
            step: 2,
            title: "Click 'Log Time'",
            description: "A one-click time logging button is available directly on the task",
            icon: MousePointer
          },
          {
            step: 3,
            title: "Enter Hours",
            description: "Quick time entry with automatic task linkage",
            icon: Clock
          },
          {
            step: 4,
            title: "Real-time Dashboard",
            description: "The manager sees live, accurate data in an integrated dashboard",
            icon: BarChart3
          }
        ],
        beforePainPoints: [
          "Inefficient context switching",
          "Disconnected data and errors",
          "No real-time visibility into project budgets"
        ],
        afterBenefits: [
          "Seamless single-platform experience",
          "Automated data linkage and accuracy",
          "Real-time project budget tracking"
        ],
        beforeEmotion: "Frustrated, burdened, inefficient",
        afterEmotion: "Empowered, efficient, in control"
      }
    },
    'launching-a-new-renters-insurance-product': {
      type: 'traditional',
      title: "Launching a New Renters Insurance Product",
      company: "ResMan",
      timeline: "2022 - 2023",
      role: "Product Manager",
      team: "10 people - 5 developers, 2 external developers, 1 designer, 2 QA",
      image: "🛡️",
      category: "PropTech",
      overview: "Orchestrated the integration of a white-labeled insurance solution directly into the ResMan platform. This initiative streamlined the process for residents to acquire renters insurance and created a significant new revenue stream for property management companies.",
      challenge: {
        title: "The Challenge",
        description: "We identified a significant revenue opportunity our competitors were already capturing: offering integrated renters insurance. Our property management clients were missing out on this ancillary revenue stream, and their residents were being directed to high-friction, external insurance websites. The challenge was two-fold: technically, we had to seamlessly integrate a third-party partner's API to create a simple, auto-populated enrollment flow. Operationally, we had to launch the company's first insurance SKU, which required orchestrating a full go-to-market strategy to prepare our sales, marketing, and customer support teams for a new product line."
      },
      solution: {
        title: "Strategic Approach",
        description: "I led the technical discovery with our API partner while working with UX to design a simple, \"one-click\" enrollment flow within our platform. In parallel, I drove the operational strategy by creating the new sales SKU, building the go-to-market plan with marketing, and leading training sessions with sales and support to ensure a successful, company-wide launch."
      },
      results: {
        title: "Project Impact",
        metrics: [
          {
            metric: "Recurring Revenue",
            before: "$0",
            after: "$100K",
            improvement: "$100K MRR",
            icon: TrendingUp
          },
          {
            metric: "Insurance Sign-ups",
            before: "Manual",
            after: "Seamless",
            improvement: "One-Click Enrollment",
            icon: Target
          },
          {
            metric: "Operational Readiness",
            before: "Idea",
            after: "GTM Execution",
            improvement: "Company-Wide Launch",
            icon: Users
          }
        ]
      },
      technologies: ["API Integration", "Jira", "Postman", "Salesforce"],
      learnings: {
        title: "Key Learnings",
        insights: [
          {
            title: "Third-Party Integration is a Product",
            description: "Successfully launching the insurance feature taught me to treat the partner integration as a product itself. It required aligning business goals, UX, and support processes with our partner to ensure the end-user experienced a single, seamless solution."
          },
          {
            title: "Go-To-Market Begins Internally",
            description: "This project's success depended on internal operational readiness. Enabling our sales, marketing, and support teams with dedicated training and a new sales SKU was just as critical as building the feature itself, as it directly drove revenue and client adoption."
          }
        ]
      },
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "Move Into Apartment",
            description: "Resident completes move-in process",
            icon: Home
          },
          {
            step: 2,
            title: "Need Insurance",
            description: "Realizes renters insurance is required",
            icon: Shield
          },
          {
            step: 3,
            title: "Search External Sites",
            description: "Must leave platform to find insurance providers",
            icon: FileText
          },
          {
            step: 4,
            title: "Complex Enrollment",
            description: "Fill out lengthy forms with manual data entry",
            icon: AlertTriangle
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "Move Into Apartment",
            description: "Resident completes move-in process",
            icon: Home
          },
          {
            step: 2,
            title: "See Insurance Offer",
            description: "Insurance option presented within platform",
            icon: Shield
          },
          {
            step: 3,
            title: "One-Click Enrollment",
            description: "Information auto-populated, simple enrollment",
            icon: MousePointer
          },
          {
            step: 4,
            title: "Instant Coverage",
            description: "Immediate policy activation and confirmation",
            icon: CheckCircle
          }
        ],
        beforePainPoints: [
          "Forced users off-platform to a clunky, external website.",
          "Required repetitive, manual entry of personal information.",
          "Created a disjointed and confusing user experience."
        ],
        afterBenefits: [
          "Enabled enrollment without ever leaving the platform.",
          "Eliminated all manual data entry by auto-populating resident info.",
          "Provided residents with immediate, active insurance coverage."
        ],
        beforeEmotion: "Frustrated, overwhelmed by process",
        afterEmotion: "Relieved, protected effortlessly"
      }
    },
    'expanding-from-web-to-native-mobile': {
      type: 'traditional',
      title: "Expanding from Web to Native Mobile",
      company: "Legal Zoom",
      timeline: "2022",
      role: "Product Manager",
      team: "5 people - 2 mobile developers, 1 designers, 1 QA, 1 Data Analyst",
      image: "📱",
      category: "Mobile",
      overview: "Led the expansion from web to mobile, launching a new native app for both iOS and Android to meet customer demand. I worked with mobile developers and designers to replicate the core web experience, prioritizing features based on analytics and customer interviews to boost retention and attract new users.",
      challenge: {
        title: "The Mobile Challenge",
        description: "Our virtual mailbox product, a key offering within Legal Zoom, was entirely web-based, but customer feedback revealed a strong demand for mobile access. Users wanted to manage their mail, view scanned documents, and take action on time-sensitive items while on-the-go. The primary challenge was translating this feature-rich web platform into an intuitive mobile-first experience, prioritizing the most critical features for the initial launch while planning the roadmap for both iOS and Android platforms."
      },
      solution: {
        title: "Mobile-First Strategy",
        description: "I led the mobile expansion by first conducting extensive user research to understand mobile user behavior and prioritize features. Working closely with UX designers, we created a mobile-first design system that simplified complex legal workflows for smaller screens. I coordinated with engineering teams to build native apps for both platforms, using agile development with iterative releases. I also partnered with marketing to develop App Store optimization strategies and implemented push notification campaigns to drive user engagement and retention."
      },
      results: {
        title: "Mobile Success Metrics",
        metrics: [
          {
            metric: "Monthly Active Users",
            before: "Web Only",
            after: "28% Increase",
            improvement: "+28% MAUs",
            icon: Users
          },
          {
            metric: "App Downloads",
            before: "0",
            after: "30% Growth",
            improvement: "+30% Downloads",
            icon: TrendingUp
          },
          {
            metric: "Platform Availability",
            before: "Web Only",
            after: "Multi-Platform",
            improvement: "iOS + Android",
            icon: Target
          }
        ]
      },
      technologies: ["Figma", "Google Analytics", "iOS", "Android", "React Native", "App Store Connect"],
      learnings: {
        title: "Mobile Product Learnings",
        insights: [
          {
            title: "Mobile Users Have Different Expectations",
            description: "Mobile users expect faster, more intuitive interactions than web users. We learned to simplify complex legal workflows and prioritize the most essential features for mobile-first design, which actually improved our overall user experience across all platforms."
          },
          {
            title: "Cross-Platform Strategy Requires Careful Planning",
            description: "Launching on both iOS and Android simultaneously taught me the importance of platform-specific considerations while maintaining feature parity. Each platform has unique design patterns and review processes that need to be factored into development timelines and go-to-market strategies."
          }
        ]
      },
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "Receive Mail Alert on Phone",
            description: "This is a more active trigger than 'Need to Check Mail'",
            icon: Bell
          },
          {
            step: 2,
            title: "Find a Desktop Computer",
            description: "This emphasizes the inconvenience",
            icon: AlertTriangle
          },
          {
            step: 3,
            title: "Log Into Web Portal",
            description: "Navigate to website and login",
            icon: MousePointer
          },
          {
            step: 4,
            title: "Finally View Documents",
            description: "The word 'Finally' adds a touch of the user's frustration",
            icon: FileSpreadsheet
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "Receive Push Notification",
            description: "More specific and action-oriented",
            icon: Bell
          },
          {
            step: 2,
            title: "Tap to Open App",
            description: "A clear, simple action",
            icon: Smartphone
          },
          {
            step: 3,
            title: "Instantly View Documents",
            description: "Emphasizes the speed and benefit",
            icon: FileSpreadsheet
          },
          {
            step: 4,
            title: "Take Action On-the-Go",
            description: "Highlights the core value of mobility",
            icon: CheckCircle
          }
        ],
        beforePainPoints: [
          "Limited to desktop/laptop access",
          "No mobile access for urgent items",
          "Reduced convenience and flexibility"
        ],
        afterBenefits: [
          "Access from anywhere, anytime",
          "Push notifications for urgent items",
          "Mobile-optimized document viewing"
        ],
        beforeEmotion: "Constrained, tied to desk",
        afterEmotion: "Free, empowered, mobile"
      }
    },
    'ai-hospitality-agent': {
      type: 'ai',
      title: "AI Hospitality Agent",
      status: "Prototyping",
      timeline: "2024 - Present",
      role: "AI Product Manager",
      team: "4 people (1 ML engineer, 1 backend developer, 1 QA, 1 PM)",
      image: "🤖",
      overview: "Building an AI-powered guest concierge for short-term rentals designed to boost host ratings. The agent uses conversational AI to resolve guest issues 24/7 and analyzes feedback to provide hosts with data-driven property recommendations.",
      challenge: {
        title: "The Hospitality Challenge",
        description: "Short-term rental hosts struggle to provide 24/7 guest support, leading to delayed responses and negative reviews. Manual guest service is time-intensive and doesn't scale, especially for hosts managing multiple properties. There's also a gap in turning guest feedback into actionable property improvements."
      },
      solution: {
        title: "AI-Powered Guest Experience",
        description: "I'm leading development of a conversational AI system that handles routine guest inquiries automatically while escalating complex issues to hosts. The system integrates with messaging platforms like Twilio for multi-channel support and uses natural language processing to understand guest needs. Additionally, it analyzes guest feedback patterns to provide hosts with specific, data-driven recommendations for property improvements."
      },
      results: {
        title: "Projected Impact & Goals",
        metrics: [
          {
            metric: "Host Ratings",
            before: "Current Baseline",
            after: "30% Increase",
            improvement: "+30% Ratings",
            icon: TrendingUp
          },
          {
            metric: "Response Time",
            before: "Manual Response",
            after: "50% Reduction",
            improvement: "-50% Response Time",
            icon: Target
          },
          {
            metric: "Query Automation",
            before: "0%",
            after: "90%",
            improvement: "90% Automated",
            icon: Users
          }
        ]
      },
      technologies: ["OpenAI", "DeepSeek", "Twilio", "API", "Firebase Studio"],
      learnings: {
        title: "AI Development Insights",
        insights: [
          {
            title: "Context is Critical for AI Success",
            description: "The AI agent's effectiveness depends heavily on understanding property-specific context and guest history. Building a robust context management system is essential for providing relevant, helpful responses."
          },
          {
            title: "Human-AI Handoff Must Be Seamless",
            description: "Designing smooth transitions between AI and human hosts is crucial. The system needs to know when to escalate and provide hosts with full conversation context for continuity."
          }
        ]
      },
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "Stay at Property",
            description: "Guest checks in and begins their stay",
            icon: Home
          },
          {
            step: 2,
            title: "Minor Issues Arise",
            description: "Small problems occur but go unaddressed",
            icon: AlertTriangle
          },
          {
            step: 3,
            title: "Unresolved Frustrations",
            description: "Issues accumulate without host awareness",
            icon: Clock
          },
          {
            step: 4,
            title: "Leave Negative Review",
            description: "Poor experience leads to negative feedback",
            icon: Star
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "Stay at Property",
            description: "Guest checks in and begins their stay",
            icon: Home
          },
          {
            step: 2,
            title: "AI Proactive Check-in",
            description: "AI reaches out to ensure everything is perfect",
            icon: Bot
          },
          {
            step: 3,
            title: "Issues Resolved Instantly",
            description: "Any problems addressed immediately 24/7",
            icon: Zap
          },
          {
            step: 4,
            title: "Leave Glowing Review",
            description: "Exceptional care results in positive feedback",
            icon: HeartHandshake
          }
        ],
        beforePainPoints: [
          "Minor issues go unnoticed and unresolved",
          "Host unavailable during guest stay",
          "Reactive rather than proactive guest care",
          "No system to prevent negative reviews"
        ],
        afterBenefits: [
          "Proactive guest outreach and check-ins",
          "24/7 instant issue resolution",
          "Host can manage remotely while staying home",
          "Higher percentage of positive reviews through attentive care"
        ],
        beforeEmotion: "Neglected, frustrated, disappointed",
        afterEmotion: "Cared for, valued, delighted"
      }
    },
    'generative-ai-for-creative-briefs': {
      type: 'ai',
      title: "Generative AI for Creative Briefs",
      status: "Concept Proposal",
      timeline: "2023",
      role: "Product Manager",
      team: "Concept stage - PM research and validation",
      image: "✨",
      overview: "Championed a concept to integrate OpenAI's generative AI into our newly developed rich text editor. The feature was designed to allow users to autogenerate robust campaign directions and descriptions from simple prompts, dramatically reducing the manual effort required to create detailed project briefs and aligning our product with emerging AI trends in the industry.",
      challenge: {
        title: "The Creative Brief Challenge",
        description: "Users were spending significant time manually creating detailed campaign briefs and project descriptions. The newly developed rich text editor was underutilized, and we needed features that would drive adoption. Competitive analysis showed that similar AI-powered content generation features in tools like Asana and ClickUp were becoming table stakes for productivity platforms."
      },
      solution: {
        title: "AI-Enhanced Content Creation",
        description: "I proposed integrating OpenAI's API directly into our rich text editor to enable intelligent content generation. The concept involved allowing users to input simple prompts or bullet points, which would then be expanded into comprehensive campaign briefs, project descriptions, and creative directions. The feature would leverage contextual understanding to generate relevant, brand-appropriate content while maintaining user control over the output."
      },
      results: {
        title: "Potential Impact & Business Case",
        metrics: [
          {
            metric: "Brief Creation Time",
            before: "Current Manual Process",
            after: "40% Reduction",
            improvement: "-40% Time",
            icon: TrendingUp
          },
          {
            metric: "Editor Adoption",
            before: "Low Usage",
            after: "Increased Adoption",
            improvement: "Feature Driver",
            icon: Target
          },
          {
            metric: "Competitive Position",
            before: "Behind Competitors",
            after: "Competitive Parity",
            improvement: "Market Alignment",
            icon: Users
          }
        ]
      },
      technologies: ["OpenAI API", "Generative AI"],
      learnings: {
        title: "AI Strategy Insights",
        insights: [
          {
            title: "AI Features Need Strategic Positioning",
            description: "Successfully proposing AI features requires demonstrating clear business value beyond just technical capability. The concept needed to show how AI would drive adoption of existing underutilized features while addressing real user pain points."
          },
          {
            title: "Competitive Intelligence Drives Innovation",
            description: "Monitoring competitive AI implementations was crucial for positioning our concept. Understanding how other platforms were integrating AI helped build the business case for staying competitive in the rapidly evolving productivity tools landscape."
          }
        ]
      },
      userJourney: {
        beforeSteps: [
          {
            step: 1,
            title: "New Project",
            description: "User starts new campaign project",
            icon: FileText
          },
          {
            step: 2,
            title: "Brainstorm Content",
            description: "Manual brainstorming and research",
            icon: AlertTriangle
          },
          {
            step: 3,
            title: "Write Manually",
            description: "Time-intensive manual brief writing",
            icon: PenTool
          },
          {
            step: 4,
            title: "Review and Edit",
            description: "Multiple revision cycles and refinements",
            icon: FileText
          }
        ],
        afterSteps: [
          {
            step: 1,
            title: "New Project",
            description: "User starts new campaign project",
            icon: FileText
          },
          {
            step: 2,
            title: "Input Prompt",
            description: "Enter simple bullet points or ideas",
            icon: PenTool
          },
          {
            step: 3,
            title: "AI Generates Content",
            description: "AI creates comprehensive brief instantly",
            icon: Zap
          },
          {
            step: 4,
            title: "Quick Review",
            description: "Light editing and customization",
            icon: CheckCircle
          }
        ],
        beforePainPoints: [
          "Time-intensive manual writing",
          "Creative block and blank page syndrome",
          "Inconsistent brief quality"
        ],
        afterBenefits: [
          "40% faster brief creation",
          "AI-assisted creative inspiration",
          "Consistent, comprehensive output"
        ],
        beforeEmotion: "Overwhelmed, creatively blocked",
        afterEmotion: "Inspired, efficient, confident"
      }
    }
  };

  const getCurrentProject = () => {
    if (!projectSlug) return null;
    return projectData[projectSlug as keyof typeof projectData] || null;
  };

  const project = getCurrentProject();

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The requested case study could not be found.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status?: string) => {
    if (!status) return '';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-100 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Portfolio</span>
          </button>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl sm:text-5xl">{project.image || '🚀'}</div>
                <div>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                    {project.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 space-y-1 sm:space-y-0">
                    <span className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm sm:text-base">{project.timeline}</span>
                    </span>
                    {project.company && <span className="text-sm sm:text-base">at {project.company}</span>}
                    {project.status && (
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-8">
                {project.overview}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                {project.discovery && (
                  <button
                    onClick={() => scrollToSection('discovery')}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    View Discovery
                  </button>
                )}
                <button
                  onClick={() => scrollToSection('challenge')}
                  className="border-2 border-gray-300 hover:border-teal-500 text-gray-600 hover:text-teal-700 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 text-sm sm:text-base"
                >
                  See Challenge
                </button>
                <button
                  onClick={() => scrollToSection('results')}
                  className="border-2 border-gray-300 hover:border-teal-500 text-gray-600 hover:text-teal-700 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 text-sm sm:text-base"
                >
                  View Results
                </button>
              </div>
            </div>

            {/* Project Details Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 lg:sticky lg:top-24">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-500 mb-1">Role</div>
                    <div className="text-sm sm:text-base font-medium text-slate-800">{project.role}</div>
                  </div>
                  
                  {project.duration && (
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-1">Duration</div>
                      <div className="text-sm sm:text-base font-medium text-slate-800">{project.duration}</div>
                    </div>
                  )}
                  
                  <div>
                    <div className="text-xs sm:text-sm text-slate-500 mb-1">Team Size</div>
                    <div className="text-sm sm:text-base font-medium text-slate-800">{project.team}</div>
                  </div>

                  {project.category && (
                    <div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-1">Category</div>
                      <div className="text-sm sm:text-base font-medium text-slate-800">{project.category}</div>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <div className="text-xs sm:text-sm text-slate-500 mb-2">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      {project.discovery && (
        <section id="discovery" className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <Lightbulb className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-slate-800">{project.discovery.title}</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-teal-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {project.discovery.description}
              </p>

              {project.discovery.methodology && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Research Methodology</h3>
                  <ul className="space-y-3">
                    {project.discovery.methodology.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Competitive Analysis Section */}
      {project.competitiveAnalysis && (
        <section id="competitive-analysis" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <Scale className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-800">{project.competitiveAnalysis.title}</h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>Strategic Choice:</strong> {project.competitiveAnalysis.strategicChoice}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Competitor</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Their Strength</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Their Weakness</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.competitiveAnalysis.competitors.map((comp: any, idx: number) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-semibold text-slate-800">{comp.name}</td>
                        <td className="px-4 py-3 text-slate-600">{comp.strength}</td>
                        <td className="px-4 py-3 text-red-600">{comp.weakness}</td>
                        <td className="px-4 py-3 text-teal-700 font-medium">{comp.ourAdvantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge Section */}
      <section id="challenge" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold text-slate-800">{project.challenge.title}</h2>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
            <p className="text-lg text-slate-700 leading-relaxed">
              {project.challenge.description}
            </p>
          </div>
        </div>
      </section>

      {/* User Journey Diagram Section */}
      <section id="user-journey" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">User Journey Transformation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A visual comparison showing how we transformed the user experience from frustrating manual processes 
              to seamless integrated workflows.
            </p>
          </div>
          
          <JourneyDiagram
            beforeSteps={project.userJourney.beforeSteps}
            afterSteps={project.userJourney.afterSteps}
            beforePainPoints={project.userJourney.beforePainPoints}
            afterBenefits={project.userJourney.afterBenefits}
            beforeEmotion={project.userJourney.beforeEmotion}
            afterEmotion={project.userJourney.afterEmotion}
          />
        </div>
      </section>

      {/* Strategic Decisions Section */}
      {project.strategicDecisions && (
        <section id="strategic-decisions" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <GitBranch className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-800">{project.strategicDecisions.title}</h2>
            </div>

            <div className="mb-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                {project.strategicDecisions.description}
              </p>
            </div>

            {/* Trade-off Decision Cards */}
            {project.strategicDecisions.decisions && (
              <div className="space-y-6 mb-8">
                {project.strategicDecisions.decisions.map((decision: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-blue-200">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{decision.decision}</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                          <div className="text-sm font-semibold text-teal-700 mb-1">✓ What We Built</div>
                          <p className="text-slate-700">{decision.chosen}</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                          <div className="text-sm font-semibold text-red-700 mb-1">✗ What We Rejected</div>
                          <p className="text-slate-700">{decision.rejected}</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg mb-3">
                        <div className="text-sm font-semibold text-blue-700 mb-2">Rationale</div>
                        <p className="text-slate-700">{decision.rationale}</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="text-sm font-semibold text-orange-700 mb-1">Risk Accepted</div>
                        <p className="text-slate-700">{decision.risk}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* What We Didn't Build */}
            {project.strategicDecisions.whatWeDidntBuild && (
              <div className="bg-slate-800 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  What We Didn't Build (And Why)
                </h3>
                <ul className="space-y-2">
                  {project.strategicDecisions.whatWeDidntBuild.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-slate-400 mt-1">•</span>
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-slate-800">{project.solution.title}</h2>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200">
            <p className="text-lg text-slate-600 leading-relaxed">
              {project.solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-teal-400" />
            <h2 className="text-3xl font-bold">{project.results.title}</h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-teal-400" />
                  <span className="text-2xl font-bold text-teal-400">{metric.improvement}</span>
                </div>
                <h4 className="font-semibold mb-2">{metric.metric}</h4>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <span>{metric.before}</span>
                  <span>→</span>
                  <span className="text-teal-400 font-medium">{metric.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {project.challengesAndSetbacks && (
        <section id="challenges" className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-slate-800">{project.challengesAndSetbacks.title}</h2>
            </div>

            <div className="space-y-6">
              {project.challengesAndSetbacks.challenges.map((item: any, idx: number) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-3">{item.challenge}</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Impact</div>
                      <p className="text-slate-600">{item.impact}</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Resolution</div>
                      <p className="text-slate-600">{item.resolution}</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                      <div className="text-sm font-semibold text-teal-700 mb-1">Key Learning</div>
                      <p className="text-slate-700">{item.learning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learnings Section */}
      <section id="learnings" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">{project.learnings.title}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {project.learnings.insights.map((learning, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{learning.title}</h3>
                <p className="text-slate-600 leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Learning More?</h2>
          <p className="text-xl text-teal-100 mb-8">
            I'd love to discuss this project in detail and share more insights about my approach and methodology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;