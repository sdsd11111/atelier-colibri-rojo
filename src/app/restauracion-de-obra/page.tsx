"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ArrowRight, ArrowLeftRight, ChevronRight, ChevronLeft, Microscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestorationSpecialties from "@/components/RestorationSpecialties";
import RestorationProcess from "@/components/RestorationProcess";
import RestorationGalleryCTA from "@/components/RestorationGalleryCTA";

/* ─────────────────────────────────────────────
   Datos de la galería
───────────────────────────────────────────── */
const antesDesques = [
  {
    id: 1,
    label: "Obra 01",
    antes: "/images/restauracion/antes-1.webp",
    despues: "/images/restauracion/despues-1.webp",
    desc: "Intervención pictórica sobre lienzo",
  },
  {
    id: 2,
    label: "Obra 02",
    antes: "/images/restauracion/antes-2.webp",
    despues: "/images/restauracion/despues-2.webp",
    desc: "Restauración de obra sacra",
  },
  {
    id: 3,
    label: "Obra 03",
    antes: "/images/restauracion/antes-3.webp",
    despues: "/images/restauracion/despues-3.webp",
    desc: "Recuperación de pigmento y soporte",
  },
  {
    id: 4,
    label: "Obra 04",
    antes: "/images/restauracion/antes-1.webp",
    despues: "/images/galeria/restauracion-1.webp",
    desc: "Limpieza y consolidación de policromía",
  },
  {
    id: 5,
    label: "Obra 05",
    antes: "/images/restauracion/antes-2.webp",
    despues: "/images/galeria/restauracion-2.webp",
    desc: "Tratamiento de soporte y reintegración",
  },
];

const procesoImages = [
  { src: "/images/restauracion/proceso-1.webp", caption: "Diagnóstico y análisis de daños" },
  { src: "/images/restauracion/proceso-2.webp", caption: "Intervención técnica en laboratorio" },
  { src: "/images/restauracion/proceso-3.webp", caption: "Consolidación y acabado final" },
  { src: "/images/galeria/restauracion-1.webp", caption: "Estudio de pigmentos originales" },
  { src: "/images/galeria/restauracion-2.webp", caption: "Proceso de reintegración cromática" },
];

function AntesDesquesCard({ item }: { item: typeof antesDesques[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="relative flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#111] shadow-2xl group select-none">
      <AnimatePresence mode="wait">
        <motion.img
          key={showAfter ? "despues" : "antes"}
          src={showAfter ? item.despues : item.antes}
          alt={item.desc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-8 left-8 z-10">
        <span
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-md border ${
            showAfter
              ? "bg-[#EE1D23] border-[#EE1D23] text-white"
              : "bg-white/10 border-white/20 text-white"
          }`}
        >
          {showAfter ? "Intervención Lograda" : "Estado Original"}
        </span>
      </div>

      <div className="absolute bottom-10 left-10 right-10 z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">
          {item.label}
        </p>
        <h3 className="text-xl text-white font-light font-[family-name:var(--font-cinzel)] mb-6">
          {item.desc}
        </h3>
        
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => setShowAfter((v) => !v)}
          className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-[#0F172A] rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20"
        >
          <ArrowLeftRight size={14} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Comparar Estados</span>
        </button>
      </div>
    </div>
  );
}

export default function RestauracionPage() {
  const [activeTab, setActiveTab] = useState<"comparativa" | "proceso">("comparativa");
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A]">
      <Navbar />

      {/* ── HERO OPTIMIZADO PARA BUSQUEDAS EN ECUADOR ── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#111111]">
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20 lg:py-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <Microscope size={14} className="text-[#EE1D23]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 font-[family-name:var(--font-outfit)]">
                Especialistas Certificados
              </span>
            </div>

            {/* H1 SEO - Ahora es el título principal */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal text-white leading-[1.0] mb-12 font-[family-name:var(--font-cinzel)] tracking-tight">
              Restauración de Obras de Arte <br className="hidden lg:block"/>
              <span className="text-white/30 italic font-light">en Ecuador.</span>
            </h1>

            {/* Lema de Brian - Se mantiene como sello de marca */}
            <div className="border-l-2 border-[#EE1D23] pl-8 mb-14 py-2">
               <p className="text-xl md:text-2xl font-light text-white/60 italic leading-relaxed font-[family-name:var(--font-cinzel)]">
                 "Repárame, restáurame, mantenme vivo."
               </p>
               <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mt-4">Lema del Atelier</p>
            </div>

            <p className="text-base text-white/40 max-w-lg mb-12 font-[family-name:var(--font-outfit)] leading-relaxed">
              Intervención científica en formatos bi y tridimensionales con rigor absoluto. Preservamos el patrimonio artístico e histórico nacional.
            </p>

            <a
              href="#galeria"
              className="inline-flex items-center gap-4 bg-[#EE1D23] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-[#0F172A] transition-all"
            >
              Explorar Portafolio
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-[45%] relative h-[50vh] lg:h-auto overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[0.2] hover:grayscale-0 transition-all duration-[3000ms]"
            style={{ backgroundImage: `url('/images/restauracion/hero-restauracion.webp')` }}
          />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent hidden lg:block" />
          
          <div className="absolute bottom-10 right-10 z-20 hidden lg:block">
             <div className="p-8 border border-white/10 backdrop-blur-xl bg-white/5 rounded-full aspect-square flex flex-center text-center items-center justify-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-white leading-tight">Rigor<br/>Absoluto</p>
             </div>
          </div>
        </div>
      </section>

      <RestorationSpecialties />
      <RestorationProcess />

      {/* ── GALERÍA DRAGGABLE ── */}
      <section id="galeria" className="min-h-screen bg-[#0F172A] py-24 flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl lg:text-6xl font-normal text-white font-[family-name:var(--font-cinzel)]">
              Maestría en <span className="text-white/30 italic">Intervención.</span>
            </h2>

            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab("comparativa")}
                className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === "comparativa" ? "bg-[#EE1D23] text-white" : "text-white/40 hover:text-white"
                }`}
              >
                Comparativa
              </button>
              <button
                onClick={() => setActiveTab("proceso")}
                className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === "proceso" ? "bg-[#EE1D23] text-white" : "text-white/40 hover:text-white"
                }`}
              >
                Proceso
              </button>
            </div>
          </div>
        </div>

        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 px-6 lg:px-[10vw]"
          >
            <AnimatePresence mode="wait">
              {activeTab === "comparativa" ? (
                antesDesques.map((item) => (
                  <AntesDesquesCard key={item.id} item={item} />
                ))
              ) : (
                procesoImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#111] shadow-2xl select-none"
                  >
                    <img src={img.src} alt={img.caption} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-[0.4em] mb-2 block">Etapa 0{idx + 1}</span>
                      <p className="text-xl text-white font-light font-[family-name:var(--font-cinzel)]">{img.caption}</p>
                    </div>
                  </div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex justify-center gap-4 text-white/10">
           <ChevronLeft size={20} />
           <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Deslizar para explorar</span>
           <ChevronRight size={20} />
        </div>
      </section>

      <div id="cotizar">
        <RestorationGalleryCTA />
      </div>

      <Footer />
    </main>
  );
}
