import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChevronUp } from "./components/Icons";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [selectedService, setSelectedService] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top floating button & section tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting in Navbar
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "projects",
      "skills",
      "process",
      "contact"
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#hero");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Skip to Content for Screen Readers & Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <Skills />
        <Process />
        <Contact prefilledSubject={selectedService} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Back to Top Control */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/90 border border-white/15 text-cyan-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;
