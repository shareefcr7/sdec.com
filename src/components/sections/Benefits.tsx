"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, BookOpen, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const featuresLeft = [
  {
    icon: GraduationCap,
    title: "Certificate of Completion",
    description: "Receive a recognized credential that significantly boosts your resume.",
  },
  {
    icon: Globe,
    title: "Networking Opportunities",
    description: "Connect with peers and valuable industry professionals for growth.",
  }
];

const featuresRight = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Master essential topics and practical skills effectively and thoroughly.",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description: "Learn from experienced instructors for personalized and effective support.",
  }
];

export function Benefits() {
  return (
    <section className="py-16 md:py-20 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="Who We Are"
          title={
            <>
              <span className="text-white drop-shadow-2xl block">-</span>
              <span className="block mt-1 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 drop-shadow-lg font-bold">
                 Tech Training & Career Development
              </span>
            </>
          }
          description="SDEC Academy is a leading offline destination for aspiring developers and tech enthusiasts. We bridge the gap between academic learning and industry requirements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
           
           {/* Left Column */}
           <div className="space-y-12">
              {featuresLeft.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start group"
                >
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all duration-300">
                      <feature.icon className="text-white w-8 h-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Center Card */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
           >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-10 group">
                 <div className="relative w-full rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-lg group-hover:shadow-electric-blue/20 transition-all duration-500">
                    <Image 
                      src="/images/team-premium.jpg"
                      alt="SDEC Academy Team"
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />
                 </div>
                 
                 <div className="space-y-4 text-center">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">About Us</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                       Our academy is built on the belief that learning should create confidence and clarity. We follow a student-first approach, where every learner is treated as a professional from day one. Our focus is on building strong fundamentals, real skills, and a growth-oriented mindset that prepares learners for real-world challenges.
                    </p>
                    
                    <h4 className="text-xl font-bold text-white pt-2 uppercase tracking-wider">What Makes Us Different</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                       We go beyond course completion. Our learners work on real projects, receive personal mentoring and continuous guidance, and gain real company exposure through Shahi Solution. We provide free training and paid internship opportunities. Once a learner joins us, we treat them as a professional developer, not just a student. We also support learners with career guidance, resume preparation, and interview support.
                    </p>
                 </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[40px] blur-2xl -z-10" />
           </motion.div>

           {/* Right Column */}
           <div className="space-y-12">
              {featuresRight.map((feature, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start group"
                >
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-electric-blue/10 group-hover:border-electric-blue/30 transition-all duration-300">
                      <feature.icon className="text-white w-8 h-8" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                   </div>
                </motion.div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
}
