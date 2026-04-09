"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceHeroProps {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  imageSrc: string;
  theme?: "bright" | "dark" | "academic";
}

export default function ServiceHero({ title, subtitle, description, imageSrc, theme = "bright" }: ServiceHeroProps) {
  
  const themeClasses = {
    bright: "bg-bdn-beige/20 text-bdn-dark",
    dark: "bg-bdn-dark text-white",
    academic: "bg-white text-bdn-dark"
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center pt-20 overflow-hidden ${themeClasses[theme]}`}>
      <div className="absolute inset-0 w-full h-full">
         <Image 
           src={imageSrc} 
           alt="Service Background" 
           fill 
           priority
           sizes="100vw"
           className="object-cover opacity-20 mix-blend-luminosity scale-105" 
         />
         <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-bdn-dark' : 'from-[#faf9f6]'} via-transparent to-transparent`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-md rounded-full text-xs font-bold uppercase border border-orange-500/20 text-orange-600">
             {subtitle}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl opacity-90">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Discover</span>
        <div className="w-[1px] h-12 bg-current" />
      </motion.div>
    </section>
  );
}
