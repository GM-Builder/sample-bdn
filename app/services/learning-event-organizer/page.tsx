"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ProblemSolution from "@/components/services/ProblemSolution";
import DeliverablesGrid from "@/components/services/DeliverablesGrid";
import { Coffee, Settings, PenTool, Printer } from "lucide-react";

export default function LEOPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <ServiceHero 
        title={<>Flawless <span className="font-serif italic text-bdn-green">Execution</span></>}
        subtitle="Learning Event Organizer"
        description="Simplify your event management for workshops, seminars, and corporate gatherings with our end-to-end organizational support."
        imageSrc="/gallery1.png" 
        theme="academic" // white bg
      />

      <ProblemSolution 
        challengeTitle="The Logistical Nightmare"
        challenges={[
          "Internal HR teams overwhelmed with logistics instead of focusing on actual event strategy.",
          "Dealing with dozens of different vendors for venues, catering, transportation, and printing.",
          "Unexpected technical failures (sound system, projectors) ruining the learning experience.",
          "Inconsistencies in event branding and documentation."
        ]}
        solutionTitle="The Single Point of Contact"
        solutions={[
          "Free up your internal team's time so they can focus on high-priority organizational tasks.",
          "Streamlined communication: You only deal with BDN, while we handle every vendor.",
          "Guaranteed technical arrangements and comprehensive logistics planning.",
          "End-to-end branding support including backdrops, hampers, and professional documentation."
        ]}
      />

      <DeliverablesGrid 
        title="Everything Handled"
        items={[
          { title: "Accommodation & Transport", icon: Coffee },
          { title: "Technical & Logistics", icon: Settings },
          { title: "Design & Decoration", icon: PenTool },
          { title: "Printing & Documentation", icon: Printer }
        ]}
      />

      <Footer />
    </main>
  );
}
