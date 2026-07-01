"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary"; // New
import { FeaturedTopics } from "@/components/sections/FeaturedTopics"; // New
import { Team } from "@/components/sections/Team"; // New
import { Courses } from "@/components/sections/Courses";
import { Process } from "@/components/sections/Process"; // New
import { Community } from "@/components/sections/Community"; // Restored
import { Testimonials } from "@/components/sections/Testimonials"; // New
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA"; // New
import { LogoIntro } from "@/components/intro/LogoIntro";
import { Stars } from "@/components/ui/stars";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="min-h-screen bg-navy text-white relative">
      <LogoIntro onComplete={() => setIntroComplete(true)} />

      {introComplete && <Navbar />}

      <div className={`transition-opacity duration-1000 ${introComplete ? "opacity-100" : "opacity-0"}`}>
        <Stars />
        <div className="glow-mesh" />

        {/* 1. Hero Section (Trust + Interest) */}
        <Hero />

        {/* 2. About Academy (Who We Are) */}
        <AboutSummary />

        {/* 2.5 Core Modules (Technologies) */}
        <FeaturedTopics />

        {/* 3. Team Section (Credibility) */}
        <Team />

        {/* 4. Courses Section (Core Business) */}
        <Courses />

        {/* 5. How Learning Works (Process) */}
        <Process />

        {/* 6. Exclusive Community (Trust + Connection) */}
        <Community />

        {/* 7. Testimonials (Social Proof) */}
        <Testimonials />

        {/* 8. FAQ (Support) */}
        <FAQ />

        {/* 9. Call To Action (Final Push) */}
        <CTA />

        {/* 11. Footer (Closure) */}
        <Footer />
      </div>
    </main>
  );
}
