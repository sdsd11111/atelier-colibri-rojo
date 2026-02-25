"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Lightbulb, Focus, Check } from "lucide-react";

export default function AudiovisualExpertise() {
    return (
        <section className="bg-[#F8FAFC] py-24 lg:py-40 relative overflow-hidden font-[family-name:var(--font-outfit)]">

            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side: Image with Reveal Effect */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            whileInView={{ clipPath: "inset(0 0 0 0)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#EE1D23]/5"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                style={{ backgroundImage: "url('/images/audiovisual/expertise-audiovisual.webp')" }}
                            />
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/60 via-transparent to-transparent" />

                            {/* Artistic Caption */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                                <span className="text-[10px] font-bold text-[#EE1D23] uppercase tracking-[0.3em] mb-2 block">Criterio Estético</span>
                                <p className="text-white/80 text-sm font-light italic font-[family-name:var(--font-cinzel)] leading-relaxed">
                                    "La cámara es solo el pincel; el ojo del artista es el que crea la obra."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Argument of Sale */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">El Diferenciador</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-[1.1]">
                                No solo grabamos, <br /> <span className="italic text-[#0F172A]/60">componemos con luz.</span>
                            </h2>
                            <p className="text-lg md:text-xl font-light text-[#0F172A]/60 leading-relaxed mb-12 max-w-xl">
                                Nuestra ventaja competitiva nace de la formación en artes plásticas. Aplicamos principios de composición, teoría del color y manejo de la luz que solo un artista comprende, traduciéndolos a la narrativa cinematográfica moderna.
                            </p>

                            {/* Key Points */}
                            <div className="space-y-8 w-full">
                                {[
                                    {
                                        title: "Composición de Cuadro",
                                        desc: "El equilibrio, peso visual y armonía de la pintura clásica llevada a cada fotograma.",
                                        icon: <Focus size={20} />
                                    },
                                    {
                                        title: "Teoría del Color",
                                        desc: "Colorización (grading) profesional que evoca emociones específicas mediante paletas cromáticas artísticas.",
                                        icon: <Palette size={20} />
                                    },
                                    {
                                        title: "Dirección Estética",
                                        desc: "Una mirada crítica y experta que cuida cada detalle del set, la escena y la atmósfera visual.",
                                        icon: <Lightbulb size={20} />
                                    }
                                ].map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="mt-1 w-12 h-12 flex-shrink-0 rounded-xl bg-[#EE1D23]/10 border border-[#EE1D23]/20 flex items-center justify-center text-[#EE1D23] group-hover:bg-[#EE1D23] group-hover:text-white transition-all duration-300">
                                            {point.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-normal text-[#0F172A] mb-2 font-[family-name:var(--font-cinzel)]">{point.title}</h4>
                                            <p className="text-[#0F172A]/50 text-sm font-light leading-relaxed group-hover:text-[#0F172A]/70 transition-colors">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Trust Check */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 }}
                                className="mt-12 inline-flex items-center gap-3 px-6 py-4 bg-[#EE1D23]/5 border border-[#EE1D23]/20 rounded-2xl"
                            >
                                <div className="w-5 h-5 rounded-full bg-[#EE1D23] flex items-center justify-center">
                                    <Check size={12} className="text-white" strokeWidth={3} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#EE1D23]">Calidad Atelier Garantizada</span>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Gradient Ring for Tech feel */}
            <div className="absolute -bottom-48 -left-24 w-96 h-96 border border-[#EE1D23]/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
