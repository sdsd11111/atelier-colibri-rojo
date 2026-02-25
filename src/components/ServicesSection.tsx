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
        description: "Esculturas de gran formato, murales urbanos y obras de impacto permanente en espacios públicos. Diseñamos y ejecutamos el arte que da identidad a una ciudad.",
        tech: "Resina, fibra de vidrio, cemento y metal.",
        icon: <Landmark className="w-5 h-5" />,
        image: "/images/home/servicio-muralismo.webp",
    },
    {
        title: "Restauración Profesional",
        subtitle: "30 años de Legado",
        route: "/restauracion-de-obra",
        routeLabel: "restauracion-de-obra",
        description: "Devolvemos la vida a bienes pictóricos y escultóricos: arte religioso, óleos sobre lienzo, retablos y maderas antiguas con técnicas de conservación internacionales.",
        tech: "Intervención en resina, madera, fibra de vidrio y materiales tradicionales.",
        icon: <History className="w-5 h-5" />,
        image: "/images/home/servicio-escultura.webp",
    },
    {
        title: "Academia de Artes Plásticas",
        subtitle: "$50 todo incluido",
        route: "/academia",
        routeLabel: "academia",
        description: "Cursos de dibujo, pintura al óleo, acuarela y escultura para niños, jóvenes y adultos. Grupos reducidos, maestros con 30 años de experiencia y materiales incluidos.",
        tech: "Diferenciador: Incluye todos los materiales de trabajo.",
        icon: <Palette className="w-5 h-5" />,
        image: "/images/home/servicio-restauracion.webp",
    },
    {
        title: "Producción Audiovisual",
        subtitle: "10 años de Innovación",
        route: "/produccion-audiovisual",
        routeLabel: "produccion-audiovisual",
        description: "Videos comerciales, spot publicitarios, cobertura de eventos y post-producción con colorización profesional. La visión de un artista plástico aplicada al cine.",
        tech: "Producción 4K, colorización y edición profesional.",
        icon: <Video className="w-5 h-5" />,
        image: "/images/home/servicio-academia.webp",
    },
    {
        title: "Aerografía y Diseño",
        subtitle: "Personalización Única",
        route: "/#contacto",
        routeLabel: "consultar",
        description: "Intervenciones artísticas únicas sobre cascos, vehículos, textiles y superficies diversas. Cada pieza es una obra original con previsualización digital incluida.",
        tech: "Previsualización digital y ejecución técnica premium.",
        icon: <Zap className="w-5 h-5" />,
        image: "/images/home/servicio-audiovisual.webp",
    },
    {
        title: "Galería de Arte",
        subtitle: "Proyección Internacional",
        route: "/galeria",
        routeLabel: "galeria",
        description: "Nuestra galería permanente exhibe lo mejor del Atelier: restauraciones, esculturas, murales y producción audiovisual en un solo espacio de contemplación.",
        tech: "Ubicación estratégica y curaduría profesional.",
        icon: <ImageIcon className="w-5 h-5" />,
        image: "/images/home/servicio-galeria.webp",
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
                >
                    {services.map((service, index) => (
                        <motion.a
                            key={index}
                            href={service.route}
                            variants={itemVariants}
                            className="group relative flex flex-col h-full bg-[#fdfdfd] border border-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:border-[#EE1D23]/30 hover:shadow-[0_20px_60px_-15px_rgba(238,29,35,0.08)] overflow-hidden cursor-pointer"
                            aria-label={`Ver página de ${service.title}`}
                        >
                            {/* Background Ghost Image (Editorial Style) */}
                            {service.image && (
                                <div
                                    className="absolute inset-0 opacity-[0.12] grayscale transition-all duration-700 group-hover:opacity-[0.40] group-hover:grayscale-0 group-hover:scale-110 pointer-events-none"
                                    style={{
                                        backgroundImage: `url('${service.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
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
