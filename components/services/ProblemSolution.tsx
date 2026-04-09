"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

interface ProblemSolutionProps {
  challengeTitle?: string;
  solutionTitle?: string;
  challenges: string[];
  solutions: string[];
}

export default function ProblemSolution({
  challengeTitle = "The Challenge",
  solutionTitle = "Our Solution",
  challenges,
  solutions,
}: ProblemSolutionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenge Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                <XCircle size={24} />
              </div>
              <h3 className="text-3xl font-bold font-sans text-gray-800">{challengeTitle}</h3>
            </div>
            <ul className="space-y-6">
              {challenges.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-gray-400 mt-1 font-bold">0{i + 1}</span>
                  <p className="text-gray-600 leading-relaxed font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-bdn-green text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-bdn-green/20 relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-3xl font-bold font-sans text-white">{solutionTitle}</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 shrink-0 flex items-center justify-center border border-orange-500/50 rounded-full bg-orange-500 text-xs font-bold text-white shadow-sm">
                    ✓
                  </div>
                  <p className="text-white/80 leading-relaxed text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
