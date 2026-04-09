"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function MomentsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-32 bg-[#f4ecdf] text-bdn-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">Witness the Transformation</p>
            <h2 className="text-5xl md:text-7xl font-bold font-sans">
              Moments in <span className="font-serif italic text-orange-500 font-light">Action</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full border border-bdn-dark/10 bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Cinematic Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 w-full hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* We create wide and narrow cards for a dynamic rhythm */}
          {[
            { id: 1, w: "min-w-[85vw] md:min-w-[600px]" },
            { id: 2, w: "min-w-[85vw] md:min-w-[400px]" },
            { id: 3, w: "min-w-[85vw] md:min-w-[400px]" },
            { id: 4, w: "min-w-[85vw] md:min-w-[600px]" },
            { id: 5, w: "min-w-[85vw] md:min-w-[500px]" }
          ].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              className={`relative ${item.w} h-[450px] md:h-[600px] shrink-0 snap-center rounded-[3rem] overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-bdn-green/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
              <Image
                src="/gallery1.png"
                alt={`Corporate learning event ${item.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
