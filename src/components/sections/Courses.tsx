"use client";

import { motion } from "framer-motion";
import { CourseCard } from "@/components/ui/course-card";
import { courses } from "@/lib/data";
import { Code, Database, Globe, Layers, Cpu, Sparkles, GraduationCap, Award, Briefcase, TrendingUp, BadgeCheck, FileText } from "lucide-react";
import { IconRain } from "@/components/ui/icon-rain";
import { SectionHeading } from "@/components/ui/section-heading";

export function Courses() {
  // Rain animation items - Mixed with Tech & Career/Certificate icons
  const rainIcons = [GraduationCap, Award, Briefcase, TrendingUp, BadgeCheck, FileText, Code, Database, Globe, Layers, Cpu, Sparkles];

  return (
    <section id="courses" className="py-16 md:py-20 relative bg-transparent overflow-hidden">
       {/* Deep Space Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy pointer-events-none" />
       
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-30 bg-[url('/images/noise.svg')] mix-blend-soft-light pointer-events-none" />
       
       {/* Ambient Glows */}
       <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

       {/* Icon Rain Animation */}
       <IconRain icons={rainIcons} count={25} />
      
      <div className="container mx-auto px-6 relative z-10">


        <SectionHeading
          badge="LEARNING PATHS"
          title={
            <>
              <span className="text-white drop-shadow-2xl">Our</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 drop-shadow-lg">
                Career Growth Layers
              </span>
            </>
          }
          description="A structured path from clarity to leadership. Choose the level that matches your current stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
