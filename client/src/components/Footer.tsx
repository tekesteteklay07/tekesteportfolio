import React from "react";
import { portfolioConfig } from "../data/portfolioConfig";
import { ChevronUp, Mail, Github, Linkedin } from "./Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#hero");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer
      className="bg-[#050810] border-t border-white/10 pt-16 pb-12 relative"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0B0F19] text-xs font-bold text-cyan-300 font-mono">
                  TT
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {portfolioConfig.owner.fullName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building useful digital experiences through software and web development. Focused on practical utility, clean code, and user satisfaction.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="status-dot-pulse" />
              <span className="text-xs text-emerald-400 font-medium">
                {portfolioConfig.owner.availabilityText}
              </span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {portfolioConfig.navigation.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={(e) => handleNavClick(e, nav.href)}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {nav.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Direct Inquiries
            </h4>
            <p className="text-xs text-slate-400">
              Feel free to reach out directly regarding project consultations:
            </p>
            <a
              href={`mailto:${portfolioConfig.owner.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all"
            >
              <Mail size={14} />
              <span>{portfolioConfig.owner.email}</span>
            </a>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} {portfolioConfig.owner.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ChevronUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
