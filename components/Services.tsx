"use client";
import { motion } from "framer-motion";
import { Users, BookOpen, CalendarDays, Presentation, Tent, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const servicesList = [
    {
      title: "Team Building",
      icon: Users,
      desc: "Foster cohesion and synergy through immersive experiences.",
      href: "/services/team-building",
      className: "md:col-span-1 md:row-span-2 bg-[#1b4235] text-white",
      iconClass: "bg-white/10 text-bdn-beige",
      descClass: "text-white/70",
      image: "/team-building.png"
    },
    {
      title: "Module Development",
      icon: BookOpen,
      desc: "Design and standardize training materials to ensure scalable outcomes.",
      href: "/services/module-development",
      className: "md:col-span-1 md:row-span-1 bg-white border border-gray-100",
      iconClass: "bg-bdn-light text-bdn-green",
      descClass: "text-gray-500",
      image: "/ecosystem.png"
    },
    {
      title: "Learning Event Organizer",
      icon: CalendarDays,
      desc: "Simplify event management for gatherings with end-to-end support.",
      href: "/services/learning-event-organizer",
      className: "md:col-span-1 md:row-span-1 bg-bdn-beige",
      iconClass: "bg-white text-bdn-green",
      descClass: "text-gray-600",
      image: "/gallery1.png"
    },
    {
      title: "Trainings",
      icon: Presentation,
      desc: "Develop skills and awareness through structured programs on soft skills.",
      href: "/services/trainings",
      className: "md:col-span-1 md:row-span-1 bg-[#1b4235] text-white", // Dark green again
      iconClass: "bg-white/10 text-bdn-beige",
      descClass: "text-white/80",
      image: "/hero.png"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0a1a14] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-orange-500 uppercase mb-2">Our Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold font-sans">
              Expertise & <span className="font-serif italic text-orange-500">Services</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm">
            Discover our tailored approach to organizational development. Click on any service to explore detailed methodologies and deliverables.
          </p>
        </div>

        {/* Enhanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Featured TotLE Camp*/}
          <Link href="/services/totle-camp" className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group block">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: "url('/gallery1.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] via-[#0a1a14]/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="self-end inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full text-xs font-bold text-orange-200 uppercase border border-orange-500/30">
                 <Tent size={16} className="text-orange-400" /> Signature Program
              </div>
              
              <div className="max-w-lg">
                <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-white font-sans tracking-tight">
                  Total Learning <span className="font-serif italic text-orange-400">Experience</span>
                </h3>
                <p className="text-white/80 leading-relaxed text-base mb-6">
                  An all-in-one immersive learning program combining team building, training, seminars, coaching, and project-based activities.
                </p>
                <div className="flex items-center gap-2 font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                  Explore TotLE Camp Dedicated Page <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Dynamic Services Cards */}
          {servicesList.map((srv, i) => (
            <Link
              key={srv.title}
              href={srv.href}
              className={`${srv.className} text-bdn-dark rounded-[2rem] p-8 flex flex-col justify-between transition-transform relative group overflow-hidden`}
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                 {/* Quick visual peek */}
                 <Image 
                   src={srv.image} 
                   alt="service preview" 
                   fill 
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                   className="object-cover" 
                 />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <h3 className={`font-bold text-2xl max-w-[60%] ${srv.className.includes('text-white') ? 'text-white' : 'text-bdn-dark'}`}>{srv.title}</h3>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${srv.iconClass}`}>
                  <srv.icon size={26} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-10 mt-4">
                <p className={`text-sm leading-relaxed mb-6 ${srv.descClass}`}>
                  {srv.desc}
                </p>
                <div className={`flex items-center gap-2 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${srv.className.includes('text-white') ? 'text-orange-400' : 'text-orange-600'}`}>
                  Explore Service <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
}
