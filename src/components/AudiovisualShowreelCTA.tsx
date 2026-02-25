"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Eye, Send, Calendar } from "lucide-react";

const recentProjects = [
    {
        title: "Campaña Turística Loja",
        category: "Publicitario",
        image: "/images/audiovisual/proyecto-turisticoloja.webp",
    },
    {
        title: "Documental de Artista",
        category: "Documental",
        image: "/images/audiovisual/proyecto-documental.webp",
    },
    {
        title: "Spot Corporativo",
        category: "Institucional",
        image: "/images/audiovisual/proyecto-corporativo.webp",
    }
];

export default function AudiovisualShowreelCTA() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <section className="bg-[#050505]" id="portafolio">

            {/* Bloque 1: Showreel */}
            <div className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Portafolio</span>
                        <h2 className="text-4xl md:text-5xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight">
                            Nuestra Lente en Acción
                        </h2>
                    </div>

                    {/* Video Player */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl shadow-[#EE1D23]/10 border border-white/5"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/audiovisual/showreel-portada.webp')" }}
                        />
                        <div className="absolute inset-0 bg-[#050505]/50" />

                        {/* Play Button */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Pulse rings */}
                                <div className="absolute w-28 h-28 rounded-full bg-[#EE1D23]/20 animate-ping" />
                                <div className="absolute w-24 h-24 rounded-full bg-[#EE1D23]/10 animate-pulse" />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative z-10 w-20 h-20 rounded-full bg-[#EE1D23] flex items-center justify-center shadow-xl shadow-[#EE1D23]/40"
                                >
                                    <Play size={28} className="text-white ml-1" fill="white" />
                                </motion.button>
                            </div>
                        )}

                        {/* Corner Label */}
                        <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
                            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest font-[family-name:var(--font-outfit)]">
                                ● SHOWREEL 2024
                            </span>
                        </div>
                    </motion.div>

                    {/* Bloque 2: Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
                        {recentProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />
                                <div className="absolute inset-0 bg-[#050505]/50 group-hover:bg-[#050505]/30 transition-colors duration-500" />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                                        <Eye size={16} className="text-white" />
                                    </div>
                                </div>

                                {/* Info Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-[9px] font-bold text-[#EE1D23] uppercase tracking-widest font-[family-name:var(--font-outfit)]">{project.category}</span>
                                    <h4 className="text-white text-sm font-normal font-[family-name:var(--font-cinzel)] mt-1">{project.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bloque 3: Formulario de Briefing Rápido */}
            <div className="py-24 lg:py-32 bg-white border-t border-gray-100" id="contactar">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
                    >
                        {/* Left: Text */}
                        <div className="lg:w-2/5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block font-[family-name:var(--font-outfit)]">Consulta Creativa</span>
                            <h3 className="text-4xl lg:text-5xl font-normal text-[#0F172A] mb-6 font-[family-name:var(--font-cinzel)] leading-tight">
                                Inicie su Producción
                            </h3>
                            <p className="text-[#0F172A]/60 font-light text-lg leading-relaxed mb-10 font-[family-name:var(--font-outfit)]">
                                Cuéntenos su idea y nosotros le daremos forma audiovisual. Una consulta sin costo donde definimos alcance, estilo y estrategia.
                            </p>
                            <div className="flex items-center gap-4 text-[#0F172A]/50">
                                <Calendar size={18} className="text-[#EE1D23] shrink-0" />
                                <span className="text-sm font-light font-[family-name:var(--font-outfit)]">Agenda en menos de 24 horas hábiles.</span>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:w-3/5 w-full">
                            <form onSubmit={handleSubmit} className="space-y-6 font-[family-name:var(--font-outfit)]">

                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Nombre o Empresa *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Ej. GAD Municipal Loja"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Correo Electrónico *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="correo@empresa.com"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Tipo de Proyecto *</label>
                                        <select
                                            required
                                            defaultValue=""
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all text-sm appearance-none"
                                        >
                                            <option value="" disabled className="bg-white">Seleccione tipo</option>
                                            <option value="publicitario" className="bg-white">Comercial y Publicitario</option>
                                            <option value="evento" className="bg-white">Evento e Institucional</option>
                                            <option value="documental" className="bg-white">Documental / Artístico</option>
                                            <option value="social" className="bg-white">Contenido para Redes</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Duración Estimada</label>
                                        <select
                                            defaultValue=""
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all text-sm appearance-none"
                                        >
                                            <option value="" disabled className="bg-white">Seleccione duración</option>
                                            <option value="30s" className="bg-white">Hasta 30 segundos</option>
                                            <option value="1m" className="bg-white">1 - 3 minutos</option>
                                            <option value="5m" className="bg-white">3 - 10 minutos</option>
                                            <option value="long" className="bg-white">Más de 10 minutos</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Objetivo del Video */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Objetivo del Video</label>
                                    <textarea
                                        rows={4}
                                        placeholder="¿Qué quiere comunicar? ¿A quién va dirigido?"
                                        className="w-full bg-gray-50 border-b-2 border-gray-200 rounded-t-xl px-5 py-4 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all text-sm resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 py-5 bg-[#EE1D23] text-white rounded-2xl text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#EE1D23]/20 hover:bg-white hover:text-[#050505] disabled:opacity-60 transition-all duration-300 group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex gap-2">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
                                        </div>
                                    ) : (
                                        <>
                                            Agendar Consulta Creativa
                                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[11px] text-[#0F172A]/30 mt-3">
                                    Consulta sin costo. Respondemos en menos de 24 horas hábiles.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
