// No JSX here — icon names are resolved to Lucide components in the render layer

export interface ProductTheme {
  iconBg: string;
  iconText: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  stepBg: string;
  glow: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductBenefit {
  iconName: string;
  title: string;
  description: string;
}

export interface ProductImpact {
  title: string;
  before: string;
  after: string;
}

export interface ProductPricing {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export interface Product {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  shortDescription: string;
  platforms: string[];
  comingSoon?: boolean;
  theme: ProductTheme;
  heroDescription: string;
  howItWorks: ProductStep[];
  benefits: ProductBenefit[];
  businessImpact: {
    title: string;
    description: string;
    impacts: ProductImpact[];
  };
  features: string[];
  pricing: ProductPricing[];
  idealFor: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "viora",
    iconName: "BarChart2",
    title: "Viora",
    tagline: "AI-Powered Analytics Dashboard",
    category: "Business Intelligence",
    description:
      "Transform your business data into actionable insights with AI-powered analytics. Enter daily data in familiar Excel-like tables, visualize trends with interactive graphs, and get personalized AI suggestions — all while keeping your data completely secure and private.",
    shortDescription: "AI analytics with secure data and personalized insights",
    platforms: ["Web Application", "Mobile App"],
    theme: {
      iconBg: "bg-purple-500/15",
      iconText: "text-purple-400",
      badgeBg: "bg-purple-500/12",
      badgeText: "text-purple-300",
      badgeBorder: "border-purple-500/20",
      stepBg: "bg-purple-500/15 text-purple-300",
      glow: "rgba(168,85,247,0.18)",
    },
    heroDescription:
      "Viora combines powerful analytics with cutting-edge AI to give you personalized business insights. Enter your daily data in intuitive Excel-like tables, visualize everything with comprehensive dashboards, and let our AI guide your decisions — with complete privacy guaranteed. Your data is yours alone; we never use it to train our models.",
    howItWorks: [
      {
        step: 1,
        title: "Enter Your Daily Data",
        description:
          "Create multiple Excel-like tables within our app to organize your daily business data. Simple, familiar interface — just like working with spreadsheets.",
      },
      {
        step: 2,
        title: "Visualize with Rich Graphs",
        description:
          "Instantly transform your data into stunning visualizations. Choose from 20+ interactive chart types — line, bar, pie, heatmaps, scatter plots, and more.",
      },
      {
        step: 3,
        title: "Get AI-Powered Insights",
        description:
          "Our integrated AI analyzes your data patterns and provides personalized suggestions tailored specifically to your business. Discover trends and opportunities you might have missed.",
      },
      {
        step: 4,
        title: "Your Data, Your Privacy",
        description:
          "Rest easy knowing your data is completely secure. We implement bank-level encryption and never use your data to train our AI models.",
      },
    ],
    benefits: [
      {
        iconName: "BrainCircuit",
        title: "AI-Powered Suggestions",
        description:
          "Get personalized, intelligent recommendations based on your unique data patterns. Our AI analyzes trends and provides actionable insights tailored to your business.",
      },
      {
        iconName: "BarChart2",
        title: "Wide Range of Graphs",
        description:
          "Visualize your data with 20+ professional chart types — line, bar, pie, scatter, heatmaps, funnel charts, and advanced statistical graphs.",
      },
      {
        iconName: "Table2",
        title: "Excel-Like Data Entry",
        description:
          "Familiar spreadsheet interface within our app. Create multiple tables for different data types. As easy as Excel but more powerful with integrated analytics.",
      },
      {
        iconName: "ShieldCheck",
        title: "100% Data Privacy",
        description:
          "Your data is encrypted and completely private. We never use your business data to train our AI models. Bank-level security keeps your information confidential.",
      },
      {
        iconName: "Activity",
        title: "Real-Time Analytics",
        description:
          "Watch your dashboards update instantly as you enter data. Multiple custom dashboards for different business aspects, all updating in real-time.",
      },
    ],
    businessImpact: {
      title: "How Viora Transforms Decision Making",
      description:
        "Viora combines powerful analytics with AI intelligence to turn your daily data into clear, actionable insights. Make confident, data-driven decisions while maintaining complete data privacy.",
      impacts: [
        {
          title: "From Manual Analysis to AI Insights",
          before: "Hours analyzing data manually, missing hidden patterns",
          after: "AI-powered suggestions highlight trends and opportunities automatically",
        },
        {
          title: "Excel to Intelligent Dashboard",
          before: "Static Excel files with manual chart creation",
          after: "Dynamic dashboards with interactive graphs updating in real-time",
        },
        {
          title: "Scattered Data to Centralized Hub",
          before: "Multiple spreadsheets, manual data entry, version conflicts",
          after: "Unified Excel-like tables in the app, all data in one secure place",
        },
        {
          title: "Data Security & Privacy",
          before: "Concerns about data privacy and cloud security",
          after: "Bank-level encryption, guaranteed privacy, never used for AI training",
        },
      ],
    },
    features: [
      "AI-Powered Personalized Suggestions",
      "Multiple Excel-Like Data Tables",
      "Wide Range of Interactive Graphs (20+ Types)",
      "Real-Time Analytics Dashboards",
      "Bank-Level Data Encryption",
      "100% Data Privacy",
      "Daily Data Entry Interface",
      "Custom Formulas & Calculations",
      "Automated Trend Analysis",
      "Anomaly Detection & Alerts",
      "Excel Import/Export",
      "Role-Based Access Control",
      "Multi-Dashboard Support",
      "Mobile & Web Access",
      "Data Backup & Version History",
    ],
    pricing: [
      {
        name: "Starter",
        description: "For small teams and startups",
        price: "₹7,999/month",
        features: [
          "Up to 10 data tables",
          "5 custom dashboards",
          "Basic visualizations",
          "5 team members",
          "Excel import/export",
          "Email support",
        ],
      },
      {
        name: "Professional",
        description: "For growing businesses",
        price: "₹17,999/month",
        features: [
          "Unlimited data tables",
          "Unlimited dashboards",
          "All visualization types",
          "20 team members",
          "Advanced formulas",
          "API access",
          "Priority support",
          "Custom branding",
        ],
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom Pricing",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom integrations",
          "Dedicated account manager",
          "White-label solution",
          "On-premise deployment",
          "Custom training",
        ],
      },
    ],
    idealFor: [
      "Sales Teams",
      "Finance Departments",
      "Marketing Agencies",
      "Retail Businesses",
      "Manufacturing Units",
      "Service Companies",
      "Startups & SMEs",
      "E-commerce Businesses",
    ],
    images: [
      "/assets/why-us/data-analytics.jpg",
      "/assets/why-us/digital-marketing.jpg",
      "/assets/why-us/ai-workspace.jpg",
    ],
  },
  {
    id: "metamart",
    iconName: "ShoppingCart",
    title: "MetaMart",
    tagline: "QR E-Commerce Revolution",
    category: "E-Commerce Solution",
    description:
      "Transform your traditional retail business into a modern QR-based e-commerce platform. Seamlessly bridge the gap between physical and digital commerce.",
    shortDescription: "QR-based e-commerce platform for modern retail",
    platforms: ["Mobile App", "Web Application"],
    theme: {
      iconBg: "bg-blue-500/15",
      iconText: "text-blue-400",
      badgeBg: "bg-blue-500/12",
      badgeText: "text-blue-300",
      badgeBorder: "border-blue-500/20",
      stepBg: "bg-blue-500/15 text-blue-300",
      glow: "rgba(59,130,246,0.18)",
    },
    heroDescription:
      "MetaMart revolutionizes how traditional retailers operate by providing a comprehensive QR-based e-commerce solution. Enable your customers to browse, order, and pay seamlessly using just their smartphones.",
    howItWorks: [
      {
        step: 1,
        title: "Easy QR Integration",
        description:
          "Generate unique QR codes for your products, store, or catalog. Place them anywhere — on products, store windows, or marketing materials.",
      },
      {
        step: 2,
        title: "Customer Scans & Browses",
        description:
          "Customers simply scan the QR code with their phone to instantly access your digital catalog, view products, prices, and detailed information.",
      },
      {
        step: 3,
        title: "Seamless Ordering",
        description:
          "Customers can add items to cart, customize orders, and place them directly through the mobile interface without any app installation required.",
      },
      {
        step: 4,
        title: "Smart Payment & Fulfillment",
        description:
          "Integrated payment gateway processes transactions securely. Get instant notifications and manage orders through your admin dashboard.",
      },
    ],
    benefits: [
      {
        iconName: "Users",
        title: "Zero Entry Barrier",
        description:
          "Customers don't need to download any app. Just scan and start shopping instantly — no friction, maximum conversions.",
      },
      {
        iconName: "ShoppingCart",
        title: "Expand Your Reach",
        description:
          "Serve customers beyond physical store boundaries. Enable online ordering with offline pickup or home delivery.",
      },
      {
        iconName: "BarChart2",
        title: "Real-Time Analytics",
        description:
          "Track sales, customer behavior, popular products, and inventory in real-time through comprehensive dashboards.",
      },
      {
        iconName: "Smartphone",
        title: "Mobile-First Experience",
        description:
          "Optimized for mobile devices ensuring smooth browsing and checkout experience for your customers.",
      },
      {
        iconName: "Globe",
        title: "Digital Presence",
        description:
          "Establish your online presence without the complexity of traditional e-commerce setup.",
      },
    ],
    businessImpact: {
      title: "How MetaMart Transforms Your Business",
      description:
        "MetaMart bridges the gap between traditional retail and modern digital commerce, helping businesses adapt to changing consumer behaviors without losing their local charm.",
      impacts: [
        {
          title: "From Local to Digital",
          before: "Limited to foot traffic and word-of-mouth",
          after: "Reach customers across your city with a digital presence",
        },
        {
          title: "Simplified Operations",
          before: "Manual order taking, prone to errors",
          after: "Automated digital orders, reduced errors, better efficiency",
        },
        {
          title: "Customer Convenience",
          before: "Customers must visit store or call to order",
          after: "Browse, order, and pay anytime from anywhere",
        },
        {
          title: "Data-Driven Decisions",
          before: "Gut-feeling based inventory and pricing",
          after: "Analytics-driven insights for better business decisions",
        },
      ],
    },
    features: [
      "QR Code Generation & Management",
      "Digital Product Catalog",
      "Real-time Inventory Management",
      "Multiple Payment Gateway Integration",
      "Order Management System",
      "Customer Notifications (SMS/Email)",
      "Admin Dashboard (Web & Mobile)",
      "Sales Analytics & Reports",
      "Multi-store Support",
      "Delivery Management",
      "Customer Reviews & Ratings",
      "Promotional Tools & Discounts",
    ],
    pricing: [
      {
        name: "Starter",
        description: "Perfect for small retail stores",
        price: "₹9,999/month",
        features: [
          "Up to 100 products",
          "Single store location",
          "Basic analytics",
          "QR code generation",
          "Mobile + Web access",
        ],
      },
      {
        name: "Business",
        description: "Ideal for growing businesses",
        price: "₹19,999/month",
        features: [
          "Up to 1,000 products",
          "Up to 5 store locations",
          "Advanced analytics",
          "Custom branding",
          "Priority support",
          "Marketing tools",
        ],
      },
      {
        name: "Enterprise",
        description: "For large retail chains",
        price: "Custom Pricing",
        features: [
          "Unlimited products",
          "Unlimited stores",
          "Custom integrations",
          "Dedicated support",
          "White-label solution",
          "API access",
        ],
      },
    ],
    idealFor: [
      "Retail Stores",
      "Restaurants & Cafes",
      "Grocery Shops",
      "Fashion Boutiques",
      "Electronics Stores",
      "Pharmacies",
      "Bookstores",
      "Home Decor Shops",
    ],
    images: [
      "/assets/why-us/digital-marketing.jpg",
      "/assets/why-us/team-collab.jpg",
      "/assets/why-us/data-analytics.jpg",
    ],
  },
  // ── E-School Management (disabled / commented out) ─────────────────────────
  // {
  //   id: "eschool-management",
  //   title: "E-School Management",
  //   tagline: "Smart School Operations",
  //   category: "Education Technology",
  //   ... (disabled — retained for future use)
  // },

  // ── VibeCreate — AI Poster & Promo Video Studio ──────────────────────────────
  {
    id: "vibecreate",
    iconName: "Sparkles",
    title: "VibeCreate",
    tagline: "AI Posters & Promo Videos in Minutes",
    category: "Creative Technology",
    description:
      "Create scroll-stopping posters and promotional videos in minutes — no design skills needed. VibeCreate's AI engine generates brand-consistent creatives tailored to your campaign, platform, and audience.",
    shortDescription: "AI-powered poster design and promotional video creation for brands",
    platforms: ["Mobile App", "Web Application"],
    theme: {
      iconBg: "bg-rose-500/15",
      iconText: "text-rose-400",
      badgeBg: "bg-rose-500/12",
      badgeText: "text-rose-300",
      badgeBorder: "border-rose-500/20",
      stepBg: "bg-rose-500/15 text-rose-300",
      glow: "rgba(244,63,94,0.18)",
    },
    heroDescription:
      "VibeCreate is the AI-first creative studio built for modern brands. From a single brief, our engine generates stunning promotional posters and short-form promo videos — fully branded, platform-ready, and exportable in seconds. Skip the agency. Skip the bottleneck. Publish at the speed of your ideas.",
    howItWorks: [
      {
        step: 1,
        title: "Set Your Brand Kit",
        description:
          "Upload your logo, brand colours, fonts, and tone of voice once. VibeCreate auto-applies them across every creative you generate.",
      },
      {
        step: 2,
        title: "Describe Your Campaign",
        description:
          "Tell the AI what you need — a product launch poster, a Diwali sale reel, a brand awareness video. The more detail you give, the sharper the output.",
      },
      {
        step: 3,
        title: "AI Generates Your Creatives",
        description:
          "In seconds, receive multiple poster variants and a promotional video clip, all on-brand and sized for every platform — Instagram, Facebook, YouTube, WhatsApp.",
      },
      {
        step: 4,
        title: "Customise & Publish",
        description:
          "Tweak text, swap visuals, adjust colours using our drag-and-drop editor. Export in HD or push directly to your social channels.",
      },
    ],
    benefits: [
      {
        iconName: "Sparkles",
        title: "AI Design Engine",
        description:
          "Generate dozens of professional poster and video variants from a single brief. Our model is trained on high-converting ad creative, not just stock imagery.",
      },
      {
        iconName: "Video",
        title: "Promotional Video Creator",
        description:
          "Turn product photos and copy into engaging 15–60 second promo reels with AI-generated motion, transitions, and background music.",
      },
      {
        iconName: "Palette",
        title: "Brand Consistency at Scale",
        description:
          "Your brand kit lives in the cloud. Every creative — poster or video — automatically uses your exact colours, fonts, and logo placement.",
      },
      {
        iconName: "Globe",
        title: "Multi-Platform Formats",
        description:
          "One click exports your creative in every size — Square, Story, Landscape, Banner — ready for Instagram, Facebook, Google Ads, and more.",
      },
      {
        iconName: "Zap",
        title: "10× Faster Than an Agency",
        description:
          "What takes an agency two weeks takes VibeCreate two minutes. Iterate freely, test variants, and ship campaigns at the speed of your market.",
      },
    ],
    businessImpact: {
      title: "How VibeCreate Transforms Your Marketing",
      description:
        "Stop waiting weeks for design deliverables. VibeCreate puts a full AI creative studio in your pocket — so every campaign is fast, beautiful, and on-brand.",
      impacts: [
        {
          title: "Campaign Turnaround",
          before: "2–4 weeks waiting for an agency or freelancer",
          after: "Posters and videos ready in under 5 minutes",
        },
        {
          title: "Creative Cost",
          before: "₹20,000–₹80,000 per campaign for design + video",
          after: "Unlimited creatives from ₹2,999/month",
        },
        {
          title: "Brand Consistency",
          before: "Inconsistent styles across platforms and campaigns",
          after: "Every creative auto-branded — logo, fonts, colours locked in",
        },
        {
          title: "Content Volume",
          before: "3–5 assets per campaign, limited by agency bandwidth",
          after: "50+ variants per campaign — A/B test everything",
        },
      ],
    },
    features: [
      "AI Poster Generation (500+ Templates)",
      "Promotional Video Creator (15s–60s Reels)",
      "Brand Kit — Logo, Colours, Fonts",
      "Drag-and-Drop Creative Editor",
      "Multi-Platform Size Export",
      "AI Copywriting for Ad Headlines & CTAs",
      "Batch Creative Generation",
      "Background Music Library",
      "Product Photo Enhancement",
      "Social Media Direct Publish",
      "HD & 4K Export",
      "Campaign Folder Management",
      "Team Collaboration & Approvals",
      "Performance Analytics (CTR, Reach)",
      "White-Label Agency Mode",
      "API Access for Automation",
    ],
    pricing: [
      {
        name: "Creator",
        description: "For solopreneurs & small brands",
        price: "₹2,999/month",
        features: [
          "50 AI poster generations/month",
          "10 promo video clips/month",
          "1 brand kit",
          "All platform export sizes",
          "HD export",
          "Email support",
        ],
      },
      {
        name: "Business",
        description: "For growing marketing teams",
        price: "₹8,999/month",
        features: [
          "Unlimited poster generations",
          "50 promo videos/month",
          "5 brand kits",
          "AI copywriting",
          "Team collaboration (5 seats)",
          "Direct social publish",
          "Priority support",
          "4K export",
        ],
      },
      {
        name: "Agency",
        description: "For creative agencies & enterprises",
        price: "₹19,999/month",
        features: [
          "Unlimited everything",
          "Unlimited brand kits",
          "White-label mode",
          "API access",
          "Client workspaces",
          "Dedicated account manager",
          "Custom template creation",
          "SLA guarantee",
        ],
      },
    ],
    idealFor: [
      "D2C Brands",
      "Marketing Teams",
      "Social Media Managers",
      "E-commerce Sellers",
      "Real Estate Agencies",
      "Restaurants & Cafes",
      "Event Organisers",
      "Creative Agencies",
    ],
    images: [
      "/assets/why-us/digital-marketing.jpg",
      "/assets/why-us/ai-workspace.jpg",
      "/assets/why-us/data-analytics.jpg",
    ],
  },
  {
    id: "growthengine",
    iconName: "Building2",
    title: "GrowthEngine",
    tagline: "Scale Your Business Intelligently",
    category: "Business Operations",
    description:
      "The all-in-one business operations platform designed for scaling companies. Automate workflows, manage leads, streamline operations, and grow your business systematically with data-driven strategies.",
    shortDescription: "Complete business operations and growth platform",
    platforms: ["Web Application", "Mobile App"],
    comingSoon: true,
    theme: {
      iconBg: "bg-emerald-500/15",
      iconText: "text-emerald-400",
      badgeBg: "bg-emerald-500/12",
      badgeText: "text-emerald-300",
      badgeBorder: "border-emerald-500/20",
      stepBg: "bg-emerald-500/15 text-emerald-300",
      glow: "rgba(16,185,129,0.18)",
    },
    heroDescription:
      "GrowthEngine is the ultimate platform for businesses ready to scale. Combining lead management, workflow automation, team collaboration, and growth analytics in one powerful solution that adapts as you grow.",
    howItWorks: [
      {
        step: 1,
        title: "Centralize Operations",
        description:
          "Bring all your business operations under one roof. Manage leads, customers, projects, tasks, and team members from a single unified platform.",
      },
      {
        step: 2,
        title: "Automate Workflows",
        description:
          "Set up automated workflows for repetitive tasks. From lead nurturing to customer onboarding, automate processes that waste your team's time.",
      },
      {
        step: 3,
        title: "Track & Optimize",
        description:
          "Monitor key business metrics, sales pipelines, team performance, and growth indicators. Identify bottlenecks and optimize for efficiency.",
      },
      {
        step: 4,
        title: "Scale Confidently",
        description:
          "Use AI-powered insights and recommendations to make strategic decisions. Scale operations without proportionally increasing overhead.",
      },
    ],
    benefits: [
      {
        iconName: "Building2",
        title: "Complete Operations Hub",
        description:
          "Replace multiple tools with one comprehensive platform. CRM, project management, automation, and analytics all in one place.",
      },
      {
        iconName: "BarChart2",
        title: "Growth Analytics",
        description:
          "Track revenue, conversion rates, customer lifetime value, and other critical metrics. Make data-driven growth decisions.",
      },
      {
        iconName: "Users",
        title: "Lead & Pipeline Management",
        description:
          "Capture, nurture, and convert leads systematically. Visual pipeline management ensures no opportunity is missed.",
      },
      {
        iconName: "Zap",
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks, email sequences, follow-ups, and more. Free your team to focus on high-value activities.",
      },
      {
        iconName: "Globe",
        title: "Multi-Channel Integration",
        description:
          "Connect with your website, social media, email, WhatsApp, and other channels. Manage all customer touchpoints from one dashboard.",
      },
    ],
    businessImpact: {
      title: "How GrowthEngine Powers Business Scaling",
      description:
        "GrowthEngine eliminates the operational chaos that comes with growth, allowing businesses to scale systematically while maintaining quality and efficiency.",
      impacts: [
        {
          title: "Operational Efficiency",
          before: "Juggling multiple tools, manual processes, lost information",
          after: "Unified platform, automated workflows, centralized data",
        },
        {
          title: "Lead Management",
          before: "Scattered leads, missed follow-ups, lost opportunities",
          after: "Systematic lead nurturing, automated follow-ups, higher conversions",
        },
        {
          title: "Team Productivity",
          before: "Time wasted on repetitive tasks and coordination",
          after: "Automated processes, clear workflows, focused execution",
        },
        {
          title: "Strategic Growth",
          before: "Reactive decisions, unclear growth metrics",
          after: "Proactive strategies, clear analytics, predictable scaling",
        },
      ],
    },
    features: [
      "Lead & Pipeline Management",
      "Contact & Customer Database",
      "Workflow Automation Engine",
      "Task & Project Management",
      "Team Collaboration Tools",
      "Email Campaign Management",
      "WhatsApp Integration",
      "Sales Performance Analytics",
      "Revenue Forecasting",
      "Custom Reports & Dashboards",
      "Multi-Channel Communication",
      "Document Management",
      "Calendar & Scheduling",
      "Mobile App (iOS & Android)",
      "API & Integrations",
      "White-Label Options",
    ],
    pricing: [
      {
        name: "Growth",
        description: "For startups ready to scale",
        price: "₹19,999/month",
        features: [
          "Up to 10 users",
          "10,000 contacts",
          "Basic automation",
          "Lead management",
          "Project management",
          "Mobile access",
          "Email support",
        ],
      },
      {
        name: "Scale",
        description: "For expanding businesses",
        price: "₹39,999/month",
        features: [
          "Up to 50 users",
          "100,000 contacts",
          "Advanced automation",
          "All integrations",
          "Custom workflows",
          "Priority support",
          "Dedicated manager",
          "Custom training",
        ],
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom Pricing",
        features: [
          "Unlimited users",
          "Unlimited contacts",
          "Custom development",
          "White-label solution",
          "On-premise option",
          "24/7 support",
          "SLA guarantee",
          "Custom integrations",
        ],
      },
    ],
    idealFor: [
      "Growing Startups",
      "Sales Organizations",
      "Marketing Agencies",
      "Real Estate Businesses",
      "Consulting Firms",
      "B2B Companies",
      "Service Providers",
      "Product Companies",
    ],
    images: [
      "/assets/why-us/ai-workspace.jpg",
      "/assets/why-us/digital-marketing.jpg",
      "/assets/why-us/data-analytics.jpg",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
