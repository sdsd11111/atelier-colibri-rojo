"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Palette,
  Award,
  Circle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import AboutSection from "@/components/AboutSection";
import VideoShowcase from "@/components/VideoShowcase";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsAndFAQ from "@/components/TestimonialsAndFAQ";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Utility for Tailwind CSS class merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Configuration ---
const COLORS = {
  primary: "#EE1D23",    // Logo Red
  navy: "#0F172A",       // Logo Deep Navy
  orange: "#F7941D",     // Logo Orange
  bone: "#FDFDFD",       // Refined Gallery White
  slate: "#334155",      // Elegant Slate
};

const NAV_LINKS = [
  { name: "Arte Monumental", href: "/arte-monumental" },
  { name: "Restauración", href: "/restauracion-de-obra" },
  { name: "Artes Plásticas", href: "/artes-plasticas" },
  { name: "Galería", href: "/galeria" },
];

// --- Components ---

/** Header Component: Minimalist & Editorial */

/** Hero Section: Editorial Gallery Layout */
const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const
      }
    },
  };

  return (
    <section className="relative h-[100dvh] lg:h-screen lg:min-h-[750px] flex items-center overflow-hidden bg-[#FDFDFD]" aria-labelledby="hero-heading">
      {/* Background Aesthetic: Minimal Textures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-gray-50/50" />
        <div className="absolute top-[15%] left-[10%] text-[20vw] font-black text-gray-50/20 select-none font-[family-name:var(--font-cinzel)]" aria-hidden="true">
          ART
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0 items-center h-full">

          {/* Main Title Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:pr-12 lg:border-l lg:border-gray-100 lg:pl-20 h-full lg:h-[60%] flex flex-col justify-center relative z-10 pt-20 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-12">
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                Loja, Ecuador
              </span>
              <div className="h-[1px] w-8 lg:w-12 bg-gray-200" />
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
                Studio & Academy
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.0] text-[#0F172A] mb-10 tracking-tight font-[family-name:var(--font-cinzel)]"
            >
              Atelier Colibrí Rojo: <br />
              <span className="text-[#EE1D23]">Arte Público</span> y Restauración.
            </motion.h1>

            <motion.div variants={itemVariants} className="max-w-2xl mb-12">
              <h2 className="text-base md:text-lg text-gray-500 leading-relaxed font-light font-[family-name:var(--font-outfit)]">
                <span className="text-[#EE1D23] font-bold">20 años</span> de maestría técnica y legado artístico en el corazón de la cuna de los artistas. 
                <span className="hidden lg:inline"> Especialistas en creación monumental y conservación de bienes culturales.</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-8 w-full">
              <a
                href="/artes-plasticas"
                className="group relative flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white bg-[#0F172A] px-10 py-5 rounded-2xl hover:bg-[#EE1D23] transition-all duration-500 shadow-xl shadow-[#0F172A]/10 w-full sm:w-auto"
                aria-label="Ver obras de artes plásticas"
              >
                Obras de Propuesta
                <ArrowRight size={14} strokeWidth={2} />
              </a>

              <a
                href="/arte-monumental"
                className="group flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F172A] hover:text-[#EE1D23] transition-colors border-b border-gray-200 pb-1 w-full sm:w-auto mt-2 sm:mt-0 font-[family-name:var(--font-outfit)]"
                aria-label="Ver servicios de arte monumental"
              >
                Arte Monumental
              </a>
            </motion.div>
          </motion.div>

          {/* Artistic Focal Point */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute inset-0 z-0 lg:relative lg:z-auto lg:h-full flex items-center justify-end group"
          >
            <div className="relative w-full h-full lg:h-full overflow-hidden">
              <Image
                src="/images/home/hero-artista.webp"
                alt="Artista del Atelier Colibrí Rojo trabajando en una restauración profesional"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-[#FDFDFD]/90 lg:bg-transparent" />
              {/* Split overlay for desktop */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFDFD] to-transparent hidden lg:block" />
            </div>

            {/* Editorial Floating Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="hidden lg:block absolute bottom-16 right-0 bg-[#0F172A] p-10 text-white min-w-[280px]"
            >
              <div className="flex items-start gap-4 mb-4">
                <Award size={20} strokeWidth={1} className="text-[#EE1D23]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-outfit)]">Trayectoria Internacional</span>
              </div>
              <p className="text-xs font-light text-white/60 leading-relaxed mb-6">
                Consultoría técnica <br />
                y creación artística <br />
                personalizada.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-6 bg-[#EE1D23]" aria-hidden="true" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Estudio Profesional</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Border: Editorial Lines */}
      <div className="absolute bottom-0 left-0 w-full h-8 hidden lg:flex items-center px-8 border-t border-gray-100 z-20">
        <div className="flex items-center gap-10">
          <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">Est. MMXXVI</span>
          <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">Atelier Colibrí Rojo</span>
          <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">Loja - Ecuador</span>
        </div>
      </div>
    </section>
  );
};

// --- Page Layout ---

import TeamSection from "@/components/TeamSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A] antialiased selection:bg-[#EE1D23] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <TeamSection />
      <VideoShowcase />
      <ServicesSection />
      <TestimonialsAndFAQ />
      
      {/* Premium Contact CTA */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="text-4xl lg:text-6xl font-normal tracking-tight font-[family-name:var(--font-cinzel)] mb-10">
                ¿Listo para elevar <br /> <span className="text-[#EE1D23]">su visión artística</span>?
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto mb-12 font-[family-name:var(--font-outfit)]">
                Desde restauraciones de patrimonio hasta monumentos urbanos, nuestro equipo de maestros está listo para asesorarle formalmente.
            </p>
            <a 
              href="/contacto" 
              className="inline-flex items-center gap-4 bg-[#EE1D23] hover:bg-white hover:text-[#0F172A] text-white px-12 py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl shadow-red-500/20"
            >
              Consultar con el Atelier
              <ArrowUpRight size={16} />
            </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
