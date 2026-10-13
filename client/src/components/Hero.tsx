import React, { useState } from "react";
import { portfolioConfig } from "../data/portfolioConfig";
import {
  ArrowRight,
  Send,
  Terminal,
  FileCode,
  Sparkles,
  Check,
  CheckCircle2,
  Code
} from "./Icons";

export const Hero: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<"profile" | "services" | "terminal">("profile");

  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 overflow-hidden bg-grid-pattern"
      aria-label="Introduction and Overview"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label & Availability Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="section-tag">
                <Code size={14} className="text-cyan-400" />
                {portfolioConfig.owner.heroLabel}
              </span>

              {portfolioConfig.owner.availableForHire && (
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md"
                  role="status"
                  aria-label="Availability Status"
                >
                  <span className="status-dot-pulse" />
                  <span>{portfolioConfig.owner.availabilityText}</span>
                </div>
              )}
            </div>

            {/* Main Heading: Tekeste Teklehaymanot */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              <span className="block font-sans">{portfolioConfig.owner.fullName}</span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight mb-5 gradient-text">
              {portfolioConfig.owner.headline}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {portfolioConfig.owner.supportingText}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo("#projects")}
                className="btn-primary w-full sm:w-auto group cursor-pointer"
                id="hero-btn-projects"
              >
                <span>View My Projects</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("#contact")}
                className="btn-secondary w-full sm:w-auto group cursor-pointer"
                id="hero-btn-contact"
              >
                <Send size={16} className="text-cyan-400" />
                <span>Let&apos;s Work Together</span>
              </button>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-mono text-slate-400 font-semibold mr-1">TECH HIGHLIGHTS:</span>
              {["React", "TypeScript", "Tailwind CSS", "Web Applications", "REST APIs", "Modern UI"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-white/10 bg-slate-900/60 px-2.5 py-1 text-slate-300 font-mono text-[11px]"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual / Code Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-violet-500/20 blur-xl opacity-75" />

              {/* Code Editor Mockup Box */}
              <div className="code-window relative">
                
                {/* Titlebar with Window Controls & Tabs */}
                <div className="code-titlebar flex-wrap gap-2">
                  <div className="code-dots">
                    <span className="code-dot bg-rose-500/80" />
                    <span className="code-dot bg-amber-500/80" />
                    <span className="code-dot bg-emerald-500/80" />
                  </div>

                  {/* Interactive Code Tabs */}
                  <div className="flex items-center gap-1 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab("profile")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === "profile"
                          ? "bg-slate-800 text-cyan-300 border-b border-cyan-400"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <FileCode size={13} />
                      <span>developer.ts</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab("services")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === "services"
                          ? "bg-slate-800 text-cyan-300 border-b border-cyan-400"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Sparkles size={13} />
                      <span>focus.json</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab("terminal")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                        activeCodeTab === "terminal"
                          ? "bg-slate-800 text-cyan-300 border-b border-cyan-400"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Terminal size={13} />
                      <span>status.sh</span>
                    </button>
                  </div>
                </div>

                {/* Editor Body */}
                <div className="code-body min-h-[300px]">
                  {activeCodeTab === "profile" && (
                    <div className="space-y-1">
                      <p className="text-slate-500">// Personal Architecture Profile</p>
                      <p>
                        <span className="text-violet-400">const</span>{" "}
                        <span className="text-cyan-300">developer</span>{" "}
                        <span className="text-white">=</span> &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;Tekeste Teklehaymanot&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">role:</span>{" "}
                        <span className="text-emerald-300">&quot;Software &amp; Web Developer&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">focus:</span> [
                      </p>
                      <p className="pl-8 text-amber-300">&quot;Websites&quot;,</p>
                      <p className="pl-8 text-amber-300">&quot;Custom Web Applications&quot;,</p>
                      <p className="pl-8 text-amber-300">&quot;Modern User Interfaces&quot;</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-slate-400">openForProjects:</span>{" "}
                        <span className="text-cyan-400 font-semibold">true</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">contact:</span>{" "}
                        <span className="text-emerald-300">&quot;tekesteteklay07@gmail.com&quot;</span>
                      </p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeCodeTab === "services" && (
                    <div className="space-y-1 text-slate-300">
                      <p className="text-slate-500">// Engineering Values &amp; Services</p>
                      <p>&#123;</p>
                      <p className="pl-4">
                        <span className="text-cyan-300">&quot;designSystem&quot;</span>:{" "}
                        <span className="text-amber-300">&quot;Responsive &amp; Accessible&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">&quot;codeStandard&quot;</span>:{" "}
                        <span className="text-amber-300">&quot;Clean, Modular, Typed&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">&quot;primaryServices&quot;</span>: [
                      </p>
                      <p className="pl-8 text-emerald-300">&quot;Website Development&quot;,</p>
                      <p className="pl-8 text-emerald-300">&quot;Web Application Development&quot;,</p>
                      <p className="pl-8 text-emerald-300">&quot;Custom Software Solutions&quot;</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-cyan-300">&quot;buildReady&quot;</span>:{" "}
                        <span className="text-violet-400">true</span>
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeCodeTab === "terminal" && (
                    <div className="space-y-2 text-xs">
                      <p className="text-emerald-400">$ developer --health-check</p>
                      <p className="text-slate-400">
                        ✓ Environment: Vite 8 + React 19 + TypeScript
                      </p>
                      <p className="text-slate-400">
                        ✓ Quality: Semantic HTML5 + WCAG Compliant
                      </p>
                      <p className="text-slate-400">
                        ✓ Status: Ready for Client Collaboration
                      </p>
                      <div className="mt-4 p-2.5 rounded bg-slate-900 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        <span>Ready to build your next digital product</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Bar / Bottom Metric */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>STATUS: ACTIVE &amp; AVAILABLE</span>
                  </div>
                  <span className="text-slate-400">UTF-8 / TypeScript</span>
                </div>
              </div>

              {/* Floating Technology Badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 z-20 flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Sparkles size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Full-Stack Solutions</p>
                  <p className="text-[11px] text-slate-400">Ideas converted to reality</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
