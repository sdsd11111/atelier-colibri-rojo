"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const obras = [
    {
        id: "o1",
        title: "Óleo Paisaje Andino",
        tecnica: "Óleo sobre Lienzo",
        image: "/images/galeria/muralismo-1.webp",
        span: "row-span-2"
    },
    {
        id: "o2",
        title: "Retrato Clásico",
        tecnica: "Pintura por Encargo",
        image: "/images/galeria/restauracion-1.webp",
        span: ""
    },
    {
        id: "o3",
        title: "Figura Escultórica",
        tecnica: "Resina Artística",
        image: "/images/galeria/escultura-1.webp",
        span: ""
    },
    {
        id: "o4",
        title: "Composición Abstracta",
        tecnica: "Acrílico sobre Tela",
        image: "/images/galeria/muralismo-2.webp",
        span: "col-span-2"
    }
];

export default function PlasticArtsGalleryCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section className="bg-[#FDFDFD]">

            {/* ── Galería de Obras ── */}
            <div id="obras" className="pt-24 lg:pt-32 pb-16 lg:pb-20">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex items-end justify-between mb-12 lg:mb-16">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-3 block font-[family-name:var(--font-outfit)]">Galería</span>
                            <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">
                                Obras Originales
                            </h2>
                        </div>
                        <a
                            href="/galeria"
                            className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0F172A]/30 hover:text-[#EE1D23] transition-colors font-[family-name:var(--font-outfit)]"
                        >
                            Ver Todo →
                        </a>
                    </div>

                    {/* Grid — image dominant */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
                        {obras.map((obra, idx) => (
                            <motion.div
                                key={obra.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: idx * 0.1, duration: 0.7 }}
                                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${obra.span}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                                    style={{ backgroundImage: `url('${obra.image}')` }}
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/50 transition-all duration-500" />

                                {/* Technique badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0F172A]">{obra.tecnica}</span>
                                </div>

                                {/* Title on hover */}
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                                    <h3 className="text-lg text-white font-normal font-[family-name:var(--font-cinzel)]">
                                        {obra.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Divider strip ── */}
            <div className="border-y border-gray-100 py-10">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-center font-[family-name:var(--font-outfit)]">
                        {[
                            { val: "20+", label: "Años de maestría" },
                            { val: "100%", label: "Hecho a mano" },
                            { val: "30+", label: "Técnicas dominadas" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <p className="text-3xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-1">{stat.val}</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F172A]/30">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Formulario Coleccionista / Encargo ── */}
            <div id="encargo-form" className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-5xl mx-auto">

                        {/* Left — image + message */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200/60"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                                    style={{ backgroundImage: "url('/images/galeria/academia-1.webp')" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                            </motion.div>

                            {/* Info card overlay */}
                            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-[200px]">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#EE1D23] mb-2 font-[family-name:var(--font-outfit)]">Cuadros por encargo</p>
                                <p className="text-xs font-light text-[#0F172A]/60 font-[family-name:var(--font-outfit)] leading-relaxed">
                                    Confirmamos disponibilidad y detalles en menos de 24 horas.
                                </p>
                            </div>
                        </div>

                        {/* Right — form */}
                        <div className="lg:pt-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-5 block font-[family-name:var(--font-outfit)]">Encargo o Consulta</span>
                            <h2 className="text-3xl lg:text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-4">
                                ¿Tiene una obra <br />
                                <span className="italic font-light text-[#0F172A]/40">en mente?</span>
                            </h2>
                            <p className="text-sm font-light text-[#0F172A]/50 mb-10 font-[family-name:var(--font-outfit)] leading-relaxed">
                                Cuadros al óleo, pinturas por encargo, retratos, esculturas decorativas. Cuéntenos su idea y le respondemos con una propuesta personalizada.
                            </p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setIsSubmitting(true);
                                    setTimeout(() => setIsSubmitting(false), 2000);
                                }}
                                className="space-y-5 font-[family-name:var(--font-outfit)]"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/30">Nombre *</label>
                                        <input
                                            type="text" required
                                            placeholder="Su nombre"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] text-sm placeholder:text-[#0F172A]/25 focus:outline-none focus:border-[#EE1D23]/60 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/30">WhatsApp / Teléfono *</label>
                                        <input
                                            type="tel" required
                                            placeholder="+593 999 000 000"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] text-sm placeholder:text-[#0F172A]/25 focus:outline-none focus:border-[#EE1D23]/60 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/30">Tipo de Obra *</label>
                                    <select
                                        required defaultValue=""
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] text-sm focus:outline-none focus:border-[#EE1D23]/60 transition-colors appearance-none"
                                    >
                                        <option value="" disabled>Seleccione</option>
                                        <option value="cuadro-oleo">Cuadro al Óleo</option>
                                        <option value="retrato">Retrato por Encargo</option>
                                        <option value="acuarela">Acuarela</option>
                                        <option value="escultura">Escultura Decorativa</option>
                                        <option value="dibujo">Dibujo / Retrato a Lápiz</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]/30">Descripción de la Idea</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Cuéntenos qué tiene en mente: tema, tamaño aproximado, persona de referencia, colores, uso final..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] text-sm placeholder:text-[#0F172A]/25 focus:outline-none focus:border-[#EE1D23]/60 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#0F172A] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#EE1D23] transition-all duration-300 disabled:opacity-60 group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex gap-1.5">
                                            {[0, 0.15, 0.3].map((d, i) => (
                                                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            Solicitar Obra por Encargo
                                            <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-[#0F172A]/25 font-[family-name:var(--font-outfit)]">
                                    Respondemos en menos de 24 horas hábiles.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
