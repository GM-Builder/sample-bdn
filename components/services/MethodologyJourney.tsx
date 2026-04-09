"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MethodologyJourneyProps {
  steps: { title: string; desc: string }[];
}

export default function MethodologyJourney({ steps }: MethodologyJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-24">
          <p className="text-sm font-bold tracking-widest text-[#45a382] uppercase mb-4">Methodology</p>
          <h2 className="text-5xl font-bold font-sans text-bdn-dark">
            The BDN <span className="font-serif italic text-bdn-green font-light">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Tracking Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          
          {/* Animated Tracking Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-orange-500 -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row md:items-center md:justify-between w-full">
                
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-gray-200 -translate-x-1/2 flex items-center justify-center shadow-lg z-10 transition-colors duration-500">
                   <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>

                {/* Content Left (Even indices on desktop) */}
                <div className={`md:w-5/12 pl-20 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:hidden"}`}>
                   {i % 2 === 0 && (
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                     >
                       <span className="text-orange-500 font-serif text-5xl opacity-40 block mb-2 leading-none">0{i+1}</span>
                       <h3 className="text-2xl font-bold text-bdn-dark mb-3">{step.title}</h3>
                       <p className="text-gray-500">{step.desc}</p>
                     </motion.div>
                   )}
                </div>

                {/* Content Right (Odd indices on desktop) */}
                <div className={`md:w-5/12 pl-20 md:pl-12 ${i % 2 !== 0 ? "md:text-left" : "md:block hidden"}`}>
                  {(i % 2 !== 0 || typeof window === 'undefined') && ( // Render hidden block on server for spacing, visible right on odd
                     <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 ${i % 2 === 0 ? "md:invisible" : ""}`}
                     >
                       <span className="text-bdn-green font-serif text-5xl opacity-20 block mb-2 leading-none">0{i+1}</span>
                       <h3 className="text-2xl font-bold text-bdn-dark mb-3">{step.title}</h3>
                       <p className="text-gray-500">{step.desc}</p>
                     </motion.div>
                   )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
