"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] text-[#0F172A] antialiased selection:bg-[#EE1D23] selection:text-white font-[family-name:var(--font-outfit)]">
            <div className="container mx-auto px-8 py-24 lg:py-40 max-w-4xl">

                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#EE1D23] transition-colors mb-16"
                >
                    <ArrowLeft size={14} />
                    Volver al Atelier
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-[1px] w-8 bg-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                            Normatividad & Servicio
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-[family-name:var(--font-cinzel)] mb-8">
                        Términos de <span className="text-[#EE1D23]">Servicio</span>.
                    </h1>
                    <p className="text-gray-400 font-light text-lg">
                        Vigente desde 2026. El marco legal de la maestría técnica.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="space-y-16 border-t border-gray-100 pt-16">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6 flex items-center gap-3">
                            <FileText size={18} className="text-[#EE1D23]" />
                            1. Inscripciones en la Academia
                        </h2>
                        <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                            <p>
                                El costo de inscripción de **$50 USD** incluye el acceso a las instalaciones, tutoría especializada y todos los materiales de taller necesarios para el desarrollo de la obra. Los cupos son limitados para garantizar una enseñanza personalizada.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6">
                            2. Servicios de Restauración
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Todo proyecto de restauración pictórica o escultórica inicia con un diagnóstico técnico preliminar. Los tiempos de entrega están sujetos a la complejidad de la intervención y la preservación de la integridad de la obra original.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6">
                            3. Arte Público y Monumental
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            La creación de murales y esculturas monumentales se rige bajo contratos técnicos específicos por proyecto, asegurando el cumplimiento de normativas locales y la máxima durabilidad técnica en Loja y sus alrededores.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6">
                            4. Propiedad Intelectual
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Todo el contenido, diseños y producciones audiovisuales alojados en este sitio son propiedad exclusiva del **Atelier Colibrí Rojo**. Su reproducción sin autorización escrita está estrictamente prohibida.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-10 rounded-2xl border border-gray-100 italic text-center text-xs text-gray-400">
                        "El arte es largo, la vida es breve. Trabajamos para que el legado perdure."
                    </section>
                </div>
            </div>
        </main>
    );
}
