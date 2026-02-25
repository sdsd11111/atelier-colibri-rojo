"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRight, Paintbrush, Hammer, Frame, Droplet, TreePine, Cog, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestorationProcess from "@/components/RestorationProcess";
import RestorationGalleryCTA from "@/components/RestorationGalleryCTA";

export default function RestauracionPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A]">
            <Navbar />

            {/* Sección 1: Hero de Especialidad (Confianza Extrema) */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111] pt-20">
                {/* Imagen de fondo con temática de restauración (Placeholder de alta calidad) */}
                <div
                    className="absolute inset-0 bg-cover bg-center -z-20 scale-105"
                    style={{
                        backgroundImage: `url('/images/restauracion/hero-restauracion.webp')`,
                        backgroundAttachment: 'fixed'
                    }}
                />

                {/* Overlay oscuro (Capa de legibilidad 'Graphite Black') */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#111111]/80 to-[#111111]/60 -z-10" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Badge de Autoridad */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                                <ShieldAlert size={14} className="text-[#EE1D23]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                                    Intervención Profesional en Óleos, Madera y Resina
                                </span>
                            </div>

                            {/* H1 Principal (SEO Local + Maestría) */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] mb-8 font-[family-name:var(--font-cinzel)] tracking-tight">
                                Restauración Profesional en Loja:
                                <br className="hidden md:block" />
                                <span className="text-white/70 italic text-3xl md:text-5xl lg:text-6xl block mt-2">
                                    Preservando el Patrimonio y el Legado Artístico
                                </span>
                            </h1>

                            {/* Subtítulo de Autoridad (El Dolor del Cliente) */}
                            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl mb-12 font-[family-name:var(--font-outfit)]">
                                Más de 30 años de maestría técnica en la recuperación de bienes pictóricos y escultóricos. Devolvemos la vida a sus obras con <strong className="text-white font-normal">rigor histórico y respeto por el original.</strong>
                            </p>

                            {/* CTA: Evaluación Técnica (Cirujano del arte) */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-4 bg-[#EE1D23] text-white px-8 py-4 rounded-full font-[family-name:var(--font-outfit)] transition-all hover:bg-[#d4191f] hover:shadow-lg hover:shadow-[#EE1D23]/20"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest">Solicitar Evaluación Técnica</span>
                                <div className="p-2 bg-white/20 rounded-full group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={16} />
                                </div>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Indicador de Scroll Visual */}
                <motion.div
                    animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Descubrir Proceso</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </section>

            {/* Sección 2: Especialidades Técnicas (El "Cómo lo hacemos") */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Encabezado Principal */}
                    <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Nuestro Enfoque</span>
                        <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                            Áreas de Especialización
                        </h2>
                        <p className="text-lg font-light text-[#0F172A]/60 font-[family-name:var(--font-outfit)] leading-relaxed">
                            Intervenimos el patrimonio material con una metodología científica. Desde el plano bidimensional del lienzo hasta el volumen monumental de la escultura urbana, dominando tanto técnicas milenarias como materiales del siglo XXI.
                        </p>
                    </div>

                    {/* Split Grid: Pictórico vs Escultórico */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Columna Izquierda: Restauración Pictórica */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group relative bg-[#FDFDFD] border border-gray-100 p-10 lg:p-14 rounded-[2rem] overflow-hidden"
                        >
                            {/* Hover Subtle Background Texture */}
                            <div className="absolute inset-0 bg-[url('/images/restauracion/pictorica-bg.webp')] bg-cover bg-center opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <Paintbrush size={40} strokeWidth={1.5} className="text-[#EE1D23] mb-8" />
                                <h3 className="text-3xl font-normal text-[#0F172A] mb-4 font-[family-name:var(--font-cinzel)]">
                                    Artes Pictóricas y Lienzos
                                </h3>
                                {/* Línea decorativa */}
                                <div className="w-12 h-[1px] bg-[#EE1D23]/50 mb-8" />

                                <p className="text-base font-light text-[#0F172A]/70 leading-relaxed mb-10 font-[family-name:var(--font-outfit)]">
                                    Especialistas en la recuperación de obras de carácter religioso y civil. Intervenimos con precisión científica para devolver la vibrancia y estabilidad a la pintura mural, caballete y retablística.
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]/50 mb-6">Soportes & Materiales</h4>
                                    <ul className="space-y-4 font-[family-name:var(--font-outfit)]">
                                        {[
                                            { name: "Óleos sobre lienzo y tabla", icon: Droplet },
                                            { name: "Pintura sobre retablos coloniales", icon: Frame },
                                            { name: "Recuperación de policromías en maderas antiguas", icon: TreePine },
                                            { name: "Restauración de marcos dorados al pan de oro", icon: Sparkles }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-[#0F172A]/80 font-light">
                                                <div className="p-1.5 rounded-full bg-gray-50 border border-gray-100 flex-shrink-0">
                                                    <item.icon size={14} className="text-[#EE1D23]" />
                                                </div>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Columna Derecha: Restauración Escultórica */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="group relative bg-[#0F172A] text-white p-10 lg:p-14 rounded-[2rem] overflow-hidden"
                        >
                            {/* Hover Subtle Background Texture */}
                            <div className="absolute inset-0 bg-[url('/images/restauracion/escultorica-bg.webp')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none grayscale" />

                            <div className="relative z-10">
                                <Cog size={40} strokeWidth={1.5} className="text-[#EE1D23] mb-8" />
                                <h3 className="text-3xl font-normal mb-4 font-[family-name:var(--font-cinzel)] text-white">
                                    Escultura y Arte Volumétrico
                                </h3>
                                {/* Línea decorativa */}
                                <div className="w-12 h-[1px] bg-[#EE1D23]/50 mb-8" />

                                <p className="text-base font-light text-white/70 leading-relaxed mb-10 font-[family-name:var(--font-outfit)]">
                                    Restauración integral de figuras religiosas de culto y monumentos públicos. Trabajamos con una amplia gama de materiales modernos y tradicionales para asegurar la conservación y la máxima durabilidad estructural frente al intemperismo.
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Soportes & Materiales</h4>
                                    <ul className="space-y-4 font-[family-name:var(--font-outfit)]">
                                        {[
                                            { name: "Modelado y restitución en Resinas Epóxicas", icon: Droplet },
                                            { name: "Consolidación de Maderas talladas y apolilladas", icon: TreePine },
                                            { name: "Creación de estructuras en Fibra de Vidrio", icon: Cog },
                                            { name: "Intervención en Cemento, Yeso escultórico y Metal", icon: Hammer }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-white/80 font-light">
                                                <div className="p-1.5 rounded-full bg-white/5 border border-white/10 flex-shrink-0">
                                                    <item.icon size={14} className="text-[#EE1D23]" />
                                                </div>
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Sección 3: Proceso de Intervención */}
            <RestorationProcess />

            {/* Sección 4: Casos de Éxito y CTA */}
            <RestorationGalleryCTA />

            <Footer />
        </main>
    );
}
