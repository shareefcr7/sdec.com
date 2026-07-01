"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Keeping for types if needed, but not used in JSX anymore
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "What is SDEC Academy?",
    answer: "SDEC is a premium career enablement platform. We combine industry-relevant skills with real-world experience, helping you build a professional portfolio while you learn."
  },
  {
    question: "Why choose our courses?",
    answer: "Our training goes beyond theory. You will work on live company projects, build your personal brand, and gain the confidence to deliver real products to clients."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Absolutely. Our curriculum is tailored for all levels. We provide step-by-step guidance for beginners and advanced specialized modules for experienced professionals."
  },
  {
    question: "Do you provide certification?",
    answer: "Yes. Upon completion, you receive a recognized industry certification from SDEC. This validates your skills and significantly enhances your job prospects."
  }
];

// Animated Plus/X Icon
// Animated Plus/Asterisk Icon
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${isOpen ? "bg-cyan-400 rotate-180" : "bg-white group-hover:scale-105"}`}>
      {/* Plus Icon (Closed State) */}
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
        className="absolute"
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-navy rounded-full" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-navy rounded-full" />
      </motion.div>

      {/* Asterisk Icon (Open State) - Simulated with 3 lines */}
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 180 : 0 }}
        className="absolute"
      >
         {/* Center dot/hub handled by crossing lines */}
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-navy rounded-full" />
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-navy rounded-full rotate-60" />
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-navy rounded-full -rotate-60" />
      </motion.div>
    </div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 relative bg-transparent overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">


        <SectionHeading
          badge="FAQ"
          title={
            <>
              <span className="text-white drop-shadow-2xl">Frequently Asked</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg">
                Questions
              </span>
            </>
          }
          description="Got questions? We've got answers."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)" }}
              className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                  {faq.question}
                </span>
                <AccordionIcon isOpen={openIndex === index} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
