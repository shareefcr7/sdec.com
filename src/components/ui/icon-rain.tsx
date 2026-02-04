"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface IconRainProps {
  icons: LucideIcon[];
  className?: string;
  count?: number;
}

export function IconRain({ icons, className, count = 12 }: IconRainProps) {
  const [items, setItems] = useState<{ Icon: LucideIcon; x: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random rain items on client-side only to avoid hydration mismatch
    const isMobile = window.innerWidth < 768;
    const finalCount = isMobile ? Math.min(count, 8) : count;
    
    const newItems = Array.from({ length: finalCount }).map(() => ({
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 10, // 10-25s duration
    }));
    setItems(newItems);
  }, [icons, count]);

  if (items.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5 top-[-50px]"
          style={{ left: item.x, willChange: 'transform' }}
          animate={{ 
            y: ["0vh", "120vh"],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: item.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: item.delay 
          }}
        >
          <item.Icon size={32} />
          {/* Trail Effect */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-current opacity-50" />
        </motion.div>
      ))}
    </div>
  );
}
