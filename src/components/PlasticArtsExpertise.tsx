"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Eye, PenTool, Package } from "lucide-react";

const steps = [
    {
        icon: <MessageSquare size={20} />,
        num: "01",
        title: "Cuéntenos su Idea",
        desc: "Una foto de referencia, una descripción, un tamaño aproximado. Con eso es suficiente para comenzar."
    },
    {
        icon: <Eye size={20} />,
        num: "02",
        title: "Recibe una Propuesta",
        desc: "Le enviamos una boceto o muestra de referencia y confirmamos los detalles de técnica, soporte y plazo de entrega."
    },
    {
        icon: <PenTool size={20} />,
        num: "03",
        title: "Ejecución con Maestría",
        desc: "Su obra es ejecutada a mano por maestros con 30 años de trayectoria. Sin producción en serie."
    },
    {
        icon: <Package size={20} />,
        num: "04",
        title: "Entrega y Garantía",
        desc: "Embalaje profesional, certificado de autenticidad y garantía de calidad sobre los materiales utilizados."
    }
];

export default function PlasticArtsExpertise() {
    return (
        <section
            id="encargo"
            className="relative overflow-hidden font-[family-name:var(--font-outfit)]"
        >
            {/* Two-column layout: image left, process right */}
            <div className="flex flex-col lg:flex-row min-h-[75vh]">

                {/* Image — 55% */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.04 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full lg:w-[55%] relative min-h-[50vh] lg:min-h-0 overflow-hidden group"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                        style={{ backgroundImage: "url('/images/galeria/audiovisual-1.webp')" }}
                    />
                    {/* Warm right-side gradient to blend into text panel */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F0EDE8]/80" />

                    {/* Quote overlay */}
                    <div className="absolute bottom-8 left-8 max-w-[260px] p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-100 shadow-lg">
                        <p className="text-sm font-light text-[#0F172A]/70 leading-relaxed italic font-[family-name:var(--font-cinzel)]">
                            "Cada obra sale de nuestras manos, no de una máquina."
                        </p>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#EE1D23] mt-3 block">Atelier Colibrí Rojo</span>
                    </div>
                </motion.div>

                {/* Text — 45% */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-14 py-16 bg-[#F0EDE8]"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-5 block">Obra por Encargo</span>

                    <h2 className="text-3xl lg:text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-4">
                        Cuadros y esculturas <br />
                        <span className="italic font-light text-[#0F172A]/50">personalizados.</span>
                    </h2>

                    <p className="text-sm font-light text-[#0F172A]/55 leading-relaxed mb-12">
                        Pinturas por encargo, retratos al óleo, cuadros decorativos para hogar o empresa. Cada pieza es única, ejecutada por nuestros maestros con los materiales que usted elija.
                    </p>

                    {/* Process steps — compact */}
                    <div className="space-y-7">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#EE1D23] flex-shrink-0 shadow-sm group-hover:bg-[#EE1D23] group-hover:text-white transition-all duration-300">
                                    {step.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/30 mb-0.5">{step.num}</p>
                                    <h4 className="text-sm font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-1">{step.title}</h4>
                                    <p className="text-xs font-light text-[#0F172A]/50 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
