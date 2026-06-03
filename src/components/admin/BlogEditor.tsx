"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Plus, Trash2, Image as ImageIcon, Video, HelpCircle, Upload, Link as LinkIcon } from "lucide-react";

interface MediaSlide {
    type: 'image' | 'video';
    url: string;
}

export default function BlogEditor({ post }: { post?: any }) {
    const [title, setTitle] = useState(post?.title || "");
    const [slug, setSlug] = useState(post?.slug || "");
    const [excerpt, setExcerpt] = useState(post?.excerpt || "");
    const [content, setContent] = useState(post?.content || "");
    const [category, setCategory] = useState(post?.category || "Técnica");
    const [tags, setTags] = useState(post?.tags || "");
    const [keywords, setKeywords] = useState(post?.keywords || "");
    const [status, setStatus] = useState(post?.status || "published");
    const [media, setMedia] = useState<MediaSlide[]>(post?.media || [{ type: 'image', url: '' }]);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{[key: number]: string}>({});
    const [isDragging, setIsDragging] = useState<{[key: number]: boolean}>({});
    const [inputModes, setInputModes] = useState<{[key: number]: 'file' | 'url'}>({});

    const handleFileChange = (index: number, file: File | null) => {
        if (!file) return;
        
        const limit = 4 * 1024 * 1024; // 4MB
        if (file.size > limit) {
            setErrors(prev => ({ 
                ...prev, 
                [index]: `El archivo excede el límite de 4MB (Tamaño: ${(file.size / (1024 * 1024)).toFixed(2)}MB)` 
            }));
            return;
        }
        
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[index];
            return newErrors;
        });

        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                updateMedia(index, "url", e.target.result as string);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        setIsDragging(prev => ({ ...prev, [index]: true }));
    };

    const handleDragLeave = (index: number) => {
        setIsDragging(prev => ({ ...prev, [index]: false }));
    };

    const handleDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        setIsDragging(prev => ({ ...prev, [index]: false }));
        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleFileChange(index, file);
        }
    };

    // Efecto para actualizar cuando cambia el post prop (cuando editamos otro desde la tabla)
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setSlug(post.slug);
            setExcerpt(post.excerpt);
            setContent(post.content);
            setCategory(post.category);
            setTags(post.tags);
            setKeywords(post.keywords);
            setStatus(post.status || "published");
            setMedia(post.media || [{ type: 'image', url: '' }]);
        }
    }, [post]);

    const addMedia = () => setMedia([...media, { type: 'image', url: '' }]);
    
    const removeMedia = (index: number) => {
        const newMedia = media.filter((_, i) => i !== index);
        setMedia(newMedia.length ? newMedia : [{ type: 'image', url: '' }]);
    };

    const updateMedia = (index: number, field: keyof MediaSlide, value: string) => {
        const newMedia = [...media];
        newMedia[index] = { ...newMedia[index], [field]: value };
        setMedia(newMedia);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage("");

        const postData = {
            title,
            slug,
            excerpt,
            content,
            category,
            tags,
            keywords,
            media,
            status,
            author: "Atelier Colibrí Rojo",
            date: post?.date || new Date().toISOString().split('T')[0]
        };

        try {
            const url = post ? `/api/posts/id/${post.id}` : "/api/posts";
            const method = post ? "PATCH" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                setMessage(post ? "¡Artículo actualizado con éxito!" : "¡Artículo publicado con éxito!");
                if (!post) {
                    // Limpiar si es nuevo
                    setTitle(""); setSlug(""); setExcerpt(""); setContent(""); setTags(""); setKeywords(""); setMedia([{ type: 'image', url: '' }]);
                }
            } else {
                setMessage("Error al guardar el artículo.");
            }
        } catch (error) {
            setMessage("Error de conexión con el servidor.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-12 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] ml-2">Título del Artículo</label>
                        <input 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-8 py-6 bg-white border border-gray-100 rounded-[32px] text-2xl font-normal text-[#0F172A] font-[family-name:var(--font-cinzel)] focus:outline-none focus:border-[#EE1D23]/20 transition-all shadow-sm"
                            placeholder="Ej: El Arte de la Restauración de Motores"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] ml-2">Extracto / Resumen Corto</label>
                        <textarea 
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="w-full px-8 py-6 bg-white border border-gray-100 rounded-[32px] text-sm text-[#64748B] font-[family-name:var(--font-outfit)] focus:outline-none focus:border-[#EE1D23]/20 transition-all shadow-sm min-h-[100px]"
                            placeholder="Una breve descripción que aparecerá en el listado..."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between ml-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Contenido (Markdown)</label>
                            <div className="group relative cursor-help">
                                <HelpCircle size={14} className="text-gray-300 hover:text-[#EE1D23]" />
                                <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-[#0F172A] text-white text-[10px] leading-relaxed rounded-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                                    <p className="font-bold mb-2 uppercase tracking-widest">Consejos Rápidos:</p>
                                    <p>• Pega texto normal y se verá perfecto.</p>
                                    <p>• # Para Títulos</p>
                                    <p>• **Negrita**</p>
                                    <p>• *Itálica*</p>
                                </div>
                            </div>
                        </div>
                        <textarea 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-8 py-8 bg-white border border-gray-100 rounded-[32px] text-sm text-[#0F172A] font-mono focus:outline-none focus:border-[#EE1D23]/20 transition-all shadow-sm min-h-[500px] leading-relaxed"
                            placeholder="Escribe el cuerpo del artículo aquí..."
                            required
                        />
                    </div>
                </div>

                {/* Right Column: Meta & Media */}
                <div className="space-y-8">
                    {/* SEO & Meta */}
                    <div className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A] border-b border-gray-50 pb-4">Configuración SEO</h3>
                        
                        <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">URL Amigable (Slug)</label>
                            <input 
                                type="text" 
                                value={slug}
                                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/ /g, '-'))}
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl text-[11px] text-[#0F172A] border border-transparent focus:border-[#EE1D23]/20 focus:outline-none"
                                placeholder="ej-titulo-del-post"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Categoría</label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl text-[11px] text-[#0F172A] border border-transparent focus:outline-none"
                            >
                                <option value="Técnica">Técnica</option>
                                <option value="Estilo">Estilo</option>
                                <option value="Maestría">Maestría</option>
                                <option value="Eventos">Eventos</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Palabras Clave (Separadas por coma)</label>
                            <input 
                                type="text" 
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl text-[11px] text-[#0F172A] border border-transparent focus:outline-none"
                                placeholder="motores, restauración, diseño"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Estado de Publicación</label>
                            <select 
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-[#0F172A] border border-transparent focus:outline-none"
                            >
                                <option value="published" className="text-green-600">Público</option>
                                <option value="hidden" className="text-gray-400">Oculto / Borrador</option>
                            </select>
                        </div>
                    </div>

                    {/* Media Gallery */}
                    <div className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-50 pb-4">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A]">Galería de Medios</h3>
                            <button 
                                type="button" 
                                onClick={addMedia}
                                className="p-2 bg-red-50 text-[#EE1D23] rounded-xl hover:bg-[#EE1D23] hover:text-white transition-all"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <div className="space-y-6 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                            {media.map((item, idx) => {
                                const mode = inputModes[idx] || (item.url && !item.url.startsWith("data:") ? 'url' : 'file');
                                
                                return (
                                    <div key={idx} className="p-5 bg-gray-50 rounded-3xl space-y-4 relative group border border-gray-100/50 shadow-sm transition-all duration-300 hover:shadow-md">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <select 
                                                    value={item.type}
                                                    onChange={(e) => {
                                                        updateMedia(idx, "type", e.target.value as any);
                                                        updateMedia(idx, "url", "");
                                                    }}
                                                    className="bg-white px-3 py-2 rounded-xl text-[10px] font-bold uppercase border-none focus:ring-1 focus:ring-[#EE1D23]/20 shadow-sm"
                                                >
                                                    <option value="image">Imagen</option>
                                                    <option value="video">Video</option>
                                                </select>
                                                
                                                <button
                                                    type="button"
                                                    onClick={() => setInputModes(prev => ({ ...prev, [idx]: mode === 'file' ? 'url' : 'file' }))}
                                                    className="text-[9px] font-bold uppercase tracking-widest text-[#EE1D23] hover:underline flex items-center gap-1 px-2 py-1 bg-red-50/50 rounded-lg font-[family-name:var(--font-outfit)]"
                                                >
                                                    {mode === 'file' ? <LinkIcon size={10} /> : <Upload size={10} />}
                                                    {mode === 'file' ? "Usar URL" : "Subir Archivo"}
                                                </button>
                                            </div>
                                            <button 
                                                type="button" 
                                                onClick={() => {
                                                    removeMedia(idx);
                                                    setErrors(prev => {
                                                        const n = { ...prev };
                                                        delete n[idx];
                                                        return n;
                                                    });
                                                }}
                                                className="text-gray-300 hover:text-red-500 transition-colors p-1"
                                                title="Eliminar Slot"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>

                                        {/* Drop zone / selector or manual input */}
                                        {mode === 'file' ? (
                                            <div className="space-y-2">
                                                {item.url ? (
                                                    <div className="relative rounded-2xl overflow-hidden bg-black/5 aspect-video border border-gray-100 flex flex-col items-center justify-center group/preview">
                                                        {item.type === 'image' ? (
                                                            <img 
                                                                src={item.url} 
                                                                alt="Vista previa" 
                                                                className="w-full h-full object-cover animate-fade-in"
                                                            />
                                                        ) : (
                                                            <video 
                                                                src={item.url} 
                                                                controls 
                                                                className="w-full h-full object-cover"
                                                            />
                                                        )}
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                                                            <button
                                                                type="button"
                                                                onClick={() => updateMedia(idx, "url", "")}
                                                                className="px-4 py-2 bg-white text-[#EE1D23] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#EE1D23] hover:text-white transition-all shadow-lg"
                                                            >
                                                                Cambiar Archivo
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        onDragOver={(e) => handleDragOver(e, idx)}
                                                        onDragLeave={() => handleDragLeave(idx)}
                                                        onDrop={(e) => handleDrop(e, idx)}
                                                        onClick={() => {
                                                            const fileInput = document.getElementById(`file-input-${idx}`);
                                                            if (fileInput) fileInput.click();
                                                        }}
                                                        className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
                                                            isDragging[idx] 
                                                                ? "border-[#EE1D23] bg-red-50/30 scale-[0.98]" 
                                                                : "border-gray-200 hover:border-[#EE1D23]/30 hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        <input 
                                                            type="file" 
                                                            id={`file-input-${idx}`}
                                                            className="hidden" 
                                                            accept={item.type === 'image' ? "image/*" : "video/*"}
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0] || null;
                                                                handleFileChange(idx, file);
                                                            }}
                                                        />
                                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#EE1D23]">
                                                            {item.type === 'image' ? <ImageIcon size={20} /> : <Video size={20} />}
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-[family-name:var(--font-outfit)]">
                                                                Arrastra aquí tu {item.type === 'image' ? 'imagen' : 'video'}
                                                            </p>
                                                            <p className="text-[9px] text-[#64748B] mt-1 font-[family-name:var(--font-outfit)]">
                                                                o haz clic para explorar. Límite máximo: <span className="font-bold text-[#EE1D23]">4 MB</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <input 
                                                    type="text" 
                                                    value={item.url}
                                                    onChange={(e) => updateMedia(idx, "url", e.target.value)}
                                                    className="w-full px-4 py-3 bg-white rounded-xl text-[10px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#EE1D23]/20 focus:border-[#EE1D23]/20"
                                                    placeholder={item.type === 'image' ? "URL de la imagen (ej: https://...)" : "Link de YouTube/Vimeo o archivo remoto..."}
                                                />
                                                {item.url && (
                                                    <div className="relative rounded-xl overflow-hidden bg-black/5 aspect-video border border-gray-100 flex flex-col items-center justify-center">
                                                        {item.type === 'image' ? (
                                                            <img 
                                                                src={item.url} 
                                                                alt="Vista previa" 
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    (e.target as HTMLElement).style.display = 'none';
                                                                }}
                                                            />
                                                        ) : (
                                                            <div className="text-[9px] text-gray-400 font-bold uppercase p-4 text-center">
                                                                Vista previa no disponible para URLs de video externas
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {errors[idx] && (
                                            <p className="text-[#EE1D23] text-[9px] font-bold uppercase tracking-wider bg-red-50 px-3 py-2 rounded-lg">
                                                {errors[idx]}
                                            </p>
                                        )}
                                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-200 rounded-full group-hover:bg-[#EE1D23] transition-colors" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4">
                        <button 
                            type="submit"
                            disabled={isSaving}
                            className="w-full py-6 bg-[#EE1D23] text-white rounded-[32px] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#0F172A] transition-all duration-700 shadow-xl shadow-red-500/20 disabled:opacity-50"
                        >
                            {isSaving ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Guardando...
                                </span>
                            ) : (
                                <>
                                    <Save size={18} />
                                    {post ? "Guardar Cambios" : "Publicar Maestría"}
                                </>
                            )}
                        </button>
                        {message && (
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-center mt-6 text-[10px] font-bold uppercase tracking-widest ${message.includes("éxito") ? "text-green-600" : "text-[#EE1D23]"}`}
                            >
                                {message}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}
