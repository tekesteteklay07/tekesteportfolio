import React, { useState, useMemo } from "react";
import { projectsData, projectCategories, ProjectItem } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Code, AlertCircle, Sparkles } from "./Icons";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="py-24 relative bg-[#070A14] border-t border-b border-white/5"
      aria-label="Selected Projects Portfolio"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="section-tag">
              <Code size={14} className="text-cyan-400" />
              Work &amp; Implementations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Selected Projects
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              A curated collection of web applications, responsive websites, and user interface systems.
            </p>
          </div>

          {/* Quick Notice for Visitors & Owner */}
          <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3.5 py-2 text-xs text-amber-300">
            <AlertCircle size={16} className="shrink-0" />
            <span>Sample Demo Architectures (Ready for Customization)</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto" role="tablist">
          {projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All Projects"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected
                      ? "bg-slate-950/20 text-slate-950 font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="glass-panel p-12 text-center max-w-md mx-auto">
            <Sparkles size={32} className="text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Projects in this Category</h3>
            <p className="text-sm text-slate-400 mb-4">
              Switch categories or add projects to this category in{" "}
              <code className="text-cyan-300">src/data/projects.ts</code>.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All Projects")}
              className="btn-secondary text-xs py-2 px-4"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Owner Guidance Banner */}
        <div className="mt-16 glass-panel p-6 border-cyan-500/20 bg-slate-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Code size={20} className="text-cyan-400 mt-1 shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">
                How to showcase your own projects
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Edit <code className="text-cyan-300 font-mono">src/data/projects.ts</code> to update titles, descriptions, live demo URLs, and GitHub links. Missing URLs will be cleanly hidden automatically.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-secondary text-xs py-2 px-4 shrink-0"
          >
            Request a Custom Build
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
