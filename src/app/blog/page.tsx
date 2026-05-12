"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
    "Todos",
    "Arte Público",
    "Restauración",
    "Artes Plásticas",
    "Diseño & Varios",
    "Academia"
];

export default function BlogListingPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Todos");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Filter logic
    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category?.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = 
                activeCategory === "Todos" || 
                post.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [posts, searchQuery, activeCategory]);

    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <Navbar />
            
            {/* Blog Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden bg-[#0F172A]">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1460661419201-fd4ce18a802d?q=80&w=2000&auto=format&fit=crop" 
                        alt="Background Art" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EE1D23] mb-4 block"
                        >
                            Pensamiento & Maestría
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-normal text-white font-[family-name:var(--font-cinzel)] leading-tight"
                        >
                            Blog del <br /> <span className="italic text-white/90">Atelier</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="sticky top-[80px] z-[50] bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-8 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        
                        {/* Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide no-scrollbar">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                                        activeCategory === cat
                                            ? "bg-[#EE1D23] text-white shadow-lg shadow-red-500/20"
                                            : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input 
                                type="text"
                                placeholder="Buscar artículos o temas..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1D23]/10 focus:border-[#EE1D23]/30 transition-all font-[family-name:var(--font-outfit)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 lg:py-32 container mx-auto px-8">
                {isLoading ? (
                    <div className="text-center py-20 text-gray-400 italic font-[family-name:var(--font-outfit)]">
                        Consultando los archivos del Atelier...
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-4xl mb-6">🔍</div>
                        <p className="text-gray-400 italic font-[family-name:var(--font-outfit)]">
                            No encontramos artículos que coincidan con tu búsqueda.
                        </p>
                        <button 
                            onClick={() => {setSearchQuery(""); setActiveCategory("Todos");}}
                            className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#EE1D23] hover:underline"
                        >
                            Ver todos los artículos
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, index) => {
                                // Parse media if it's a string
                                const mediaItems = typeof post.media === 'string' ? JSON.parse(post.media) : post.media;
                                const firstImage = mediaItems?.find((m: any) => m.type === 'image')?.url || "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop";

                                return (
                                    <motion.article 
                                        key={post.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="group cursor-pointer"
                                    >
                                        <Link href={`/blog/${post.slug}`}>
                                            <div className="aspect-[4/5] overflow-hidden rounded-[32px] mb-8 relative">
                                                <img 
                                                    src={firstImage} 
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute top-6 left-6 flex gap-2">
                                                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/20">
                                                        {post.category || 'General'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                                                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString()}</span>
                                                    <span className="w-1 h-1 bg-[#EE1D23] rounded-full" />
                                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                                </div>
                                                <h2 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] group-hover:text-[#EE1D23] transition-colors leading-tight">
                                                    {post.title}
                                                </h2>
                                                <p className="text-[#64748B] line-clamp-2 text-sm leading-relaxed font-[family-name:var(--font-outfit)]">
                                                    {post.excerpt}
                                                </p>
                                                <div className="pt-2 flex items-center gap-2 text-[#EE1D23] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                                                    Leer más <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}

/** Utility for Tailwind CSS class merging */
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
