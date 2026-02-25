"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonumentalSpecialties from "@/components/MonumentalSpecialties";
import MonumentalProcess from "@/components/MonumentalProcess";
import MonumentalGalleryCTA from "@/components/MonumentalGalleryCTA";

export default function ArteMonumentalPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Sección 1: Hero de Gran Formato */}
            <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
                {/* Parallax Background */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                        style={{
                            backgroundImage: "url('/images/monumental/hero-monumental.webp')",
                        }}
                    />
                </motion.div>

                {/* Dark Gradient Overlay para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Contenido Hero */}
                <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-20">

                    {/* Badge de Trayectoria */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8"
                    >
                        <Trophy size={16} className="text-[#EE1D23]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                            15 Años de Impacto en la Provincia de Loja
                        </span>
                    </motion.div>

                    {/* H1 Principal con animación Slide-up + Desenfoque */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-8 font-[family-name:var(--font-cinzel)] leading-[1.1] max-w-5xl"
                    >
                        Arte Público y Monumental en Loja:<br />
                        <span className="text-white/80 italic font-light">Esculpiendo la Identidad de nuestra Ciudad.</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-lg md:text-xl md:text-2xl font-light text-white/70 max-w-3xl mb-12 font-[family-name:var(--font-outfit)] leading-relaxed"
                    >
                        Más de 15 años transformando el entorno urbano con obras de gran escala. Especialistas en muralismo artístico y escultura monumental que trascienden en el tiempo.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="#proyectos"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#EE1D23] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#0F172A] transition-colors duration-300 shadow-xl shadow-red-500/20 group"
                        >
                            Ver Proyectos Monumentales
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#cotizar"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent text-white border-2 border-white/30 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-colors duration-300"
                        >
                            Cotizar Obra Pública
                        </a>
                    </motion.div>
                </div>

                {/* Indicador de Scroll Visual */}
                <motion.div
                    animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Descubrir Obra</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </section>

            {/* Sección 2: Disciplinas de Gran Formato */}
            <MonumentalSpecialties />

            {/* Sección 3: Metodología de Trabajo */}
            <MonumentalProcess />

            {/* Sección 4: Galería de Impacto y Contacto Corporativo */}
            <MonumentalGalleryCTA />

            <Footer />
        </main>
    );
}
