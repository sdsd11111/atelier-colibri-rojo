"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudiovisualSpecialties from "@/components/AudiovisualSpecialties";
import AudiovisualExpertise from "@/components/AudiovisualExpertise";
import AudiovisualShowreelCTA from "@/components/AudiovisualShowreelCTA";

export default function ProduccionAudiovisualPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            <Navbar />

            {/* Sección 1: Hero Audiovisual */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                        style={{
                            backgroundImage: "url('/images/audiovisual/hero-audiovisual.webp')"
                        }}
                    />
                </div>

                {/* Dark Gradient / Tech Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] z-0" />

                {/* Subtle Red Digital Glow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EE1D23] rounded-full blur-[150px] z-0"
                />

                {/* Contenido Central */}
                <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#EE1D23] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                            Atelier Studio
                        </span>
                    </motion.div>

                    {/* H1 Principal con Visión Artística */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-8 font-[family-name:var(--font-cinzel)] leading-[1.1] max-w-5xl"
                    >
                        Producción Audiovisual <br /> con <span className="italic font-light text-white/90">Visión Artística:</span><br />
                        <span className="text-3xl md:text-5xl lg:text-6xl text-white/60">10 años creando contenido en Loja.</span>
                    </motion.h1>

                    {/* Subtítulo Tecnológico/Estético */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-lg md:text-xl font-light text-white/60 max-w-3xl mb-12 font-[family-name:var(--font-outfit)] leading-relaxed"
                    >
                        Capturamos la esencia de su marca o proyecto a través de una lente profesional. Unimos la maestría técnica y compositiva del Atelier con las nuevas tendencias de la comunicación visual.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="#portafolio"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EE1D23] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-colors duration-300 shadow-[0_0_30px_rgba(238,29,35,0.3)] group"
                        >
                            Ver Portafolio
                            <PlayCircle size={18} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* Sección 2: Especialidades Audiovisuales */}
            <AudiovisualSpecialties />

            {/* Sección 3: El Diferenciador (El Ojo del Artista) */}
            <AudiovisualExpertise />

            {/* Sección 4: Showreel + Portafolio + Formulario Audiovisual */}
            <AudiovisualShowreelCTA />

            <Footer />
        </main>
    );
}
