import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CompetitiveGrowthSection } from "@/components/sections/CompetitiveGrowthSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121110] text-white bg-dots-pattern selection:bg-[#FF713B] selection:text-white">
      {/* Top Header Navigation */}
      <Navigation />

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 w-full">
        {/* Initial Hero Section with Scroll-Linked Profile Image Transition */}
        <HeroSection />

        {/* Full-Width Content Sections (No permanent sidebar!) */}
        <main className="w-full space-y-24 md:space-y-32 pt-4">
          <ProjectsSection />
          <CompetitiveGrowthSection />
          <ExperienceSection />
          <SkillsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
