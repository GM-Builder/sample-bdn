"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-40 bg-[#faf9f6] overflow-hidden">
      {/* Background Soul */}
      <div className="glow glow-beige top-[-10%] right-[-10%] opacity-30" />
      <div className="glow glow-green bottom-[-10%] left-[-10%] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-6">Built for Connection</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-bdn-dark font-sans tracking-tight leading-tight">
            Our Growing <br/><span className="font-serif italic text-bdn-green font-light">Ecosystem.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Card 1: Quest Expert Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative bg-white rounded-[4rem] p-12 md:p-14 lg:p-20 border border-gray-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] overflow-hidden group flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_60px_120px_-30px_rgba(249,115,22,0.15)] transition-all duration-700"
          >
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mb-12 group-hover:bg-orange-500 group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] transition-all duration-700 z-10 border border-orange-100/50">
              <Compass className="text-orange-500 group-hover:text-white transition-colors duration-700" size={36} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-bdn-dark mb-8 tracking-tighter leading-none group-hover:text-orange-600 transition-colors duration-700">Quest Expert Ecosystem</h3>
              <p className="text-gray-500 leading-relaxed font-light text-xl lg:text-2xl">
                Bridging the gap between corporate wisdom and everyday performance through shared learning paths.
              </p>
            </div>
            {/* abstract visual */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 group-hover:scale-110 group-hover:opacity-30 transition-all duration-[2000ms]">
               <Image src="/ecosystem.png" alt="Ecosystem" fill sizes="320px" className="object-cover rounded-full grayscale" />
            </div>
          </motion.div>

          {/* Card 2: Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="bg-bdn-dark text-white p-12 md:p-14 lg:p-20 rounded-[4rem] overflow-hidden group relative flex flex-col justify-between hover:-translate-y-3 hover:shadow-[0_60px_120px_-30px_rgba(27,66,53,0.4)] transition-all duration-700"
          >
            {/* Ambient Interior Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-bdn-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-12 backdrop-blur-sm group-hover:bg-bdn-green group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(27,66,53,0.5)] transition-all duration-700 border border-white/10 group-hover:border-transparent z-10">
              <Sparkles className="text-bdn-beige group-hover:text-white transition-colors duration-700" size={36} strokeWidth={1} />
            </div>
            <div className="relative z-10 w-full">
              <h3 className="text-4xl lg:text-5xl font-serif font-bold italic text-bdn-beige mb-8 group-hover:text-white transition-colors duration-700 leading-none">The Value Exchange</h3>
              <p className="text-white/60 leading-relaxed font-light text-xl lg:text-2xl group-hover:text-white/90 transition-colors duration-700">
                Maximizing human potential by creating environments where personal growth fuels organizational profit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
