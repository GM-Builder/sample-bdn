"use client";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, TrendingUp, HeartHandshake, Lightbulb } from "lucide-react";

export default function CorporateValues() {
  const values = [
    {
      title: "Integrity",
      desc: "Honesty and morality are at our core, guided by divine principles in every decision.",
      icon: ShieldCheck,
      color: "from-bdn-green to-bdn-greenLight"
    },
    {
      title: "Professionalism",
      desc: "Striving for excellence with competence and a commitment to global standards.",
      icon: UserCheck,
      color: "from-[#265b49] to-[#367d64]"
    },
    {
      title: "Efficiency",
      desc: "Optimizing results while respecting the precious resources of our partners.",
      icon: TrendingUp,
      color: "from-[#367d64] to-[#45a382]"
    },
    {
      title: "Customer-Centric",
      desc: "Listening deeply to understand your story and deliver solutions that truly matter.",
      icon: HeartHandshake,
      color: "from-bdn-dark to-bdn-green"
    },
    {
      title: "Creativity",
      desc: "Finding the spark of innovation in every challenge, tailored for the future of work.",
      icon: Lightbulb,
      color: "from-[#45a382] to-[#55c8a0]"
    },
  ];

  return (
    <section id="values" className="relative py-40 bg-[#faf9f6]">
      {/* Background Soul */}
      <div className="glow glow-green top-10 left-[-10%] opacity-[0.05]" />
      <div className="glow glow-beige bottom-20 right-[-10%] opacity-40" />

      <div className="max-w-4xl mx-auto px-6 text-center mb-32 relative z-10">
        <p className="text-sm font-bold tracking-[0.3em] text-[#45a382] uppercase mb-6">Our DNA</p>
        <h2 className="text-5xl md:text-8xl font-bold font-sans text-bdn-dark leading-none">
          Rooted in <br/><span className="font-serif italic text-bdn-green font-light">Belief.</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-64 relative flex flex-col gap-12 z-10">
        {values.map((val, i) => (
          <motion.div
            key={val.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="sticky w-full rounded-[3.5rem] md:rounded-[5rem] p-12 md:p-20 shadow-[0_50px_100px_-20px_rgba(27,66,53,0.12)] flex flex-col md:flex-row items-center gap-12 md:gap-20 border border-white bg-white/70 backdrop-blur-3xl"
            style={{ 
              top: `calc(12vh + ${i * 40}px)`, 
              zIndex: i 
            }}
          >
            {/* 3D-like Icon Block */}
            <div className={`w-36 h-36 md:w-56 md:h-56 rounded-[2.5rem] shrink-0 flex items-center justify-center bg-gradient-to-br ${val.color} shadow-2xl relative`}>
               <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] border-t border-l border-white/20" />
               <val.icon className="text-white relative z-10 drop-shadow-2xl" size={72} strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-bold text-bdn-dark mb-6 tracking-tighter leading-none">{val.title}</h3>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                {val.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
