"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    post: {
        title: string;
        slug: string;
        excerpt: string;
        date: string;
        tags: string[];
        featuredImage: string;
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#EE1D23]/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-red-500/5"
        >
            <Link href={`/blog/${post.slug}`} className="block relative h-[280px] overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag Overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.slice(0, 1).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#EE1D23] text-[9px] font-bold uppercase tracking-widest rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </Link>

            <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-[#64748B] text-[10px] font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#EE1D23]" />
                        {post.date}
                    </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-normal text-[#0F172A] mb-4 group-hover:text-[#EE1D23] transition-colors duration-300 font-[family-name:var(--font-cinzel)] leading-snug">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-[#64748B] text-sm leading-relaxed mb-8 line-clamp-2">
                    {post.excerpt}
                </p>

                <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F172A] group/btn transition-all duration-300"
                >
                    Leer Artículo
                    <div className="w-8 h-[1px] bg-[#EE1D23] group-hover/btn:w-12 transition-all duration-300" />
                    <ArrowRight size={14} className="text-[#EE1D23] -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300" />
                </Link>
            </div>
        </motion.div>
    );
}
