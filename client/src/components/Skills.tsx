import React from "react";
import { skillsCategories, SkillCategory } from "../data/skills";
import { DynamicIcon, Code, AlertCircle, CheckCircle2 } from "./Icons";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 relative bg-navy-950"
      aria-label="Skills and Technical Stack"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="section-tag">
              <Code size={14} className="text-cyan-400" />
              Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Skills &amp; Technologies
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Languages, frameworks, databases, and development tooling utilized to construct 
              resilient software and web products.
            </p>
          </div>

          {/* Editable Disclaimer for Owner */}
          <div className="flex items-start gap-2.5 rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-3 text-xs text-cyan-300 max-w-sm">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>
              <strong>Customizable Stack:</strong> Update or remove any tool you don&apos;t actively use in{" "}
              <code className="font-mono text-white underline">src/data/skills.ts</code>.
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category: SkillCategory) => (
            <div
              key={category.name}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-cyan-400 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    <DynamicIcon name={category.iconName} size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Pill List */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 text-right">
                        {skill.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{category.skills.length} Competencies</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
