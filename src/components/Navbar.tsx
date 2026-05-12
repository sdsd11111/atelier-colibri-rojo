"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Instagram, Facebook, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind CSS class merging */
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const SERVICES = [
    { name: "Restauración de Obra", href: "/restauracion-de-obra" },
    { name: "Arte Público y Monumental", href: "/arte-monumental" },
    { name: "Artes Plásticas", href: "/artes-plasticas" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navAnimation: any = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const sidebarVariants: any = {
        closed: { x: "100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } },
        open: { x: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }
    };

    const itemVariants: any = {
        closed: { opacity: 0, x: 20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navAnimation}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-[family-name:var(--font-outfit)]",
                    isScrolled || isMenuOpen
                        ? "bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm"
                        : "bg-white/80 backdrop-blur-sm py-6 border-b border-gray-100/60"
                )}
            >
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

                    {/* Branding: Always Visible Left */}
                    <a href="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
                        <div className="relative w-9 h-9 flex-shrink-0">
                            <Image
                                src="/Logo.webp"
                                alt="Logo Atelier Colibrí Rojo"
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-normal tracking-[0.2em] leading-tight font-[family-name:var(--font-cinzel)] text-[#0F172A] group-hover:tracking-[0.3em] transition-all duration-500">
                                ATELIER
                            </span>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="h-[1px] w-3 bg-[#EE1D23]" />
                                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#0F172A]/50">
                                    Colibrí Rojo
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Right: Universal Hamburger Menu */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className={cn(
                                "group flex items-center gap-4 px-4 py-2 rounded-full border transition-all duration-300",
                                isScrolled || isMenuOpen
                                    ? "bg-white/40 border-gray-100 hover:border-[#EE1D23]"
                                    : "bg-[#0F172A]/5 border-[#0F172A]/10 hover:border-[#EE1D23]"
                            )}
                            aria-label="Abrir navegación lateral"
                        >
                            <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 text-[#0F172A]/70 group-hover:text-[#EE1D23]">
                                Menú
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <span className="h-[1px] w-5 bg-[#0F172A]/70 group-hover:bg-[#EE1D23] transition-colors duration-300" />
                                <span className="h-[1px] w-3 group-hover:w-5 transition-all duration-300 bg-[#0F172A]/70 group-hover:bg-[#EE1D23]" />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="nav-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] z-[9998] cursor-pointer"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.aside
                        key="nav-sidebar"
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 right-0 w-full md:w-[480px] h-full bg-white z-[9999] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                    >
                        {/* Close Header */}
                        <div className="flex items-center justify-between p-8 lg:p-12">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">Navegación</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 rounded-full border border-gray-50 flex items-center justify-center text-[#0F172A] hover:bg-[#EE1D23] hover:text-white hover:border-[#EE1D23] transition-all duration-300"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Menu Links Content */}
                        <div className="flex-1 overflow-y-auto px-8 lg:px-12 py-6">
                            <nav className="flex flex-col gap-10">
                                
                                {/* Services - Always Visible */}
                                <div className="flex flex-col gap-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 block mb-2">Servicios</span>
                                    {SERVICES.map((service, idx) => (
                                        <motion.a
                                            key={idx}
                                            custom={idx}
                                            variants={itemVariants}
                                            href={service.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl lg:text-4xl font-normal text-[#0F172A] hover:text-[#EE1D23] transition-colors font-[family-name:var(--font-cinzel)] group flex items-center gap-4"
                                        >
                                            <span className="text-[10px] text-gray-300 font-[family-name:var(--font-outfit)]">0{idx + 1}</span>
                                            {service.name}
                                            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#EE1D23]" size={20} />
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="h-px bg-gray-50 my-2" />

                                <motion.a
                                    custom={4} variants={itemVariants}
                                    href="/varios"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl lg:text-4xl font-normal text-[#0F172A] hover:text-[#EE1D23] transition-colors font-[family-name:var(--font-cinzel)] group flex items-center gap-4"
                                >
                                    <span className="text-[10px] text-gray-300 font-[family-name:var(--font-outfit)]">04</span>
                                    Varios
                                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#EE1D23]" size={20} />
                                </motion.a>

                                <motion.a
                                    custom={5} variants={itemVariants}
                                    href="/blog"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl lg:text-4xl font-normal text-[#0F172A] hover:text-[#EE1D23] transition-colors font-[family-name:var(--font-cinzel)] group flex items-center gap-4"
                                >
                                    <span className="text-[10px] text-gray-300 font-[family-name:var(--font-outfit)]">05</span>
                                    Blog
                                    <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#EE1D23]" size={20} />
                                </motion.a>
                            </nav>
                        </div>

                        {/* Footer Sidebar: CTA + Socials */}
                        <div className="p-8 lg:p-12 border-t border-gray-50 bg-gray-50/30">
                            <motion.a
                                href="https://wa.me/593992183133?text=Hola,%20me%20gustaría%20cotizar%20un%20proyecto%20con%20el%20Atelier%20Colibrí%20Rojo."
                                target="_blank"
                                rel="noopener noreferrer"
                                custom={6} variants={itemVariants}
                                animate={{
                                    scale: [1, 1.02, 1],
                                    boxShadow: [
                                        "0px 0px 0px rgba(238, 29, 35, 0)",
                                        "0px 0px 20px rgba(238, 29, 35, 0.2)",
                                        "0px 0px 0px rgba(238, 29, 35, 0)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full relative flex items-center justify-center gap-3 px-8 py-6 bg-[#EE1D23] text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.25em] shadow-xl shadow-red-500/10 hover:bg-[#0F172A] transition-all duration-500 group overflow-hidden mb-10"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%]"
                                />
                                <Sparkles size={16} className="text-white/80" />
                                Cotizar Proyecto
                            </motion.a>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-6">
                                    <a href="https://www.instagram.com/ateliercolibrirojo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EE1D23] transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
                                    <a href="https://www.facebook.com/atelier.colibrirojo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EE1D23] transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
                                </div>
                                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Loja, Ecuador</span>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
