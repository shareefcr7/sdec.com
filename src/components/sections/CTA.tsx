"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Terminal, Cpu, Globe, Zap, Server, Shield, Smartphone, ArrowRight, Layers, Database, GraduationCap, BookOpen, Rocket, Trophy, Target, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const RisingTechIcons = () => {
  const icons = [Code, GraduationCap, Terminal, BookOpen, Rocket, Cpu, Trophy, Globe, Target, Zap, Server, Award];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {[...Array(24)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const randomLeft = Math.random() * 100;
        const randomDuration = 12 + Math.random() * 15; // Faster, more "live"
        const randomDelay = Math.random() * 20;
        const randomSize = 24 + Math.random() * 20;

        return (
          <motion.div
            key={i}
            className="absolute bottom-0 text-cyan-100/30" // Brighter/Lighter base
            style={{ left: `${randomLeft}%` }}
            initial={{ y: "10vh", opacity: 0, scale: 0.5 }}
            animate={{ 
              y: "-120vh", 
              opacity: [0, 0.8, 0.8, 0], // Higher visibility
              scale: [0.5, 1, 1, 0.5],
              rotate: [0, 20, -20, 0]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          >
             {/* Icon with Glow */}
            <Icon 
                size={randomSize} 
                strokeWidth={1.5} 
                className="drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]" 
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const EcosystemCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let animationFrameId: number;

        const particles: Particle[] = [];
        const particleCount = 60; // Reduced for performance
        const connectionDistance = 100;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5 + 0.5;
                this.color = Math.random() > 0.5 ? "rgba(34, 211, 238, " : "rgba(59, 130, 246, "; 
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + "0.6)"; 
                ctx.fill();
            }
        }

        // Init
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.2})`; 
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
             width = canvas.width = window.innerWidth;
             height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />;
}

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#020617]">
      {/* --- BACKGROUND ANIMATION --- */}
      <EcosystemCanvas />
      <RisingTechIcons />

      {/* Cinematic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] p-8 md:p-24 max-w-5xl mx-auto shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden group"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
           {/* Animated Border Line */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-100/80 font-bold tracking-[0.25em] uppercase text-[10px]">
                Direct Career Path
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white mb-8 md:mb-12 tracking-tighter leading-[1] uppercase drop-shadow-2xl">
              Ready to claim <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-2 animate-text-shimmer bg-[length:200%_auto]">
                Your Future?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/60 mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide px-4">
              Join the elite ecosystem of developers building the next generation of digital infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4 w-full md:w-auto">
              <Link href="/courses" className="w-full md:w-auto">
                <Button className="w-full md:w-auto h-14 md:h-16 px-10 md:px-12 text-xs font-black uppercase tracking-[0.2em] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all border-none">
                  Join Elite Now
                </Button>
              </Link>
              <Link href="/courses" className="w-full md:w-auto">
                 <Button variant="secondary" className="w-full md:w-auto h-14 md:h-16 px-10 md:px-12 text-xs font-black uppercase tracking-[0.2em] rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white hover:border-white/20 transition-all backdrop-blur-sm">
                  Browse Tracks
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

       <style jsx global>{`
        .fade-mask {
            mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </section>
  );
}
