"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseBDN() {
  const reasons = [
    "Over a decade of experience empowering thousands of individuals and organizations.",
    "Tailored programs designed to address specific needs and objectives.",
    "Proven methodologies ensuring measurable results.",
    "Expertise in creating holistic and impactful learning experiences."
  ];

  return (
    <section className="py-24 bg-bdn-green text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <div className="w-[600px] h-[600px] border-[60px] border-white rounded-full translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">
              Why Choose <span className="font-serif italic text-bdn-beige">BDN?</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mb-8">
              We don't just deliver training; we forge transformative learning experiences that equip your people with the right tools to excel.
            </p>
            
            <a href="#contact" className="inline-block bg-bdn-beige text-bdn-green font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 className="text-bdn-beige shrink-0 mt-1" size={24} />
                <p className="text-lg font-medium leading-relaxed">{reason}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
