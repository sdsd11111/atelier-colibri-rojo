"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    PenTool,
    Video,
    Box,
    Lightbulb,
    ArrowRight,
    Layers,
    BookOpen,
    Sparkles,
    Sofa,
    Film,
    Aperture,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   DATOS — Estructurados según la reunión
   Bloque A: Diseño y Audiovisual (Carlos)
   Bloque B: Ambientación y Espacios (Milton / Brian)
   Bloque C: Maquetería, Marquetería y Formación (Brian)
───────────────────────────────────────────── */

const bloqueA = [
    {
        id: "01",
        area: "Diseño Gráfico",
        desc: "Identidad corporativa y diseño editorial. Imagen que representa a la institución o al artista con coherencia y nivel.",
        icon: <PenTool className="w-5 h-5" />,
        tags: ["Identidad", "Editorial"],
    },
    {
        id: "02",
        area: "Animación y Arte Digital",
        desc: "Creación de piezas visuales en movimiento y arte digital. Ilustraciones y animaciones producidas con enfoque artístico.",
        icon: <Sparkles className="w-5 h-5" />,
        tags: ["Animación", "Arte Digital"],
    },
    {
        id: "03",
        area: "Producción Audiovisual",
        desc: "Gestión completa de las tres etapas de producción para proyectos de video y fotografía.",
        icon: <Video className="w-5 h-5" />,
        tags: ["Pre-producción", "Producción", "Post-producción"],
        etapas: [
            { num: "01", nombre: "Pre-producción", detalle: "Guion, planificación y storyboard." },
            { num: "02", nombre: "Producción", detalle: "Fotografía, grabación y dirección en set." },
            { num: "03", nombre: "Post-producción", detalle: "Edición, montaje y corrección final." },
        ],
    },
];

const bloqueB = [
    {
        id: "01",
        area: "Ambientación",
        desc: "Diseño de interiores con criterio artístico. El espacio pensado para que la obra y el entorno conversen.",
        icon: <Sofa className="w-5 h-5" />,
    },
    {
        id: "02",
        area: "Diseño de Iluminación",
        desc: "Consultoría para que la luz realce el valor estético de las piezas y los espacios.",
        icon: <Lightbulb className="w-5 h-5" />,
    },
    {
        id: "03",
        area: "Mobiliario Artístico",
        desc: "Propuestas de mobiliario que complementan el espacio sin competir con la obra.",
        icon: <Aperture className="w-5 h-5" />,
    },
];

const bloqueC = [
    {
        id: "01",
        area: "Maquetería",
        desc: "Modelos a escala de precisión: arquitectónicos, didácticos y anatómicos (resina). Piezas técnicas con acabado artístico.",
        icon: <Box className="w-5 h-5" />,
        tags: ["Arquitectónica", "Didáctica", "Anatómica"],
    },
    {
        id: "02",
        area: "Marquetería de Autor",
        desc: "Marcos artesanales diseñados para no restarle valor a la obra. Materiales de conservación, acabados a medida.",
        icon: <Layers className="w-5 h-5" />,
        tags: ["A medida", "Conservación"],
    },
    {
        id: "03",
        area: "Talleres de Formación Artística",
        desc: "Cursos de dibujo, pintura y diseño. El Atelier comparte su conocimiento con quien quiere aprender en serio.",
        icon: <BookOpen className="w-5 h-5" />,
        tags: ["Dibujo", "Pintura", "Diseño"],
    },
];

/* ─────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────── */

export default function VariosPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#EE1D23] selection:text-white">
            <Navbar />

            {/* ── HERO ── */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0F172A]"
            >
                {/* Panel izquierdo: Texto (55%) */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-20 pt-32 pb-20 lg:py-0 z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-6"
                    >
                        Proyectos Especiales — Atelier Colibrí Rojo
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-[1.05] mb-10"
                    >
                        Servicios
                        <br />
                        <span className="text-white/30 italic font-light">
                            complementarios.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base md:text-lg font-light text-white/50 max-w-lg mb-12 font-[family-name:var(--font-outfit)] leading-relaxed"
                    >
                        Diseño gráfico, producción audiovisual, ambientación de espacios, maquetería técnica y formación artística. Todo bajo el mismo criterio de calidad del Atelier.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <a
                            href="#bloque-a"
                            className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#EE1D23] text-white text-xs font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-[#0F172A] transition-all duration-300 group"
                        >
                            Ver servicios
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Panel derecho: Imagen (45%) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.55, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] relative h-[50vh] lg:h-auto overflow-hidden"
                >
                    <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <div
                            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                            style={{ backgroundImage: "url('/images/audiovisual/hero-audiovisual.webp')" }}
                        />
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent hidden lg:block" />
                </motion.div>
            </section>

            {/* ── BLOQUE A: DISEÑO Y AUDIOVISUAL ── */}
            <section id="bloque-a" className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Encabezado de bloque */}
                    <div className="mb-16 border-b border-gray-100 pb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-4 block">
                            Área — Diseño y Audiovisual
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">
                            Imagen, Movimiento
                            <br />
                            <span className="text-[#0F172A]/30 italic">y Comunicación.</span>
                        </h2>
                    </div>

                    {/* Tarjetas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {bloqueA.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12 }}
                                className="p-10 rounded-[2.5rem] bg-[#FDFDFD] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-widest">
                                        {item.id}
                                    </span>
                                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#0F172A]">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-normal text-[#0F172A] mb-4 font-[family-name:var(--font-cinzel)]">
                                    {item.area}
                                </h3>
                                <p className="text-[13px] text-gray-400 font-light leading-relaxed mb-8 font-[family-name:var(--font-outfit)]">
                                    {item.desc}
                                </p>

                                {/* Etapas de producción audiovisual */}
                                {item.etapas && (
                                    <div className="space-y-3 mt-4">
                                        {item.etapas.map((e) => (
                                            <div key={e.num} className="flex gap-4 items-start p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                <span className="text-[10px] font-bold text-[#EE1D23] w-8 pt-0.5">{e.num}</span>
                                                <div>
                                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#0F172A] mb-0.5">{e.nombre}</p>
                                                    <p className="text-[12px] text-gray-400 font-light">{e.detalle}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tags */}
                                {!item.etapas && item.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-gray-100 text-[9px] font-bold text-gray-400 rounded-full uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BLOQUE B: AMBIENTACIÓN Y ESPACIOS ── */}
            <section id="bloque-b" className="py-24 lg:py-40 bg-[#0F172A] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-[#EE1D23]/4 -skew-x-12 translate-x-1/4 pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-20 relative z-10">

                    {/* Encabezado de bloque */}
                    <div className="mb-16 border-b border-white/10 pb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-4 block">
                            Área — Ambientación y Espacios
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-normal font-[family-name:var(--font-cinzel)]">
                            Luz, Espacio
                            <br />
                            <span className="text-white/30 italic">y Mobiliario.</span>
                        </h2>
                    </div>

                    {/* Grid de 3 columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {bloqueB.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12 }}
                                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-widest">
                                        {item.id}
                                    </span>
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#EE1D23]">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-normal mb-4 font-[family-name:var(--font-cinzel)]">
                                    {item.area}
                                </h3>
                                <p className="text-[13px] text-white/50 font-light leading-relaxed font-[family-name:var(--font-outfit)]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BLOQUE C: MAQUETERÍA, MARQUETERÍA Y FORMACIÓN ── */}
            <section id="bloque-c" className="py-24 lg:py-40 bg-[#FDFDFD]">
                <div className="container mx-auto px-6 lg:px-20">

                    {/* Encabezado de bloque */}
                    <div className="mb-16 border-b border-gray-100 pb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-4 block">
                            Área — Maquetería, Marquetería y Formación
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">
                            Modelos, Marcos
                            <br />
                            <span className="text-[#0F172A]/30 italic">y Enseñanza.</span>
                        </h2>
                    </div>

                    {/* Grid de 3 columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {bloqueC.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12 }}
                                className={`p-10 rounded-[2.5rem] border hover:-translate-y-2 transition-all duration-500 ${
                                    idx === 1
                                        ? "bg-[#0F172A] text-white border-transparent shadow-xl shadow-[#0F172A]/10"
                                        : "bg-white border-gray-100 shadow-sm hover:shadow-xl"
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-widest">
                                        {item.id}
                                    </span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                        idx === 1 ? "bg-white/5 text-[#EE1D23]" : "bg-gray-50 text-[#0F172A]"
                                    }`}>
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className={`text-xl font-normal mb-4 font-[family-name:var(--font-cinzel)] ${
                                    idx === 1 ? "text-white" : "text-[#0F172A]"
                                }`}>
                                    {item.area}
                                </h3>
                                <p className={`text-[13px] font-light leading-relaxed mb-8 font-[family-name:var(--font-outfit)] ${
                                    idx === 1 ? "text-white/50" : "text-gray-400"
                                }`}>
                                    {item.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((t) => (
                                        <span
                                            key={t}
                                            className={`px-3 py-1 text-[9px] font-bold rounded-full uppercase tracking-wider ${
                                                idx === 1
                                                    ? "bg-white/5 text-white/30"
                                                    : "bg-gray-100 text-gray-400"
                                            }`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="py-24 lg:py-32 bg-white border-t border-gray-50">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-6 block">
                            Contacto
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                            ¿Tiene un proyecto
                            <br />
                            <span className="italic text-[#EE1D23]">fuera de lo común?</span>
                        </h2>
                        <p className="text-base font-light text-gray-400 mb-12 font-[family-name:var(--font-outfit)] leading-relaxed">
                            Cuéntenos su idea. Le respondemos con criterio artístico y técnico.
                        </p>
                        <a
                            href="https://wa.me/593987654321"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0F172A] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#EE1D23] transition-all duration-300 shadow-2xl shadow-[#0F172A]/10"
                        >
                            Consultar Proyecto
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
