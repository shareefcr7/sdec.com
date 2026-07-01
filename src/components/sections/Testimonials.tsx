"use client";

import { motion } from "framer-motion";
import { Star, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    id: 1,
    name: "Fayas",
    role: "Content Creator",
    text: "Transforming technical concepts into engaging content was my goal. SDEC gave me the platform to blend technology with creativity perfectly.",
    image: "/images/team/team_2.png"
  },
  {
    id: 2,
    name: "Naima Nurin",
    role: "Backend Developer",
    text: "Understanding server architecture and database management was challenging but rewarding. The support from mentors made the complex easy to master.",
    image: "/testimonials/naima.png"
  },
  {
    id: 3,
    name: "Muhammed Yasir",
    role: "Full Stack Developer",
    text: "Building full-stack applications from scratch gave me a deep understanding of the web. The curriculum excellence is truly industry-standard.",
    image: "/testimonials/yasir.png"
  },
  {
    id: 4,
    name: "Sharfas",
    role: "Backend Developer",
    text: "The focus on scalable code and best practices set this course apart. I learned skills that are actually used in top-tier tech companies.",
    image: "/testimonials/sharfas.png"
  },
  {
    id: 5,
    name: "Sivanand",
    role: "Frontend Developer",
    text: "It's not just about tools, it's about design thinking. I learned how to create user-centric designs that truly stand out in the market.",
    image: "/testimonials/sivanand.png"
  },
  {
    id: 6,
    name: "Marshook Ali",
    role: "Fullstack Developer",
    text: "From basic HTML to complex React architectures, the mentorship here allowed me to bridge the gap between design and functionality seamlessly.",
    image: "/images/team/team_1.png"
  },
  {
    id: 7,
    name: "Rasha KP",
    role: "Fullstack Developer",
    text: "The structured curriculum and hands-on projects helped me master the full stack ecosystem. I now build scalable systems with confidence.",
    image: "/images/team/team_3.png"
  },
  {
    id: 8,
    name: "Shareef CV",
    role: "Fullstack Developer",
    text: "Mastering the MERN stack here was a turning point. The real-time projects gave me the confidence to handle high-performance web applications.",
    image: "/images/team/team_5.png"
  },
  {
    id: 12,
    name: "Nived",
    role: "Software Tester",
    text: "I learned that quality is as important as code. The rigorous testing modules helped me ensure software reliability and stability in production.",
    image: "/images/team/nived.png"
  },
  {
    id: 13,
    name: "Hrithik",
    role: "Fullstack Developer",
    text: "Creating intuitive user experiences requires deep technical knowledge. This course gave me the tools to build future-ready interfaces.",
    image: "/images/team/hrithik.png"
  },
  {
    id: 14,
    name: "Minhaj",
    role: "Fullstack Developer",
    text: "Understanding the backend logic while perfecting the frontend UI was a challenge I overcame here. Now I build complete digital solutions.",
    image: "/images/team/minhaj.png"
  },
  {
    id: 15,
    name: "Danish",
    role: "Fullstack Developer",
    text: "The transition from code to deployment was smooth thanks to the expert guidance. I can now bring any complex digital idea to life.",
    image: "/images/team/danish.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">

      {/* Background Gradient & Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1021] pointer-events-none opacity-100" />
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          badge="TESTIMONIALS"
          title={
            <>
              <span className="text-white drop-shadow-2xl">Success</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 drop-shadow-lg">
                Stories
              </span>
            </>
          }
          description="See what our students are achieving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-navy-light/40 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-navy-light/60 transition-all duration-300 border border-white/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="absolute top-8 right-8">
                <div className="w-8 h-8 flex items-center justify-center rounded bg-[#0077b5] text-white cursor-pointer hover:bg-[#006097] transition-colors">
                  <Linkedin size={18} />
                </div>
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-electric-blue/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image fails (using a gradient placeholder)
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{t.name}</h4>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
