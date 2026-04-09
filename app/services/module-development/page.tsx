"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, FileText, Presentation, Library, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ModuleDevelopmentPage() {
  const steps = [
    { title: "Needs Assessment", desc: "Evaluating current curriculum and organizational goals." },
    { title: "Multiple Perspectives Mapping", desc: "Consulting with SMEs and mapping audience needs." },
    { title: "Various Methods Integration", desc: "Embedding active learning frameworks." },
    { title: "Drafting & Prototyping", desc: "Systematic drafting of all core deliverables." },
    { title: "Final Standardization", desc: "Packaging the final curriculum ready for duplication." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Precision Hero */}
      <section className="pt-32 pb-16 bg-[#0a1a14] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 pt-16">
            <p className="text-bdn-greenLight font-bold tracking-widest uppercase text-sm mb-4">Precision in Pedagogy</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans mb-6 leading-tight">
              Standardize <br/><span className="text-gray-400 font-light">Your Corporate</span><br/>Knowledge.
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mb-8">
               We transform tacit knowledge into explicit, replicable corporate assets through structured module development.
            </p>
            <button className="px-8 py-4 bg-white text-bdn-dark rounded-full font-bold hover:bg-bdn-green hover:text-white transition-colors">
               Download Syllabus Example
            </button>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full rounded-[2rem] overflow-hidden">
             <Image src="/ecosystem.png" alt="academic" fill className="object-cover opacity-60 mix-blend-luminosity" />
             <div className="absolute inset-0 border-[10px] border-[#0a1a14] rounded-[2rem] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Grid Layout: Academic Document Style */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
         
         {/* Left Column: Problem/Solution */}
         <div className="md:col-span-4 space-y-12">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
               <h3 className="text-2xl font-bold text-bdn-dark mb-4 border-b border-gray-200 pb-4">The Knowledge Drain</h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-4">Training programs highly dependent on specific individual trainers become impossible to scale. Legacy materials fail to align with modern reality.</p>
               <h3 className="text-2xl font-bold text-bdn-green mt-8 mb-4 border-b border-gray-200 pb-4">Our Protocol</h3>
               <p className="text-gray-600 text-sm leading-relaxed">Creating universally replicable trainer guidelines and structured workbooks to guarantee uniform knowledge absorption.</p>
            </div>

            <div className="bg-bdn-beige p-8 rounded-3xl">
               <h3 className="font-bold text-xl mb-6">Tangible Deliverables</h3>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium"><Book size={18} className="text-bdn-green"/> Participant's Workbook</li>
                  <li className="flex items-center gap-3 font-medium"><FileText size={18} className="text-bdn-green"/> Trainer's Guide</li>
                  <li className="flex items-center gap-3 font-medium"><Presentation size={18} className="text-bdn-green"/> Slide Decks</li>
                  <li className="flex items-center gap-3 font-medium"><Library size={18} className="text-bdn-green"/> Master Curriculum</li>
               </ul>
            </div>
         </div>

         {/* Right Column: Process Map */}
         <div className="md:col-span-8">
            <h2 className="text-4xl font-bold font-sans mb-12">The Development <span className="text-bdn-green italic font-serif">Protocol</span></h2>
            
            <div className="space-y-6">
               {steps.map((step, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 border border-gray-100 hover:border-bdn-green rounded-2xl group transition-colors">
                     <div className="w-16 h-16 shrink-0 bg-bdn-light flex items-center justify-center rounded-xl text-bdn-green font-serif text-2xl group-hover:bg-bdn-green group-hover:text-white transition-colors">
                        0{i+1}
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-bdn-dark mb-2">{step.title}</h4>
                        <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-16 bg-[#faf9f6] p-10 rounded-3xl flex justify-between items-center border border-[#e5e1d5]">
               <div>
                 <h4 className="text-2xl font-bold mb-2">Ready to Standardize?</h4>
                 <p className="text-gray-500">Duplicate expertise seamlessly across your enterprise.</p>
               </div>
               <div className="w-12 h-12 bg-bdn-green text-white rounded-full flex items-center justify-center rotate-[-45deg] shadow-lg">
                  <ArrowRight />
               </div>
            </div>
         </div>

      </section>

      <Footer />
    </main>
  );
}
