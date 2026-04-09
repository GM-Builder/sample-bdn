"use client";
import { motion, Variants } from "framer-motion";
import { Users, BookOpen, CalendarDays, Presentation, Tent, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const servicesList = [
    {
      title: "Team Building",
      icon: Users,
      desc: "Creating bonds that transcend the office through shared human experiences.",
      href: "/services/team-building",
      className: "md:col-span-1 md:row-span-2 bg-[#1b4235] text-white",
      iconClass: "bg-white/10 text-bdn-beige",
      descClass: "text-white/70",
      image: "/team-building-realistic.png"
    },
    {
      title: "Module Development",
      icon: BookOpen,
      desc: "Structuring your wisdom into clear, replicable paths for your team.",
      href: "/services/module-development",
      className: "md:col-span-1 md:row-span-1 bg-white border border-gray-100",
      iconClass: "bg-bdn-light text-bdn-green",
      descClass: "text-gray-500",
      image: "/ecosystem.png"
    },
    {
      title: "Learning Events",
      icon: CalendarDays,
      desc: "Creating seamless spaces where people connect and learn together.",
      href: "/services/learning-event-organizer",
      className: "md:col-span-1 md:row-span-1 bg-bdn-beige",
      iconClass: "bg-white text-bdn-green",
      descClass: "text-gray-600",
      image: "/gallery1.png"
    },
    {
      title: "Corporate Trainings",
      icon: Presentation,
      desc: "Gentle guidance to refine skills and align professional behaviors.",
      href: "/services/trainings",
      className: "md:col-span-1 md:row-span-1 bg-bdn-dark text-white",
      iconClass: "bg-white/10 text-bdn-beige",
      descClass: "text-white/80",
      image: "/hero.png"
    }
  ];

  return (
    <section id="services" className="relative py-40 bg-bdn-dark overflow-hidden">
      {/* Ambient Glows */}
      <div className="glow glow-orange bottom-0 left-[20%] opacity-[0.05]" />
      <div className="glow glow-green top-[10%] right-[10%] opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <motion.p variants={itemVariants} className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Our Heartbeat</motion.p>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold font-sans text-white leading-tight">
              Support at <br/>Every <span className="font-serif italic text-orange-400 font-light">Milestone.</span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-white/40 max-w-sm text-lg font-light leading-relaxed">
            We believe growth is a journey, not a destination. Explore our human-centered solutions designed to help your organization breathe.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]"
        >
          {/* Featured TotLE Camp */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <Link href="/services/totle-camp" className="relative h-full w-full rounded-[3.5rem] overflow-hidden group block shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105"
                style={{ backgroundImage: "url('/gallery1.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bdn-dark via-bdn-dark/40 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between">
                <div className="self-end inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase border border-white/20">
                   <Tent size={16} className="text-orange-400" /> Signature Immersion
                </div>
                
                <div className="max-w-xl">
                  <h3 className="text-5xl lg:text-6xl font-bold mb-6 text-white font-sans tracking-tight leading-none">
                    Total Learning <br/><span className="font-serif italic text-orange-400 font-light">Experience.</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg mb-8 font-light max-w-md">
                    Our most profound program. A multi-layered immersion designed to nurture IQ, EQ, and SQ in harmony.
                  </p>
                  <div className="flex items-center gap-3 font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                    Begin the Transformation <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Dynamic Services Cards */}
          {servicesList.map((srv, i) => (
            <motion.div key={srv.title} variants={itemVariants}>
              <Link
                href={srv.href}
                className={`${srv.className} h-full rounded-[3rem] p-10 flex flex-col justify-between transition-all duration-500 relative group overflow-hidden hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700">
                   <Image 
                     src={srv.image} 
                     alt={srv.title} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 400px"
                     className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                   />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <h3 className={`font-bold text-2xl md:text-3xl max-w-[70%] tracking-tight leading-tight ${srv.className.includes('text-white') ? 'text-white' : 'text-bdn-dark'}`}>{srv.title}</h3>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${srv.iconClass}`}>
                    <srv.icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="relative z-10 mt-6">
                  <p className={`text-base leading-relaxed mb-8 font-light ${srv.descClass}`}>
                    {srv.desc}
                  </p>
                  <div className={`flex items-center gap-2 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ${srv.className.includes('text-white') ? 'text-orange-400' : 'text-orange-600'}`}>
                    View Details <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
