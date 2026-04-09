import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
  themeColor: "#1b4235",
};

export const metadata: Metadata = {
  title: {
    default: "PT Bina Daya Nugraha (BDN) | #1 HR Solutions Partner",
    template: "%s | BDN Corporate"
  },
  description: "Empowering Communities to Excel through innovative human resource development solutions. We help organizations enhance performance, productivity, and profitability.",
  keywords: ["HR Solutions", "Corporate Training", "Team Building", "Module Development", "Learning Event Organizer", "Bina Daya Nugraha", "BDN"],
  openGraph: {
    title: "PT Bina Daya Nugraha (BDN)",
    description: "Empowering Communities to Excel. Innovative HR development solutions for modern organizations.",
    url: "https://binadayanugraha.com",
    siteName: "BDN Corporate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Bina Daya Nugraha (BDN)",
    description: "Empowering Communities to Excel.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-bdn-light text-bdn-dark relative`}>
        <BackToTop />
        <div className="grain-overlay opacity-[0.03] pointer-events-none fixed inset-0 z-[99]" />
        {children}
      </body>
    </html>
  );
}
