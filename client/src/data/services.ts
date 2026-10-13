/**
 * Services Data
 * 
 * Defines the professional services offered by Tekeste Teklehaymanot.
 * Each service includes a title, description, key deliverables, icon identifier,
 * and a pre-filled subject code for the contact form.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-dev",
    title: "Website Development",
    shortDescription: "Modern, responsive business websites and personal portfolios.",
    fullDescription:
      "Crafting fast, search-optimized, and fully responsive websites tailored to represent your brand, captivate visitors, and convert leads across desktop and mobile screens.",
    iconName: "Globe",
    deliverables: [
      "Custom responsive layouts",
      "SEO best practices & meta tags",
      "Fast page load & performance",
      "Cross-browser compatibility"
    ],
    badge: "Core Service"
  },
  {
    id: "web-app-dev",
    title: "Web Application Development",
    shortDescription: "Interactive applications with useful workflows and features.",
    fullDescription:
      "Building feature-rich, dynamic single-page web applications with structured state management, responsive UI components, and smooth data workflows.",
    iconName: "Laptop",
    deliverables: [
      "Interactive dashboard interfaces",
      "State management & routing",
      "Form validation & data handling",
      "RESTful API integration ready"
    ],
    badge: "Full-Stack Ready"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription: "Software tailored to specific needs and business processes.",
    fullDescription:
      "Developing targeted digital tools and software solutions designed around practical requirements, operational efficiency, and scalable clean code principles.",
    iconName: "Code",
    deliverables: [
      "Custom business logic & tools",
      "Modular & maintainable codebase",
      "Structured data models",
      "Thorough testing & documentation"
    ]
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    shortDescription: "Accessible, responsive, attractive user interfaces.",
    fullDescription:
      "Transforming concepts and mockups into pixel-perfect, accessible (a11y) interfaces with smooth transitions, modern typography, and delightful micro-interactions.",
    iconName: "Layers",
    deliverables: [
      "Accessible semantic HTML5",
      "Modern Tailwind CSS & vanilla CSS",
      "Fluid animations & micro-interactions",
      "Reusable component design systems"
    ]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    shortDescription: "Improve the design, usability, and mobile experience of existing websites.",
    fullDescription:
      "Refreshing outdated websites with modern aesthetics, elevated typography, responsive mobile UX, and streamlined navigation structures.",
    iconName: "Sparkles",
    deliverables: [
      "Modern visual facelift",
      "Mobile-first UX overhaul",
      "Improved visual hierarchy",
      "Accessibility & contrast fixes"
    ]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDescription: "Updates, bug fixes, and performance improvements.",
    fullDescription:
      "Providing dependable ongoing technical care, dependency updates, speed optimization, and prompt troubleshooting so your digital presence stays reliable.",
    iconName: "Cpu",
    deliverables: [
      "Core updates & security patches",
      "Bug fixes & cross-device checks",
      "Performance & asset optimization",
      "Technical guidance & support"
    ]
  }
];
