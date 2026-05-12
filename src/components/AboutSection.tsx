"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Award, Palette, Video, History, Globe } from "lucide-react";

/**
 * Count-up animation part using Framer Motion
 */
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor((duration * 1000) / range));

            const timer = setInterval(() => {
                current += increment;
                setCount(current);
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
};

const AboutSection = () => {
    return (
        <section id="quienes-somos" className="py-16 lg:py-28 bg-[#0F172A] relative overflow-hidden">
            {/* Subtle Texture/Background Detail */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32 items-center">

                    {/* Visual Side: Asymmetric Image Grid */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-6 relative">
                            {/* Main Image: Restoration focus */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="col-span-2 h-[400px] lg:h-[500px] relative overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1200&auto=format&fit=crop"
                                    alt="Restauración técnica en Atelier"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#0F172A]/10" />
                                <div className="absolute bottom-6 left-6 bg-white shrink-0 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#0F172A]">
                                    Restauración Técnica
                                </div>
                            </motion.div>

                            {/* Offset Image: Monumental Art focus */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="h-[300px] relative overflow-hidden shadow-xl mt-[-60px] lg:mt-[-100px] z-20"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop"
                                    alt="Arte Monumental"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#EE1D23]/5" />
                                <div className="absolute top-6 left-6 bg-[#EE1D23] px-3 py-1 text-[8px] font-bold text-white uppercase tracking-widest">
                                    Monumental
                                </div>
                            </motion.div>

                            {/* Detail Image: Studio flow */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                                className="h-[250px] relative overflow-hidden shadow-lg mt-6 lg:mt-12"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop"
                                    alt="Procesos Creativos"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#0F172A]/10" />
                            </motion.div>
                        </div>

                        {/* Aesthetic Detail: Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white border border-gray-100 shadow-2xl flex flex-col items-center justify-center text-center p-4 z-30 hidden lg:flex"
                        >
                            <History size={24} className="text-[#EE1D23] mb-2" strokeWidth={1} />
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0F172A] leading-tight">
                                Herencia <br /> Familiar
                            </span>
                        </motion.div>
                    </div>

                    {/* Text Side: Storytelling & Authority */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-12 bg-[#EE1D23]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                                    Legado & Autoridad
                                </span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-normal text-white mb-12 tracking-tight font-[family-name:var(--font-cinzel)] leading-[1.1]">
                                De la Tradición <br /> a la <span className="text-[#EE1D23]">Vanguardia</span> Artística.
                            </h2>

                            <p className="text-lg lg:text-xl font-light text-gray-400 leading-relaxed mb-16 font-[family-name:var(--font-outfit)]">
                                Lo que nació hace tres décadas bajo el nombre de <span className="italic text-white">Atlántida</span>, ha evolucionado en un **Estudio de Élite** que purifica la técnica artística. Somos un **nodo de soluciones creativas** donde la experiencia de tres generaciones de maestros se une para servir a instituciones, gobiernos y coleccionistas privados. No solo creamos arte; preservamos el patrimonio y esculpimos el futuro urbano de Ecuador.
                            </p>

                            {/* The Three Pillars of Mastery */}
                            <div className="space-y-12 mb-20">
                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center shadow-sm group-hover:border-[#EE1D23] transition-all duration-500">
                                        <span className="text-2xl font-bold text-[#EE1D23]">
                                            <Counter value={20} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-3">Años de Trayectoria</h4>
                                        <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
                                            Dos décadas de rigor académico y maestría técnica en la restauración de bienes históricos y creación monumental.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center shadow-sm group-hover:border-[#EE1D23] transition-all duration-500">
                                        <span className="text-2xl font-bold text-[#EE1D23]">
                                            <Counter value={15} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-3">Arte Público</h4>
                                        <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
                                            15 años creando muralismo y escultura monumental que hoy forman parte del paisaje de Loja y su provincia.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center shadow-sm group-hover:border-[#EE1D23] transition-all duration-500">
                                        <span className="text-2xl font-bold text-[#EE1D23]">
                                            <Counter value={20} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-3">Artes Plásticas</h4>
                                        <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
                                            20 años de obras de propuesta original en óleo, acuarela y escultura de autor, con un lenguaje técnico maduro.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Factor & Authority */}
                            <div className="p-10 border border-white/5 bg-white/[0.02] shadow-2xl shadow-black/20 flex flex-col md:flex-row items-center gap-10">
                                <div className="flex-shrink-0">
                                    <Award size={40} strokeWidth={0.5} className="text-[#EE1D23]" />
                                </div>
                                <div className="flex-grow">
                                    <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-2">Respaldo Institucional</h5>
                                    <p className="text-[11px] font-light text-gray-400 leading-relaxed">
                                        Mantuvimos un distinguido <strong className="text-white">Convenio con la Casa de la Cultura</strong> y contamos con una sólida trayectoria en exposiciones locales, nacionales e internacionales.
                                    </p>
                                </div>
                                <div className="hidden md:block h-12 w-[1px] bg-white/10" />
                                <div className="flex gap-4">
                                    <Globe size={18} strokeWidth={1} className="text-gray-200" />
                                    <Palette size={18} strokeWidth={1} className="text-gray-200" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
