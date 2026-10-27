import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CodingProfilesSection } from "@/components/sections/CodingProfilesSection";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-start">
          {/* Desktop Sticky Left Profile Card (Col 1 to 4) */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24 mb-12 lg:mb-0">
            <ProfileCard />
          </div>

          {/* Right-Side Scrolling Content Area (Col 5 to 12) */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-24 md:space-y-32">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <CodingProfilesSection />
            <AchievementsSection />
            <EducationSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
