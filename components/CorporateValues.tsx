"use client";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, TrendingUp, HeartHandshake, Lightbulb } from "lucide-react";

export default function CorporateValues() {
  const values = [
    {
      title: "Integrity",
      desc: "Upholding honesty, ethics, and morality guided by divine principles.",
      icon: ShieldCheck,
      color: "from-bdn-green to-bdn-greenLight"
    },
    {
      title: "Professionalism",
      desc: "Delivering services with competence, adherence to standards, and operational excellence.",
      icon: UserCheck,
      color: "from-[#265b49] to-[#367d64]"
    },
    {
      title: "Effectiveness & Efficiency",
      desc: "Achieving targets and optimizing resource utilization.",
      icon: TrendingUp,
      color: "from-[#367d64] to-[#45a382]"
    },
    {
      title: "Customer-Centric",
      desc: "Prioritizing customer needs and delivering unparalleled satisfaction.",
      icon: HeartHandshake,
      color: "from-bdn-dark to-bdn-green"
    },
    {
      title: "Creativity",
      desc: "Generating innovative solutions tailored to today’s needs.",
      icon: Lightbulb,
      color: "from-[#45a382] to-[#55c8a0]"
    },
  ];

  return (
    <section id="values" className="py-40 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6 text-center mb-32">
        <p className="text-sm font-bold tracking-widest text-[#45a382] uppercase mb-4">The DNA of BDN</p>
        <h2 className="text-5xl md:text-7xl font-bold font-sans text-bdn-dark">
          Corporate <span className="font-serif italic text-bdn-green font-light">Values</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-64 relative flex flex-col gap-8">
        {values.map((val, i) => (
          <motion.div
            key={val.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="sticky w-full rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(27,66,53,0.08)] flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-white bg-white/80 backdrop-blur-2xl"
            style={{ 
              top: `calc(15vh + ${i * 30}px)`, 
              zIndex: i 
            }}
          >
            {/* 3D-like Icon Block */}
            <div className={`w-32 h-32 md:w-48 md:h-48 rounded-[2rem] shrink-0 flex items-center justify-center bg-gradient-to-br ${val.color} shadow-inner`}>
               <div className="w-full h-full bg-white/10 rounded-[2rem] flex items-center justify-center backdrop-blur-sm border-t border-l border-white/20 shadow-2xl">
                 <val.icon className="text-white drop-shadow-md" size={64} strokeWidth={1.5} />
               </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-bdn-dark mb-4 tracking-tight">{val.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {val.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
