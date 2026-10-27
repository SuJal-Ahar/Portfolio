"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header Nav */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
          scrolled
            ? "bg-[#121110]/85 backdrop-blur-md border-b border-[#2A2826]/70 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF713B]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FF713B] flex items-center justify-center font-editorial font-extrabold text-white text-base shadow-md shadow-[#FF713B]/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-editorial font-bold text-sm tracking-tight text-white group-hover:text-[#FF713B] transition-colors">
                SUJAL AHAR
              </span>
              <span className="text-[10px] font-mono text-[#9E9A95] tracking-wider uppercase">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-[#1A1918]/90 border border-[#2A2826] rounded-full p-1.5 backdrop-blur-md shadow-inner"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200",
                    isActive
                      ? "bg-[#FF713B] text-white font-semibold shadow-sm"
                      : "text-[#9E9A95] hover:text-white hover:bg-[#262422]"
                  )}
                >
                  <span className="opacity-60 mr-1">{item.number}</span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-full bg-[#FF713B] text-white hover:bg-[#FF8554] transition-all shadow-md shadow-[#FF713B]/20 active:scale-95"
            >
              <span>Let&apos;s Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl bg-[#1E1D1B] border border-[#2A2826] text-white hover:text-[#FF713B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF713B]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-xl md:hidden flex flex-col p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#2A2826]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF713B] flex items-center justify-center font-editorial font-extrabold text-white text-base">
                S
              </div>
              <span className="font-editorial font-bold text-base text-white">
                SUJAL AHAR
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-xl bg-[#1E1D1B] border border-[#2A2826] text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-8 flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3 px-4 rounded-xl text-base font-editorial uppercase tracking-wider transition-colors",
                    isActive
                      ? "bg-[#FF713B] text-white font-bold"
                      : "text-[#9E9A95] hover:text-white hover:bg-[#1E1D1B]"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs opacity-60">/{item.number}</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#2A2826] space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF713B] text-white font-semibold text-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex justify-center gap-6 pt-2 text-xs font-mono text-[#9E9A95]">
              <span>NIT Raipur &apos;27</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
