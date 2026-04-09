"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Users, 
  BookOpen, 
  CalendarDays, 
  GraduationCap, 
  Compass, 
  ShieldCheck, 
  Briefcase, 
  Zap, 
  Heart, 
  Lightbulb
} from "lucide-react";

export default function BentoSection() {
  const services = [
    {
      title: "Team Building",
      desc: "Foster team cohesion, communication, and synergy through immersive experiences.",
      icon: Users,
    },
    {
      title: "Module Development",
      desc: "Design and standardize training materials for structured, systematic learning.",
      icon: BookOpen,
    },
    {
      title: "Learning Event Organizer",
      desc: "End-to-end support for workshops, seminars, and gatherings.",
      icon: CalendarDays,
    },
    {
      title: "Integrity & Professionalism",
      desc: "Upholding honesty, ethics, and delivering operational excellence.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-bdn-light">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider text-bdn-green uppercase mb-2">Our Ecosystem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-bdn-dark font-sans mb-6">
            Make your HR investment, <br/> <span className="font-serif italic text-bdn-green">Well-spent</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Value Proposition (Spans 2 cols on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative bg-bdn-green text-white p-10 rounded-[2rem] overflow-hidden group flex flex-col justify-end"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
              <div className="w-48 h-48 border-[20px] border-white/40 rounded-full" />
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <h3 className="text-3xl font-serif mb-4">Value Proposition</h3>
              <p className="text-white/80 leading-relaxed font-medium">
                BDN’s unique business model enables individuals and organizations to maximize their potential, opening doors to personal and professional growth.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ecosystem Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-bdn-beige rounded-[2rem] overflow-hidden w-full h-full p-6 flex flex-col justify-between group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Compass className="text-bdn-green" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-bdn-dark mt-4 mb-2">Quest Expert</h3>
            <p className="text-gray-600 text-sm">Top-notch authors and trainers connected directly to you.</p>
            {/* The absolute image */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-70 group-hover:scale-110 transition-transform duration-500">
               <Image src="/ecosystem.png" alt="Ecosystem" fill sizes="(max-width: 768px) 160px, 160px" className="object-cover rounded-full" />
            </div>
          </motion.div>

          {/* Cards 3-6: Expertise & Services */}
          {services.map((srv, i) => (
             <motion.div 
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[2rem] flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
               <div className="w-12 h-12 bg-bdn-light rounded-xl flex items-center justify-center mb-6">
                 <srv.icon className="text-bdn-dark" size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
             </motion.div>
          ))}

          {/* Card 7: TotLe Camp (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#f4ebd0] p-10 rounded-[2rem] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10 w-full md:w-3/4">
               <div className="mb-4 inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-bold text-bdn-dark uppercase">Featured</div>
               <h3 className="text-3xl font-bold mb-4 text-bdn-dark">Total Learning Experience (TotLE) Camp</h3>
               <p className="text-gray-700 leading-relaxed max-w-lg mb-6">
                 An all-in-one immersive learning program combining team building, training, seminars, coaching, and project-based activities tailored for diverse learning preferences.
               </p>
            </div>
            
            {/* Abstract Decorative elements */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-30 pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-bdn-dark/40"></div>
                <div className="w-48 h-48 rounded-full border border-bdn-dark/40 absolute -left-8"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
