"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, Volume2, Video } from "lucide-react";

/**
 * VideoShowcase component for a cinematic brand experience.
 */
const VideoShowcase = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-16 lg:py-28 bg-[#FDFDFD] selection:bg-[#EE1D23] selection:text-white">
            <div className="container mx-auto px-8">

                {/* Section Header: Minimalist */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="h-[1px] w-8 bg-[#EE1D23]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23]">
                            Visual Showreel
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
                        El Arte en <span className="text-[#EE1D23]">Movimiento</span>.
                    </motion.h2>
                </div>

                {/* Cinematic Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="relative max-w-6xl mx-auto group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={togglePlay}
                >
                    <div className="relative aspect-video rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(15,23,42,0.15)] bg-gray-100">

                        {/* Poster / Thumbnail Image */}
                        <AnimatePresence>
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 z-10"
                                >
                                    <Image
                                        src="/images/home/video-poster.webp"
                                        alt="Miniatura del proceso de restauración"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Native Video Element */}
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            <source src="/videos/showreel.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>

                        {/* Overlays: Storytelling */}
                        <div className="absolute inset-0 z-20 pointer-events-none p-10 lg:p-16 flex flex-col justify-between">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isPlaying ? 0.3 : 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Video size={14} className="text-[#EE1D23]" />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white">Behind the Scenes</span>
                                </div>
                                <h3 className="text-xl lg:text-3xl text-white font-normal font-[family-name:var(--font-cinzel)] tracking-wide">
                                    El proceso detrás de la maestría: <br />
                                    <span className="opacity-70">Restauración y Creación</span>
                                </h3>
                            </motion.div>

                            <div className="flex justify-between items-end">
                                <motion.span
                                    animate={{ opacity: isPlaying ? 0 : 1 }}
                                    className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/60"
                                >
                                    Producción Audiovisual por Colibrí Rojo
                                </motion.span>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <Volume2 size={16} className="text-white" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <Maximize size={16} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Play Button: Pulsing Circle */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 1.5, opacity: 0 }}
                                        className="relative"
                                    >
                                        {/* Outer Pulsing Rings */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 0.1, 0.3],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="absolute inset-0 rounded-full bg-[#EE1D23]"
                                        />

                                        {/* Central Button */}
                                        <div className="w-24 h-24 rounded-full bg-[#EE1D23] flex items-center justify-center shadow-2xl shadow-[#EE1D23]/40 border-[6px] border-white relative z-10 transition-transform group-hover:scale-110 duration-500">
                                            <Play size={32} fill="white" className="text-white ml-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Subtle Pause Icon on Hover when Playing */}
                            {isPlaying && isHovered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-20 h-20 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center border border-white/20"
                                >
                                    <Pause size={28} className="text-white" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;
