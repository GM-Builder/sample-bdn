"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DeliverablesGridProps {
  title?: string;
  items: { title: string; icon: LucideIcon }[];
}

export default function DeliverablesGrid({ title = "What You Get", items }: DeliverablesGridProps) {
  return (
    <section className="py-24 bg-bdn-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans">
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30">
                 <item.icon size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-white/90">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
