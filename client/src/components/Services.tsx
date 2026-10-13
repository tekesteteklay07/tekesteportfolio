import React from "react";
import { servicesData, ServiceItem } from "../data/services";
import { DynamicIcon, ArrowRight, Check } from "./Icons";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleDiscussClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    serviceTitle: string
  ) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <section
      id="services"
      className="py-24 relative bg-navy-950"
      aria-label="Services and Solutions"
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="section-tag">
              What I Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Services &amp; Digital Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              From standalone websites to custom applications, I provide structured 
              development services tailored to bring your ideas and business operations to life.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-4 py-2 rounded-lg border border-white/10">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>6 Specialized Offerings</span>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Icon & Optional Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/90 border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-indigo-600 transition-all duration-300">
                    <DynamicIcon name={service.iconName} size={22} />
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm font-medium text-slate-200 mb-3">
                  {service.shortDescription}
                </p>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-6 space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <Check
                        size={14}
                        className="text-cyan-400 shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link: Discuss a Project */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleDiscussClick(e, service.title)}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  aria-label={`Discuss a project about ${service.title}`}
                >
                  <span>Discuss a Project</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
