import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBrands from "@/components/MarqueeBrands";
import VisionMission from "@/components/VisionMission";
import Ecosystem from "@/components/Ecosystem";
import CorporateValues from "@/components/CorporateValues";
import Services from "@/components/Services";
import WhyChooseBDN from "@/components/WhyChooseBDN";
import MomentsGallery from "@/components/MomentsGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeBrands />
      <VisionMission />
      <Ecosystem />
      <CorporateValues />
      <Services />
      <WhyChooseBDN />
      <MomentsGallery />
      <Footer />
    </main>
  );
}
