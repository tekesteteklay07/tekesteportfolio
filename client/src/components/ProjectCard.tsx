import React from "react";
import { ProjectItem } from "../data/projects";
import { ExternalLink, Github, ArrowRight, Layers, Activity, Calendar } from "./Icons";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
}) => {
  // Render high-fidelity CSS illustration mockup based on project type
  const renderMockup = () => {
    switch (project.mockupType) {
      case "dashboard":
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between font-mono select-none overflow-hidden relative">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Live Telemetry
              </span>
              <span className="text-emerald-400 font-semibold">+24.8% Active</span>
            </div>
            {/* Sparkline & Bars */}
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[40, 65, 30, 85, 45, 95, 75, 60, 90, 100, 70, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-indigo-600/40 to-cyan-400 rounded-t-sm transition-all hover:brightness-125"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Req: 1,420/s</span>
              <span>Latency: 28ms</span>
              <span>Uptime: 99.98%</span>
            </div>
          </div>
        );

      case "tasks":
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between font-mono select-none overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-indigo-400">Task Sprint #04</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px]">
                3 of 4 Done
              </span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-white/5 text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300 line-through">Setup API Endpoints</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-white/5 text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300 line-through">Implement Auth Middleware</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-slate-900 border border-cyan-500/30 text-[11px]">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-200">Optimize Database Queries</span>
              </div>
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between font-mono select-none overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-violet-400">Storefront Preview</span>
              <span className="text-amber-300 text-[10px] font-bold">In Cart: 2 items</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded bg-slate-900 border border-white/5 text-center">
                <div className="h-6 w-full rounded bg-cyan-900/30 border border-cyan-500/20 mb-1 flex items-center justify-center text-[10px] text-cyan-300">
                  Item #1
                </div>
                <div className="text-[10px] text-slate-300 font-bold">$49.00</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-white/5 text-center">
                <div className="h-6 w-full rounded bg-indigo-900/30 border border-indigo-500/20 mb-1 flex items-center justify-center text-[10px] text-indigo-300">
                  Item #2
                </div>
                <div className="text-[10px] text-slate-300 font-bold">$89.00</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 flex justify-between border-t border-white/5 pt-1">
              <span>Checkout Subtotal</span>
              <span className="text-white font-semibold">$138.00</span>
            </div>
          </div>
        );

      case "booking":
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between font-mono select-none overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-cyan-300">
                <Calendar size={13} />
                Appointment Flow
              </span>
              <span className="text-emerald-400 text-[10px]">Slot Confirmed</span>
            </div>
            <div className="flex justify-between gap-1 py-1">
              {["Mon 12", "Tue 13", "Wed 14", "Thu 15"].map((day, idx) => (
                <div
                  key={day}
                  className={`flex-1 p-1 rounded text-center text-[10px] border ${
                    idx === 2
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                      : "bg-slate-900 border-white/5 text-slate-400"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] bg-slate-900 p-1.5 rounded border border-white/5 text-slate-300">
              <span>Selected: 2:30 PM EST</span>
              <span className="text-cyan-400">Step 3 of 4</span>
            </div>
          </div>
        );

      case "business":
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between select-none overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-1">
              <span className="text-cyan-400 font-semibold">agency.co</span>
              <div className="flex gap-1">
                <span className="h-1.5 w-6 rounded bg-slate-700" />
                <span className="h-1.5 w-6 rounded bg-slate-700" />
              </div>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="h-3 w-3/4 rounded bg-gradient-to-r from-cyan-400 to-indigo-400" />
              <div className="h-2 w-1/2 rounded bg-slate-700" />
              <div className="flex gap-2 pt-1">
                <div className="h-5 w-16 rounded bg-cyan-500 text-[9px] font-mono text-slate-950 font-bold flex items-center justify-center">
                  Book Call
                </div>
                <div className="h-5 w-16 rounded bg-slate-800 text-[9px] font-mono text-slate-300 flex items-center justify-center">
                  Services
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Full-width Responsive Grid</span>
            </div>
          </div>
        );

      default:
        // Portfolio template mockup
        return (
          <div className="h-36 sm:h-40 w-full bg-slate-950 p-3 sm:p-4 rounded-t-xl border-b border-white/10 flex flex-col justify-between font-mono select-none overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-cyan-400">portfolio-theme.tsx</span>
              <span className="text-slate-400 text-[10px]">v1.0.0</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300 py-1">
              <p className="text-cyan-300">&lt;HeroSection</p>
              <p className="pl-4 text-emerald-300">headline=&quot;Creative Engineer&quot;</p>
              <p className="pl-4 text-indigo-300">theme=&quot;dark-navy-modern&quot;</p>
              <p className="text-cyan-300">/&gt;</p>
            </div>
            <div className="text-[10px] text-slate-400 flex justify-between border-t border-white/5 pt-1">
              <span>WCAG AAA Contrast</span>
              <span className="text-cyan-400">100% Score</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="glass-card flex flex-col justify-between overflow-hidden group">
      <div>
        {/* CSS Mockup illustration */}
        {renderMockup()}

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
              {project.status}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-white/10 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          aria-label={`View detailed specs for ${project.title}`}
        >
          <span>View Details</span>
          <ArrowRight size={14} />
        </button>

        <div className="flex items-center gap-2">
          {/* Only render demo link if real URL is provided */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open Live Demonstration"
              aria-label="Open Live Demonstration"
            >
              <ExternalLink size={16} />
            </a>
          )}

          {/* Only render github link if real URL is provided */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open Source Code Repository"
              aria-label="Open Source Code Repository"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
