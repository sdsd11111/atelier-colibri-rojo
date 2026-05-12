"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Building2, Palmtree } from "lucide-react";

const disciplines = [
    {
        num: "01",
        label: "Pintura Mural",
        heading: "Muralismo de Gran Formato e Identidad",
        body: "Intervención de fachadas urbanas y espacios corporativos. Creamos narrativas visuales que integran la identidad de la institución con su entorno geográfico.",
        tags: ["Fachadas Públicas", "Sedes Corporativas", "Pintura Técnica"],
        image: "/images/monumental/especialidad-muralismo.webp",
        imagePosition: "right"
    },
    {
        num: "02",
        label: "Escultura",
        heading: "Escultura Monumental y Monumentos",
        body: "Diseño y ejecución de obras escultóricas para plazas, parques y rotondas. Expertos en materiales de alta resistencia para el clima de Ecuador.",
        tags: ["Fundición en Metal", "Fibra de Vidrio", "Hormigón Artístico"],
        image: "/images/monumental/especialidad-escultura.webp",
        imagePosition: "left"
    },
    {
        num: "03",
        label: "Diseño",
        heading: "Mobiliario Artístico y Urbanismo",
        body: "Conceptualización de elementos funcionales que son piezas de arte. Mobiliario urbano que dignifica el espacio y mejora la experiencia del ciudadano.",
        tags: ["Mobiliario Urbano", "Escenografías", "Intervención de Espacios"],
        image: "/images/monumental/proyecto-1.webp",
        imagePosition: "right"
    }
];

export default function MonumentalSpecialties() {
    return (
        <section className="bg-white overflow-hidden font-[family-name:var(--font-outfit)]">

            {/* Public + Private Strip — Minimal */}
            <div className="border-b border-gray-100 py-16 px-6 lg:px-16 bg-gray-50/50">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-4">Alcance del Atelier</span>
                        <h2 className="text-3xl md:text-4xl font-medium text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">
                            Soluciones de Autor para <br/> Instituciones y Gobiernos
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 md:gap-12">
                        <div className="flex items-center gap-4">
                            <Landmark className="text-[#EE1D23]" size={24} />
                            <p className="text-sm font-bold uppercase tracking-widest text-[#0F172A]/60">Público</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Building2 className="text-[#EE1D23]" size={24} />
                            <p className="text-sm font-bold uppercase tracking-widest text-[#0F172A]/60">Corporativo</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Palmtree className="text-[#EE1D23]" size={24} />
                            <p className="text-sm font-bold uppercase tracking-widest text-[#0F172A]/60">Urbano</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disciplines — 30/70 Split */}
            {disciplines.map((d) => (
                <div key={d.num} className={`flex flex-col ${d.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[85vh] border-b border-gray-50`}>

                    {/* Text Panel — 30% */}
                    <motion.div
                        initial={{ opacity: 0, x: d.imagePosition === "left" ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[30%] flex flex-col justify-center px-10 lg:px-16 py-20 lg:py-0 bg-[#FDFDFD]"
                    >
                        <span className="text-[120px] font-thin text-gray-100 font-[family-name:var(--font-cinzel)] leading-none select-none block -ml-4">{d.num}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-4 block">{d.label}</span>
                        <h3 className="text-3xl lg:text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-8">
                            {d.heading}
                        </h3>
                        <p className="text-base font-normal text-[#0F172A]/60 leading-relaxed mb-10">
                            {d.body}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {d.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-bold uppercase tracking-widest text-[#0F172A]/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href="#cotizar" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] transition-all">
                            CONOCER MÁS <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Image Panel — 70% */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full lg:w-[70%] relative min-h-[50vh] lg:min-h-0 overflow-hidden group"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105"
                            style={{ backgroundImage: `url('${d.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
