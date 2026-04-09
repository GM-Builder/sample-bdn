"use client";
import { useState } from "react";
import { Building2 } from "lucide-react";

/**
 * BrandLogo component handles the logic for displaying a brand's logo
 * with a fallback to the brand's name. It prioritizes visibility
 * to ensure the marquee never looks empty.
 */
const BrandLogo = ({ name, domain }: { name: string, domain: string }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 mx-4 md:mx-6 grayscale hover:grayscale-0 transition-all duration-300 relative group">
      
      {/* Fallback Text / Loading State - Always visible until image successfully loads */}
      <div className={`flex items-center gap-2 text-gray-400 group-hover:text-bdn-dark transition-opacity duration-500 ${imgLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <Building2 size={20} className="shrink-0" />
        <span className="text-lg md:text-xl font-bold tracking-tight whitespace-nowrap">
          {name}
        </span>
      </div>

      {/* Actual Logo Image - Overlays the text once loaded */}
      {!imgError && (
        <img
          src={`https://logo.clearbit.com/${domain}?size=100`}
          alt={name}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

export default function MarqueeBrands() {
  const partners = [
    { name: "Pertamina EP", domain: "pertamina.com" },
    { name: "Trans 7", domain: "trans7.co.id" },
    { name: "Trans TV", domain: "transtv.co.id" },
    { name: "Gas Negara", domain: "pgn.co.id" },
    { name: "MedcoEnergi", domain: "medcoenergi.com" },
    { name: "Castrol", domain: "castrol.com" },
    { name: "Detikcom", domain: "detik.com" },
    { name: "Pirelli", domain: "pirelli.com" },
    { name: "Syngenta", domain: "syngenta.com" },
    { name: "Astra Honda Motor", domain: "astra-honda.com" },
    { name: "Bata", domain: "bata.id" },
    { name: "Nutricia", domain: "nutricia.com" },
    { name: "Indosat Ooredoo", domain: "indosatooredoo.com" },
    { name: "Telin", domain: "telin.net" },
    { name: "Holcim", domain: "holcim.com" },
    { name: "AirNav", domain: "airnavindonesia.co.id" },
    { name: "Grup Ciputra", domain: "ciputra.com" },
  ];

  return (
    <section className="py-16 border-y border-gray-100 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase text-center sm:text-left">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex w-full group">
        {/* Gradient Fades for cinematic transition */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* The Marquee Loop */}
        <div className="flex animate-marquee group-hover:animate-marquee-hover items-center whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((brand, i) => (
            <BrandLogo key={`${brand.name}-${i}`} name={brand.name} domain={brand.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
