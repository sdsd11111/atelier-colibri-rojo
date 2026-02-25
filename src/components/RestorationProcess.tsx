"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "Diagnóstico y Análisis",
        desc: "Evaluamos el estado de conservación, identificando daños estructurales, xilófagos o desprendimientos de capa pictórica.",
        image: "/images/restauracion/proceso-1.webp"
    },
    {
        num: "02",
        title: "Limpieza y Consolidación",
        desc: "Eliminación de barnices oxidados y suciedad acumulada. Consolidamos el soporte (madera, lienzo o resina) para detener el deterioro.",
        image: "/images/restauracion/proceso-2.webp"
    },
    {
        num: "03",
        title: "Reintegración y Acabado",
        desc: "Reposición de faltantes mediante técnicas que respetan la estética original, asegurando una transición invisible entre lo antiguo y lo restaurado.",
        image: "/images/restauracion/proceso-3.webp"
    }
];

export default function RestorationProcess() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-[#FDFDFD] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Estudio Técnico</span>
                    <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                        Proceso de Intervención
                    </h2>
                    <p className="text-lg font-light text-[#0F172A]/70 font-[family-name:var(--font-outfit)] leading-relaxed">
                        Abordamos cada pieza con rigor metodológico y científico. Nuestra intervención se divide en tres fases fundamentales, garantizando la preservación total del bien sin alteraciones a su identidad original.
                    </p>
                </div>

                {/* Tabs Selector */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-16 lg:mb-24">
                    {processSteps.map((step, index) => (
                        <button
                            key={step.num}
                            onClick={() => setActiveTab(index)}
                            className={`flex justify-center items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${activeTab === index
                                ? "bg-[#EE1D23] text-white shadow-lg shadow-[#EE1D23]/30"
                                : "bg-white text-[#0F172A]/60 hover:text-[#0F172A] hover:bg-gray-50 border border-gray-100"
                                }`}
                        >
                            <span className="font-bold text-sm font-[family-name:var(--font-outfit)] opacity-80">{step.num}</span>
                            <span className="font-normal text-sm md:text-base font-[family-name:var(--font-cinzel)] whitespace-nowrap">{step.title}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="w-full max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                        >
                            {/* Text Column */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1">
                                <div className="w-16 h-16 rounded-full bg-[#EE1D23]/10 flex items-center justify-center text-[#EE1D23] font-bold text-xl mb-8 font-[family-name:var(--font-outfit)]">
                                    {processSteps[activeTab].num}
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-normal text-[#0F172A] mb-6 font-[family-name:var(--font-cinzel)] leading-tight">
                                    {processSteps[activeTab].title}
                                </h3>
                                <p className="text-lg lg:text-xl font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                    {processSteps[activeTab].desc}
                                </p>
                            </div>

                            {/* Image Column */}
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-gray-200">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${processSteps[activeTab].image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-[#0F172A]/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
