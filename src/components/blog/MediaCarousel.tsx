"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import Image from "next/image";

interface MediaItem {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
}

interface MediaCarouselProps {
    items: MediaItem[];
}

export default function MediaCarousel({ items = [] }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!items || items.length === 0) return null;

    const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative w-full aspect-video lg:aspect-[2/1] bg-[#0F172A] rounded-[32px] overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    {items[currentIndex].type === "image" ? (
                        <Image
                            src={items[currentIndex].url}
                            alt="Blog Media"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            {/* Simple Video Placeholder / Implementation */}
                            <video 
                                src={items[currentIndex].url}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {items.length > 1 && (
                <>
                    <button 
                        onClick={prev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0F172A] transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={next}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#0F172A] transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                        {items.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-[2px] transition-all duration-500 ${currentIndex === idx ? "w-12 bg-white" : "w-4 bg-white/30"}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Type Badge */}
            <div className="absolute top-8 right-8 px-4 py-2 bg-[#0F172A]/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-white z-20">
                {items[currentIndex].type} {currentIndex + 1} / {items.length}
            </div>
        </div>
    );
}
