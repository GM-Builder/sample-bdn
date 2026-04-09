"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/services/ROICalculator";
import { Users, Tent, MapPin, Smile } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamBuildingPage() {
  return (
    <main className="min-h-screen bg-[#fffcf5]">
      <Navbar />
      
      {/* Custom Fun Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center relative">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute -top-10 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50" />
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-sans tracking-tight leading-none text-bdn-dark mb-10 relative z-10">
          Unleash <span className="font-serif italic text-orange-500">Corporate</span><br/>Energy.
        </h1>
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
           <Image src="/team-building.png" alt="Team Building" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
        </div>
      </section>

      {/* Zig-Zag Strategy Section */}
      <section className="py-24 max-w-6xl mx-auto px-6 space-y-32">
         <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <h2 className="text-4xl font-bold font-sans mb-6">High <span className="text-orange-500">Impact</span> Outdoors</h2>
               <p className="text-lg text-gray-600 leading-relaxed">Adrenaline-pumping activities designed to break corporate silos instantly. Paintball, Rafting, and Survival camping where trust is built through action.</p>
               <ul className="mt-6 space-y-2 font-bold text-bdn-dark">
                 <li className="flex items-center gap-2"><Tent className="text-orange-500"/> Boundless Outdoor Venues</li>
                 <li className="flex items-center gap-2"><MapPin className="text-orange-500"/> Zero Limits on Participants</li>
               </ul>
            </div>
            <div className="md:w-1/2 bg-orange-100 p-12 rounded-[3rem] rotate-3 hover:rotate-0 transition-transform">
               <div className="bg-white p-8 rounded-3xl shadow-lg">
                 <h3 className="text-xl font-bold mb-2">The Office Plateau</h3>
                 <p className="text-sm text-gray-500">Are teams acting like strangers? Burnout killing productivity?</p>
                 <div className="w-full h-1 bg-gray-100 my-4" />
                 <h3 className="text-xl font-bold mb-2 text-orange-600">The Remedy</h3>
                 <p className="text-sm text-gray-500">Shared memories that translate directly to improved office communication.</p>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
               <h2 className="text-4xl font-bold font-sans mb-6">Low <span className="text-orange-500">Impact</span> Strategy</h2>
               <p className="text-lg text-gray-600 leading-relaxed">Highly engaging indoor simulations and creative activities focused on internalizing K3 policies and leadership reflection without the physical exhaustion.</p>
               <ul className="mt-6 space-y-2 font-bold text-bdn-dark">
                 <li className="flex items-center gap-2"><Smile className="text-orange-500"/> Inclusive for All Ages</li>
                 <li className="flex items-center gap-2"><Users className="text-orange-500"/> Strategic Corporate Alignment</li>
               </ul>
            </div>
            <div className="md:w-1/2 relative w-full h-[400px] rounded-[3rem] overflow-hidden -rotate-2 hover:rotate-0 transition-transform shadow-xl">
                <Image src="/gallery1.png" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" alt="indoor" />
            </div>
         </div>
      </section>

      <ROICalculator />

      <Footer />
    </main>
  );
}
