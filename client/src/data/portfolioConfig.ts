/**
 * Portfolio Configuration & Profile Information
 * 
 * Edit this file to update your personal details, availability status,
 * contact email, and social profiles.
 */

export interface PortfolioConfig {
  owner: {
    fullName: string;
    firstName: string;
    shortName: string;
    email: string;
    title: string;
    headline: string;
    supportingText: string;
    heroLabel: string;
    location: string;
    availableForHire: boolean;
    availabilityText: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
  contactConfig: {
    email: string;
    mailtoSubjectDefault: string;
    backendEndpoint?: string; // Set to a real endpoint (e.g. Formspree/EmailJS) when ready
    useMailtoFallback: boolean;
  };
}

export const portfolioConfig: PortfolioConfig = {
  owner: {
    fullName: "Tekeste Teklehaymanot",
    firstName: "Tekeste",
    shortName: "TT",
    email: "tekesteteklay07@gmail.com",
    title: "Software Developer | Website Developer | Web Application Builder",
    heroLabel: "HELLO, I'M",
    headline: "I Build Software, Websites & Web Applications.",
    supportingText:
      "I turn ideas into modern, reliable, user-friendly digital experiences. From responsive websites to custom web applications, I help bring digital products to life.",
    location: "Available Globally / Remote",
    availableForHire: true,
    availabilityText: "Open to Projects & Collaborations",
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:tekesteteklay07@gmail.com",
      icon: "Mail",
    },
  ],
  contactConfig: {
    email: "tekesteteklay07@gmail.com",
    mailtoSubjectDefault: "Project Inquiry for Tekeste Teklehaymanot",
    backendEndpoint: "", // Leave blank to use prefilled mailto launcher
    useMailtoFallback: true,
  },
};
