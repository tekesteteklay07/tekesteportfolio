/**
 * Development Process Data
 * 
 * Outlines the structured four-step methodology Tekeste Teklehaymanot
 * follows from initial concept to launch and deployment.
 */

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Understand the idea, requirements, and goals.",
    description:
      "We begin with a focused conversation to clarify what you want to achieve. We outline the project goals, target audience, technical needs, and must-have functionality.",
    iconName: "Search",
    deliverables: [
      "Requirements gathering & goal definition",
      "Scope and audience identification",
      "Feature prioritization & milestone roadmap"
    ]
  },
  {
    number: "02",
    title: "Plan",
    tagline: "Define the structure, design, and implementation approach.",
    description:
      "Before writing code, we map out the solution architecture. This includes page layout structure, component hierarchy, user journeys, and selecting the right modern tech stack.",
    iconName: "Layers",
    deliverables: [
      "Information architecture & sitemap",
      "Wireframes and layout direction",
      "Tech stack & repository setup"
    ]
  },
  {
    number: "03",
    title: "Build",
    tagline: "Develop and test the solution.",
    description:
      "Bringing the design to life with clean, modular, accessible code. Development proceeds with continuous responsiveness checks, component testing, and performance attention.",
    iconName: "Code",
    deliverables: [
      "Clean, modular React/TypeScript implementation",
      "Mobile-first responsive styling",
      "Cross-browser testing & code reviews"
    ]
  },
  {
    number: "04",
    title: "Deliver",
    tagline: "Refine the result and provide deployment guidance.",
    description:
      "Final polish, accessibility validation, and performance audits. The project is deployed to production hosting (e.g., Vercel, Netlify) with complete handover instructions.",
    iconName: "Rocket",
    deliverables: [
      "Production build optimization & audit",
      "Hosting & domain deployment guidance",
      "Handover documentation & post-launch verification"
    ]
  }
];
