"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const slides = [
    {
       title: "Bina Daya Nugraha",
       subtitle: "Helping People Thrive",
       desc: "We don't just build systems; we nurture the human spirit behind every organization.",
       image: "/team-building-realistic.png",
       tag: "Human Connection"
    },
    {
       title: "Module Development",
       subtitle: "Logic Meets Heart",
       desc: "Standardize your corporate wisdom into replicable, high-impact learning paths.",
       image: "/ecosystem.png",
       tag: "Internal Growth"
    },
    {
       title: "TotLE Camp",
       subtitle: "Signature Immersion",
       desc: "A life-changing journey designed to profoundly enhance IQ, EQ, and SQ.",
       image: "/gallery1.png",
       tag: "Total Transformation"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="glow glow-green top-[-10%] right-[-10%] opacity-10" />
      <div className="glow glow-beige bottom-[10%] left-[-10%] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-12">
          
          <motion.div 
            style={{ y: y2 }}
            className="flex-1 space-y-8 min-h-[420px] flex flex-col justify-center"
          >
            {/* STATIC LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-bdn-beige/50 border border-bdn-green/10 text-bdn-green font-medium text-sm">
                 Heart-Led Corporate Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight leading-[1.1] text-bdn-dark">
                Bringing <span className="font-serif italic font-normal text-bdn-green">Soul</span> <br />
                Back to Business.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                Empowering individuals and communities to excel by putting people first. 
                Experience a more human approach to HR development.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <MagneticButton>
                <a
                  href="#services"
                  className="group flex items-center justify-center gap-2 px-10 py-5 bg-bdn-green text-white rounded-full font-bold text-lg hover:bg-bdn-greenLight transition-all shadow-[0_20px_40px_-10px_rgba(27,66,53,0.3)]"
                >
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
              
              <div className="mx-4 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-md">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                        alt="user" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold block text-bdn-dark">Trusted by 500+</span>
                  <span className="text-xs text-gray-400">Industry Leaders</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[3rem] bg-bdn-green/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].image}
                    alt={slides[current].title}
                    fill
                    priority
                    className="object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bdn-dark/60 via-transparent to-transparent" />
                  
                  {/* OVERLAY DYNAMIC TEXT */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-10">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-xs mb-3 self-start"
                    >
                       {slides[current].tag}
                    </motion.div>
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl lg:text-4xl font-bold font-sans tracking-tight mb-2"
                    >
                       {slides[current].title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm md:text-base text-white/80 font-light"
                    >
                       {slides[current].desc}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-700 ${i === current ? "w-12 bg-bdn-beige" : "w-3 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Element - Asymmetry */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-bottom-10 lg:-right-10 bg-white p-6 rounded-3xl shadow-xl z-30 max-w-[200px] border border-bdn-light hidden lg:block"
            >
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full bg-bdn-green animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Impact</span>
               </div>
               <p className="text-xs text-bdn-dark font-medium leading-relaxed">
                 Helping <span className="text-bdn-green font-bold">12,000+</span> people find their potential this year.
               </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
