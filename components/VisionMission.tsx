"use client";
import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-24 bg-bdn-beige/20 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-center">
        
        {/* Vision Paper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50, rotate: -8, boxShadow: "0px 10px 30px -10px rgba(0,0,0,0.05)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -3 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ rotate: 0, scale: 1.02, y: -5, boxShadow: "0px 20px 60px -15px rgba(249,115,22,0.3)" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-full max-w-md bg-[#fffdf9] p-10 md:p-14 border border-[#e5e1d5]"
          style={{ transformOrigin: "top center" }}
        >
          {/* Paperclip Mockup */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-400 rotate-[-15deg]">
             <Paperclip size={36} className="text-gray-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-bdn-green mb-6 text-center border-b-2 border-dashed border-gray-200 pb-4">
            Our Vision
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed font-sans font-semibold text-center mb-6">
            Creating a future of <span className="underline decoration-bdn-beige decoration-4 underline-offset-4">Intelligent, Ethical</span> Generations.
          </p>
          <p className="text-gray-600 leading-relaxed text-center text-sm">
            We strive to nurture well-rounded individuals equipped with Intellectual (IQ), 
            Emotional (EQ), and Spiritual (SQ) intelligence, complemented by noble 
            values and exemplary behavior.
          </p>
        </motion.div>

        {/* Mission Paper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50, rotate: 10, boxShadow: "0px 10px 30px -10px rgba(0,0,0,0.05)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 4 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ rotate: 0, scale: 1.02, y: -5, boxShadow: "0px 20px 60px -15px rgba(249,115,22,0.3)" }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          className="relative w-full max-w-md bg-[#fffdf9] p-10 md:p-14 border border-[#e5e1d5] mt-8 md:mt-0"
          style={{ transformOrigin: "top center" }}
        >
          {/* Paperclip Mockup */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 rotate-[20deg]">
             <Paperclip size={36} className="text-gray-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-bdn-green mb-6 text-center border-b-2 border-dashed border-gray-200 pb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed font-sans font-semibold text-center mb-6">
            Delivering impactful & enjoyable learning experiences.
          </p>
          <p className="text-gray-600 leading-relaxed text-center text-sm">
            With a broad perspective, we aim at creating a future of Intelligent, Ethical Generations. 
            We strive to nurture well-rounded individuals complemented by noble values.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
