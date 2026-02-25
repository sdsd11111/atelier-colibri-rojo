"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "Concepto y Previsualización",
        desc: "Transformamos la idea en un proyecto tangible. Realizamos bocetos, levantamientos topográficos y modelado digital 3D para visualizar la obra en su entorno urbano real antes de dar la primera pincelada o soldadura.",
        image: "/images/monumental/proceso-1.webp"
    },
    {
        num: "02",
        title: "Ejecución y Maestría Técnica",
        desc: "Trabajo de taller y andamiaje a gran escala. Aplicamos técnicas de escultura en resina, metal o muralismo de alta resistencia, cuidando cada detalle estructural y estético bajo estrictos estándares de seguridad.",
        image: "/images/monumental/proceso-2.webp"
    },
    {
        num: "03",
        title: "Instalación e Impacto Final",
        desc: "Gestión logística, transporte de piezas monumentales y montaje in situ. Entregamos verdaderos hitos urbanos que se integran al paisaje lojano de forma natural, garantizando máxima durabilidad y muy bajo mantenimiento.",
        image: "/images/monumental/proceso-3.webp"
    }
];

export default function MonumentalProcess() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#F8FAFC] py-24 lg:py-32 relative overflow-hidden font-[family-name:var(--font-outfit)]">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Metodología de Trabajo</span>
                    <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                        El Camino hacia el Monumento
                    </h2>
                    <p className="text-lg font-light text-[#0F172A]/70 leading-relaxed md:text-xl">
                        Nuestra gestión es integral: desde la servilleta con el primer boceto hasta la inauguración de la plaza. Convertimos la visión en realidad urbana.
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
                <div className="w-full max-w-6xl mx-auto relative z-10">
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
                            <div className="w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1 relative">
                                {/* Number Background Indicator */}
                                <div className="absolute -top-16 -left-10 text-[180px] font-thin text-[#0F172A]/5 select-none -z-10 font-[family-name:var(--font-cinzel)] pointer-events-none leading-none hidden lg:block">
                                    {processSteps[activeTab].num}
                                </div>

                                <div className="w-16 h-16 rounded-full bg-[#EE1D23]/10 flex items-center justify-center text-[#EE1D23] font-bold text-xl mb-8 font-[family-name:var(--font-outfit)]">
                                    {processSteps[activeTab].num}
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-normal text-[#0F172A] mb-6 font-[family-name:var(--font-cinzel)] leading-tight">
                                    {processSteps[activeTab].title}
                                </h3>
                                <p className="text-lg lg:text-xl font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)] shadow-sm bg-white/40 p-6 rounded-2xl border border-white lg:bg-transparent lg:shadow-none lg:p-0 lg:border-none">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
