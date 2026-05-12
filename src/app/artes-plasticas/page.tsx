"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Palette, Brush, Scissors } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlasticArtsSpecialties from "@/components/PlasticArtsSpecialties";
import PlasticArtsExpertise from "@/components/PlasticArtsExpertise";
import PlasticArtsGalleryCTA from "@/components/PlasticArtsGalleryCTA";

export default function ArtesPlasticasPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <Navbar />

            {/* Hero — SEO & Artistic Focus */}
            <section ref={containerRef} className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0F172A]">
                
                {/* Left Panel: Content (55%) */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20 lg:py-0 z-10">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm w-fit"
                    >
                        <Palette size={14} className="text-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">
                            Pintura, Escultura, Dibujo y Diseño
                        </span>
                    </motion.div>

                    {/* H1 SEO - Actualizado según petición */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-[1.0] mb-10 tracking-tight"
                    >
                        Pinturas por Encargo y<br className="hidden lg:block"/>
                        <span className="text-white/40 italic font-light font-[family-name:var(--font-cinzel)]">Cuadros Personalizados.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-lg text-white/50 max-w-xl mb-12 font-[family-name:var(--font-outfit)] leading-relaxed"
                    >
                        Desde el estudio a su hogar. Creamos cuadros originales y esculturas de autor hechos a medida. Rigor académico en cada pincelada para colecciones privadas y espacios exclusivos en Ecuador.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#especialidades"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#EE1D23] text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-[#0F172A] transition-all duration-300 group"
                        >
                            Ver Cuadros y Obras
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#encargo"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            Obra por Encargo
                        </a>
                    </motion.div>
                </div>

                {/* Right Panel: Image (45%) */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] relative h-[50vh] lg:h-auto overflow-hidden bg-[#111]"
                >
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 w-full h-[120%] -top-[10%]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[0.2] hover:grayscale-0 transition-all duration-[3000ms]"
                            style={{ backgroundImage: "url('/images/galeria/escultura-2.webp')" }}
                        />
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent hidden lg:block" />
                    
                    {/* Artistic labels */}
                    <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <Brush size={18} className="text-[#EE1D23]" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Técnicas de Autor</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Scissors size={18} className="text-[#EE1D23]" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Diseño y Detalle</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Disciplinas */}
            <div id="especialidades">
                <PlasticArtsSpecialties />
            </div>

            {/* Por Encargo */}
            <div id="encargo">
                <PlasticArtsExpertise />
            </div>

            {/* Galería + Formulario */}
            <PlasticArtsGalleryCTA />

            <Footer />
        </main>
    );
}
