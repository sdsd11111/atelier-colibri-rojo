"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Loader2,
    ChevronDown
} from "lucide-react";

/**
 * Contact and Location Section for Atelier Colibrí Rojo.
 * Optimized for local SEO and direct conversion (CRO).
 */
const ContactAndLocation = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [interest, setInterest] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Consulta enviada con éxito. Nos pondremos en contacto pronto.");
        }, 2000);
    };

    return (
        <section id="contacto" className="py-16 lg:py-28 bg-[#FDFDFD]">
            <div className="container mx-auto px-8">

                {/* Section Heading */}
                <div className="flex flex-col mb-16 lg:mb-24 text-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="h-[1px] w-8 bg-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                            Conversión Final
                        </span>
                        <span className="h-[1px] w-8 bg-[#EE1D23]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight font-[family-name:var(--font-cinzel)]"
                    >
                        Inicia tu <span className="text-[#EE1D23]">Próximo Proyecto</span> Artístico.
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">

                    {/* Left Block: Location & Info (Slide from Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 flex flex-col order-2 lg:order-1"
                    >
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.03)] flex flex-col h-full">
                            <h3 className="text-2xl lg:text-3xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)]">
                                Visítanos en el Corazón <br />
                                <span className="text-[#EE1D23]">Artístico de Loja</span>.
                            </h3>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#EE1D23] flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Dirección</p>
                                        <p className="text-[#0F172A] font-light">Calle Imbabura entre Olmedo y Bernardo Valdivieso.</p>
                                        <p className="text-[11px] text-[#EE1D23]/70 mt-2 font-medium">A pocos metros de la Casa de la Cultura.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#EE1D23] flex-shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Horarios de Atención</p>
                                        <p className="text-[#0F172A] font-light">
                                            Lunes a Viernes: 09:00 - 18:00 <br />
                                            Sábados: 09:00 - 13:00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#EE1D23] flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Contacto Directo</p>
                                        <p className="text-[#0F172A] font-light">+593 (07) 257-XXXX</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Container */}
                            <div className="mt-auto relative rounded-2xl overflow-hidden group aspect-video lg:aspect-auto flex-grow min-h-[300px] border border-gray-100">
                                <iframe
                                    title="Ubicación Atelier Colibrí Rojo"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.248381!2d-79.2045!3d-3.9931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb47fed!2zQ2FsbGUgSW1iYWJ1cmEsIExvamE!5e0!3m2!1ses!2sec!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale transition-all duration-700 group-hover:grayscale-0"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border-2 border-inset border-white/10 rounded-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Block: Form (Slide from Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 flex flex-col order-1 lg:order-2"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] flex flex-col gap-6"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-[#0F172A] mb-2">Envíanos un Mensaje</h3>
                                <p className="text-gray-400 font-light text-sm">Cuéntanos tu idea y la haremos realidad con maestría técnica.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder=" "
                                        className="w-full bg-gray-50/50 border-b border-gray-200 py-4 px-0 outline-none focus:border-[#EE1D23] transition-colors peer text-[#0F172A]"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:text-[#EE1D23] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold"
                                    >
                                        Nombre Completo
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder=" "
                                        className="w-full bg-gray-50/50 border-b border-gray-200 py-4 px-0 outline-none focus:border-[#EE1D23] transition-colors peer text-[#0F172A]"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:text-[#EE1D23] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold"
                                    >
                                        Correo Electrónico
                                    </label>
                                </div>
                            </div>

                            {/* Interest Selector */}
                            <div className="relative group">
                                <select
                                    id="interest"
                                    required
                                    value={interest}
                                    onChange={(e) => setInterest(e.target.value)}
                                    className="w-full bg-gray-50/50 border-b border-gray-200 py-4 px-0 outline-none focus:border-[#EE1D23] transition-colors appearance-none cursor-pointer text-[#0F172A] font-light"
                                >
                                    <option value="" disabled hidden></option>
                                    <option value="varios">Varios / Otros Servicios</option>
                                    <option value="restauracion">Restauración de Obra</option>
                                    <option value="arte-publico">Arte Público / Muralismo</option>
                                    <option value="artes-plasticas">Artes Plásticas (Pintura/Escultura)</option>
                                </select>
                                <label
                                    htmlFor="interest"
                                    className={`absolute left-0 top-4 text-gray-400 text-sm font-light transition-all duration-300 pointer-events-none group-focus-within:text-[#EE1D23] group-focus-within:-top-2 group-focus-within:text-[10px] group-focus-within:uppercase group-focus-within:font-bold group-focus-within:tracking-widest ${interest ? '-top-2 text-[10px] uppercase font-bold tracking-widest text-[#EE1D23]' : ''}`}
                                >
                                    Me interesa...
                                </label>
                                <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Message */}
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    placeholder=" "
                                    className="w-full bg-gray-50/50 border-b border-gray-200 py-4 px-0 outline-none focus:border-[#EE1D23] transition-colors peer text-[#0F172A] font-light resize-none"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all duration-300 pointer-events-none peer-focus:text-[#EE1D23] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold"
                                >
                                    Descripción del Proyecto
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 w-full bg-[#EE1D23] text-white py-6 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#0F172A] hover:shadow-2xl hover:shadow-red-500/10 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Procesando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Consulta
                                        <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </button>

                            <p className="text-[10px] text-center text-gray-400 font-light mt-4">
                                Tus datos están protegidos. Te contactaremos en menos de 24 horas laborables.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactAndLocation;
