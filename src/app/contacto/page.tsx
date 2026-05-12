"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const maestrosContacto = [
    {
        name: "Brian Carrión",
        specialty: "Restauración & Artes Plásticas",
        phone: "593992183133",
        label: "Consultas Técnicas"
    },
    {
        name: "Carlos Carrión",
        specialty: "Producción Audiovisual",
        phone: "593992183133", // Usamos el mismo número por ahora según instrucción
        label: "Proyectos Multimedia"
    },
    {
        name: "Milton",
        specialty: "Ambientación & Renders 3D",
        phone: "593992183133",
        label: "Diseño de Espacios"
    }
];

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A] antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gray-50/50 border-b border-gray-100">
                <div className="container mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[1px] w-12 bg-[#EE1D23]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                                Contacto Profesional
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-normal text-[#0F172A] tracking-tight font-[family-name:var(--font-cinzel)] mb-8">
                            Iniciemos su <br /> <span className="text-[#EE1D23]">Próximo Proyecto</span>.
                        </h1>
                        <p className="text-lg text-gray-500 font-light max-w-2xl leading-relaxed">
                            Ya sea una restauración técnica, una obra monumental o una consultoría estratégica, nuestro equipo de maestros está listo para asesorarle con rigor académico y excelencia artística.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Content */}
            <section className="py-24">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24">
                        
                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="bg-white border border-gray-100 p-10 lg:p-16 rounded-3xl shadow-xl shadow-gray-200/20">
                                <h2 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-10">Formulario de Consulta</h2>
                                
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nombre Completo</label>
                                            <input type="text" className="bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#EE1D23]/20 transition-all outline-none text-sm" placeholder="Ej. Juan Pérez" />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Correo Electrónico</label>
                                            <input type="email" className="bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#EE1D23]/20 transition-all outline-none text-sm" placeholder="juan@ejemplo.com" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Asunto / Especialidad</label>
                                        <select className="bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#EE1D23]/20 transition-all outline-none text-sm appearance-none cursor-pointer">
                                            <option>Restauración Profesional</option>
                                            <option>Arte Público & Monumental</option>
                                            <option>Artes Plásticas & Cuadros</option>
                                            <option>Ambientación & Renders</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                                        <textarea rows={6} className="bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[#EE1D23]/20 transition-all outline-none text-sm resize-none" placeholder="Cuéntenos sobre su proyecto o necesidad técnica..."></textarea>
                                    </div>

                                    <button className="w-full bg-[#0F172A] hover:bg-[#EE1D23] text-white font-bold uppercase tracking-[0.3em] text-[11px] py-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 shadow-xl shadow-gray-200">
                                        Enviar Solicitud
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Direct Contact Side */}
                        <div className="space-y-16">
                            
                            {/* General Info */}
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-10">Información General</h3>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-gray-50 rounded-2xl text-[#EE1D23]">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#0F172A] mb-1">Ubicación</h4>
                                            <p className="text-sm text-gray-400 font-light leading-relaxed">Calle Imbabura entre Olmedo y Bernardo Valdivieso, Loja - Ecuador.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 bg-gray-50 rounded-2xl text-[#EE1D23]">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-[#0F172A] mb-1">Email</h4>
                                            <p className="text-sm text-gray-400 font-light">contacto@ateliercolibri.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Maestros Directory */}
                            <div>
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-10">Consultas Técnicas Directas</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {maestrosContacto.map((maestro, idx) => (
                                        <a
                                            key={idx}
                                            href={`https://wa.me/${maestro.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#EE1D23]/30 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#EE1D23]/5 group-hover:text-[#EE1D23] transition-colors">
                                                    <User size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-[#0F172A]">{maestro.name}</h4>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{maestro.specialty}</p>
                                                </div>
                                            </div>
                                            <MessageCircle size={18} className="text-gray-300 group-hover:text-[#25D366] transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="p-8 bg-[#0F172A] rounded-3xl text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <ShieldCheck size={24} className="text-[#EE1D23]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Seguridad & Confidencialidad</span>
                                </div>
                                <p className="text-[11px] text-white/50 font-light leading-relaxed">
                                    Toda la información compartida con el Atelier es manejada bajo estrictos estándares de confidencialidad profesional.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
