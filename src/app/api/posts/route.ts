import { NextResponse } from "next/server";
import pool from "@/lib/db";

// GET: Obtener todos los artículos para el listado del blog
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const includeAll = searchParams.get('all') === 'true';

        let query = "SELECT * FROM posts WHERE status = 'published' ORDER BY date DESC";
        if (includeAll) {
            query = "SELECT * FROM posts ORDER BY date DESC";
        }

        const [rows]: any = await pool.query(query);
        return NextResponse.json(rows);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST: Crear un nuevo artículo desde el Admin
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { 
            title, slug, excerpt, content, author, date, 
            category, tags, keywords, seo_title, seo_description, media 
        } = body;

        const [result] = await pool.query(
            `INSERT INTO posts (
                title, slug, excerpt, content, author, date, 
                category, tags, keywords, seo_title, seo_description, media
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title, slug, excerpt, content, author || 'Atelier Colibrí Rojo', 
                date || new Date(), category || 'General', tags, keywords, 
                seo_title || title, seo_description || excerpt, 
                JSON.stringify(media)
            ]
        );

        return NextResponse.json({ 
            status: "success", 
            id: (result as any).insertId 
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
