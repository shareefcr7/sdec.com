"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { courses } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Globe, Award, Shield, ArrowRight, Star, Zap, Medal, BookOpen, Users, Video, FileText, Smartphone, Code, Rocket, SatelliteDish } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CourseDetail() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const id = params.id as string;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-navy text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-navy text-white font-outfit overflow-x-hidden selection:bg-electric-blue/30 selection:text-electric-blue">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-navy-light/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-electric-blue/10 text-electric-blue text-sm font-semibold border border-electric-blue/20">
                  {course.level} Level
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/20">
                  <Star size={14} className="fill-yellow-500" />
                  {course.rating}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                {course.title}
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl w-full max-w-3xl mt-12 overflow-hidden shadow-2xl">
                <div className="px-10 py-8 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-white/10 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2 text-center sm:text-left">Standard Investment</span>
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="text-4xl font-black text-white tracking-tighter">{course.price}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                  </div>
                </div>

                <Link href="/contact" className="flex-1">
                  <Button className="w-full h-full group relative overflow-hidden bg-electric-blue hover:bg-electric-blue active:bg-white active:text-navy text-navy hover:text-white font-black px-12 py-10 text-2xl rounded-none transition-all duration-200 border-none shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_60px_rgba(0,210,255,0.5)]">
                    <span className="relative z-10 flex items-center justify-center gap-4 tracking-tighter">
                      {course.ctaLabel.toUpperCase()}
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
                    </span>
                    <div className="absolute inset-0 bg-[#03041a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 text-gray-400 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <Clock size={18} className="text-electric-blue" />
                    <span>{course.duration} Duration</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Globe size={18} className="text-electric-blue" />
                    <span>{course.mode}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Award size={18} className="text-electric-blue" />
                    <span>Certificate Included</span>
                 </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative group"
            >
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-electric-blue/30 transition-all duration-700">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700" />
                  
                  {/* Decorative Elements on Image */}
                  <div className="absolute top-6 right-6 z-20">
                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight size={24} className="text-white -rotate-45" />
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 relative bg-navy/50 backdrop-blur-3xl overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2">
                 <h2 className="text-sm font-black text-electric-blue uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <Shield size={16} /> The Professional Journey
                 </h2>
                 <div className="text-lg md:text-xl text-white leading-relaxed font-light italic opacity-95 border-l-4 border-electric-blue/30 pl-8 md:pl-12">
                    "{course.story}"
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: Medal, label: "Top Rated", val: "4.9/5" },
                   { icon: Users, label: "Active Cohort", val: "25+ Students" },
                   { icon: Zap, label: "Levelup", val: "Industry Ready" },
                   { icon: Award, label: "Certificate", val: "ISO Certified" }
                 ].map((stat, i) => (
                   <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-electric-blue/30 transition-all group">
                      <stat.icon size={24} className="text-electric-blue mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-lg font-black text-white">{stat.val}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -z-0" />
      </section>

      {/* Learning Assets Section */}
      <section className="py-24 relative overflow-hidden bg-[#02030a]">
         {/* Space Background Animation - Performance Optimized */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none transform translate-z-0">
            {/* Stars Layer 1 - Slow & Small */}
            {mounted && [...Array(15)].map((_, i) => (
              <motion.div
                key={`star-1-${i}`}
                initial={{ opacity: Math.random(), x: Math.random() * 1000, y: Math.random() * 1000 }}
                animate={{ 
                  y: [Math.random() * 1000, Math.random() * 1000 - 100],
                  opacity: [0.2, 0.8, 0.2] 
                }}
                transition={{ duration: Math.random() * 10 + 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-0.5 h-0.5 bg-cyan-200 rounded-full shadow-[0_0_2px_#ffffff] will-change-transform"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              />
            ))}
            {/* Stars Layer 2 - Medium & Brighter */}
            {mounted && [...Array(8)].map((_, i) => (
              <motion.div
                key={`star-2-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[0.5px] shadow-[0_0_4px_#22d3ee] will-change-transform"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              />
            ))}
            
            {/* SOLAR SYSTEM ANIMATION */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 will-change-transform">
               {/* Orbit 1 */}
               <div className="absolute inset-[15%] rounded-full border border-white/5">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 will-change-transform"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400/50 rounded-full shadow-[0_0_15px_#22d3ee] backdrop-blur-sm" />
                  </motion.div>
               </div>
               {/* Orbit 2 - Reverse */}
               <div className="absolute inset-[30%] rounded-full border border-white/5">
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 will-change-transform"
                  >
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500/50 rounded-full shadow-[0_0_20px_#a855f7] backdrop-blur-sm">
                        {/* Moon for Planet 2 */}
                        <motion.div 
                           animate={{ rotate: 360 }}
                           transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-[-150%] will-change-transform"
                        >
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full" />
                        </motion.div>
                     </div>
                  </motion.div>
               </div>
               {/* Orbit 3 */}
               <div className="absolute inset-[45%] rounded-full border border-white/5">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 will-change-transform"
                  >
                     <div className="absolute top-1/2 right-0 translate-x-1/2 w-3 h-3 bg-blue-500/50 rounded-full shadow-[0_0_10px_#3b82f6]" />
                  </motion.div>
               </div>
            </div>

            {/* Nebula Cloud Effect - Brighter */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse will-change-transform" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40 will-change-transform" />

            {/* Background Drifting Rockets - 3 Unique Trajectories */}
            {mounted && (
               <>
                  {/* Rocket 1: Diagonal Bottom-Left to Top-Right (Fast) */}
                  <motion.div
                     initial={{ x: "-10vw", y: "110vh", opacity: 0 }}
                     animate={{ x: "110vw", y: "-10vh", opacity: [0, 1, 1, 0] }}
                     transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "linear" }}
                     className="absolute z-0 will-change-transform"
                  >
                     <Rocket size={20} className="text-cyan-400 rotate-45 opacity-60" />
                     <div className="absolute top-full right-full w-20 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/50 origin-top-right rotate-45 transform -translate-y-1" />
                  </motion.div>

                  {/* Rocket 2: Horizontal Left to Right (Slow) */}
                  <motion.div
                     initial={{ x: "-10vw", y: "60vh", opacity: 0 }}
                     animate={{ x: "110vw", y: "50vh", opacity: [0, 0.5, 0.5, 0] }}
                     transition={{ duration: 25, repeat: Infinity, delay: 0, ease: "linear" }}
                     className="absolute z-0 will-change-transform"
                  >
                     <Rocket size={16} className="text-purple-400 rotate-90 opacity-40" />
                     <div className="absolute top-1/2 right-full w-32 h-[1px] bg-gradient-to-r from-transparent to-purple-400/30" />
                  </motion.div>

                  {/* Rocket 3: Diagonal Top-Left to Bottom-Right (Medium) */}
                  <motion.div
                     initial={{ x: "-10vw", y: "10vh", opacity: 0 }}
                     animate={{ x: "110vw", y: "80vh", opacity: [0, 0.6, 0.6, 0] }}
                     transition={{ duration: 20, repeat: Infinity, delay: 10, ease: "linear" }}
                     className="absolute z-0 will-change-transform"
                  >
                     <Rocket size={18} className="text-blue-400 rotate-[135deg] opacity-50" />
                     <div className="absolute bottom-full right-full w-24 h-[1px] bg-gradient-to-r from-transparent to-blue-400/40 origin-bottom-right rotate-[135deg]" />
                  </motion.div>

                  {/* Satellite Animation - Slow Horizontal Orbit */}
                  <motion.div
                     initial={{ x: "110vw", y: "15vh", opacity: 0, rotate: -15 }}
                     animate={{ x: "-10vw", y: "25vh", opacity: [0, 1, 1, 0], rotate: 15 }}
                     transition={{ duration: 40, repeat: Infinity, delay: 5, ease: "linear" }}
                     className="absolute z-0 will-change-transform"
                  >
                     <div className="relative">
                        <SatelliteDish size={24} className="text-gray-400 opacity-60" />
                        {/* Blinking Light on Satellite */}
                        <motion.div 
                           animate={{ opacity: [0, 1, 0] }}
                           transition={{ duration: 1, repeat: Infinity }}
                           className="absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]"
                        />
                     </div>
                  </motion.div>
               </>
            )}
         </div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">What's <span className="text-gradient">Included</span></h2>
               <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">Comprehensive learning ecosystem for your success</p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
                {/* Mobile Snake Line Animation - Removed */ }

                {/* Desktop Snake Line Animation - Removed */ }

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                   {[
                     { icon: Video, title: "Online/Offline", desc: "Flexible learning modes" },
                     { icon: BookOpen, title: "Extensive Resources", desc: "Curated learning materials" },
                     { icon: Code, title: "Real Projects", desc: "Hands-on implementation" },
                     { icon: FileText, title: "Assignments", desc: "Weekly skill validation" },
                     // Second Row (Visual Order 8->5 for Snake, but DOM order 5->8)
                     // To match the snake line (Right to Left), we need to display them in reverse order visually?
                     // No, standard grid is Left to Right.
                     // The line goes 1050 (Right) -> 150 (Left).
                     // So item 5 (first in row 2) should be at 1050? No, that's complex CSS.
                     // Let's keep standard LTR grid, but the LINE goes Right->Left.
                     // So logically the flow is: 1->2->3->4 (Right) ... curve ... 8->7->6->5 (Left).
                     // So we should map the data so it matches the line flow?
                     // Let's just render them standard grid, and the line connects them visually.
                     // 5(Left) <--- 8 (Right).
                     // Wait, user said "2 line pass aavanam orderil".
                     // If I draw line Right->Left, it passes 8,7,6,5.
                     // So 5th item in grid (first in row 2) is "Q&A Support".
                     // 8th item in grid (last in row 2) is "Case Studies".
                     // Path M 1050 250 L 150 250 goes Right to Left.
                     // So it touches Case Studies -> Networking -> LMS -> Q&A.
                     // That seems fine for a visual loop.
                     
                     { icon: Users, title: "Q&A Support", desc: "Direct mentor access" },
                     { icon: Smartphone, title: "LMS Access", desc: "24/7 Learning portal" },
                     { icon: Globe, title: "Networking", desc: "Peer group community" },
                     { icon: Award, title: "Case Studies", desc: "Real industry scenarios" }
                   ].map((asset, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className={`flex flex-col items-center text-center group relative z-10 ${i >= 4 ? 'lg:flex-col-reverse lg:pb-0' : ''}`}
                     >
                       {/* The condition above pushes the text above icon for bottom row? maybe not needed if standard align */}
                       
                        {/* Glowing Orbit Ring */}
                        <div className="relative mb-6 group cursor-pointer bg-navy rounded-full">
                           <div className="absolute inset-0 rounded-full bg-electric-blue/20 blur-xl group-hover:bg-electric-blue/40 transition-all duration-500" />
                           <div className="w-24 h-24 rounded-full bg-navy border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-electric-blue/50">
                              <asset.icon size={32} className="text-electric-blue" />
                           </div>
                           {/* Orbit Dot */}
                           <motion.div 
                             className="absolute -inset-2 border border-dashed border-white/20 rounded-full"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">{asset.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest">{asset.desc}</p>
                     </motion.div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* Curriculum Preview / details */}
      <section className="py-24 bg-[#050614] relative border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
              <div>
                 <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Detailed <span className="text-gradient">Syllabus</span></h2>
                 <p className="text-gray-400 text-xl font-light">A structured roadmap designed for total mastery of the subject.</p>
              </div>
              <div className="px-8 py-4 rounded-[2rem] bg-electric-blue/10 border border-electric-blue/30 text-electric-blue font-black tracking-widest uppercase text-sm flex items-center gap-3">
                 <BookOpen size={20} />
                 {course.topics.length} CORE MODULES
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {course.topics.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-navy-light/10 backdrop-blur-xl border border-white/5 hover:border-electric-blue/20 active:border-electric-blue/50 active:bg-electric-blue/5 transition-all duration-300 group relative overflow-hidden"
                >
                   {/* Background Number */}
                   <div className="absolute -right-4 -bottom-4 text-8xl md:text-9xl font-black text-white/[0.02] pointer-events-none group-hover:text-electric-blue/[0.04] transition-colors">
                      {i + 1}
                   </div>

                   <div className="flex-shrink-0 mt-1 bg-electric-blue/5 p-3 md:p-4 rounded-2xl group-hover:bg-electric-blue/20 transition-all duration-500 group-hover:rotate-6">
                     <CheckCircle size={24} className="text-electric-blue sm:w-7 sm:h-7" />
                   </div>
                   <div className="relative z-10 w-full">
                      <span className="text-white text-xl md:text-2xl font-black block mb-2 md:mb-3 uppercase tracking-tight break-words">{item}</span>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                         Professional mastery of {item.toLowerCase()} through hands-on implementation and industry-standard workflows.
                      </p>
                      <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-4">
                         <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">Lab Session Included</span>
                         <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">Q&A Enabled</span>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 bg-gradient-to-t from-navy-dark to-navy">
         <div className="container mx-auto px-6">
            <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-[3rem] p-12 text-center">
               <h2 className="text-3xl font-bold text-white mb-8">What You'll Achieve</h2>
               <div className="flex flex-wrap justify-center gap-8">
                  {course.outcome.map((out, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 text-gray-300">
                       <Award size={18} className="text-electric-blue" />
                       <span className="font-semibold">{out}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
