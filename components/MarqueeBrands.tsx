"use client";
import { useState } from "react";
import { Building2 } from "lucide-react";

const BrandLogo = ({ name, domain }: { name: string, domain: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-3 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300">
      {!imgError ? (
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt=""
            className="h-12 w-auto max-w-[140px] object-contain text-transparent"
            style={{ textIndent: "-9999px" }}
            onError={() => setImgError(true)}
          />
      ) : (
        <div className="flex items-center gap-2 text-gray-400 hover:text-bdn-dark">
          <Building2 size={24} />
          <span className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
            {name}
          </span>
        </div>
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
    <section className="py-12 border-y border-gray-200/50 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center sm:text-left">
        <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
          Our Esteemed Partners
        </p>
      </div>
      <div className="relative flex w-full max-w-7xl mx-auto group">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee group-hover:animate-marquee-hover items-center">
          {[...partners, ...partners].map((brand, i) => (
            <BrandLogo key={`${brand.name}-${i}`} name={brand.name} domain={brand.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
