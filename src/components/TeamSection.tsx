"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Palette, Camera, Box, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const maestros = [
    {
        name: "Brian Carrión",
        role: "Artes Plásticas & Restauración",
        description: "Maestro pintor y restaurador con 20 años de trayectoria en conservación de patrimonio.",
        icon: <Palette className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Carlos Carrión",
        role: "Producción Audiovisual",
        description: "Experto en narrativa cinematográfica y post-producción de estándares internacionales.",
        icon: <Camera className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    },
    {
        name: "Milton",
        role: "Ambientación & Renders 3D",
        description: "Arquitecto especialista en previsualización digital y diseño de espacios artísticos.",
        icon: <Box className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    }
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-[#FDFDFD] overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="h-[1px] w-12 bg-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                            Maestría & Autoridad
                        </span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-6xl font-normal text-[#0F172A] tracking-tight font-[family-name:var(--font-cinzel)]">
                        Los Rostros detrás de <br />
                        <span className="text-[#EE1D23]">la Excelencia</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {maestros.map((maestro, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group flex flex-col"
                        >
                            <div className="relative h-[450px] mb-8 overflow-hidden rounded-2xl bg-gray-100">
                                {/* Placeholder image logic or fallback */}
                                <div className="absolute inset-0 bg-[#0F172A]/5 group-hover:bg-transparent transition-colors duration-500" />
                                <Image
                                    src={maestro.image}
                                    alt={maestro.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    onError={(e: any) => {
                                        // Fallback for missing images
                                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                                    }}
                                />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#0F172A] to-transparent">
                                    <p className="text-sm text-white/70 font-light leading-relaxed">
                                        {maestro.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gray-50 rounded-lg text-[#EE1D23] group-hover:bg-[#EE1D23] group-hover:text-white transition-colors duration-300">
                                        {maestro.icon}
                                    </div>
                                    <h3 className="text-xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">
                                        {maestro.name}
                                    </h3>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EE1D23]/60 ml-12">
                                    {maestro.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
