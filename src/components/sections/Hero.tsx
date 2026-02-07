"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Database, Server, GitBranch, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const FloatingIcon = ({ icon: Icon, delay, x, y, color }: any) => (
  <motion.div
    className={`absolute hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg ${color}`}
    initial={{ opacity: 0, scale: 0, x, y }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [y, y - 20, y],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      opacity: { duration: 0.5, delay: delay },
      scale: { duration: 0.5, delay: delay }
    }}
    style={{ willChange: "transform" }}
  >
    <Icon size={32} />
  </motion.div>
);

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: false });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
      {/* --- CINEMATIC FLOWING BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none z-10 hidden md:block" />
        
        {/* Only animate background if in view */}
        {isInView && (
          <motion.div
            className="absolute inset-x-[-20%] inset-y-[-20%] w-[140%] h-[140%]"
            initial={{ scale: 1.1, rotate: 0 }}
            animate={{ 
              scale: [1.1, 1.2, 1.1],
              x: ["-3%", "3%", "-3%"],
              y: ["-2%", "2%", "-2%"],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 15, // Faster movement
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ willChange: "transform" }}
          >
            <Image 
              src="/images/hero_particles.png"
              alt="Cinematic Flowing Particles"
              fill
              sizes="100vw"
              className="object-cover opacity-60 mix-blend-screen scale-110"
              priority
            />
          </motion.div>
        )}

        {/* Dynamic Light Streaks - Only if in view */}
        {isInView && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(isMobile ? 2 : 4)].map((_, i) => ( // Reduced from 3/6 to 2/4
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                style={{ 
                  width: "40%",
                  top: `${20 + i * 15}%`,
                  left: "-50%",
                  willChange: "left"
                }}
                animate={{ left: "120%" }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  delay: i * 2,
                  ease: "linear" 
                }}
              />
            ))}
          </div>
        )}

        {/* Extra Active Stardust - Only rendered if mounted and in view */}
        {mounted && isInView && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(isMobile ? 8 : 25)].map((_, i) => ( // Reduced from 10/50 to 8/25
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100 + (Math.random() - 0.5) * 10}%`],
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100 + (Math.random() - 0.5) * 10}%`],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * i
                }}
                style={{ willChange: "transform, opacity" }}
              />
            ))}
          </div>
        )}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-blue-900/5 to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(2,6,23,0.95)_100%)]" />
      </div>

      {/* --- BACKGROUND DECORATION LAYER (Behind Text) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        {isInView && (
          <>
            <FloatingIcon icon={Code} delay={0} x={-550} y={-250} color="text-blue-500/30" />
            <FloatingIcon icon={Server} delay={1} x={550} y={-200} color="text-green-500/30" />
            <FloatingIcon icon={Database} delay={0.5} x={-600} y={300} color="text-yellow-500/30" />
            <FloatingIcon icon={GitBranch} delay={1.5} x={600} y={350} color="text-orange-500/30" />
            <FloatingIcon icon={Terminal} delay={2} x={0} y={-450} color="text-gray-500/30" />
          </>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="will-change-transform"
        >
          <div className="inline-flex items-center gap-3 py-2.5 px-6 md:px-10 rounded-full bg-white/5 text-white/70 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-12 border border-white/10 backdrop-blur-3xl shadow-[0_0_40px_rgba(0,210,255,0.1)]">
            <div className="w-2 h-2 rounded-full bg-electric-blue animate-ping shadow-[0_0_15px_#00d2ff]" />
            Launch your career in tech
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="flex flex-col items-center justify-center text-center relative z-20">
            {/* Background Layer Text - ICE EFFECT */}
            <div className="flex flex-col items-center leading-[0.8] select-none pointer-events-none">
              <span className="text-[clamp(3.5rem,9vw,8rem)] font-black tracking-tighter uppercase whitespace-nowrap
                             text-transparent bg-clip-text bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                    style={{ WebkitTextStroke: '1px rgba(67, 185, 227, 0.3)' }}>
                Master The
              </span>
              <span className="text-[clamp(3.5rem,9vw,8rem)] font-black tracking-tighter uppercase whitespace-nowrap
                             text-transparent bg-clip-text bg-gradient-to-b from-white/40 via-white/10 to-transparent"
                    style={{ WebkitTextStroke: '1px rgba(67, 185, 227, 0.3)' }}>
                Future
              </span>
            </div>

            {/* Middle Layer */}
            <span className="text-white font-black text-lg md:text-2xl tracking-[0.5em] uppercase -mt-2 md:-mt-6 mb-4 relative z-10 drop-shadow-lg">
              Of
            </span>

            {/* Foreground Main Text */}
            <span className="relative text-[clamp(2.5rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]
                           text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]
                           filter drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] z-20 px-4">
              Web Development
              <div className="absolute -inset-20 bg-blue-500/20 blur-[100px] -z-10 rounded-full animate-pulse opacity-50" />
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-sm md:text-xl text-blue-100/80 mb-8 md:mb-16 max-w-4xl mx-auto font-medium leading-relaxed tracking-[0.15em] md:tracking-[0.3em] uppercase px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="text-cyan-400 font-black">Premier Tech Training</span> & Career Development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link href="#courses" className="w-full sm:w-auto">
            <Button size="lg" className="w-full h-12 md:h-16 px-8 md:px-16 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl bg-white text-navy hover:scale-105 shadow-2xl transition-all">
              Start Now
            </Button>
          </Link>
          <Link href="/courses" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full h-12 md:h-16 px-8 md:px-16 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl border-white/10 hover:bg-white/5 text-white transition-all">
              Explore
            </Button>
          </Link>
        </motion.div>
      </div>

       {/* Scroll Indicator - Only if in view */}
       {isInView && (
         <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-black">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-electric-blue to-transparent" />
        </motion.div>
       )}
    </section>
  );
}
