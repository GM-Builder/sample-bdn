"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import DeliverablesGrid from "@/components/services/DeliverablesGrid";
import { Zap, Award, Target, Infinity } from "lucide-react";
import Image from "next/image";

export default function TotLECampPage() {
  const activities = [
    "Team Building", "Simulation", "In-class Training/Workshop", "Seminar", 
    "Study Tour/Excursion", "Talkshow", "Outing", "Coaching", "Mentoring", "Project Making"
  ];

  return (
    <main className="min-h-screen bg-bdn-dark text-white">
      <Navbar />
      
      <ServiceHero 
        title={<>The <span className="font-serif italic text-bdn-beige">Signature</span> Experience</>}
        subtitle="Total Learning Experience (TotLE) Camp"
        description="Our masterpiece. An all-in-one immersive learning program designed to profoundly enhance IQ, EQ, and SQ through a multi-method, multi-perspective approach."
        imageSrc="/gallery1.png" 
        theme="dark"
      />

      <section className="py-32 bg-[#0a1a14] relative overflow-hidden">
         {/* Background glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bdn-green/20 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-sans mb-8 leading-tight">
                    Why settle for one format when you can <span className="text-bdn-beige italic font-serif">have it all?</span>
                 </h2>
                 <p className="text-xl text-white/70 leading-relaxed mb-6 font-light">
                   TotLE Camp combines the objectives of Team Building, LEO, and Corporate Trainings into one profound, life-changing immersion.
                 </p>
                 <p className="text-lg text-white/50 leading-relaxed">
                   We touch upon every aspect of human development—knowledge, awareness, skills, behavior, emotional stability, and spiritual depth—to create the ultimate condusive learning environment.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[1,2,3,4].map((i) => (
                    <div key={i} className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-2xl">
                       <Image src="/hero.png" alt="TotLE Camp Immersion" fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-bdn-dark/40 mix-blend-overlay" />
                    </div>
                 ))}
              </div>
           </div>
         </div>
      </section>

      <section className="py-24 bg-bdn-dark">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold font-sans mb-12 border-b border-white/10 pb-8">The Immersion Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {activities.map((act, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-bdn-green hover:text-white transition-colors cursor-default">
                    {act}
                  </span>
               ))}
            </div>
         </div>
      </section>

      <DeliverablesGrid 
        title="The Core Philosophies"
        items={[
          { title: "Various Methods", icon: Infinity },
          { title: "Multiple Perspectives", icon: Target },
          { title: "Active & Interactive", icon: Zap },
          { title: "Systematic Design", icon: Award }
        ]}
      />

      <Footer />
    </main>
  );
}
