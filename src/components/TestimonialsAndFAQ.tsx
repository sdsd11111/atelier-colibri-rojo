"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Plus, Minus, ChevronRight } from "lucide-react";

/**
 * Testimonials and FAQ Section for Atelier Colibrí Rojo.
 * Designed with a minimalist gallery aesthetic to build trust and resolve objections.
 * Features an interactive slider for testimonials.
 */

const testimonials = [
    {
        category: "Academia",
        text: "Increíble que por $50 incluyan todos los materiales. Mis hijos han aprendido técnicas reales de pintura en un ambiente muy profesional.",
        author: "Familia Loja-Samaniego",
        role: "Padres de Estudiantes"
    },
    {
        category: "Restauración",
        text: "Llevamos un óleo familiar muy antiguo y la maestría con la que trabajaron la madera y el lienzo fue impresionante. Se nota la experiencia de décadas.",
        author: "Dra. Carmen Villavicencio",
        role: "Coleccionista Privada"
    },
    {
        category: "Arte Público",
        text: "El mural monumental realizado para nuestro proyecto capturó la esencia de Loja. Profesionales de pies a cabeza.",
        author: "Arq. Santiago Jaramillo",
        role: "Consultor de Proyectos"
    }
];

const faqs = [
    {
        question: "¿Qué incluye el pago de $50 en la academia?",
        answer: "Incluye la instrucción profesional y todos los materiales de trabajo: óleos, pinceles, arcilla, lienzos y solventes. No necesitas traer nada adicional."
    },
    {
        question: "¿Hacen trabajos de restauración fuera de Loja?",
        answer: "Sí, realizamos evaluaciones técnicas y servicios de restauración para obras de arte pictórico y escultórico a nivel provincial y nacional."
    },
    {
        question: "¿Qué tipo de materiales manejan en escultura?",
        answer: "Somos expertos en la aplicación técnica de resina, madera, fibra de vidrio, cemento y metales para obras monumentales de alta durabilidad."
    },
    {
        question: "¿Tienen convenios institucionales?",
        answer: "Sí, contamos con convenios con la Casa de la Cultura de Loja y una amplia trayectoria acreditando nuestra participación en exposiciones internacionales."
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void
}) => {
    return (
        <div className="border-b border-white/5 last:border-0 group">
            <button
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left transition-all duration-300"
                aria-expanded={isOpen}
            >
                <span className={`text-lg lg:text-xl font-normal transition-colors duration-300 ${isOpen ? 'text-[#EE1D23]' : 'text-white/80 group-hover:text-[#EE1D23]'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#EE1D23] border-[#EE1D23] text-white' : 'border-white/10 text-gray-500 group-hover:border-[#EE1D23] group-hover:text-[#EE1D23]'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-gray-400 font-light leading-relaxed max-w-2xl font-[family-name:var(--font-outfit)]">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TestimonialsAndFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 lg:py-28 bg-[#0F172A]">
            <div className="container mx-auto px-8">

                {/* Layout: Desktop 2 Columns Split / Mobile Stacked */}
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

                    {/* Left Block: Testimonials Slider */}
                    <div className="lg:w-5/12 overflow-hidden flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-[1px] w-12 bg-[#EE1D23]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                                Voces de la Maestría
                            </span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white tracking-tight font-[family-name:var(--font-cinzel)] mb-12 lg:mb-20">
                            Lo que dicen quienes <br />
                            confían en <span className="text-[#EE1D23]">el Taller</span>.
                        </h2>

                        <div className="relative flex flex-col h-full">
                            <div className="relative min-h-[400px] lg:min-h-[380px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTestimonial}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="h-full"
                                    >
                                        <div className="h-full bg-white/[0.03] border border-white/5 p-8 lg:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group flex flex-col">
                                            <Quote className="absolute top-8 right-10 text-[#EE1D23]/10 w-20 h-20 pointer-events-none group-hover:text-[#EE1D23]/20 transition-colors duration-500" />

                                            <div className="mb-8">
                                                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#EE1D23] px-4 py-1.5 bg-[#EE1D23]/5 rounded-full">
                                                    {testimonials[activeTestimonial].category}
                                                </span>
                                            </div>

                                            <p className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-10 relative z-10 font-[family-name:var(--font-outfit)] italic italic">
                                                "{testimonials[activeTestimonial].text}"
                                            </p>

                                            <div className="mt-auto flex flex-col border-t border-white/5 pt-8">
                                                <span className="text-white font-medium tracking-[0.1em] font-[family-name:var(--font-cinzel)] uppercase text-xs mb-1">
                                                    {testimonials[activeTestimonial].author}
                                                </span>
                                                <span className="text-[10px] text-gray-500 font-light lowercase">
                                                    {testimonials[activeTestimonial].role}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Slider Controls */}
                            <div className="flex items-center justify-between mt-10">
                                <div className="flex gap-2">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveTestimonial(i)}
                                            className={`h-1.5 transition-all duration-500 rounded-full ${activeTestimonial === i ? 'w-8 bg-[#EE1D23]' : 'w-2 bg-white/10 hover:bg-white/20'}`}
                                            aria-label={`Ir al testimonio ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#EE1D23] hover:border-[#EE1D23] transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-red-500/20"
                                        aria-label="Testimonio anterior"
                                    >
                                        <ChevronRight size={20} className="rotate-180" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#EE1D23] hover:border-[#EE1D23] transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-red-500/20"
                                        aria-label="Siguiente testimonio"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Block: FAQ */}
                    <div className="lg:w-7/12 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-[1px] w-12 bg-[#EE1D23]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                                Resolviendo Dudas
                            </span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white tracking-tight font-[family-name:var(--font-cinzel)] mb-12 lg:mb-20">
                            Preguntas <br />
                            <span className="text-[#EE1D23]">Frecuentes</span>.
                        </h2>

                        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 lg:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)]">
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === i}
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                />
                            ))}
                        </div>

                        {/* CTA for further questions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-16 p-8 border border-dashed border-white/20 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
                        >
                            <div className="text-center lg:text-left">
                                <p className="text-white font-medium font-[family-name:var(--font-cinzel)] uppercase tracking-wider text-sm mb-1">
                                    ¿Tienes otra consulta técnica?
                                </p>
                                <p className="text-gray-500 text-xs font-light font-[family-name:var(--font-outfit)]">
                                    Estamos listos para asesorarte en tu próximo gran proyecto.
                                </p>
                            </div>
                            <button className="flex items-center gap-3 px-8 py-4 bg-[#EE1D23] text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0F172A] transition-all duration-300 shadow-xl shadow-[#EE1D23]/10 group">
                                Consultar por WhatsApp
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAndFAQ;
