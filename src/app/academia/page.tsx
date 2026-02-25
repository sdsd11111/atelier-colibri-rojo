"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, MapPin, Send, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────
const workshops = [
    {
        audience: "Niños",
        age: "6 – 12 años",
        icon: "🎨",
        desc: "Despertar la creatividad mediante el juego, el color y la exploración libre de materiales artísticos.",
        courses: ["Dibujo Expresivo", "Pintura Acrílica", "Manualidades Artísticas"],
        color: "#FFF5F5",
        accent: "#EE1D23",
    },
    {
        audience: "Jóvenes y Adultos",
        age: "13 años en adelante",
        icon: "✏️",
        desc: "Desarrollo técnico sólido para quienes buscan construir una base artística real o reforzar su práctica.",
        courses: ["Dibujo Técnico", "Pintura al Óleo", "Acuarela Avanzada"],
        color: "#F8FAFC",
        accent: "#0F172A",
    },
    {
        audience: "Escultura",
        age: "Todas las edades",
        icon: "🗿",
        desc: "Aprende modelado, talla y técnicas en arcilla, yeso y resina con maestros de obra monumental.",
        courses: ["Modelado en Arcilla", "Talla en Yeso", "Escultura Decorativa"],
        color: "#FFFDF5",
        accent: "#D97706",
    },
];

const methodPoints = [
    {
        icon: <Users size={22} />,
        title: "Grupos Reducidos",
        desc: "Máximo 8 alumnos por grupo para una atención verdaderamente personalizada.",
    },
    {
        icon: <Award size={22} />,
        title: "Maestros con Trayectoria",
        desc: "Aprende de artistas con 30 años de experiencia y presencia en eventos internacionales.",
    },
    {
        icon: <BookOpen size={22} />,
        title: "Materiales Incluidos",
        desc: "El costo del curso incluye todos los materiales para que solo te preocupes por crear.",
    },
];

// ─── Animated paint-stroke SVG ────────────────────────────────────────
function PaintStroke() {
    return (
        <motion.svg
            viewBox="0 0 600 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none"
            aria-hidden="true"
        >
            <motion.path
                d="M0,60 C100,20 200,100 300,60 C400,20 500,100 600,60"
                stroke="#EE1D23"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
                d="M0,80 C150,40 250,110 400,70 C500,45 560,90 600,80"
                stroke="#EE1D23"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.8, ease: "easeInOut", delay: 1 }}
            />
        </motion.svg>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────
export default function AcademiaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── Sección 1: Hero ───────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFDF9] pt-20">
                <PaintStroke />

                {/* Decorative circles */}
                <div className="absolute top-20 right-0 w-80 h-80 bg-[#EE1D23]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Text */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EE1D23]/8 border border-[#EE1D23]/20 mb-8"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#EE1D23]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EE1D23]">Inscripciones Abiertas</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-[1.1]"
                            >
                                Academia de Arte <span className="italic text-[#EE1D23]">Colibrí Rojo:</span><br />
                                <span className="text-3xl md:text-4xl lg:text-5xl text-[#0F172A]/60">Formando la Nueva Generación de Artistas en Loja.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg md:text-xl font-light text-[#0F172A]/60 max-w-xl mb-12 font-[family-name:var(--font-outfit)] leading-relaxed"
                            >
                                Descubre tu potencial creativo en un entorno profesional. Cursos para todas las edades bajo la guía de maestros con trayectoria internacional.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <a href="#talleres" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EE1D23] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#0F172A] transition-colors duration-300 shadow-lg shadow-[#EE1D23]/20 group font-[family-name:var(--font-outfit)]">
                                    Ver Horarios y Cursos
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="/galeria" className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#0F172A]/20 text-[#0F172A] rounded-xl text-sm font-bold uppercase tracking-widest hover:border-[#EE1D23] hover:text-[#EE1D23] transition-colors duration-300 font-[family-name:var(--font-outfit)]">
                                    Galería de Alumnos
                                </a>
                            </motion.div>
                        </div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/academia/hero-academia.webp')" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                                <span className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] block">30+</span>
                                <span className="text-[10px] text-[#0F172A]/50 uppercase tracking-widest font-[family-name:var(--font-outfit)]">Años de Magisterio</span>
                            </div>
                            {/* Floating Pill */}
                            <div className="absolute top-8 -right-4 bg-[#EE1D23] rounded-2xl shadow-xl px-5 py-4">
                                <span className="text-white text-xs font-bold uppercase tracking-wider font-[family-name:var(--font-outfit)]">Solo $50 USD</span>
                                <span className="text-white/70 text-[10px] block font-[family-name:var(--font-outfit)]">Materiales incluidos</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Sección 2: Talleres ───────────────────────────────── */}
            <section id="talleres" className="py-24 lg:py-32 bg-white font-[family-name:var(--font-outfit)]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-2xl mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Oferta Académica</span>
                        <h2 className="text-4xl md:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">
                            Nuestros Talleres
                        </h2>
                        <p className="mt-6 text-lg font-light text-[#0F172A]/60 leading-relaxed">
                            Programas diseñados para cada etapa de vida y nivel de experiencia, siempre guiados por maestros especializados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {workshops.map((ws, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                style={{ backgroundColor: ws.color }}
                                className="rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-500 group"
                            >
                                <div className="text-5xl mb-6">{ws.icon}</div>
                                <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/50 mb-4">{ws.age}</div>
                                <h3 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-4">{ws.audience}</h3>
                                <p className="text-[#0F172A]/60 text-sm font-light leading-relaxed mb-6">{ws.desc}</p>
                                <ul className="space-y-2">
                                    {ws.courses.map((c, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#0F172A]/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#EE1D23] flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Sección 3: El Método ─────────────────────────────── */}
            <section className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden font-[family-name:var(--font-outfit)]">
                <div className="absolute inset-0 bg-[#EE1D23]/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Text left */}
                        <div className="lg:w-1/2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Nuestra Pedagogía</span>
                            <h2 className="text-4xl md:text-5xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight mb-8">
                                El Método <span className="italic text-[#EE1D23]">Colibrí Rojo</span>
                            </h2>
                            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                                No somos una academia masiva. Somos un taller vivo donde cada alumno recibe atención directa, construyendo su propio lenguaje artístico desde el primer día.
                            </p>
                        </div>

                        {/* Points right */}
                        <div className="lg:w-1/2 space-y-8">
                            {methodPoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EE1D23] flex-shrink-0 group-hover:bg-[#EE1D23] group-hover:text-white transition-all duration-300">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-normal text-white font-[family-name:var(--font-cinzel)] mb-2">{point.title}</h4>
                                        <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Sección 4: Inscripciones ─────────────────────────── */}
            <section id="inscribirse" className="py-24 lg:py-32 bg-[#FFFDF9] font-[family-name:var(--font-outfit)]">
                <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-16 items-start"
                    >
                        {/* Left: Info */}
                        <div className="lg:w-2/5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Inscripciones</span>
                            <h3 className="text-4xl lg:text-5xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight mb-6">
                                Reserva tu Cupo
                            </h3>
                            <p className="text-[#0F172A]/60 font-light text-lg leading-relaxed mb-10">
                                Los cupos son limitados para garantizar la calidad de la enseñanza. Escríbenos y te confirmamos disponibilidad en menos de 24 horas.
                            </p>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-[#EE1D23]/10 flex items-center justify-center text-[#EE1D23] flex-shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40 block mb-1">Ubicación</span>
                                    <p className="text-[#0F172A] font-medium text-sm">A pocas cuadras de la Casa de la Cultura</p>
                                    <p className="text-[#0F172A]/50 text-xs font-light mt-1">Loja, Ecuador</p>
                                </div>
                            </div>

                            {/* Map Embed Placeholder */}
                            <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52 bg-gray-100 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.37!2d-79.2!3d-3.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb59ce5dadc235%3A0x3c2e2fdcbb11e97!2sLoja%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1609459200000!5m2!1ses!2sec"
                                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:w-3/5 w-full">
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-2">Formulario de Inscripción</h4>

                                {/* Name + Age */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Nombre Completo *</label>
                                        <input type="text" required placeholder="Ej. María Loja"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:ring-1 focus:ring-[#EE1D23]/20 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Edad del Alumno *</label>
                                        <input type="number" required placeholder="Ej. 14"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:ring-1 focus:ring-[#EE1D23]/20 transition-all text-sm" />
                                    </div>
                                </div>

                                {/* Contact + Course */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Teléfono / WhatsApp *</label>
                                        <input type="tel" required placeholder="+593 999 000 000"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:ring-1 focus:ring-[#EE1D23]/20 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Taller de Interés *</label>
                                        <select required defaultValue=""
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] focus:outline-none focus:border-[#EE1D23] focus:ring-1 focus:ring-[#EE1D23]/20 transition-all text-sm appearance-none">
                                            <option value="" disabled>Seleccione un taller</option>
                                            <option>Dibujo Expresivo (Niños)</option>
                                            <option>Pintura Acrílica (Niños)</option>
                                            <option>Dibujo Técnico (Jóvenes/Adultos)</option>
                                            <option>Pintura al Óleo</option>
                                            <option>Acuarela Avanzada</option>
                                            <option>Escultura en Arcilla</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]/40">Mensaje Adicional</label>
                                    <textarea rows={3} placeholder="¿Alguna consulta o experiencia previa?"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#EE1D23] focus:ring-1 focus:ring-[#EE1D23]/20 transition-all text-sm resize-none" />
                                </div>

                                {/* Submit */}
                                <button type="submit" disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#EE1D23] text-white rounded-2xl text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#0F172A] disabled:opacity-60 transition-all duration-300 shadow-lg shadow-[#EE1D23]/20 group">
                                    {isSubmitting ? (
                                        <div className="flex gap-2">
                                            {[0, 0.15, 0.3].map((d, i) => (
                                                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            Solicitar mi Cupo
                                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[11px] text-[#0F172A]/30">Cupos limitados. Confirmamos disponibilidad en 24 horas hábiles.</p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
