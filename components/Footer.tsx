"use client";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-bdn-dark text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-b border-white/10 pb-20">
          <div>
            <h2 className="text-5xl font-bold font-sans mb-6">
              Contact Us <span className="font-serif italic text-bdn-beige">Today</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-md mb-8">
              Let us help you transform your organization and achieve greater success!
            </p>
            <a href="https://wa.me/6287861646597" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-bdn-dark px-8 py-4 rounded-full font-bold hover:bg-bdn-beige transition-colors">
              Start a Conversation <ArrowUpRight size={20} />
            </a>
          </div>

          <div className="flex flex-col gap-8 lg:mt-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                  PT. Bina Daya Nugraha <br/>
                  Sentral Senayan II, 16th Floor,<br/> 
                  Jl. Asia Afrika No. 8, Gelora Bung Karno Senayan,<br/> 
                  Jakarta Pusat 10270, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Call Us</h4>
                <p className="text-gray-400">
                  +62 878 6164 6597
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} PT Bina Daya Nugraha. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
