"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowRight, Camera, Search, Droplet, Send, Cog } from "lucide-react";

// Datos de la Galería de Éxito
const successCases = [
    {
        id: 1,
        category: "Restauración Pictórica",
        title: "Recuperación de policromía y soporte en óleo del Siglo XIX",
        imageBefore: "/images/restauracion/antes-1.webp",
        imageAfter: "/images/restauracion/despues-1.webp",
    },
    {
        id: 2,
        category: "Escultura Religiosa",
        title: "Consolidación estructural y restitución de pan de oro",
        imageBefore: "/images/restauracion/antes-2.webp",
        imageAfter: "/images/restauracion/despues-2.webp",
    },
    {
        id: 3,
        category: "Arte Monumental",
        title: "Recuperación de relieve histórico en bronce celular",
        imageBefore: "/images/restauracion/antes-3.webp",
        imageAfter: "/images/restauracion/despues-3.webp",
    }
];

export default function RestorationGalleryCTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000); // Simulando envío
    };

    return (
        <section className="bg-white">
            {/* Bloque 1: Galería de Transformación (El Milagro de la Restauración) */}
            <div className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-6 block">Casos de Éxito</span>
                        <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-8 font-[family-name:var(--font-cinzel)] leading-tight">
                            El Milagro de la Restauración
                        </h2>
                        <p className="text-lg md:text-xl font-normal text-[#0F172A]/80 font-[family-name:var(--font-outfit)] leading-relaxed">
                            Vea cómo la dedicación técnica puede hacer retroceder el desgaste del tiempo. Deslice para ver el antes y después de nuestras intervenciones en imaginería sacra y pintura histórica.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {successCases.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden bg-gray-100 mb-6 shadow-xl shadow-gray-200/50">
                                    {/* Etiqueta Flotante */}
                                    <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-gray-100 shadow-sm">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#EE1D23]">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Contenedor Antes/Después con Hover Elegante */}
                                    <div className="absolute inset-0 w-full h-full">
                                        {/* Imagen 'Antes' (Abajo, simula estado oscuro/opaco) */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out z-0 filter contrast-[0.9] sepia-[0.3]"
                                            style={{ backgroundImage: `url('${item.imageBefore}')` }}
                                        />

                                        {/* Imagen 'Después' (Arriba, se revela al hacer Hover) */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out z-10"
                                            style={{ backgroundImage: `url('${item.imageAfter}')` }}
                                        />

                                        {/* Overlay oscuro sutil para leer íconos */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                                        {/* Indicador visual de Hover */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-white/80 group-hover:text-white/0 transition-opacity duration-300">
                                            <Search size={16} />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">Ver Restauración</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-3 group-hover:text-[#EE1D23] transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <div className="w-8 h-[1px] bg-[#EE1D23]/30 group-hover:bg-[#EE1D23] transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bloque 2: Banner de Confianza (Garantía) */}
            <div className="w-full bg-[#f8f9fa] border-y border-[#EE1D23]/20 py-16 text-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6"
                    >
                        <ShieldAlert size={40} className="text-[#EE1D23] opacity-80" />
                        <h4 className="text-2xl md:text-3xl font-light text-[#0F172A] font-[family-name:var(--font-outfit)] leading-relaxed">
                            "Su obra merece ser preservada por manos expertas. <strong className="font-normal text-[#EE1D23]">30 años de legado</strong> garantizan un tratamiento profesional y ético de su patrimonio."
                        </h4>
                    </motion.div>
                </div>
            </div>

            {/* Bloque 3: Formulario de Cotización Rápida (CTA Final) */}
            <div className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto bg-[#FDFDFD] rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden">

                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Droplet size={150} />
                        </div>

                        <div className="text-center mb-12 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-normal text-[#0F172A] mb-4 font-[family-name:var(--font-cinzel)]">
                                Solicite una Evaluación Técnica
                            </h2>
                            <p className="text-[#0F172A]/70 font-normal font-[family-name:var(--font-outfit)] text-base md:text-lg">
                                Inicie el proceso de recuperación de su patrimonio con un diagnóstico técnico especializado.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-10 group/form font-[family-name:var(--font-outfit)]">
                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Nombre */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-[#0F172A] pb-3 text-lg focus:ring-0 focus:border-[#EE1D23] transition-colors peer placeholder-transparent"
                                        placeholder="Nombre y Apellido"
                                    />
                                    <label htmlFor="name" className="absolute left-0 -top-5 text-sm font-bold tracking-widest uppercase text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#EE1D23] transition-all">
                                        Nombre Completo
                                    </label>
                                </div>

                                {/* Teléfono */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-[#0F172A] pb-3 text-lg focus:ring-0 focus:border-[#EE1D23] transition-colors peer placeholder-transparent"
                                        placeholder="Número de Contacto"
                                    />
                                    <label htmlFor="phone" className="absolute left-0 -top-5 text-sm font-bold tracking-widest uppercase text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#EE1D23] transition-all">
                                        Número de Contacto
                                    </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Tipo de Obra */}
                                <div className="relative">
                                    <select
                                        id="type"
                                        required
                                        defaultValue=""
                                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-[#0F172A] pb-3 text-lg focus:ring-0 focus:border-[#EE1D23] transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23EE1D23%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[position:right_center] bg-no-repeat pr-8"
                                    >
                                        <option value="" disabled hidden>Seleccione el tipo</option>
                                        <option value="pintura">Pintura (Lienzo, Óleo, Retablo)</option>
                                        <option value="escultura">Escultura (Religiosa, Busto)</option>
                                        <option value="monumento">Monumento Público</option>
                                        <option value="otro">Asesoría / Otro</option>
                                    </select>
                                    <label htmlFor="type" className="absolute left-0 -top-5 text-sm font-bold tracking-widest uppercase text-gray-400 transition-all">
                                        Tipo de Obra
                                    </label>
                                </div>

                                {/* Material */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="material"
                                        className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-[#0F172A] pb-3 text-lg focus:ring-0 focus:border-[#EE1D23] transition-colors peer placeholder-transparent"
                                        placeholder="Ej: Madera, Resina, Lienzo"
                                    />
                                    <label htmlFor="material" className="absolute left-0 -top-5 text-sm font-bold tracking-widest uppercase text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#EE1D23] transition-all">
                                        Material Principal (Opcional)
                                    </label>
                                </div>
                            </div>

                            {/* Daño */}
                            <div className="relative mt-8">
                                <textarea
                                    id="damage"
                                    rows={3}
                                    required
                                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 text-[#0F172A] pb-3 text-lg focus:ring-0 focus:border-[#EE1D23] transition-colors peer placeholder-transparent resize-none"
                                    placeholder="Describa el problema brevemente..."
                                ></textarea>
                                <label htmlFor="damage" className="absolute left-0 -top-5 text-sm font-bold tracking-widest uppercase text-gray-400 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#EE1D23] transition-all">
                                    Descripción del Daño
                                </label>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-6 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isSubmitting
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-[#EE1D23] text-white hover:bg-[#0F172A] shadow-xl shadow-red-500/20"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-3">
                                        <Cog className="animate-spin" size={20} /> Evaluando Solicitud...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-3">
                                        Enviar para Diagnóstico <Send size={18} />
                                    </span>
                                )}
                            </motion.button>
                            <p className="text-center text-xs text-gray-400 font-light mt-4">
                                Todo diagnóstico técnico está protegido por normas de sigilo profesional y ética de conservación.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
