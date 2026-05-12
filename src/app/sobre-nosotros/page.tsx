"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, ShieldCheck, Brush, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A]">
            <Navbar />

            {/* Sección 1: Hero de Identidad (Impacto Visual) */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 pt-20">
                {/* Visual: Foto Gran Formato tipo Parallax */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center -z-20 opacity-40 brightness-75 scale-105"
                    style={{
                        backgroundImage: `url('/images/nosotros/hero-nosotros.webp')`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-[#FDFDFD]/50 -z-10" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#0F172A] leading-[1.1] mb-8 font-[family-name:var(--font-cinzel)] tracking-tight">
                            Tres Generaciones de
                            <br className="hidden md:block" />
                            <span className="text-[#EE1D23] italic"> Maestría Artística </span>
                            y Restauración en Loja
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-[#0F172A]/70 leading-relaxed max-w-4xl mx-auto font-[family-name:var(--font-outfit)]">
                            Desde nuestros inicios como Atlántida hasta consolidarnos como Atelier Colibrí Rojo, hemos dedicado más de 20 años a preservar la cultura y formar nuevos talentos en la Cuna de los Artistas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sección 2: De Atlántida a Colibrí Rojo (Historia y Evolución) */}
            <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Nuestro Origen</span>
                            <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                                De Atlántida a Colibrí Rojo: <br />
                                Nuestra Historia
                            </h2>
                            <div className="space-y-6 text-lg font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                <p>
                                    Nuestra práctica artística no nació ayer. Aunque nuestro nombre evolucionó a Atelier Colibrí Rojo en 2015, nuestras bases se fundamentan en una sólida trayectoria que iniciamos de manera personal hace casi dos décadas bajo el nombre de 'Atlántida'.
                                </p>
                                <p>
                                    Pero el legado es aún más profundo: somos depositarios de una herencia pictórica y de restauración con más de 30 años de recorrido por parte del linaje paterno de nuestro fundador.
                                </p>
                                <div className="mt-8 p-6 bg-gray-50 border-l-4 border-[#EE1D23] rounded-r-2xl">
                                    <h4 className="font-[family-name:var(--font-cinzel)] text-xl mb-2 text-[#0F172A] flex items-center gap-3">
                                        <ShieldCheck className="text-[#EE1D23]" size={24} /> Respaldo Institucional
                                    </h4>
                                    <p className="text-base text-[#0F172A]/60">
                                        Orgullosamente contamos con un <strong>Convenio con la Casa de la Cultura</strong>, lo que nos otorga un aval académico y cultural único en la ciudad de Loja, respaldando la calidad de cada obra y cada enseñanza.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Imagen Artística */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl shadow-gray-200"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: `url('/images/nosotros/historia.webp')` }}
                            />
                            {/* Overlay sutil */}
                            <div className="absolute inset-0 bg-[#0F172A]/10 transition-opacity duration-500 group-hover:bg-[#0F172A]/0" />
                            <div className="absolute bottom-10 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20">
                                <Sparkles size={24} className="text-[#EE1D23]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sección 3: Nuestro Equipo Técnico (Los Rostros de la Maestría) */}
            <section className="py-16 lg:py-24 bg-[#FDFDFD]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Expertise Técnico</span>
                        <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                            Nuestro Equipo <span className="text-[#EE1D23] italic">Técnico</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                        {/* Tarjeta 1: Restauración */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-[2rem] border border-gray-100 hover:border-[#EE1D23]/30 hover:shadow-xl hover:shadow-[#EE1D23]/5 transition-all duration-500 group overflow-hidden flex flex-col"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('/images/nosotros/equipo-restauracion.webp')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                                <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[#EE1D23]">
                                    <ShieldCheck size={24} />
                                </div>
                            </div>
                            <div className="p-8 lg:p-10 flex-1 flex flex-col">
                                <div className="mb-6 pl-4 border-l-2 border-[#EE1D23]">
                                    <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">Restauración</h3>
                                    <span className="text-sm font-bold tracking-widest text-[#EE1D23] uppercase mt-2 block">30 Años</span>
                                </div>
                                <p className="text-base font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                    Expertos en arte pictórico y escultórico. Maestría absoluta en arte religioso, recuperación de óleos clásicos, retablos antiguos y modelado anatómico en resina, madera y fibra de vidrio.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tarjeta 2: Arte Público */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white rounded-[2rem] border border-gray-100 hover:border-[#EE1D23]/30 hover:shadow-xl hover:shadow-[#EE1D23]/5 transition-all duration-500 group overflow-hidden flex flex-col"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('/images/nosotros/equipo-arte-publico.webp')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                                <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[#EE1D23]">
                                    <Palette size={24} />
                                </div>
                            </div>
                            <div className="p-8 lg:p-10 flex-1 flex flex-col">
                                <div className="mb-6 pl-4 border-l-2 border-[#EE1D23]">
                                    <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">Arte Público</h3>
                                    <span className="text-sm font-bold tracking-widest text-[#EE1D23] uppercase mt-2 block">15 Años</span>
                                </div>
                                <p className="text-base font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                    Especialistas en muralismo contemporáneo y clásico, así como en escultura monumental de alto impacto visual que decora y da identidad y vida a Loja y gran parte de la provincia.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tarjeta 3: Artes Plásticas */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white rounded-[2rem] border border-gray-100 hover:border-[#EE1D23]/30 hover:shadow-xl hover:shadow-[#EE1D23]/5 transition-all duration-500 group overflow-hidden flex flex-col"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('/images/nosotros/equipo-plasticas.webp')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                                <div className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[#EE1D23]">
                                    <Brush size={24} />
                                </div>
                            </div>
                            <div className="p-8 lg:p-10 flex-1 flex flex-col">
                                <div className="mb-6 pl-4 border-l-2 border-[#EE1D23]">
                                    <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">Artes Plásticas</h3>
                                    <span className="text-sm font-bold tracking-widest text-[#EE1D23] uppercase mt-2 block">20 Años</span>
                                </div>
                                <p className="text-base font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                    Obras de propuesta original que trascienden el tiempo. Aplicamos 20 años de dominio técnico en óleo, acuarela y escultura para crear piezas que dialogan con el coleccionismo contemporáneo.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Sección 4: Misión y Visión (Corta y Moderna) */}
            <section className="py-16 bg-white border-t border-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 relative">
                        {/* Misión */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-[#0F172A] text-white p-12 rounded-[2rem] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE1D23]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#EE1D23]/20 transition-all duration-700" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Nuestro Propósito</span>
                            <h3 className="text-3xl font-normal mb-6 font-[family-name:var(--font-cinzel)]">Misión</h3>
                            <p className="text-lg font-light text-white/80 leading-relaxed font-[family-name:var(--font-outfit)] relative z-10">
                                Brindar soluciones creativas integrales de la más alta exigencia, desde la formación académica técnica de nuevas generaciones hasta la celosa preservación y creación del patrimonio artístico.
                            </p>
                        </motion.div>

                        {/* Divider Line Mobile / Desktop */}
                        <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/2 w-[1px] bg-gray-100" />

                        {/* Visión */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.2 }}
                            className="p-12 relative"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Hacia el futuro</span>
                            <h3 className="text-3xl font-normal text-[#0F172A] mb-6 font-[family-name:var(--font-cinzel)]">Visión</h3>
                            <p className="text-lg font-light text-[#0F172A]/70 leading-relaxed font-[family-name:var(--font-outfit)]">
                                Consolidarnos definitivamente como el <strong>nodo cultural referente de Loja</strong>, siendo el punto de convergencia donde la tradición técnica inquebrantable se une armónicamente con la creación artística de vanguardia y la excelencia plástica.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Global Extraído */}
            <Footer />
        </main>
    );
}
