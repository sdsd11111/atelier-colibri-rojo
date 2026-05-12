import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaCarousel from "@/components/blog/MediaCarousel";
import ArticleBody from "@/components/blog/ArticleBody";
import { Calendar, User, Tag as TagIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import pool from "@/lib/db";
import { notFound } from "next/navigation";

// Función para obtener el post directamente de la DB en el servidor
async function getPost(slug: string) {
    try {
        const [rows]: any = await pool.query(
            "SELECT * FROM posts WHERE slug = ? AND status = 'published'",
            [slug]
        );

        if (rows.length === 0) return null;

        const post = rows[0];
        // Parsear media si es un string JSON
        if (typeof post.media === 'string') {
            try {
                post.media = JSON.parse(post.media);
            } catch (e) {
                post.media = [];
            }
        }
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <Navbar />
            
            {/* Post Header Section */}
            <section className="pt-40 pb-20 container mx-auto px-8">
                <div className="max-w-4xl mx-auto">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#64748B] hover:text-[#EE1D23] transition-colors mb-12"
                    >
                        <ArrowLeft size={14} /> Volver a la Bitácora
                    </Link>
                    
                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#EE1D23]">
                            <span>{post.category || 'General'}</span>
                            <span className="w-1 h-1 bg-[#64748B] rounded-full" />
                            <span className="text-[#64748B]">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                <User size={20} className="text-gray-400" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">{post.author}</p>
                                <p className="text-[10px] text-[#64748B] uppercase tracking-widest">Maestro del Atelier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Carousel Section */}
            <section className="pb-24">
                <div className="container mx-auto px-8">
                    <div className="max-w-5xl mx-auto">
                        <MediaCarousel items={post.media || []} />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32">
                <div className="container mx-auto px-8">
                    <ArticleBody content={post.content} />

                    <div className="max-w-3xl mx-auto">
                        {/* Tags */}
                        {post.tags && (
                            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap gap-3">
                                {post.tags.split(',').map((tag: string, idx: number) => (
                                    <span 
                                        key={idx}
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#64748B] border border-gray-100"
                                    >
                                        <TagIcon size={12} /> {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
