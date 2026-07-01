"use client";

import { motion, useInView } from "framer-motion";
import { UserPlus, PlayCircle, Code2, MessageCircle, Award, Star, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useRef } from "react";

const steps = [
  { icon: UserPlus, title: "Enroll Course", desc: "Choose your path and join." },
  { icon: PlayCircle, title: "Access Content", desc: "Watch high-quality videos." },
  { icon: Code2, title: "Practice Projects", desc: "Build real-world apps." },
  { icon: MessageCircle, title: "Internship with Stipend", desc: "Gain industry experience with paid opportunities." },
  { icon: Award, title: "Earn Certificate", desc: "Showcase your skills." },
];

export function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: false });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-transparent relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          badge="OUR PROCESS"
          title={
            <>
              <span className="text-white drop-shadow-2xl">How Learning</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg">
                Works
              </span>
            </>
          }
          description="Your journey from beginner to pro in 5 simple steps."
        />

        <div className="relative max-w-5xl mx-auto mt-20">
          
          {/* ================= MOBILE / TABLET VERTICAL LINE (Visible < lg) ================= */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 -ml-[1px] w-[2px] h-full pointer-events-none z-0">
             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#7000ff" stopOpacity="0" />
                   <stop offset="10%" stopColor="#7000ff" stopOpacity="0.5" />
                   <stop offset="90%" stopColor="#00d2ff" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                 </linearGradient>
               </defs>
               {/* Background Track */}
               <path 
                 d="M 1 0 V 1000" 
                 stroke="url(#mobileLineGradient)" 
                 strokeWidth="2" 
                 strokeDasharray="8 8" 
                 className="opacity-30" 
               />
               {/* Moving Particle - Vertical - ROCKET - Only animate if in view */}
               {isInView && (
                 <g filter="url(#glow)">
                   <animateMotion 
                     dur="6s" 
                     repeatCount="indefinite" 
                     path="M 1 0 V 1000"
                     rotate="auto"
                   />
                   <circle r="4" fill="#00d2ff" />
                   <foreignObject width="40" height="40" x="-20" y="-20">
                      <div className="w-full h-full flex items-center justify-center transform rotate-45">
                         <Rocket className="text-electric-blue fill-navy w-6 h-6 animate-pulse" />
                      </div>
                   </foreignObject>
                 </g>
               )}
             </svg>
          </div>

          {/* ================= DESKTOP SNAKE LINE (Visible >= lg) ================= */}
          <div className="hidden lg:block absolute inset-0 -top-8 -z-10 w-full h-full pointer-events-none">
             <svg className="w-full h-full visible" viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
               {/* Definitions for Glow & Gradients */}
               <defs>
                 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                   <feMerge>
                     <feMergeNode in="coloredBlur" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                 </filter>
                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#7000ff" stopOpacity="0.2" />
                   <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#7000ff" stopOpacity="0.2" />
                 </linearGradient>
                 <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#7000ff" />
                   <stop offset="100%" stopColor="#00d2ff" />
                   <stop offset="100%" stopColor="#7000ff" stopOpacity="0.2" /> 
                 </linearGradient>
               </defs>

               {/* Background Track */}
               <motion.path 
                 d="M 166 50 L 833 50 A 100 100 0 0 1 833 250 L 333 250"
                 stroke="url(#lineGradient)"
                 strokeWidth="4"
                 strokeDasharray="10 10"
                 strokeLinecap="round"
                 initial={{ opacity: 0.2 }}
                 animate={{ opacity: [0.2, 0.4, 0.2] }}
                 transition={{ duration: 3, repeat: Infinity }}
               />

               {/* Active Line - Fully Drawn Track */}
               <path
                 d="M 166 50 L 833 50 A 100 100 0 0 1 833 250 L 333 250"
                 stroke="url(#activeGradient)"
                 strokeWidth="2"
                 strokeLinecap="round"
                 className="opacity-50"
               />

               {/* Continuous Moving Particle - ROCKET - Only animate if in view */}
               {isInView && (
                 <g filter="url(#glow)">
                   <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.96;1" dur="8s" repeatCount="indefinite" />
                   <animateMotion 
                     dur="8s" 
                     repeatCount="indefinite" 
                     path="M 166 50 L 833 50 A 100 100 0 0 1 833 250 L 333 250"
                     rotate="auto"
                   />
                   <circle r="4" fill="#00d2ff" />
                   
                   {/* Rocket Icon following the path */}
                   <foreignObject width="40" height="40" x="-20" y="-20">
                      <div className="w-full h-full flex items-center justify-center transform rotate-45"> {/* Adjust rotation for icon orientation */}
                         <Rocket className="text-electric-blue fill-navy w-6 h-6 animate-pulse" />
                      </div>
                   </foreignObject>
                 </g>
               )}
             </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-20 gap-x-8">
            {/* Steps 0, 1, 2 */}
            {steps.slice(0, 3).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative z-10 will-change-transform"
              >
                  {/* Glowing Orbit Ring */}
                  <div className="relative mb-6 group cursor-pointer bg-navy rounded-full">
                     <div className="absolute inset-0 rounded-full bg-electric-blue/20 blur-xl group-hover:bg-electric-blue/40 transition-all duration-500" />
                     <div className="w-24 h-24 rounded-full bg-navy border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-electric-blue/50">
                        <step.icon size={32} className="text-electric-blue" />
                     </div>
                     {/* Orbit Dot */}
                     <motion.div 
                       className="absolute -inset-2 border border-dashed border-white/20 rounded-full"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-20 gap-x-8 mt-16 lg:mt-20 lg:w-2/3 lg:mx-auto lg:flex-row-reverse relative">
             
             {/* Step 3 (Mentorship) */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3 * 0.2 }}
                className="flex flex-col items-center text-center relative z-10 lg:order-2"
              >
                  <div className="relative mb-6 group bg-navy rounded-full">
                     <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
                     <div className="w-24 h-24 rounded-full bg-navy border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-400/50">
                        <MessageCircle size={32} className="text-cyan-400" />
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{steps[3].title}</h3>
                  <p className="text-gray-400 text-sm max-w-[200px]">{steps[3].desc}</p>
              </motion.div>

              {/* Step 4 (Certificate) - With Celebration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 4 * 0.2 }}
                className="flex flex-col items-center text-center relative z-10 lg:order-1"
              >
                  <div className="relative mb-6 group bg-navy rounded-full">
                     <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl group-hover:bg-purple-500/40 transition-all duration-500" />
                     {/* Pulse Effect for End Goal */}
                     <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping opacity-20" />
                     
                     <div className="w-24 h-24 rounded-full bg-navy border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-purple-500/50">
                        <Award size={32} className="text-purple-500" />
                     </div>
                     
                     {/* Celebration Stars & Crash Effect */}
                     <div className="absolute inset-0 overflow-visible pointer-events-none">
                        {/* Shockwave Ring */}
                        <motion.div 
                           className="absolute inset-0 rounded-full border-2 border-white/50"
                           animate={{ scale: [1, 2], opacity: [0, 0, 1, 0], borderWidth: ["2px", "0px"] }}
                           transition={{ duration: 8, times: [0, 0.9, 0.95, 1], repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div 
                           className="absolute inset-0 rounded-full border border-purple-500/50"
                           animate={{ scale: [1, 2.5], opacity: [0, 0, 1, 0] }}
                           transition={{ duration: 8, times: [0, 0.92, 0.98, 1], repeat: Infinity, ease: "easeOut" }}
                        />

                        {/* Particles Explosion - Only render if in View */}
                        {isInView && [...Array(12)].map((_, i) => { // Reduced from 20 to 12
                           // Random angles and distances
                           const angle = (i * 360) / 12;
                           const radius = 60 + Math.random() * 40;
                           const x = Math.cos(angle * (Math.PI / 180)) * radius;
                           const y = Math.sin(angle * (Math.PI / 180)) * radius;
                           const scale = 0.5 + Math.random();
                           
                           return (
                              <motion.div
                                 key={i}
                                 className="absolute left-1/2 top-1/2 will-change-transform"
                                 initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                                 animate={{ 
                                    x: [0, 0, x], 
                                    y: [0, 0, y],
                                    scale: [0, 0, scale, 0],
                                    opacity: [0, 0, 1, 0],
                                    rotate: [0, 0, 180 + Math.random() * 180]
                                 }}
                                 transition={{ 
                                    duration: 8, 
                                    times: [0, 0.92, 0.96, 1], // Trigger at end of loop overlap
                                    repeat: Infinity, 
                                    ease: "easeOut" 
                                 }}
                              >
                                 {i % 3 === 0 ? (
                                    <Star size={12} className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                                 ) : i % 3 === 1 ? (
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                 ) : (
                                    <div className="w-1.5 h-1.5 rotate-45 bg-purple-500 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
                                 )}
                              </motion.div>
                           )
                        })}
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{steps[4].title}</h3>
                  <p className="text-gray-400 text-sm max-w-[200px]">{steps[4].desc}</p>
              </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
