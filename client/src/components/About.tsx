import React from "react";
import { portfolioConfig } from "../data/portfolioConfig";
import {
  Code,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Smartphone
} from "./Icons";

export const About: React.FC = () => {
  const valuePropositions = [
    {
      icon: <Terminal size={24} className="text-cyan-400" />,
      title: "Problem-Solving",
      tagline: "Turn ideas and requirements into practical digital solutions.",
      description:
        "Every project starts with a real-world objective. I analyze project goals and user workflows to develop software and web solutions that directly address practical needs without unnecessary complexity."
    },
    {
      icon: <Layers size={24} className="text-indigo-400" />,
      title: "Modern Development",
      tagline: "Build responsive, maintainable, user-friendly experiences.",
      description:
        "Using component-driven design systems, accessible HTML, and modern styling, I build web experiences that render smoothly across smartphones, tablets, and high-resolution monitors."
    },
    {
      icon: <Sparkles size={24} className="text-violet-400" />,
      title: "Continuous Improvement",
      tagline: "Focus on learning, quality, performance, and usability.",
      description:
        "Technology evolves quickly. I am dedicated to keeping code clean, adopting modern development standards, writing reliable components, and optimizing load speeds for the best end-user experience."
    }
  ];

  const engineeringPrinciples = [
    {
      title: "Responsive & Mobile-First",
      desc: "Designed to adapt naturally to any screen viewport from mobile to ultrawide."
    },
    {
      title: "Clean & Maintainable Code",
      desc: "Modular structure, consistent typing, and readable architecture for longevity."
    },
    {
      title: "Accessible & Semantic",
      desc: "Built with proper semantic HTML, accessible ARIA roles, and high-contrast color palettes."
    },
    {
      title: "Performance Conscious",
      desc: "Lightweight asset bundles, fast rendering cycles, and zero unnecessary script bloat."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 relative bg-[#090D18] border-t border-b border-white/5"
      aria-label="About Tekeste Teklehaymanot"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="section-tag">
            <Code size={14} className="text-cyan-400" />
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            I am <strong className="text-white font-semibold">{portfolioConfig.owner.fullName}</strong>, 
            a developer focused on building modern websites, custom software solutions, 
            and interactive web applications that solve practical everyday problems.
          </p>
        </div>

        {/* 3 Core Value Propositions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {valuePropositions.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400/90 mb-3 font-mono">
                  {item.tagline}
                </p>
                <p className="text-sm text-slate-300/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Core Engineering Tenet</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Tenets Panel */}
        <div className="glass-panel p-8 sm:p-10 border border-white/10 bg-slate-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-2">
                Standards of Work
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                How I Approach Every Web &amp; Software Project
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether creating a high-converting business site or a specialized internal software tool,
                I focus on delivering clear value, solid technical foundations, and transparent collaboration.
              </p>
              
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Explore Services &amp; Capabilities</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-lg border border-white/5 bg-slate-950/50 p-4 transition-colors hover:border-cyan-500/30"
                >
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {principle.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
