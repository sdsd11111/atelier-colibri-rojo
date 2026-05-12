"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gift, Palette } from "lucide-react";

// Primary disciplines
const primaryDisciplines = [
    {
        num: "01",
        label: "Pintura",
        heading: "Cuadros al Óleo y Obras de Autor",
        body: "Producción pictórica en óleos y acrílicos. Creamos cuadros que capturan la esencia del coleccionista, desde piezas de museo hasta obras personalizadas por encargo.",
        tags: ["Cuadros al Óleo", "Acrílicos", "Retratos de Autor", "Obras por Encargo"],
        image: "/images/galeria/muralismo-1.webp",
        imagePosition: "right"
    },
    {
        num: "02",
        label: "Escultura",
        heading: "Escultura Artística y Objetos de Arte",
        body: "Exploración tridimensional en diversos materiales. Piezas únicas que dialogan con el espacio, diseñadas para perdurar como legado artístico.",
        tags: ["Escultura en Metal", "Resina", "Modelado en Arcilla"],
        image: "/images/galeria/escultura-1.webp",
        imagePosition: "left"
    }
];

// Secondary disciplines
const secondaryDisciplines = [
    {
        num: "03",
        label: "Dibujo",
        heading: "Retratos y Línea de Dibujo",
        body: "Maestría en el trazo. Dibujos al carboncillo, grafito y técnicas mixtas para quienes buscan la pureza de la forma.",
        tags: ["Retrato Artístico", "Carboncillo", "Estudios de Forma"],
        image: "/images/galeria/escultura-2.webp",
    },
    {
        num: "04",
        label: "Diseño",
        heading: "Diseño Artístico y Arte Aplicado",
        body: "La fusión entre la plástica y la funcionalidad. Diseño de objetos y conceptos visuales con sello de autor.",
        tags: ["Diseño de Autor", "Arte Aplicado", "Propuestas Visuales"],
        image: "/images/galeria/muralismo-2.webp",
    }
];

export default function PlasticArtsSpecialties() {
    return (
        <section className="bg-[#FDFDFD] overflow-hidden font-[family-name:var(--font-outfit)]">

            {/* Commercial Line — Small Format (20-200 focus, no prices) */}
            <div className="bg-[#0F172A] py-12 px-6 lg:px-16 overflow-hidden relative">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#EE1D23]/10 flex items-center justify-center border border-[#EE1D23]/20">
                            <Gift className="text-[#EE1D23]" size={32} />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-1 block">Línea Comercial</span>
                            <h2 className="text-2xl font-normal text-white font-[family-name:var(--font-cinzel)]">Detalles de Autor & Pequeño Formato</h2>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 text-center md:text-left">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Exclusividad</p>
                            <p className="text-sm font-light text-white/70">Obras originales accesibles para coleccionistas emergentes.</p>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-white/10" />
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Personalización</p>
                            <p className="text-sm font-light text-white/70">Regalos de alto valor estético con certificado de autenticidad.</p>
                        </div>
                    </div>
                    <a href="#contacto" className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#0F172A] transition-all">
                        Consultar Catálogo <Sparkles size={14} />
                    </a>
                </div>
                {/* Subtle texture bg */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
            </div>

            {/* Strip — SEO terms */}
            <div className="border-b border-gray-100 py-8 px-6 lg:px-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0F172A]/30 flex items-center gap-2">
                        <Palette size={12} /> Especialidades
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                        {["Cuadros de Autor", "Pinturas por Encargo", "Retratos", "Esculturas", "Detalles Artísticos"].map(term => (
                            <span key={term} className="text-xs font-light text-[#0F172A]/50 tracking-wide lowercase italic">{term}</span>
                        ))}
                    </div>
                    <div className="hidden lg:block w-px h-6 bg-gray-200" />
                </div>
            </div>

            {/* Primary — full-bleed alternating */}
            {primaryDisciplines.map((d) => (
                <div
                    key={d.num}
                    className={`flex flex-col ${d.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[80vh] border-b border-gray-50`}
                >
                    {/* Text — 35% */}
                    <motion.div
                        initial={{ opacity: 0, x: d.imagePosition === "left" ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[35%] flex flex-col justify-center px-10 lg:px-16 py-20 lg:py-0 bg-[#FDFDFD]"
                    >
                        <span className="text-[120px] font-thin text-gray-50 font-[family-name:var(--font-cinzel)] leading-none select-none block -mb-4 -ml-2">
                            {d.num}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-4 block">{d.label}</span>
                        <h2 className="text-3xl lg:text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-[1.1] mb-8">
                            {d.heading}
                        </h2>
                        <p className="text-base font-light text-[#0F172A]/60 leading-relaxed mb-10">
                            {d.body}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {d.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-bold uppercase tracking-widest text-[#0F172A]/40">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href="#encargo" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] transition-all">
                            OBRA A MEDIDA <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Image — 65% */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full lg:w-[65%] relative min-h-[55vh] lg:min-h-0 overflow-hidden group"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out group-hover:scale-[1.05]"
                            style={{ backgroundImage: `url('${d.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                    </motion.div>
                </div>
            ))}

            {/* Secondary — 2-col cards */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {secondaryDisciplines.map((d, idx) => (
                    <motion.div
                        key={d.num}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="relative group overflow-hidden border-r border-gray-50 last:border-r-0"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                                style={{ backgroundImage: `url('${d.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent opacity-90" />
                        </div>
                        <div className="px-12 py-12 bg-[#FDFDFD] relative z-10 -mt-20">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-4 block">{d.num}. {d.label}</span>
                            <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-4 leading-tight">
                                {d.heading}
                            </h3>
                            <p className="text-sm font-light text-[#0F172A]/50 leading-relaxed mb-8">
                                {d.body}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {d.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100 text-[9px] font-bold uppercase tracking-widest text-[#0F172A]/35">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
