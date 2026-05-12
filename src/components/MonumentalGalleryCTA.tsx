"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, Building2 } from "lucide-react";

// Casos de Éxito — portfolio real
const casos = [
    {
        id: "c1",
        title: "Monumento a la Identidad Lojana",
        tipo: "Escultura Monumental",
        cliente: "GAD Municipal de Loja",
        location: "Plaza Central, Loja",
        image: "/images/monumental/proyecto-1.webp",
        span: "row-span-2"
    },
    {
        id: "c2",
        title: "Mural Raíces del Sur",
        tipo: "Mural Artístico",
        cliente: "Institución Educativa",
        location: "Fachada Norte, Loja",
        image: "/images/monumental/proyecto-2.webp",
        span: ""
    },
    {
        id: "c3",
        title: "Escultura Botánica",
        tipo: "Escultura — Fibra de Vidrio",
        cliente: "Municipio de Loja",
        location: "Parque Lineal Pucará",
        image: "/images/monumental/proyecto-3.webp",
        span: ""
    },
    {
        id: "c4",
        title: "Mural Épico — Batalla de Loja",
        tipo: "Mural Artístico Gran Formato",
        cliente: "Entidad Pública",
        location: "Av. Cuxibamba, Loja",
        image: "/images/monumental/proyecto-4.webp",
        span: "col-span-2"
    }
];

export default function MonumentalGalleryCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section className="bg-white">

            {/* ── Casos de Éxito ── */}
            <div id="casos" className="pt-24 lg:pt-32 pb-16 lg:pb-20">
                <div className="container mx-auto px-6 lg:px-16">

                    {/* Header — ultra minimal */}
                    <div className="flex items-end justify-between mb-12 lg:mb-16">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-3 block font-[family-name:var(--font-outfit)]">Portafolio</span>
                            <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">
                                Casos de Éxito
                            </h2>
                        </div>
                        <a
                            href="/galeria"
                            className="hidden md:inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0F172A]/40 hover:text-[#EE1D23] transition-colors font-[family-name:var(--font-outfit)]"
                        >
                            Ver Galería Completa →
                        </a>
                    </div>

                    {/* Masonry Grid — images first */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
                        {casos.map((caso, idx) => (
                            <motion.div
                                key={caso.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${caso.span}`}
                            >
                                {/* Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                                    style={{ backgroundImage: `url('${caso.image}')` }}
                                />

                                {/* Always-visible subtle gradient at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60" />

                                {/* Tipo badge — top left */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">{caso.tipo}</span>
                                </div>

                                {/* Info — bottom, appears on hover */}
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE1D23] mb-1 font-[family-name:var(--font-outfit)]">{caso.cliente}</p>
                                    <h3 className="text-xl text-white font-normal font-[family-name:var(--font-cinzel)] leading-tight mb-2">
                                        {caso.title}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-white/60 font-[family-name:var(--font-outfit)]">
                                        <MapPin size={12} />
                                        <span className="text-xs font-light">{caso.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Stats Band ── */}
            <div className="border-y border-gray-100 py-12">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-[family-name:var(--font-outfit)]">
                        {[
                            { val: "15+", label: "Años de trayectoria" },
                            { val: "60+", label: "Obras ejecutadas" },
                            { val: "12", label: "Cantones de Loja" },
                            { val: "100%", label: "Ciclo completo" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                <p className="text-4xl lg:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-2">{stat.val}</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F172A]/40">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA Institucional ── */}
            <div id="cotizar" className="py-24 lg:py-32 bg-[#0F172A]">
                <div className="container mx-auto px-6 lg:px-16 max-w-5xl">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left — text only, minimal */}
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block font-[family-name:var(--font-outfit)]">Consultoría</span>
                            <h2 className="text-4xl lg:text-5xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight mb-8">
                                Inicie su obra pública o privada
                            </h2>
                            <p className="text-base font-normal text-white/70 leading-relaxed mb-12 font-[family-name:var(--font-outfit)]">
                                Atendemos municipios, corporaciones e instituciones privadas. Cuéntenos la idea y nosotros la dimensionamos, renderizamos y ejecutamos bajo los más altos estándares técnicos.
                            </p>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0 mt-0.5">
                                    <Building2 size={18} className="text-[#EE1D23]" />
                                </div>
                                <div className="font-[family-name:var(--font-outfit)]">
                                    <p className="text-sm font-normal text-white mb-1">Atención especializada</p>
                                    <p className="text-xs font-light text-white/40">Para alcaldías, GADs, empresas y más.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right — form */}
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
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/30">Institución / Empresa *</label>
                                    <input
                                        type="text" required
                                        placeholder="Ej. GAD Municipal de Loja"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#EE1D23]/60 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/30">Correo Electrónico *</label>
                                    <input
                                        type="email" required
                                        placeholder="correo@institucion.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#EE1D23]/60 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/30">Tipo de Obra *</label>
                                    <select
                                        required defaultValue=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#EE1D23]/60 transition-colors appearance-none"
                                    >
                                        <option value="" disabled className="bg-[#0F172A]">Seleccione</option>
                                        <option value="mural" className="bg-[#0F172A]">Mural Artístico</option>
                                        <option value="escultura" className="bg-[#0F172A]">Escultura Monumental</option>
                                        <option value="monumento" className="bg-[#0F172A]">Monumento Integrado</option>
                                        <option value="espacios" className="bg-[#0F172A]">Diseño de Espacios / Arte Integrado</option>
                                        <option value="otro" className="bg-[#0F172A]">Otro</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/30">Tipo de Cliente</label>
                                    <select
                                        defaultValue=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#EE1D23]/60 transition-colors appearance-none"
                                    >
                                        <option value="" disabled className="bg-[#0F172A]">Seleccione</option>
                                        <option value="publico" className="bg-[#0F172A]">Entidad Pública</option>
                                        <option value="privado" className="bg-[#0F172A]">Empresa Privada</option>
                                        <option value="particular" className="bg-[#0F172A]">Particular</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-white/30">Descripción del Proyecto</label>
                                <textarea
                                    rows={4}
                                    placeholder="Cuéntenos la idea, espacio y dimensiones estimadas..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#EE1D23]/60 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 py-4.5 bg-[#EE1D23] text-white rounded-xl text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-[#0F172A] transition-all duration-300 disabled:opacity-60 group"
                            >
                                {isSubmitting ? (
                                    <div className="flex gap-1.5">
                                        {[0, 0.15, 0.3].map((d, i) => (
                                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        Solicitar Propuesta Técnica
                                        <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-[10px] text-white/20 font-[family-name:var(--font-outfit)]">Información tratada con total confidencialidad.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
