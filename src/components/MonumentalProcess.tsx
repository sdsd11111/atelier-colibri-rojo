"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "Concepto y Render 3D",
        desc: "La idea toma forma antes de la primera herramienta. Bocetos, levantamientos y renderización 3D fotorrealista para que el cliente visualice la obra en su entorno real.",
        image: "/images/monumental/proceso-1.webp"
    },
    {
        num: "02",
        title: "Ejecución Técnica",
        desc: "Taller y andamiaje a gran escala. Aplicamos técnicas en resina, metal o pintura mural de alta resistencia. Control riguroso de cada detalle estructural y estético.",
        image: "/images/monumental/proceso-2.webp"
    },
    {
        num: "03",
        title: "Instalación Final",
        desc: "Logística, transporte y montaje in situ. Entregamos el hito urbano integrado al paisaje, con máxima durabilidad y mínimo mantenimiento futuro.",
        image: "/images/monumental/proceso-3.webp"
    }
];

export default function MonumentalProcess() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#0F172A] relative overflow-hidden font-[family-name:var(--font-outfit)]">

            {/* Background image with very low opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{ backgroundImage: `url('${processSteps[activeTab].image}')` }}
            />

            <div className="relative z-10 container mx-auto px-6 lg:px-16 py-24 lg:py-32">

                {/* Header — minimal */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-4 block">Proceso</span>
                        <h2 className="text-3xl md:text-5xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight">
                            Del boceto al hito urbano
                        </h2>
                    </div>

                    {/* Tab selector — pill style */}
                    <div className="flex gap-2">
                        {processSteps.map((step, index) => (
                            <button
                                key={step.num}
                                onClick={() => setActiveTab(index)}
                                className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === index
                                    ? "bg-[#EE1D23] text-white"
                                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70 border border-white/10"
                                }`}
                            >
                                {step.num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content — image dominant */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-10 lg:gap-16 items-center"
                    >
                        {/* Text — 30% */}
                        <div>
                            <span className="text-[80px] font-thin text-white/5 font-[family-name:var(--font-cinzel)] leading-none select-none block -mb-6">
                                {processSteps[activeTab].num}
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-normal text-white font-[family-name:var(--font-cinzel)] mb-6 leading-tight">
                                {processSteps[activeTab].title}
                            </h3>
                            <p className="text-base font-normal text-white/70 leading-relaxed">
                                {processSteps[activeTab].desc}
                            </p>

                            {/* Progress dots */}
                            <div className="flex gap-2 mt-10">
                                {processSteps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTab(i)}
                                        className={`transition-all duration-300 rounded-full ${i === activeTab
                                            ? "w-8 h-1.5 bg-[#EE1D23]"
                                            : "w-2 h-1.5 bg-white/20 hover:bg-white/40"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image — 70% */}
                        <div className="relative aspect-[16/9] lg:aspect-[16/8] rounded-[2rem] overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                                style={{ backgroundImage: `url('${processSteps[activeTab].image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

                            {/* Step label overlay */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#EE1D23] flex items-center justify-center text-white text-[10px] font-bold">
                                    {processSteps[activeTab].num}
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                                    {processSteps[activeTab].title}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
