import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    try {
        const [rows]: any = await pool.query(
            "SELECT * FROM posts WHERE slug = ?",
            [slug]
        );

        if (rows.length === 0) {
            return NextResponse.json({ error: "Artículo no encontrado" }, { status: 404 });
        }

        // Parsear el campo media de JSON a objeto JS
        const post = rows[0];
        if (typeof post.media === 'string') {
            try {
                post.media = JSON.parse(post.media);
            } catch (e) {
                post.media = [];
            }
        }

        return NextResponse.json(post);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
