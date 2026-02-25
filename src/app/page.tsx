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
import ContactAndLocation from "@/components/ContactAndLocation";
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
  { name: "Academia", href: "#academia" },
  { name: "Aerografía", href: "#aerografia" },
  { name: "Producción Audiovisual", href: "#audiovisual" },
  { name: "Galería", href: "#galeria" },
];

// --- Components ---

/** Header Component: Minimalist & Editorial */

/** Hero Section: Editorial Gallery Layout */
const Hero = () => {
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
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-[#FDFDFD]" aria-labelledby="hero-heading">
      {/* Background Aesthetic: Minimal Textures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-gray-50/50" />
        <div className="absolute top-[15%] left-[10%] text-[20vw] font-black text-gray-50/20 select-none font-[family-name:var(--font-cinzel)]" aria-hidden="true">
          ART
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-20 h-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-0 items-center h-full">

          {/* Main Title Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="pr-12 border-l border-gray-100 pl-12 h-[60%] flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                Loja, Ecuador
              </span>
              <div className="h-[1px] w-12 bg-gray-200" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
                Studio & Academy
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-normal leading-[1.2] lg:leading-[1.1] text-[#0F172A] mb-8 lg:mb-12 tracking-tight font-[family-name:var(--font-cinzel)]"
            >
              Atelier Colibrí Rojo: <span className="text-[#EE1D23]">20 años de maestría</span> en arte y restauración en Loja.
            </motion.h1>

            <motion.div variants={itemVariants} className="max-w-2xl mb-12 lg:mb-16">
              <h2 className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light font-[family-name:var(--font-outfit)]">
                Expertos en arte público monumental, restauración de bienes pictóricos y formación académica profesional. Un legado familiar de tres décadas en el corazón de la <span className="text-[#0F172A]/60 font-medium italic">Cuna de los Artistas</span>.
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
              <button
                className="group relative flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white bg-[#EE1D23] px-10 py-5 rounded-full hover:bg-[#0F172A] transition-all duration-500 shadow-xl shadow-red-500/10"
                aria-label="Inscribirse a la academia de artes"
              >
                Inscribirse a la Academia
                <ArrowRight size={14} strokeWidth={2} />
              </button>

              <button
                className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#0F172A] hover:text-[#EE1D23] transition-colors border-b border-gray-200 pb-1"
                aria-label="Ver servicios de restauración y arte público"
              >
                Servicios de Restauración y Arte Público
              </button>
            </motion.div>
          </motion.div>

          {/* Artistic Focal Point */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative h-full flex items-center justify-end group focus-within:ring-2 focus-within:ring-[#EE1D23]"
          >
            <div className="relative w-full h-[80%] overflow-hidden">
              <Image
                src="/images/home/hero-artista.webp"
                alt="Artista del Atelier Colibrí Rojo trabajando en una restauración profesional"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-[#0F172A]/5" />
            </div>

            {/* Editorial Floating Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-16 right-0 bg-[#0F172A] p-10 text-white min-w-[280px]"
            >
              <div className="flex items-start gap-4 mb-4">
                <Award size={20} strokeWidth={1} className="text-[#EE1D23]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-outfit)]">Trayectoria Internacional</span>
              </div>
              <p className="text-xs font-light text-white/60 leading-relaxed mb-6">
                Cursos con materiales <br />
                incluidos - Solo $50 USD. <br />
                Formación en Loja.
              </p>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-6 bg-[#EE1D23]" aria-hidden="true" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Inscripción $50 USD</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Border: Editorial Lines */}
      <div className="absolute bottom-0 left-0 w-full h-8 flex items-center px-8 border-t border-gray-100">
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

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A] antialiased selection:bg-[#EE1D23] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <VideoShowcase />
      <ServicesSection />
      <TestimonialsAndFAQ />
      <ContactAndLocation />

      {/* Academy Excerpt: Minimalist & Clean */}
      <section id="academia" className="pb-24 lg:pb-32 pt-12 bg-white relative overflow-hidden" aria-labelledby="academia-title">
        <div className="container mx-auto px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="flex justify-center mb-10">
              <Circle size={8} fill="#EE1D23" stroke="none" className="animate-pulse" aria-hidden="true" />
            </div>
            <h2
              id="academia-title"
              className="text-5xl lg:text-7xl font-normal text-[#0F172A] mb-12 tracking-tight font-[family-name:var(--font-cinzel)] uppercase"
            >
              La Cuna de los <span className="text-[#EE1D23]">Artistas</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#EE1D23] mx-auto mb-16" aria-hidden="true" />
            <p className="text-lg lg:text-xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-outfit)]">
              Proporcionamos una formación técnica rigurosa y herramientas de <br className="hidden lg:block" />
              vanguardia para la nueva generación de creadores visuales expertos en restauración y plástica.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
