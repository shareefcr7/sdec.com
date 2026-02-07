"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Terminal, Zap, Code, Shield, Cpu, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useCallback, memo, useRef } from "react";

// --- Types & Constants ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
  workImage: string;
  bio: string;
  quote: string;
  icon: any;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "ADARSHA-K",
    role: "CEO",
    image: "/images/team/team_ceo.png",
    workImage: "/images/team/bg_ceo.png",
    bio: "GLOBAL STRATEGY & VISION",
    quote: "Leading the evolution of technical education with a global vision.",
    icon: Shield
  },
  {
    name: "SHAHANA",
    role: "Academy Specialist",
    image: "/images/team/team_6.png",
    workImage: "/images/team/bg_academy.png",
    bio: "EDUCATIONAL EXCELLENCE",
    quote: "Empowering next-gen talent through structured excellence.",
    icon: Star
  },
  {
    name: "JASEEM",
    role: "Project Head",
    image: "/images/team/team_jaseem.png",
    workImage: "/images/team/bg_project.png",
    bio: "SYSTEM ARCHITECTURE",
    quote: "Turning complex visions into scalable architectural reality.",
    icon: Shield
  },
  {
    name: "MARSHOOK ALI",
    role: "Fullstack Developer",
    image: "/images/team/team_1.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "INTERFACIAL DESIGN",
    quote: "Designing interfaces that bridge human emotion and code.",
    icon: Code
  },
  {
    name: "FAYAS",
    role: "Content Creator",
    image: "/images/team/team_2.png",
    workImage: "/images/team/bg_content.png",
    bio: "DIGITAL STORYTELLING",
    quote: "Translating technical power into compelling digital stories.",
    icon: Zap
  },
  {
    name: "RASHA KP",
    role: "Fullstack Developer",      
    image: "/images/team/team_3.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Architecting seamless systems from core to cloud.",
    icon: Terminal
  },
  {
    name: "SHAREEF CV",
    role: "Fullstack Developer",
    image: "/images/team/team_5.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Building the high-performance backbone of modern web.",
    icon: Cpu
  },
  {
    name: "AJNAS",
    role: "Fullstack Developer",
    image: "/images/team/team_7.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Engineering robust solutions for complex challenges.",
    icon: Code
  },
  { 
    name: "NIVED",
    role: "SOFTWARE TESTER",
    image: "/images/team/nived.png",
    workImage: "/images/team/bg_project.png",
    bio: "TESTING",
    quote: "Testing the code to ensure it works as expected.",
    icon: Shield
  },
  {
    name: "HRITHIK",
    role: "Fullstack Developer",
    image: "/images/team/hrithik.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Crafting interfaces that define the future of interaction.",
    icon: Code
  },
  {
    name: "MINHAJ",
    role: "Fullstack Developer",
    image: "/images/team/minhaj.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Building the invisible backbone of digital reality.",
    icon: Terminal
  },
  {
    name: "DANISH",
    role: "Fullstack Developer",
    image: "/images/team/danish.png",
    workImage: "/images/team/bg_fullstack.png",
    bio: "FULLSTACK DEVELOPER",
    quote: "Building the invisible backbone of digital reality.",
    icon: Cpu
  }
];

const AUTO_PLAY_INTERVAL = 3750; 
const PASSING_DURATION = 0.2;

// --- Sub-Components ---
const TeamCard = memo(({ member, style, isActive }: { member: TeamMember, style: any, isActive: boolean }) => (
  <motion.div
    initial={false}
    animate={{
      x: style.x,
      zIndex: style.zIndex,
      opacity: style.opacity,
      scale: style.scale,
    }}
    transition={{
      duration: PASSING_DURATION,
      ease: [0.22, 1, 0.36, 1]
    }}
    style={{ 
      willChange: "transform, opacity",
      display: style.display 
    }}
    className="absolute w-[260px] md:w-[320px] aspect-[3/4]"
  >
    <div className={`relative w-full h-full rounded-[2rem] overflow-hidden border transition-all duration-500
                    ${isActive ? "border-cyan-500/50 bg-[#080a15] shadow-[0_0_30px_rgba(34,211,238,0.2)]" : "border-white/5 bg-[#05060f]"}
                   `}>
      {/* Glitch/Hologram Effect on Image */}
      <div className="relative w-full h-full"> 
         <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 260px, 320px"
            quality={85}
            priority={isActive}
            className={`object-cover transition-all duration-[2s] ${isActive ? "scale-100 opacity-100" : "scale-110 opacity-50 grayscale"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
      </div>
      
      {/* --- ACTIVE SCANNER UI --- */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none z-20">
            {/* 1. Scanning Line */}
            <motion.div 
               animate={{ top: ["0%", "100%", "0%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-30"
               style={{ willChange: "top" }}
            >
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent" />
            </motion.div>

            {/* 2. Viewfinder Corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />

            {/* 3. Tech Data Overlay */}
            <div className="absolute top-8 left-6 space-y-1">
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="flex items-center gap-2"
                >
                    <Shield size={10} className="text-cyan-400" />
                    <span className="text-[8px] font-mono text-cyan-400 tracking-widest">IDENTITY_VERIFIED</span>
                </motion.div>
                <motion.div 
                    initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, repeat: Infinity }}
                    className="h-[1px] bg-cyan-400/30" 
                />
            </div>
        </div>
      )}
      
      {/* Content Info */}
      <div className="absolute inset-x-0 bottom-0 p-8 transform-gpu z-30 flex flex-col justify-end bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pt-20">
         <motion.h3 
           animate={{ 
             letterSpacing: isActive ? "0px" : "2px",
             backgroundPosition: ["200% center", "-200% center"]
           }}
           transition={{ 
             letterSpacing: { duration: 0.5 },
             backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
           }}
           style={{
             backgroundImage: "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, #22d3ee 50%, #ffffff 55%, #ffffff 100%)",
             backgroundSize: "200% auto",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent"
           }}
           className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-2 leading-none drop-shadow-lg"
         >
           {member.name}
         </motion.h3>
         
         <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <span className={`w-8 h-0.5 ${isActive ? 'bg-cyan-400' : 'bg-white/20'}`} />
                <p className={`${member.role === 'CEO' ? 'text-cyan-400 font-extrabold text-sm md:text-base' : 'text-cyan-400/90 font-bold text-xs md:text-sm'} tracking-widest uppercase`}>
                    {member.role}
                </p>
            </div>
            
            {/* Short Description Reveal */}
            {isActive && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                >
                    <p className="text-[10px] md:text-[11px] text-white/60 font-mono border-l-2 border-cyan-500/20 pl-3 leading-relaxed mt-2 uppercase tracking-wider">
                        // {member.bio}
                    </p>
                </motion.div>
            )}
         </div>
      </div>
    </div>
  </motion.div>
));

TeamCard.displayName = "TeamCard";

// --- Main Component ---
export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 }); // Reduced amount for better triggering

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize Audio
  useEffect(() => {
    if (typeof window !== 'undefined') {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2025/10/20/audio_b0342ad798.mp3?filename=samurai-423024.mp3");
        audioRef.current = audio;
        audio.volume = 0.5;
        audio.loop = true;
    }
  }, []);

  const nextMember = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  }, []);

  // Audio Playback
  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted && isInView && !isMobile) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsMuted(true);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, isInView, isMobile]);

  useEffect(() => {
    if (!isInView) return; 
    const interval = setInterval(nextMember, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextMember, isInView]);

  const getCardStyle = (index: number) => {
    const total = TEAM_MEMBERS.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    const isActive = diff === 0;
    const isNext = diff === 1;
    const isPrev = diff === -1;

    let zIndex = 0;
    let opacity = 0;
    let scale = 0.5;
    let x: string | number = 0;
    let display = "block";

    // Optimized for performance
    if (isActive) {
      zIndex = 50; 
      opacity = 1; 
      scale = isMobile ? 1.05 : 1.2; 
      x = 0;
    } else if (isNext) {
      zIndex = 30; 
      opacity = 0.3; 
      scale = 0.8; 
      x = isMobile ? "80%" : "95%"; 
    } else if (isPrev) {
      zIndex = 30; 
      opacity = 0.3; 
      scale = 0.8; 
      x = isMobile ? "-80%" : "-95%";
    } else {
      x = diff > 0 ? "180%" : "-180%"; 
      opacity = 0;
      display = "none"; 
    }

    return { zIndex, opacity, scale, x, display };
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#010208] perspective-[3500px]">
      {/* Audio Control Toggle */}
      <div className="absolute top-12 right-6 md:right-12 z-[100] flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-cyan-500/20 group flex items-center gap-3"
        >
          {isMuted ? (
            <VolumeX size={18} className="text-white/40 group-hover:text-cyan-400" />
          ) : (
            <div className="relative flex items-center gap-3">
              <div className="flex flex-col items-end hidden md:flex">
                <span className="text-[7px] font-black text-cyan-400/40 uppercase tracking-widest leading-none">Audio</span>
                <span className="text-[10px] font-black text-cyan-400 leading-none">LIVE</span>
              </div>
              <Volume2 size={18} className="text-cyan-400" />
              <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="absolute right-0 inset-y-0 w-4 h-4 m-auto bg-cyan-400 rounded-full -z-10" 
              />
            </div>
          )}
        </motion.button>
      </div>

      {/* Clean Dark Background Environment */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010208] via-transparent to-[#010208]" />
        
        {/* Cinematic Ambient Glow - Simplified for Mobile */}
        {!isMobile && (
            <>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
                {/* Grain Texture - Only on Desktop */}
                <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay" />
            </>
        )}
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#010208_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto mb-20 px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/10 mb-8 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)] animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-cyan-400/50">Core Faculty Profile Scan</span>
          </motion.div>
          
          <div className="flex flex-col items-center select-none relative z-20">
             {/* Small Top Text */}
             <motion.h2 
               initial={{ opacity: 0, letterSpacing: "0.2em", y: 20 }}
               whileInView={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-lg md:text-2xl font-black text-white uppercase tracking-[0.3em] md:tracking-[0.5em] mb-[-1.5rem] md:mb-[-3rem] relative z-20 mix-blend-exclusion"
             >
                Meet Our
             </motion.h2>

             {/* Large Back Text with Fill Animation */}
             <div className="relative">
               <motion.h2 
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-[clamp(5rem,18vw,12rem)] font-black text-transparent uppercase tracking-tighter"
                  style={{ 
                    WebkitTextStroke: '1px rgba(255,255,255,0.4)' 
                  }}
               >
                  Team
               </motion.h2>
               
               {/* Animated Fill Overlay */}
               <motion.h2
                  className="absolute inset-0 text-[clamp(5rem,18vw,12rem)] font-black text-cyan-400/20 uppercase tracking-tighter overflow-hidden"
                  initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                  whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  style={{ 
                    WebkitTextStroke: '0px transparent' 
                  }}
               >
                  Team
               </motion.h2>
             </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6 text-white/10 font-mono text-[9px] uppercase tracking-[0.6em] mt-12"
          >
             <div className="w-16 h-px bg-white/5" />
             <span className="text-white/30 italic">Pioneering Global Tech Standards</span>
             <div className="w-16 h-px bg-white/5" />
          </motion.div>
        </div>

        <div className="relative h-[380px] md:h-[520px] mb-32 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard 
                key={index} 
                member={member} 
                style={getCardStyle(index)} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center"
            >
               <Quote size={28} className="text-cyan-400/20 mb-8" />
               <p className="text-2xl md:text-3xl font-light text-white/90 leading-tight mb-12 tracking-tight italic max-w-3xl">
                  "{TEAM_MEMBERS[activeIndex].quote}"
               </p>

               <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                     <span className="text-cyan-400/60 font-mono text-[9px] tracking-[0.8em] uppercase">
                       Status: Professional Scan Active
                     </span>
                  </div>
                  <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ x: "-100%" }}
                       animate={{ x: "0%" }}
                       transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                       className="h-full bg-cyan-400/40"
                     />
                  </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-5 mt-24">
          {TEAM_MEMBERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative py-4 px-2"
            >
              <div className={`h-1 rounded-full transition-all duration-700 
                              ${i === activeIndex ? "w-12 bg-cyan-400 shadow-[0_0_15px_#22d3ee]" : "w-4 bg-white/10 group-hover:bg-white/30"}
                             `} />
              <span className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-black transition-all duration-500
                                ${i === activeIndex ? "opacity-30 text-cyan-400" : "opacity-0"}`}>
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
