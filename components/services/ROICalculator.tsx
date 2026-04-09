"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Users } from "lucide-react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  
  // Mock logic: Every 10 employees = +2 points in engagement impact, $1000 productivity value
  const engagementBoost = Math.min(Math.round((employees / 10) * 2.5 + 15), 100);
  const ROIValue = Math.round(employees * 120);

  return (
    <section className="py-24 bg-bdn-beige/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center border border-[#e5e1d5]">
          
          <div className="lg:w-1/2">
            <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Calculator size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-bdn-dark mb-4">
              Estimate Your Impact
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Use our interactive simulator to estimate the organizational effectiveness and productivity boost from implementing a structured BDN training program.
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold text-gray-700">
                <span>Number of Participants/Employees</span>
                <span className="text-orange-600">{employees}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="10"
                value={employees} 
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-xs text-gray-400">
                <span>10</span>
                <span>500+</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-bdn-dark text-white rounded-[2rem] p-8 md:p-10 w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <TrendingUp size={120} />
            </div>
            <h3 className="text-xl font-bold mb-8 text-white/80 border-b border-white/10 pb-4">Estimated ROI</h3>
            
            <div className="space-y-8 relative z-10">
              <div>
                <p className="text-sm text-bdn-beige mb-1 font-bold uppercase tracking-wider">Engagement Boost</p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold">{engagementBoost}%</span>
                  <span className="text-white/50 mb-1">increase</span>
                </div>
              </div>
               <div>
                <p className="text-sm text-bdn-beige mb-1 font-bold uppercase tracking-wider">Productivity Value</p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-bold">${ROIValue.toLocaleString()}</span>
                  <span className="text-white/50 mb-1">/ year equivalent</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40 italic">
              * This is a conceptual simulation based on average industry outcomes for structural training programs. Actual results may vary based on implementation quality and organizational culture.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
