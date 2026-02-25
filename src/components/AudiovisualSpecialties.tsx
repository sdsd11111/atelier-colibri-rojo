"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Monitor, Aperture, CheckCircle2, ArrowRight } from "lucide-react";

const specialities = [
    {
        title: "Publicidad y Branding",
        subtitle: "Comerciales & Social Media",
        desc: "Creamos piezas comerciales que capturan la identidad de su marca. Estética cuidada para campañas de alto impacto en plataformas digitales.",
        icon: <Camera className="w-7 h-7" />,
        image: "/images/audiovisual/especialidad-publicidad.webp"
    },
    {
        title: "Cobertura Institucional",
        subtitle: "Eventos & Documental",
        desc: "Documentamos eventos, exposiciones y proyectos institucionales con un enfoque narrativo y profesional, preservando cada momento clave.",
        icon: <Monitor className="w-7 h-7" />,
        image: "/images/audiovisual/especialidad-institucional.webp"
    },
    {
        title: "Post-Producción",
        subtitle: "Edición Profesional",
        desc: "El toque final donde la visión artística se hace realidad. Tratamiento de color, diseño sonoro y edición técnica de alto nivel.",
        icon: <Aperture className="w-7 h-7" />,
        image: "/images/audiovisual/especialidad-post.webp"
    }
];

export default function AudiovisualSpecialties() {
    return (
        <section className="bg-white py-24 lg:py-40 relative overflow-hidden font-[family-name:var(--font-outfit)]">

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Especialidades</span>
                    <h2 className="text-4xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                        Servicios con <span className="italic text-[#0F172A]/60">Sello de Artista</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-[#0F172A]/60 leading-relaxed">
                        Desglosamos nuestra trayectoria en tres ejes fundamentales donde la técnica cinematográfica se encuentra con la composición plástica.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {specialities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group border border-gray-100 rounded-3xl overflow-hidden hover:border-[#EE1D23]/40 hover:shadow-xl hover:shadow-[#EE1D23]/5 transition-all duration-500 bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                />
                                <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/10 transition-colors duration-500" />
                                <div className="absolute top-4 left-4 bg-[#EE1D23] px-3 py-1.5 rounded-full">
                                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">{item.subtitle}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#EE1D23] mb-6 group-hover:bg-[#EE1D23] group-hover:text-white transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-normal text-[#0F172A] mb-4 font-[family-name:var(--font-cinzel)]">
                                    {item.title}
                                </h3>
                                <p className="text-[#0F172A]/60 text-sm font-light leading-relaxed mb-6">
                                    {item.desc}
                                </p>
                                <div className="flex items-center gap-2 text-[#EE1D23] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                                    <span>Saber más</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Metric */}
                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <span className="block text-3xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">100+</span>
                            <span className="text-[10px] text-[#0F172A]/40 uppercase tracking-widest">Contenidos Creados</span>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <span className="block text-3xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">10</span>
                            <span className="text-[10px] text-[#0F172A]/40 uppercase tracking-widest">Años de Trayectoria</span>
                        </div>
                    </div>
                    <p className="text-[#0F172A]/40 text-sm font-light max-w-sm text-right">
                        Nuestra especialidad no es solo grabar, es componer cada cuadro como si fuera una obra de arte.
                    </p>
                </div>
            </div>
        </section>
    );
}
