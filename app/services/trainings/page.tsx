"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import ROICalculator from "@/components/services/ROICalculator";
import { motion } from "framer-motion";

export default function TrainingsPage() {
  const topics = [
    "Soft Skills", "Creative Thinking", "Time Management", "Work Ethics", 
    "Train the Trainers (TTT)", "Professional Attitude for Success (PAS)", 
    "Public Speaking & Presentation (PSP)", "Motivation", "Super Service 1 (SS1)",
    "Interpersonal & Communication (I-Comm)", "Al Adabiyah Series (Adab & Akhlak)",
    "Design Thinking & Problem Solving", "Coaching & Counseling", "Leadership"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <ServiceHero 
        title={<>Elevating <span className="font-serif italic text-bdn-beige">Potential</span></>}
        subtitle="Corporate Trainings"
        description="Develop skills, enhance awareness, and standardize professional behavior through highly interactive, multi-method training programs."
        imageSrc="/hero.png" 
        theme="dark"
      />

      <ProblemSolution 
        challengeTitle="The Skill Gap"
        challenges={[
          "Lack of structured programs to refresh employee wawasan and technical skills.",
          "Passivity in traditional lecture-style seminars resulting in low retention rates.",
          "Inconsistent professional attitude and communication standards across teams.",
          "Struggling to build a strong foundational ethic aligned with corporate expectations."
        ]}
        solutionTitle="Interactive Empowerment"
        solutions={[
          "Systematic training delivery ensuring consistent outcomes across different batches.",
          "Active Interactive approach: multi-way communication ensuring high participant engagement.",
          "Targeted modules ranging from foundational ethics to advanced leadership skills.",
          "Various methods employed to cater to diverse learning preferences and maintain attention."
        ]}
      />

      <section className="py-24 bg-bdn-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-bdn-dark">
              Our Training <span className="font-serif italic text-bdn-green">Modules</span>
            </h2>
            <p className="text-gray-500 mt-4">We offer a wide spectrum of curriculum designed to address specific organizational needs.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {topics.map((topic, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-bdn-green">
                  <div className="w-8 h-8 rounded-full bg-bdn-beige text-bdn-green flex items-center justify-center font-bold text-sm mb-4">
                    {i+1}
                  </div>
                  <h3 className="font-bold text-bdn-dark">{topic}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      <Footer />
    </main>
  );
}
