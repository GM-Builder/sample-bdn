"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const slides = [
    {
       title: "Team Building",
       subtitle: "Unleash Corporate Energy",
       desc: "Transform groups of individuals into a highly synergistic, cohesive unit through immersive, fun, and strategic activities.",
       image: "/team-building.png",
       tag: "Engagement & Synergy"
    },
    {
       title: "Module Development",
       subtitle: "Pedagogical Excellence",
       desc: "Design and standardize training materials to ensure systematic, replicable learning outcomes that strengthen knowledge management.",
       image: "/ecosystem.png",
       tag: "Logic & Structure"
    },
    {
       title: "Learning Event Organizer",
       subtitle: "Flawless Execution",
       desc: "Simplify your event management for workshops, seminars, and corporate gatherings with our end-to-end organizational support.",
       image: "/gallery1.png",
       tag: "Reliable & Seamless"
    },
    {
       title: "Corporate Trainings",
       subtitle: "Elevating Potential",
       desc: "Develop skills, enhance awareness, and standardize professional behavior through high-impact interactive training programs.",
       image: "/hero.png",
       tag: "Skill & Behavior"
    },
    {
       title: "TotLE Camp",
       subtitle: "Signature Experience",
       desc: "Our masterpiece. An all-in-one immersive learning program designed to profoundly enhance IQ, EQ, and SQ.",
       image: "/gallery1.png",
       tag: "Total Transformation"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">
          
          <div className="flex-1 space-y-8 min-h-[420px] flex flex-col justify-center">
            
            {/* STATIC LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-bdn-beige/50 border border-bdn-green/10 text-bdn-green font-medium text-sm">
                 #1 HR Solutions Partner
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight leading-[1.1] text-bdn-dark">
                Empowering <br />
                <span className="font-serif italic font-normal text-bdn-green">Communities</span> <br />
                to Excel
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                At Bina Daya Nugraha (BDN), we are committed to helping individuals,
                organizations, and communities enhance their performance, productivity,
                and profitability through innovative human resource development solutions.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a
                href="#services"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-bdn-green text-white rounded-full font-bold text-lg hover:bg-bdn-greenLight transition-all shadow-lg"
              >
                Get Started Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="mx-4 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${10+i}`} 
                        alt="user" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold block text-bdn-dark">5.0 ★★★★★</span>
                  <span className="text-xs text-gray-500">from 500+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] bg-bdn-green/5 shadow-2xl">
              <AnimatePresence>
                <motion.div
                  key={current}
                  initial={{ x: "100%", opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].image}
                    alt={slides[current].title}
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover"
                  />
                  {/* Subtle dark gradient overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bdn-dark via-bdn-dark/40 to-transparent mix-blend-multiply opacity-80" />
                  
                  {/* OVERLAY DYNAMIC TEXT */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10 pb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium text-xs mb-3 self-start">
                       {slides[current].tag}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold font-sans tracking-tight mb-2">
                       {slides[current].title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 line-clamp-2">
                       {slides[current].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-bdn-beige" : "w-2 bg-white/50 backdrop-blur-sm hover:bg-white"}`}
                  />
                ))}
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-bdn-green/10 rounded-full blur-[100px] pointer-events-none z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
