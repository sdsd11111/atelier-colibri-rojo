"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LayoutGrid } from "lucide-react";

const CATEGORIES = ["Todas", "Restauración", "Escultura Monumental", "Muralismo", "Artes Plásticas"];

const ARTWORKS = [
    { id: 1, title: "Restauración Óleo sobre Lienzo", category: "Restauración", year: 2023, technique: "Conservación pictórica", image: "/images/galeria/restauracion-1.webp", size: "tall" },
    { id: 2, title: "Mural Plaza de la Cultura", category: "Muralismo", year: 2022, technique: "Acrílico Mural + UV", image: "/images/galeria/muralismo-1.webp", size: "wide" },
    { id: 3, title: "Escultura Identidad Lojana", category: "Escultura Monumental", year: 2021, technique: "Fibra de Vidrio Policromada", image: "/images/galeria/escultura-1.webp", size: "normal" },
    { id: 4, title: "Estudio de Personaje", category: "Artes Plásticas", year: 2024, technique: "Óleo sobre Lienzo", image: "/images/galeria/academia-1.webp", size: "normal" },
    { id: 5, title: "Naturaleza Muerta", category: "Artes Plásticas", year: 2023, technique: "Acuarela sobre Papel", image: "/images/galeria/audiovisual-1.webp", size: "normal" },
    { id: 6, title: "Mural Raíces del Sur", category: "Muralismo", year: 2023, technique: "Aerografía + Acrílico", image: "/images/galeria/muralismo-2.webp", size: "tall" },
    { id: 7, title: "Restauración Retablo Colonial", category: "Restauración", year: 2020, technique: "Consolidación + Reintegración", image: "/images/galeria/restauracion-2.webp", size: "normal" },
    { id: 8, title: "Monumento Parque Lineal", category: "Escultura Monumental", year: 2022, technique: "Cemento + Acero", image: "/images/galeria/escultura-2.webp", size: "wide" },
    { id: 9, title: "Torso en Movimiento", category: "Artes Plásticas", year: 2024, technique: "Escultura en Resina", image: "/images/galeria/audiovisual-2.webp", size: "normal" },
];

export default function GaleriaPage() {
    const [activeCategory, setActiveCategory] = useState("Todas");
    const [selectedWork, setSelectedWork] = useState<typeof ARTWORKS[0] | null>(null);

    const filtered = activeCategory === "Todas"
        ? ARTWORKS
        : ARTWORKS.filter(a => a.category === activeCategory);

    return (
        <main className="min-h-screen bg-[#FAFAF9]">
            <Navbar />

            {/* Hero + Filter Bar */}
            <section className="pt-32 pb-16 px-6 lg:px-12">
                <div className="container mx-auto">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <LayoutGrid size={14} className="text-[#EE1D23]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23]">Exhibición Permanente</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-[1.05]">
                                Exhibición <br className="hidden lg:block" /> Atelier Colibrí Rojo
                            </h1>
                                El Legado de la Maestría y la Creatividad. Una colección que celebra décadas de arte, restauración y escultura monumental en el corazón cultural del Ecuador.
                        </div>

                        <div className="text-right hidden lg:block">
                            <span className="text-6xl font-light text-[#0F172A]/10 font-[family-name:var(--font-cinzel)]">{String(filtered.length).padStart(2, "0")}</span>
                            <p className="text-xs text-[#0F172A]/40 uppercase tracking-widest font-[family-name:var(--font-outfit)] mt-1">Obras</p>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 pb-6 border-b border-[#0F172A]/10">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 font-[family-name:var(--font-outfit)] font-medium ${activeCategory === cat
                                    ? "bg-[#EE1D23] text-white shadow-lg shadow-[#EE1D23]/20"
                                    : "bg-white border border-[#0F172A]/10 text-[#0F172A]/60 hover:border-[#EE1D23]/40 hover:text-[#EE1D23]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry Gallery Grid */}
            <section className="pb-24 px-6 lg:px-12">
                <div className="container mx-auto">
                    <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((artwork) => (
                                <motion.div
                                    key={artwork.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="break-inside-avoid mb-6 cursor-pointer group relative overflow-hidden rounded-2xl shadow-md shadow-gray-200/50"
                                    onClick={() => setSelectedWork(artwork)}
                                >
                                    {/* Image */}
                                    <div className={`relative overflow-hidden ${artwork.size === "tall" ? "aspect-[3/4]" : artwork.size === "wide" ? "aspect-[16/9]" : "aspect-square"}`}>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${artwork.image}')` }}
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/60 transition-all duration-500 flex items-end p-6">
                                            <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                                                <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-widest block mb-1 font-[family-name:var(--font-outfit)]">{artwork.category}</span>
                                                <h3 className="text-white text-lg font-normal font-[family-name:var(--font-cinzel)] leading-tight">{artwork.title}</h3>
                                                <span className="text-white/50 text-xs font-[family-name:var(--font-outfit)] mt-1 block">{artwork.year} · {artwork.technique}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-[#0F172A]/40 text-lg font-[family-name:var(--font-outfit)] font-light">No hay obras en esta categoría todavía.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Banner CTA */}
            <section className="bg-[#0F172A] py-24 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#EE1D23]/5 blur-3xl" />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block font-[family-name:var(--font-outfit)]">Obras por Encargo</span>
                    <h2 className="text-4xl md:text-6xl font-normal text-white mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                        ¿Tiene en mente una obra personalizada?
                    </h2>
                    <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-12 font-[family-name:var(--font-outfit)]">
                        Desde esculturas de pequeño formato hasta monumentos urbanos. Conversemos sobre su visión y la transformamos en realidad artística.
                    </p>
                    <a href="/#contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-[#EE1D23] text-white rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all duration-300 shadow-xl shadow-[#EE1D23]/20 font-[family-name:var(--font-outfit)]">
                        Solicitar una Obra
                    </a>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-6 lg:p-12"
                        onClick={() => setSelectedWork(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Image */}
                            <div className="lg:w-2/3 relative min-h-[300px] lg:min-h-[500px]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${selectedWork.image}')` }}
                                />
                            </div>
                            {/* Info */}
                            <div className="lg:w-1/3 p-10 flex flex-col justify-between font-[family-name:var(--font-outfit)]">
                                <div>
                                    <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-[0.3em] mb-4 block">{selectedWork.category}</span>
                                    <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-8 leading-tight">{selectedWork.title}</h3>
                                    <div className="space-y-4 border-t border-gray-100 pt-6">
                                        <div><span className="text-xs text-[#0F172A]/40 uppercase tracking-widest block mb-1">Año</span><span className="text-[#0F172A] font-medium">{selectedWork.year}</span></div>
                                        <div><span className="text-xs text-[#0F172A]/40 uppercase tracking-widest block mb-1">Técnica</span><span className="text-[#0F172A] font-medium">{selectedWork.technique}</span></div>
                                        <div><span className="text-xs text-[#0F172A]/40 uppercase tracking-widest block mb-1">Especialidad</span><span className="text-[#0F172A] font-medium">{selectedWork.category}</span></div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedWork(null)}
                                    className="mt-8 px-6 py-3 border border-gray-200 rounded-xl text-sm text-[#0F172A]/60 hover:border-[#EE1D23] hover:text-[#EE1D23] transition-colors"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
