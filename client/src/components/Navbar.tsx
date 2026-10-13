import React, { useState, useEffect } from "react";
import { portfolioConfig } from "../data/portfolioConfig";
import { Menu, X, Mail, ArrowUpRight } from "./Icons";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for shadow and background depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Update hash in address bar without jumping
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-3 text-white no-underline focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={`${portfolioConfig.owner.fullName} - Home`}
        >
          {/* Stylized TT monogram emblem */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0B0F19] text-sm font-bold tracking-wider text-cyan-300 font-mono">
              TT
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white transition-colors group-hover:text-cyan-300">
              {portfolioConfig.owner.fullName}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              developer.dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {portfolioConfig.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all rounded-full ${
                  isActive
                    ? "text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${portfolioConfig.owner.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95"
            aria-label="Let's Talk - Open email client"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-slate-200 transition-colors hover:text-white hover:border-cyan-500/40 md:hidden focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-nav-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col bg-[#070A13]/95 backdrop-blur-xl p-6 border-b border-white/10 md:hidden overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Availability Status in Mobile Drawer */}
          {portfolioConfig.owner.availableForHire && (
            <div className="mb-6 flex items-center gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-400">
              <span className="status-dot-pulse" />
              <span>{portfolioConfig.owner.availabilityText}</span>
            </div>
          )}

          <nav className="flex flex-col gap-2" aria-label="Mobile Menu Links">
            {portfolioConfig.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border-l-4 border-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-500 font-mono">0{portfolioConfig.navigation.indexOf(item) + 1}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href={`mailto:${portfolioConfig.owner.email}`}
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail size={18} />
              <span>Let&apos;s Talk ({portfolioConfig.owner.email})</span>
            </a>

            <div className="text-center text-xs text-slate-500 pt-2 font-mono">
              Press Escape or tap outside to close menu
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
