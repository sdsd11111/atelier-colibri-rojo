"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Palette,
    History,
    Landmark,
    Video,
    Zap,
    Image as ImageIcon,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "Arte Público y Monumental",
        subtitle: "15 años de Trayectoria",
        route: "/arte-monumental",
        routeLabel: "arte-monumental",
        description: "Esculturas y murales de gran formato que transforman el entorno urbano con identidad y permanencia.",
        tech: "Resina, fibra de vidrio, cemento y metal.",
        icon: <Landmark className="w-5 h-5" />,
        image: "/images/home/servicio-muralismo.webp",
    },
    {
        title: "Restauración Profesional",
        subtitle: "30 años de Legado",
        route: "/restauracion-de-obra",
        routeLabel: "restauracion-de-obra",
        description: "Conservación de bienes culturales y arte sacro con rigor científico y excelencia técnica.",
        tech: "Procesos químicos y técnicos bajo estándares internacionales.",
        icon: <History className="w-5 h-5" />,
        image: "/images/home/servicio-restauracion.webp",
    },
    {
        title: "Artes Plásticas",
        subtitle: "Obras de Propuesta",
        route: "/artes-plasticas",
        routeLabel: "artes-plasticas",
        description: "Obras originales de autor en óleo y técnicas mixtas para colecciones privadas exclusivas.",
        tech: "Óleo sobre lienzo, Acuarela, Acrílico y Técnicas Mixtas.",
        icon: <Palette className="w-5 h-5" />,
        image: "/images/home/servicio-galeria.webp",
    },
    {
        title: "Ambientación y Diseño",
        subtitle: "Soluciones Integrales",
        route: "/varios",
        routeLabel: "ambientacion-renders",
        description: "Diseño de espacios y mobiliario artístico mediante previsualización 3D avanzada.",
        tech: "Renders de alta fidelidad, Diseño 3D y Mobiliario de Autor.",
        icon: <Zap className="w-5 h-5" />,
        image: "/images/home/servicio-audiovisual.webp",
    }
];

const ServicesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any,
            },
        },
    };

    return (
        <section id="servicios" className="py-16 lg:py-28 bg-white">
            <div className="container mx-auto px-8">

                {/* Section Heading */}
                <div className="flex flex-col mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="h-[1px] w-12 bg-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                            Nuestras Especialidades
                        </span>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl lg:text-6xl font-normal text-[#0F172A] tracking-tight font-[family-name:var(--font-cinzel)] max-w-3xl"
                        >
                            Maestría Técnica y <br />
                            <span className="text-[#EE1D23]">Visión Artística</span> de Alto Nivel.
                        </motion.h2>
                        <p className="text-sm text-[#0F172A]/40 font-light max-w-xs font-[family-name:var(--font-outfit)] leading-relaxed hidden lg:block">
                            Cada especialidad cuenta con su propia página de detalle donde puede conocer el proceso, ver el portafolio y solicitar una consulta.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8"
                >
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={service.route}
                            variants={itemVariants}
                            className="group relative flex flex-col h-full bg-[#fdfdfd] border border-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:border-[#EE1D23]/30 hover:shadow-[0_20px_60px_-15px_rgba(238,29,35,0.08)] overflow-hidden cursor-pointer"
                            aria-label={`Ver página de ${service.title}`}
                        >
                            {/* Background Image with Enhanced Visibility */}
                            {service.image && (
                                <>
                                    <div
                                        className="absolute inset-0 opacity-[0.35] transition-all duration-1000 group-hover:opacity-[0.8] group-hover:scale-110 pointer-events-none"
                                        style={{
                                            backgroundImage: `url('${service.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-transparent group-hover:via-white/60 transition-all duration-700 pointer-events-none" />
                                </>
                            )}

                            {/* Route Pill */}
                            <div className="relative z-10 mb-6">
                                <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#0F172A]/30 group-hover:text-[#EE1D23]/60 transition-colors duration-300 font-[family-name:var(--font-outfit)]">
                                    <span className="text-[#EE1D23]/40">/</span>{service.routeLabel}
                                </span>
                            </div>

                            {/* Service Icon & Title */}
                            <div className="relative z-10 flex flex-col items-start mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 transition-all duration-500 group-hover:bg-[#EE1D23] group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/20">
                                    {service.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE1D23]/60 mb-1">
                                        {service.subtitle}
                                    </span>
                                    <h3 className="text-xl lg:text-2xl font-normal text-[#0F172A] tracking-wide font-[family-name:var(--font-cinzel)]">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="relative z-10 flex flex-col h-full">
                                <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed mb-6 font-[family-name:var(--font-outfit)]">
                                    {service.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50">
                                    <p className="text-[11px] text-gray-400/80 italic mb-6 font-[family-name:var(--font-outfit)]">
                                        {service.tech}
                                    </p>
                                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A] transition-all duration-300 group-hover:text-[#EE1D23] font-[family-name:var(--font-outfit)]">
                                        Ver página completa
                                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 overflow-hidden">
                                <div className="absolute top-[-24px] right-[-24px] w-[48px] h-[48px] bg-[#EE1D23]/5 rotate-45" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
