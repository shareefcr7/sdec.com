"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function WhatsAppButton() {
  const phoneNumber = "917356190621"; // Updated number
  const message = "Hello! I would like to know more about SDEC Academy.";

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center cursor-pointer group"
      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <Link
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3, // Pauses between shakes
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(0,210,255,0.5)] filter"
        >
           {/* Glow Effect - Theme Electric Blue */}
           <div className="absolute inset-2 bg-[#00d2ff] rounded-full blur-2xl opacity-40 animate-pulse" />

          {/* Image with Hue Shift to match theme (Green -> Cyan/Blue) */}
          <div className="relative w-full h-full" style={{ filter: "hue-rotate(50deg) brightness(1.1)" }}>
            <Image
                src="/images/whatsapp-icon-final.png"
                alt="WhatsApp"
                fill
                className="object-contain"
                priority
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
