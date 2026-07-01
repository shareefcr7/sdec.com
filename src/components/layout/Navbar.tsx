"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Body scroll lock effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500",
          isScrolled
            ? "bg-[#010208]/90 backdrop-blur-2xl border-b border-white/5 py-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-8"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* ... Logo Section ... */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-electric to-electric-blue flex items-center justify-center shadow-[0_0_30px_rgba(112,0,255,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Zap className="text-white fill-white relative z-10" size={20} />
            </motion.div>

            <div className="flex flex-col justify-center -space-y-1">
              <div className="flex">
                {"SDEC".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-lg md:text-xl font-black text-white tracking-[0.2em] uppercase leading-none"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex mt-1">
                {"ACADEMY".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-[8px] md:text-[10px] font-bold text-electric-blue tracking-[0.4em] uppercase opacity-80"
                    animate={{ y: [0, -2, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 + 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Nav - High Visibility Update */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group/nav",
                  isScrolled ? "text-white" : "text-white/50 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-px bg-cyan-400 transition-all duration-300",
                  isScrolled ? "w-full" : "w-0 group-hover/nav:w-full"
                )} />
              </Link>
            ))}

            <Link href="/courses">
              <Button className="h-11 px-8 rounded-xl bg-white text-navy font-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/90 shadow-xl transition-all">
                Join Elite
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="md:hidden text-white/70 hover:text-white p-2 transition-colors bg-white/5 rounded-xl border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

      </motion.nav>

      {/* Mobile Menu Overlay - Premium Glass Version */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#010208] z-[99999] flex flex-col overflow-hidden"
          >
            {/* Minimalist Header */}
            <div className="flex items-center justify-between px-8 py-10 shrink-0 border-b border-white/5 bg-[#010208]">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-electric-blue flex items-center justify-center">
                  <Zap className="text-white fill-white" size={20} />
                </div>
                <span className="text-xl font-black text-white tracking-widest uppercase">SDEC</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-12 relative z-10 custom-scrollbar">
              <div className="flex flex-col gap-3">
                <span className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase mb-2 ml-4">Navigation Index</span>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group w-full py-5 px-6 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.08] hover:border-cyan-500/30 flex items-center justify-between"
                    >
                      <span
                        className="text-2xl md:text-3xl font-black tracking-tighter uppercase transition-all duration-500
                                   text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 group-hover:text-white group-hover:tracking-normal"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
                      >
                        {link.name}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 transition-all group-hover:bg-cyan-500 group-hover:border-transparent">
                        <ChevronRight className="text-white/30 group-hover:text-white" size={18} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-10 text-center border-t border-white/5 bg-[#010208]">
              <p className="text-white/10 text-[9px] font-bold tracking-[0.3em] uppercase italic">PIONEER. INNOVATE. SCALE. © 2026 SDEC ACADEMY</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
