"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Circle } from "lucide-react";

/** Footer: Minimalist & Balanced */
const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white py-20 border-t border-white/5 font-[family-name:var(--font-outfit)]" aria-label="Información de contacto y pie de página">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">

                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/Logo.webp"
                                    alt="Logo Atelier Colibrí Rojo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <h4 className="text-lg font-normal tracking-[0.2em] font-[family-name:var(--font-cinzel)] uppercase">
                                Atelier <span className="text-[#EE1D23]">Colibrí</span>
                            </h4>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-xs font-light text-white/60 leading-relaxed">
                                Preservando el pasado y esculpiendo el futuro. Nodo de soluciones creativas integrales con trayectoria internacional.
                            </p>
                            <div className="flex gap-8">
                                <a href="#" className="text-white/40 hover:text-[#EE1D23] transition-colors" aria-label="Visitar Instagram del Atelier">
                                    <Instagram size={18} strokeWidth={1} />
                                </a>
                                <a href="#" className="text-white/40 hover:text-[#EE1D23] transition-colors" aria-label="Visitar Facebook del Atelier">
                                    <Facebook size={18} strokeWidth={1} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <nav aria-label="Servicios profesionales">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-10 block">Servicios</span>
                        <ul className="space-y-4">
                            {["Arte Público (Muralismo/Escultura)", "Restauración Profesional", "Producción Audiovisual", "Academia de Artes Plásticas"].map(service => (
                                <li key={service} className="text-[10px] font-normal tracking-[0.1em] text-white/60">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-10 block">Ubicación</span>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin size={16} className="text-white/30 shrink-0" />
                                <p className="text-[11px] font-light text-white/60 leading-relaxed max-w-[200px]">
                                    Calle Imbabura entre Olmedo y Bernardo Valdivieso, Loja - Ecuador.
                                </p>
                            </div>
                            <div className="pl-8 text-[11px] italic text-white/40 font-light border-l border-white/10">
                                A pocos pasos de la Casa de la Cultura
                            </div>
                        </div>
                    </div>

                    {/* Credits & Designer */}
                    <div className="flex flex-col items-start">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#EE1D23] mb-10 block">Créditos</span>
                        <div className="space-y-4">
                            <p className="text-[11px] font-light text-white/60">
                                Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#EE1D23] transition-colors" aria-label="Visitar sitio web del diseñador Cesar Reyes">Cesar Reyes</a>
                            </p>
                            <div className="flex items-center gap-2">
                                <Circle size={6} fill="#EE1D23" stroke="none" aria-hidden="true" />
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">© 2026 Atelier Colibrí Rojo - Loja, Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10">
                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                        Sello de Excelencia Artística Lojana.
                    </p>
                    <div className="flex gap-10 mt-6 md:mt-0">
                        <a href="/privacidad" className="text-[8px] font-bold text-white/40 uppercase tracking-widest hover:text-[#EE1D23] transition-colors" aria-label="Ver política de privacidad">Privacidad</a>
                        <a href="/terminos" className="text-[8px] font-bold text-white/40 uppercase tracking-widest hover:text-[#EE1D23] transition-colors" aria-label="Ver términos de servicio">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
