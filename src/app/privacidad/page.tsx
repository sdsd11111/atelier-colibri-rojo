"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
                            Legal & Ética
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-normal tracking-tight font-[family-name:var(--font-cinzel)] mb-8">
                        Política de <span className="text-[#EE1D23]">Privacidad</span>.
                    </h1>
                    <p className="text-gray-400 font-light text-lg">
                        Última actualización: Febrero 2026. Tu confianza es la base de nuestra maestría.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="space-y-16 border-t border-gray-100 pt-16">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6 flex items-center gap-3">
                            <ShieldCheck size={18} className="text-[#EE1D23]" />
                            Compromiso de Transparencia
                        </h2>
                        <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                            <p>
                                En el **Atelier Colibrí Rojo**, valoramos la privacidad de nuestros estudiantes y clientes como si fuera una obra de arte. Esta política describe cómo recolectamos, usamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web y servicios presenciales en Loja.
                            </p>
                            <p>
                                Recolectamos datos básicos como nombre, correo electrónico e interés comercial únicamente para personalizar tu experiencia académica y profesional.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6">
                            Uso de la Información
                        </h2>
                        <div className="space-y-4 text-gray-500 font-light leading-relaxed">
                            <p>Los datos capturados se utilizan exclusivamente para:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Gestionar inscripciones en la Academia de Artes Plásticas ($50).</li>
                                <li>Coordinar servicios de restauración y arte público monumental.</li>
                                <li>Envío de comunicaciones directas sobre el estado de tus proyectos.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0F172A] mb-6">
                            Protección de Datos
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed">
                            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra accesos no autorizados. No compartimos, vendemos ni alquilamos tu información personal a terceros bajo ninguna circunstancia, respetando el legado de confianza de nuestra institución en Loja.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                        <p className="text-[11px] text-[#0F172A] font-bold uppercase tracking-widest text-center">
                            Sello de Integridad Artística Lojana
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
