import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
    try {
        const connection = await pool.getConnection();
        
        // Añadir columna status si no existe
        const addStatusColumn = `
            ALTER TABLE posts 
            ADD COLUMN IF NOT EXISTS status ENUM('published', 'hidden') DEFAULT 'published' AFTER media;
        `;

        await connection.query(addStatusColumn);
        connection.release();

        return NextResponse.json({ 
            status: "success", 
            message: "Base de datos actualizada con control de visibilidad." 
        });
    } catch (error: any) {
        return NextResponse.json({ 
            status: "error", 
            message: error.message 
        }, { status: 500 });
    }
}
