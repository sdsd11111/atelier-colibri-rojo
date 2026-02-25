"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function MonumentalSpecialties() {
    return (
        <section className="bg-white py-24 lg:py-40 overflow-hidden font-[family-name:var(--font-outfit)]">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Especialidades</span>
                    <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                        Disciplinas de Intervención Urbana
                    </h2>
                    <p className="text-lg font-light text-[#0F172A]/60 leading-relaxed md:text-xl">
                        Aterrizamos la idea de "esculpir la identidad" en hechos concretos y duraderos, estructurando nuestro trabajo en dos grandes ejes de desarrollo monumental.
                    </p>
                </div>

                <div className="space-y-32 lg:space-y-48">

                    {/* Especialidad 1: Escultura Monumental */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
                        {/* Decorative Line Architectural */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-100 -translate-x-1/2 -z-10" />

                        {/* Image Block (Left) */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-gray-200"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    style={{ backgroundImage: "url('/images/monumental/especialidad-escultura.webp')" }}
                                />
                                <div className="absolute inset-0 bg-[#0F172A]/5 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Badge Overlay */}
                                <div className="absolute bottom-6 left-6 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A]">01. Escultura Monumental</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Text Block (Right) */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start bg-white z-10 lg:pl-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-light text-gray-200 font-[family-name:var(--font-cinzel)]">01</span>
                                <div className="w-12 h-[1px] bg-[#EE1D23]" />
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                                Íconos en Tres Dimensiones
                            </h3>

                            <p className="text-lg lg:text-xl font-light text-[#0F172A]/70 leading-relaxed mb-10">
                                Desarrollamos monumentos que resisten el paso del tiempo y las inclemencias del clima. Ejecutamos un control riguroso desde la concepción del boceto a escala, el modelado estructural, hasta la fundición e instalación final en su emplazamiento.
                            </p>

                            <div className="w-full border-t border-gray-100 pt-8 mt-4">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/40 mb-6">Materiales de Alta Durabilidad</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Fibra de Vidrio reforzada",
                                        "Cera y Resinas Poliéster",
                                        "Cemento Escultórico",
                                        "Estructuras de Metal"
                                    ].map((mat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#0F172A]/80 font-light text-sm lg:text-base">
                                            <Sparkles size={14} className="text-[#EE1D23]" />
                                            {mat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Especialidad 2: Muralismo y Arte de Gran Formato */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 relative">
                        {/* Decorative Line Architectural */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-100 -translate-x-1/2 -z-10" />

                        {/* Image Block (Right) */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-gray-200"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                    style={{ backgroundImage: "url('/images/monumental/especialidad-muralismo.webp')" }}
                                />
                                <div className="absolute inset-0 bg-[#0F172A]/5 group-hover:bg-transparent transition-colors duration-500" />

                                {/* Badge Overlay */}
                                <div className="absolute bottom-6 right-6 px-6 py-3 bg-[#0F172A]/90 backdrop-blur-md rounded-2xl shadow-xl">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">02. Muralismo</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Text Block (Left) */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start bg-white z-10 lg:pr-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-light text-gray-200 font-[family-name:var(--font-cinzel)]">02</span>
                                <div className="w-12 h-[1px] bg-[#EE1D23]" />
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                                Narrativas Pictóricas Urbanas
                            </h3>

                            <p className="text-lg lg:text-xl font-light text-[#0F172A]/70 leading-relaxed mb-10">
                                Intervención de fachadas, muros de contención y espacios públicos mediante murales de gran formato que cuentan las historias de nuestro territorio. Usamos pigmentos especializados para garantizar la vivacidad del color ante la radiación solar extrema.
                            </p>

                            <div className="w-full border-t border-gray-100 pt-8 mt-4">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/40 mb-6">Técnicas y Acabados Especiales</h4>
                                <ul className="flex flex-col gap-4">
                                    {[
                                        "Pintura con Acrílico Técnico Profesional",
                                        "Aerografía de Alta Precisión y Detalle",
                                        "Sellado Integral con Recubrimientos Protectores UV"
                                    ].map((tech, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-[#0F172A]/80 font-light text-sm lg:text-base">
                                            <div className="p-1 rounded-full bg-gray-50 border border-gray-200">
                                                <ArrowRight size={14} className="text-[#EE1D23]" />
                                            </div>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
