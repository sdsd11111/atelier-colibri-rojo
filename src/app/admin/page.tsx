"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogEditor from "@/components/admin/BlogEditor";
import Link from "next/link";
import { 
    Layout, 
    FileText, 
    Plus, 
    Settings, 
    LogOut, 
    Lock, 
    User,
    Trash2,
    Eye,
    Pencil,
    ExternalLink
} from "lucide-react";

function ArticlesTable({ onEdit }: { onEdit: (post: any) => void }) {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = () => {
        setLoading(true);
        fetch("/api/posts?all=true")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const toggleVisibility = async (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'published' ? 'hidden' : 'published';
        try {
            const res = await fetch(`/api/posts/id/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) fetchPosts();
        } catch (e) {
            console.error("Error toggling visibility", e);
        }
    };

    const deletePost = async (id: number, title: string) => {
        if (!confirm(`¿Estás seguro de que deseas eliminar permanentemente el artículo: "${title}"?`)) return;
        
        try {
            const res = await fetch(`/api/posts/id/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) fetchPosts();
        } catch (e) {
            console.error("Error deleting post", e);
        }
    };

    if (loading) return <tr><td colSpan={5} className="p-10 text-center text-gray-400 italic text-sm">Cargando bitácora...</td></tr>;
    if (posts.length === 0) return <tr><td colSpan={5} className="p-10 text-center text-gray-400 italic text-sm">No hay artículos publicados aún.</td></tr>;

    return (
        <>
            {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6">
                        <p className="text-sm font-medium text-[#0F172A] mb-1">{post.title}</p>
                        <p className="text-[10px] text-gray-400 font-mono">/{post.slug}</p>
                    </td>
                    <td className="p-6">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#64748B]">
                            {post.category || 'General'}
                        </span>
                    </td>
                    <td className="p-6 text-[11px] text-[#64748B]">
                        {new Date(post.date).toLocaleDateString()}
                    </td>
                    <td className="p-6">
                        <button 
                            onClick={() => toggleVisibility(post.id, post.status)}
                            className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all ${post.status === 'published' ? 'text-green-600' : 'text-gray-400'}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${post.status === 'published' ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                            {post.status === 'published' ? 'Público' : 'Oculto'}
                        </button>
                    </td>
                    <td className="p-6">
                        <div className="flex items-center gap-2">
                            <Link 
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="p-2 text-gray-400 hover:text-[#EE1D23] transition-colors"
                                title="Ver Artículo"
                            >
                                <ExternalLink size={16} />
                            </Link>
                            <button 
                                onClick={() => onEdit(post)}
                                className="p-2 text-gray-400 hover:text-[#EE1D23] transition-colors"
                                title="Editar Artículo"
                            >
                                <Pencil size={16} />
                            </button>
                            <button 
                                onClick={() => deletePost(post.id, post.title)}
                                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                title="Borrar Artículo"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const VALID_USER = "Ateliercolibrirojo";
    const VALID_PASS = "Contraseña123.";

    const [activeTab, setActiveTab] = useState("Artículos");
    const [editingPost, setEditingPost] = useState<any>(null);

    // Persistencia simple de sesión
    useEffect(() => {
        const auth = localStorage.getItem("atelier_admin_auth");
        if (auth === "true") setIsLoggedIn(true);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === VALID_USER && password === VALID_PASS) {
            setIsLoggedIn(true);
            localStorage.setItem("atelier_admin_auth", "true");
            setError("");
        } else {
            setError("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    };

    const handleEdit = (post: any) => {
        setEditingPost(post);
        setActiveTab("Nuevo Post");
    };

    const handleNewPost = () => {
        setEditingPost(null);
        setActiveTab("Nuevo Post");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("atelier_admin_auth");
    };

    if (!isLoggedIn) {
        return (
            <main className="min-h-screen bg-[#0F172A] flex items-center justify-center p-8">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-white rounded-[32px] p-12 shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EE1D23] to-[#0F172A]" />
                    
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Lock className="text-[#EE1D23]" size={28} />
                        </div>
                        <h1 className="text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-2">
                            Acceso Administrativo
                        </h1>
                        <p className="text-[#64748B] text-xs uppercase tracking-widest font-bold">
                            Atelier Colibrí Rojo
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] ml-2">Usuario</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#EE1D23]/30 transition-all text-sm text-[#0F172A]"
                                    placeholder="Nombre de usuario"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] ml-2">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#EE1D23]/30 transition-all text-sm text-[#0F172A]"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="text-[#EE1D23] text-xs font-bold text-center mt-4">
                                {error}
                            </p>
                        )}

                        <button 
                            type="submit"
                            className="w-full py-5 bg-[#EE1D23] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#0F172A] transition-all duration-500 shadow-xl shadow-red-500/10 mt-8"
                        >
                            Entrar al Sistema
                        </button>
                    </form>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <Navbar />
            
            <div className="pt-32 pb-20 container mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Admin */}
                    <aside className="w-full lg:w-64 space-y-2">
                        <div className="p-8 bg-[#0F172A] rounded-3xl mb-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Sesión Activa</p>
                            <p className="text-white text-sm font-medium truncate">{VALID_USER}</p>
                        </div>

                        {[
                            { icon: <FileText size={18} />, label: "Artículos" },
                            { icon: <Plus size={18} />, label: "Nuevo Post", onClick: handleNewPost },
                        ].map((item, idx) => (
                            <button 
                                key={idx}
                                onClick={item.onClick || (() => setActiveTab(item.label))}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === item.label ? "bg-red-50 text-[#EE1D23]" : "text-[#64748B] hover:bg-gray-50"}`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}

                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-[#EE1D23] hover:bg-red-50 transition-all mt-10"
                        >
                            <LogOut size={18} />
                            Cerrar Sesión
                        </button>
                    </aside>

                    {/* Main Admin Content */}
                    <div className="flex-1">
                        {activeTab === "Artículos" && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                    <div>
                                        <h2 className="text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-2">Mis Artículos</h2>
                                        <p className="text-[#64748B] text-sm">Gestiona el contenido editorial del Atelier.</p>
                                    </div>
                                    <button 
                                        onClick={handleNewPost}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#EE1D23] text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#0F172A] transition-all duration-500 shadow-xl shadow-red-500/10"
                                    >
                                        <Plus size={16} />
                                        Crear Artículo
                                    </button>
                                </header>

                                {/* Articles List */}
                                <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm">
                                    <div className="p-8 border-b border-gray-50">
                                        <h3 className="text-lg font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)]">Publicaciones en Línea</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50/50">
                                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Título</th>
                                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Categoría</th>
                                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Fecha</th>
                                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Visibilidad</th>
                                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                <ArticlesTable onEdit={handleEdit} />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "Nuevo Post" && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <header className="mb-12 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-4xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] mb-2">
                                            {editingPost ? "Editar Artículo" : "Crear Artículo"}
                                        </h2>
                                        <p className="text-[#64748B] text-sm">
                                            {editingPost ? `Editando: ${editingPost.title}` : "Redacta una nueva pieza de maestría para el blog."}
                                        </p>
                                    </div>
                                    <button 
                                        onClick={() => setActiveTab("Artículos")}
                                        className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] hover:text-[#EE1D23]"
                                    >
                                        Cancelar
                                    </button>
                                </header>
                                <BlogEditor post={editingPost} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
