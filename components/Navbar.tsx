"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ScrollProgress from "./ScrollProgress";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ecosystem", href: "/#ecosystem" },
    { name: "Values", href: "/#values" },
  ];

  const serviceLinks = [
    { name: "Team Building", href: "/services/team-building" },
    { name: "Module Development", href: "/services/module-development" },
    { name: "Learning Event Organizer", href: "/services/learning-event-organizer" },
    { name: "Trainings", href: "/services/trainings" },
    { name: "TotLE Camp", href: "/services/totle-camp" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bdn-light/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-bdn-green flex items-center justify-center text-white font-serif italic text-xl">
            B
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-bdn-dark">
            Bina Daya Nugraha
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-bdn-dark hover:text-bdn-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Services with Hover Dropdown */}
          <div className="relative flex items-center">
            <Link href="/#services" className="text-sm font-medium text-bdn-dark hover:text-bdn-green transition-colors mr-1">
              Services
            </Link>
            
            {/* Arrow Trigger */}
            <div className="peer p-2 -ml-1 cursor-pointer text-gray-400 hover:text-bdn-green mb-0.5">
              <ChevronDown size={14} strokeWidth={3} />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-[80%] left-0 pt-4 w-60 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-300">
               <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden p-2">
                 {serviceLinks.map((link) => (
                   <Link 
                     key={link.name} 
                     href={link.href} 
                     className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-bdn-light hover:text-bdn-green rounded-xl transition-colors"
                   >
                     {link.name}
                   </Link>
                 ))}
               </div>
            </div>
          </div>

          <Link
            href="/#gallery"
            className="text-sm font-medium text-bdn-dark hover:text-bdn-green transition-colors"
          >
            Gallery
          </Link>

          <a
            href="https://wa.me/6287861646597"
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 bg-bdn-green hover:bg-bdn-greenLight text-white rounded-full text-sm font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-bdn-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-bdn-dark border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Services */}
          <div className="border-b border-gray-100 pb-2">
             <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-bdn-dark block mb-2">
                Services
             </Link>
             <div className="flex flex-col pl-4 gap-2 border-l-2 border-bdn-light">
                {serviceLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-500">
                    {link.name}
                  </Link>
                ))}
             </div>
          </div>

          <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-bdn-dark border-b border-gray-100 pb-2">
            Gallery
          </Link>

          <a
            href="https://wa.me/6287861646597" target="_blank" rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-3 mt-2 bg-bdn-green text-white rounded-xl font-medium"
          >
            Contact Us
          </a>
        </motion.div>
      )}
      <ScrollProgress />
    </motion.nav>
  );
}
