"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, Building2, MapPin, Trophy } from "lucide-react";

const galleryProjects = [
    {
        id: "p1",
        title: "Monumento a la Identidad",
        location: "Plaza Central - Loja",
        image: "/images/monumental/proyecto-1.webp",
        size: "large" // Takes more vertical space
    },
    {
        id: "p2",
        title: "Mural Raíces del Sur",
        location: "Fachada Institucional",
        image: "/images/monumental/proyecto-2.webp",
        size: "normal"
    },
    {
        id: "p3",
        title: "Escultura Botánica",
        location: "Parque Lineal Pucará",
        image: "/images/monumental/proyecto-3.webp",
        size: "normal"
    },
    {
        id: "p4",
        title: "Mural Épico Batalla de Loja",
        location: "Av. Cuxibamba",
        image: "/images/monumental/proyecto-4.webp",
        size: "wide" // Takes full width on mobile, 2 cols on desktop
    }
];

export default function MonumentalGalleryCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000); // Simulando envío
    };

    return (
        <section className="bg-white">
            {/* Bloque 1: Galería de Hitos (Grid Asimétrico) */}
            <div className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Grid de Impacto</span>
                        <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                            Obras que definen el Paisaje de Loja
                        </h2>
                        <p className="text-lg font-light text-[#0F172A]/70 font-[family-name:var(--font-outfit)]">
                            Una exposición de nuestro legado en el espacio público. Cada pieza es un hito de ingeniería técnica y narrativa visual.
                        </p>
                    </div>

                    {/* Masonry-style Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px]">
                        {galleryProjects.map((project, idx) => {
                            // Assign specific grid spans based on 'size'
                            let spanClasses = "";
                            if (project.size === "large") spanClasses = "md:row-span-2";
                            if (project.size === "wide") spanClasses = "md:col-span-2 lg:col-span-2";

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                                    className={`relative rounded-3xl overflow-hidden group shadow-xl shadow-gray-200/50 cursor-pointer ${spanClasses}`}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />

                                    {/* Gradient Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Project Info (Appears on Hover) */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-start">
                                        <h3 className="text-2xl text-white font-normal font-[family-name:var(--font-cinzel)] leading-tight mb-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-white/80 font-[family-name:var(--font-outfit)] text-sm">
                                            <MapPin size={14} />
                                            <span className="font-light">{project.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bloque 2: Banner de Autoridad (El Legado) */}
            <div className="bg-[#EE1D23] py-20 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F172A]/20 to-transparent" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <Trophy size={48} className="text-white/90 mb-8" strokeWidth={1} />
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight mb-8">
                            15 años creando referentes visuales en el sur del Ecuador.
                        </h3>
                        <p className="text-white/80 text-lg md:text-xl font-light font-[family-name:var(--font-outfit)] tracking-wide">
                            Calidad técnica garantizada en cada formato. De lo monumental a lo eterno.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bloque 3: Formulario de Proyectos Especiales (CTA Institucional) */}
            <div id="cotizar" className="py-24 lg:py-32 bg-[#F8FAFC]">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
                    >
                        {/* Info Panel Lateral */}
                        <div className="bg-[#0F172A] p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE1D23]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <span className="text-[#EE1D23] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Consultoría</span>
                                <h3 className="text-3xl text-white font-normal font-[family-name:var(--font-cinzel)] leading-tight mb-6">
                                    Inicie su Proyecto Monumental
                                </h3>
                                <p className="text-white/70 font-light font-[family-name:var(--font-outfit)] leading-relaxed mb-10">
                                    Desde intervenciones urbanas hasta esculturas corporativas. Cuéntenos su idea, defina la escala y nosotros nos encargamos de dimensionarla y hacerla realidad.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4 text-white/80">
                                    <div className="w-10 h-10 rounded-full bg-white/5 mx-auto lg:mx-0 flex items-center justify-center border border-white/10">
                                        <Building2 size={18} className="text-[#EE1D23]" />
                                    </div>
                                    <div className="font-[family-name:var(--font-outfit)] text-sm font-light text-left">
                                        <p className="text-white font-normal">Atención Especializada</p>
                                        <p>Para alcaldías, corporaciones e instituciones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulario Corporate-Art */}
                        <div className="p-10 lg:p-12 lg:w-3/5 font-[family-name:var(--font-outfit)]">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Fila Institución / Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Institución / Empresa *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-gray-50/50 border-b-2 border-gray-100 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all rounded-t-xl"
                                            placeholder="Ej. GAD Municipal"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Correo Electrónico *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-gray-50/50 border-b-2 border-gray-100 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all rounded-t-xl"
                                            placeholder="correo@institucion.com"
                                        />
                                    </div>
                                </div>

                                {/* Fila Tipo / Espacio */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Tipo de Obra *</label>
                                        <select
                                            required
                                            className="w-full bg-gray-50/50 border-b-2 border-gray-100 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all rounded-t-xl appearance-none"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Seleccione una opción</option>
                                            <option value="mural">Muralismo</option>
                                            <option value="escultura">Escultura</option>
                                            <option value="monumento">Monumento Integrado</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Espacio a Intervenir</label>
                                        <select
                                            className="w-full bg-gray-50/50 border-b-2 border-gray-100 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all rounded-t-xl appearance-none"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Seleccione el entorno</option>
                                            <option value="publico">Espacio Público (Plaza/Parque)</option>
                                            <option value="exterior">Exterior de Edificio</option>
                                            <option value="interior">Interior Corporativo</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Descripción / Presupuesto */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Descripción de la Idea y Presupuesto Estimado (Opcional)</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-gray-50/50 border-b-2 border-gray-100 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:bg-white transition-all rounded-t-xl resize-none"
                                        placeholder="Cuéntenos la visión del proyecto y sus escalas estimadas..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative flex items-center justify-center gap-3 py-5 bg-[#EE1D23] text-white rounded-xl text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#EE1D23]/30 hover:bg-[#0F172A] hover:shadow-xl hover:shadow-[#0F172A]/20 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {isSubmitting ? (
                                        <div className="flex gap-2">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                                        </div>
                                    ) : (
                                        <>
                                            Solicitar Propuesta Técnica
                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[11px] text-gray-400 mt-4">
                                    Su información será tratada con confidencialidad para fines de la propuesta.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
