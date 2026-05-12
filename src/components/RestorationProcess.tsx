"use client";

import React from "react";
import { motion } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "Diagnóstico",
        desc: "Evaluación científica del estado de conservación.",
        image: "/images/restauracion/proceso-1.webp"
    },
    {
        num: "02",
        title: "Consolidación",
        desc: "Limpieza y estabilización estructural del soporte.",
        image: "/images/restauracion/proceso-2.webp"
    },
    {
        num: "03",
        title: "Reintegración",
        desc: "Reposición estética con absoluto respeto al original.",
        image: "/images/restauracion/proceso-3.webp"
    }
];

export default function RestorationProcess() {
    return (
        <section className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 mb-20">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Rigor Técnico</span>
                <h2 className="text-3xl md:text-5xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight">
                    El Proceso de Restauración
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-8 h-auto lg:h-[70vh]">
                {processSteps.map((step, idx) => (
                    <motion.div
                        key={step.num}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className="relative flex-1 group overflow-hidden rounded-[2.5rem] min-h-[400px] lg:min-h-0"
                    >
                        {/* Background Image — 100% of card */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                            style={{ backgroundImage: `url('${step.image}')` }}
                        />
                        
                        {/* Overlay — dark gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                        {/* Content — minimal (20% of vertical space) */}
                        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[40px] font-thin text-white/20 font-[family-name:var(--font-cinzel)] block mb-2">{step.num}</span>
                            <h3 className="text-2xl font-normal text-white font-[family-name:var(--font-cinzel)] mb-3">{step.title}</h3>
                            <p className="text-sm font-normal text-white/60 font-[family-name:var(--font-outfit)] leading-relaxed max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
