/**
 * Projects Data
 * 
 * Defines sample/demo projects showcased on the portfolio.
 * To add real projects:
 *  - Update title, description, tags, and category
 *  - Set liveUrl and githubUrl to your actual links
 *  - Remove or change the status badge as appropriate
 * 
 * NOTE: If liveUrl or githubUrl is undefined/empty, the button will be automatically hidden.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: "Websites" | "Web Applications" | "Frontend & UI";
  status: "Demo Project" | "Concept Project";
  shortDescription: string;
  fullDescription: string;
  techTags: string[];
  keyFeatures: string[];
  mockupType: "business" | "tasks" | "ecommerce" | "portfolio" | "dashboard" | "booking";
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "business-website",
    title: "Business Website",
    category: "Websites",
    status: "Demo Project",
    shortDescription: "A responsive website designed for a modern small business or agency.",
    fullDescription:
      "A complete multi-section business website focusing on fast load times, clear service presentation, customer testimonials, and an accessible consultation booking flow. Engineered with semantic HTML and tailored CSS layout systems.",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    keyFeatures: [
      "Mobile-first responsive architecture",
      "Dynamic service cards with interactive hover effects",
      "Lead generation contact form with validation",
      "Optimized assets and fast Core Web Vitals"
    ],
    mockupType: "business",
    demoUrl: undefined, // Hidden until owner connects live link
    githubUrl: undefined, // Hidden until owner connects repository
    metrics: "100% Mobile Optimized"
  },
  {
    id: "task-manager-app",
    title: "Task Manager App",
    category: "Web Applications",
    status: "Demo Project",
    shortDescription: "An interactive interface for organizing daily tasks and tracking project milestones.",
    fullDescription:
      "A productivity web application featuring clean task categorization, priority filtering, completion states, and responsive status indicators. Built with modular component architecture and local state persistence.",
    techTags: ["React", "JavaScript", "CSS Modules", "State Management"],
    keyFeatures: [
      "Interactive task status toggling (Todo / In Progress / Done)",
      "Priority badges and deadline countdowns",
      "Clean filtering by category and tag",
      "Keyboard accessible input controls"
    ],
    mockupType: "tasks",
    demoUrl: undefined,
    githubUrl: undefined,
    metrics: "Interactive State"
  },
  {
    id: "ecommerce-ui",
    title: "E-commerce Storefront UI",
    category: "Frontend & UI",
    status: "Concept Project",
    shortDescription: "A storefront interface with dynamic product cards, filter drawer, and interactive cart demo.",
    fullDescription:
      "A modern digital retail interface showcasing catalog grids, responsive filter drawers, price calculations, quantity adjustments, and modal checkout demonstrations. Designed with high-contrast aesthetics and micro-interactions.",
    techTags: ["React", "TypeScript", "Tailwind CSS", "UX Design"],
    keyFeatures: [
      "Dynamic product grid with responsive breakpoints",
      "Interactive slide-out shopping cart drawer",
      "Category and price range filtering",
      "Accessible modal checkout simulation"
    ],
    mockupType: "ecommerce",
    demoUrl: undefined,
    githubUrl: undefined,
    metrics: "Component Driven"
  },
  {
    id: "dashboard-application",
    title: "Analytics Dashboard Application",
    category: "Web Applications",
    status: "Demo Project",
    shortDescription: "A data visualization dashboard featuring sample metric cards, activity feeds, and charts.",
    fullDescription:
      "An operations and analytics console providing high-level KPIs, activity feeds, user engagement charts, and filterable system status tables. Built with reusable modular cards and clean dark-mode visuals.",
    techTags: ["React", "TypeScript", "Data Visualization", "REST APIs"],
    keyFeatures: [
      "Real-time metric summary indicators with trend percentages",
      "SVG-based interactive activity graphs",
      "Recent activity logs with status pills",
      "Collapsible navigation sidebar for compact screens"
    ],
    mockupType: "dashboard",
    demoUrl: undefined,
    githubUrl: undefined,
    metrics: "KPI Analytics"
  },
  {
    id: "personal-portfolio-template",
    title: "Personal Portfolio Template",
    category: "Websites",
    status: "Demo Project",
    shortDescription: "A modern developer portfolio template with dark mode, glowing accents, and smooth transitions.",
    fullDescription:
      "A fast, responsive portfolio architecture designed for software engineers and creators. Features semantic section anchors, project showcase filtering, accessible contact modal, and zero-dependency performance.",
    techTags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Smooth section scrolling with active navigation tracker",
      "Developer-themed hero with interactive code playground",
      "Strict accessibility standards (WCAG AAA contrast)",
      "Single-file configuration for instant customization"
    ],
    mockupType: "portfolio",
    demoUrl: undefined,
    githubUrl: undefined,
    metrics: "Fast Performance"
  },
  {
    id: "booking-web-app",
    title: "Booking Web App",
    category: "Web Applications",
    status: "Concept Project",
    shortDescription: "A sample appointment booking interface with step-by-step form and confirmation state.",
    fullDescription:
      "A multi-step scheduling application that guides visitors through service selection, date & time slot picking, contact information input, and an instant booking summary confirmation screen.",
    techTags: ["React", "TypeScript", "Form Validation", "Tailwind CSS"],
    keyFeatures: [
      "Guided multi-step appointment scheduler",
      "Calendar date picker & dynamic time slot pills",
      "Comprehensive field validation & error warnings",
      "Interactive booking confirmation receipt state"
    ],
    mockupType: "booking",
    demoUrl: undefined,
    githubUrl: undefined,
    metrics: "Multi-Step Flow"
  }
];

export const projectCategories = [
  "All Projects",
  "Websites",
  "Web Applications",
  "Frontend & UI"
] as const;
