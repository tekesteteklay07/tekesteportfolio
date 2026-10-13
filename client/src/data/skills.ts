/**
 * Skills & Technologies Data
 * 
 * NOTE FOR OWNER:
 * These technologies are editable starting examples. Feel free to add, remove,
 * or modify any category or tool based on your actual experience.
 * 
 * (No artificial percentage ratings or fabricated claims are used here.)
 */

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Core languages and modern web libraries for building interfaces",
    iconName: "Code",
    skills: [
      { name: "HTML5", description: "Semantic markup & web standards" },
      { name: "CSS3", description: "Modern layouts, Flexbox & CSS Grid" },
      { name: "JavaScript (ES6+)", description: "Async patterns, DOM manipulation & logic" },
      { name: "TypeScript", description: "Type safety, interfaces & robust code" },
      { name: "React", description: "Component-driven architecture & hooks" }
    ]
  },
  {
    name: "Styling & UI",
    description: "Creating responsive, polished, and accessible visual systems",
    iconName: "Layers",
    skills: [
      { name: "Tailwind CSS", description: "Utility-first styling & rapid prototyping" },
      { name: "Responsive Design", description: "Mobile-first layouts for all screen sizes" },
      { name: "CSS Animations", description: "Subtle micro-interactions & transitions" },
      { name: "UI Architecture", description: "Consistent design tokens & theme systems" }
    ]
  },
  {
    name: "Backend & APIs",
    description: "Server-side logic, routing, and data integration",
    iconName: "Server",
    skills: [
      { name: "Node.js", description: "JavaScript runtime for server-side code" },
      { name: "Express", description: "Minimalist web framework for routing & middleware" },
      { name: "REST APIs", description: "Clean API contract design & HTTP integrations" },
      { name: "JSON & Data Handling", description: "Data parsing, serialization & validation" }
    ]
  },
  {
    name: "Databases",
    description: "Data storage, relational schemas, and document stores",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", description: "Relational database modeling & SQL queries" },
      { name: "MySQL", description: "Structured data storage & relational schemas" },
      { name: "MongoDB", description: "Document-oriented NoSQL collections" }
    ]
  },
  {
    name: "Development Tools",
    description: "Workflows, version control, and development environments",
    iconName: "Terminal",
    skills: [
      { name: "Git", description: "Distributed version control & branch workflows" },
      { name: "GitHub", description: "Repository hosting, code reviews & collaboration" },
      { name: "VS Code", description: "Modern IDE configuration & development extensions" },
      { name: "Vite", description: "Fast frontend tooling & build pipeline" }
    ]
  }
];
