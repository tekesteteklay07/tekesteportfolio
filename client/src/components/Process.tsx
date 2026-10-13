import React from "react";
import { processSteps, ProcessStep } from "../data/process";
import { DynamicIcon, CheckCircle2, ArrowRight } from "./Icons";

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-24 relative bg-[#080C16] border-t border-b border-white/5"
      aria-label="Development Process and Methodology"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-tag">
            Workflow &amp; Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Development Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A clear four-stage framework designed to deliver stable, user-centric 
            software and web applications on time and with full transparency.
          </p>
        </div>

        {/* 4 Steps Timeline / Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step: ProcessStep, index) => (
            <div
              key={step.number}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              {/* Connector line on large screens */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <ArrowRight size={18} />
                </div>
              )}

              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-colors">
                    <DynamicIcon name={step.iconName} size={22} />
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-semibold text-cyan-400 mb-3 font-mono">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Phase Deliverables */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Milestones:
                </p>
                {step.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-1.5 text-xs text-slate-400"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-cyan-400 shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
