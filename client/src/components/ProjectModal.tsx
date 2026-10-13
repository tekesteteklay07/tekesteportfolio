import React, { useEffect } from "react";
import { ProjectItem } from "../data/projects";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from "./Icons";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click to dismiss */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-slate-900 p-6 sm:p-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                {project.status}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Full Description */}
        <div className="mb-6 space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6 rounded-xl border border-white/10 bg-slate-950/50 p-5">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-cyan-400" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.keyFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Owner Customization Notice */}
        <div className="mb-6 p-3.5 rounded-lg border border-slate-700/60 bg-slate-800/40 text-xs text-slate-400">
          <strong className="text-slate-300">Developer Note:</strong> This is a sample showcase card.
          To connect your live deployment URL or GitHub repository, edit{" "}
          <code className="text-cyan-300 font-mono">src/data/projects.ts</code> and add{" "}
          <code className="text-cyan-300 font-mono">demoUrl</code> or{" "}
          <code className="text-cyan-300 font-mono">githubUrl</code>.
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <ExternalLink size={15} />
              <span>Live Demonstration</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-4"
            >
              <Github size={15} />
              <span>Source Repository</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
