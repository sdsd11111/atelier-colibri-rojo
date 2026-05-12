"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, History, HeartPulse, Microscope } from "lucide-react";

const specialties = [
    {
        num: "01",
        label: "Arte Pictórico",
        heading: "Restauración Pictórica e Histórica",
        sub: "Formatos Bidimensionales",
        body: "Intervención científica en lienzos, tablas y murales. Recuperamos la policromía original mediante análisis cromático y eliminación de barnices oxidados con rigor absoluto.",
        tags: ["Óleo sobre Lienzo", "Investigación de Pigmentos", "Análisis Histórico"],
        image: "/images/restauracion/pictorica-bg.webp",
        imagePosition: "right"
    },
    {
        num: "02",
        label: "Arte Sacro",
        heading: "Preservación de Imaginería",
        sub: "Especialidad en Arte Sacro",
        body: "Tratamiento integral de figuras religiosas y retablos. Aplicación de técnicas tradicionales: pan de oro, plata y policromía encarnada para devolver la unción a la obra.",
        tags: ["Imaginería", "Pan de Oro / Plata", "Policromía Encarnada"],
        image: "/images/restauracion/hero-restauracion.webp",
        imagePosition: "left"
    },
    {
        num: "03",
        label: "Escultura",
        heading: "Restauración Escultórica",
        sub: "Formatos Tridimensionales",
        body: "Recuperación de piezas en madera tallada, metal, resinas y yeso. Control fitosanitario de xilófagos, refuerzo estructural y reintegración volumétrica.",
        tags: ["Talla en Madera", "Madera / Resina / Yeso", "Control de Xilófagos"],
        image: "/images/restauracion/escultorica-bg.webp",
        imagePosition: "right"
    },
    {
        num: "04",
        label: "Preservación",
        heading: "Pólizas de Mantenimiento",
        sub: "Prevención Institucional",
        body: "Programas integrales de mantenimiento preventivo para instituciones y colecciones privadas. No solo curamos la obra; creamos protocolos para que permanezca viva por siglos.",
        tags: ["Gestión Institucional", "Mantenimiento Preventivo", "Protocolos de Cuidado"],
        image: "/images/restauracion/proceso-1.webp",
        imagePosition: "left"
    }
];

export default function RestorationSpecialties() {
    return (
        <section className="bg-white overflow-hidden font-[family-name:var(--font-outfit)]">
            
            {/* Header — minimal */}
            <div className="py-24 container mx-auto px-6 lg:px-16 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-gray-100 rounded-full bg-gray-50"
                >
                    <Microscope size={14} className="text-[#EE1D23]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0F172A]/40">Rigor Científico y Técnico</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-medium text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-8">
                    Maestría en <span className="text-[#EE1D23] italic">Conservación.</span>
                </h2>
                <p className="text-xl font-light text-[#0F172A]/50 leading-relaxed max-w-2xl mx-auto italic">
                    "La restauración es el momento metodológico en el cual la obra de arte es reconocida en su consistencia física."
                </p>
            </div>

            {/* Alternating Panels (80/20 style) */}
            {specialties.map((s) => (
                <div key={s.num} className={`flex flex-col ${s.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[85vh] border-t border-gray-50`}>
                    
                    {/* Text Panel — 30% */}
                    <motion.div
                        initial={{ opacity: 0, x: s.imagePosition === "left" ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[30%] flex flex-col justify-center px-10 lg:px-16 py-20 lg:py-0 bg-[#FDFDFD]"
                    >
                        <div className="mb-12">
                             <span className="text-[120px] font-thin text-gray-100 font-[family-name:var(--font-cinzel)] leading-none select-none block -ml-4">{s.num}</span>
                             <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-4 block">{s.label}</span>
                             <h3 className="text-3xl lg:text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-2">
                                {s.heading}
                             </h3>
                             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/30 mb-8">{s.sub}</p>
                        </div>

                        <p className="text-base font-normal text-[#0F172A]/60 leading-relaxed mb-10">
                            {s.body}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-12">
                            {s.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-bold uppercase tracking-widest text-[#0F172A]/50">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <a href="#cotizar" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] transition-all">
                                SOLICITAR EVALUACIÓN <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Panel — 70% */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full lg:w-[70%] relative min-h-[60vh] lg:min-h-0 overflow-hidden bg-[#0F172A]"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center grayscale-[0.3] hover:grayscale-0 transition-all duration-[2500ms] hover:scale-105"
                            style={{ backgroundImage: `url('${s.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Rigor Label */}
                        <div className="absolute bottom-10 right-10">
                             <div className="flex items-center gap-3 px-6 py-3 border border-white/10 backdrop-blur-md bg-black/20 rounded-xl">
                                <ShieldCheck size={16} className="text-[#EE1D23]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Rigor Absoluto</span>
                             </div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
