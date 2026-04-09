"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Sparkles } from "lucide-react";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Our Foundation</p>
          <h2 className="text-5xl md:text-6xl font-bold text-bdn-dark font-sans tracking-tight">
            Our <span className="font-serif italic text-bdn-green font-light">Ecosystem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pl-0">
          {/* Card 1: Quest Expert Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[3rem] p-12 lg:p-16 border border-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden group flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] hover:border-orange-500/10 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-orange-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-500 z-10 border border-orange-100">
              <Compass className="text-orange-500 group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-bdn-dark mb-6 tracking-tight group-hover:text-orange-600 transition-colors duration-500">Quest Expert Ecosystem</h3>
              <p className="text-gray-500 leading-relaxed font-light text-xl">
                We connect top-notch authors and trainers with communities via diverse learning platforms to deliver result-driven, impactful educational experiences.
              </p>
            </div>
            {/* abstract visual */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-15 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700">
               <Image src="/ecosystem.png" alt="Ecosystem" fill sizes="(max-width: 768px) 256px, 256px" className="object-cover rounded-full" />
            </div>
          </motion.div>

          {/* Card 2: Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-bdn-dark text-white p-12 lg:p-16 rounded-[3rem] overflow-hidden group relative flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(27,66,53,0.6)] transition-all duration-500"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 group-hover:opacity-20 text-bdn-greenLight">
              <div className="w-64 h-64 border-[30px] border-current rounded-full blur-xl" />
            </div>

            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-sm group-hover:bg-bdn-green group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(27,66,53,0.6)] transition-all duration-500 border border-white/10 group-hover:border-transparent z-10">
              <Sparkles className="text-bdn-beige group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
            </div>
            <div className="relative z-10 w-full">
              <h3 className="text-4xl font-serif font-bold italic text-bdn-beige mb-6 group-hover:text-white transition-colors duration-500">Value Proposition</h3>
              <p className="text-white/70 leading-relaxed font-light text-xl group-hover:text-white/90 transition-colors duration-500">
                BDN’s unique business model enables individuals and organizations to maximize their potential, opening doors to personal and professional growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
