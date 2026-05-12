import { NextResponse } from "next/server";
import pool from "@/lib/db";

// PATCH: Actualizar visibilidad o contenido
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body = await request.json();
        const { status, title, excerpt, content, tags, keywords, media } = body;

        let query = "UPDATE posts SET updated_at = CURRENT_TIMESTAMP";
        const values = [];

        if (status) {
            query += ", status = ?";
            values.push(status);
        }
        if (title) {
            query += ", title = ?";
            values.push(title);
        }
        if (excerpt) {
            query += ", excerpt = ?";
            values.push(excerpt);
        }
        if (content) {
            query += ", content = ?";
            values.push(content);
        }
        if (tags) {
            query += ", tags = ?";
            values.push(tags);
        }
        if (keywords) {
            query += ", keywords = ?";
            values.push(keywords);
        }
        if (media) {
            query += ", media = ?";
            values.push(JSON.stringify(media));
        }

        query += " WHERE id = ?";
        values.push(id);

        await pool.query(query, values);

        return NextResponse.json({ status: "success", message: "Artículo actualizado." });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE: Eliminar artículo
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        await pool.query("DELETE FROM posts WHERE id = ?", [id]);
        return NextResponse.json({ status: "success", message: "Artículo eliminado permanentemente." });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
