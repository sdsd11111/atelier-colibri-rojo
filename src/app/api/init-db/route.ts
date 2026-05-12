import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
    try {
        const connection = await pool.getConnection();
        
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS posts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                excerpt TEXT,
                content LONGTEXT,
                author VARCHAR(100) DEFAULT 'Atelier Colibrí Rojo',
                date DATETIME DEFAULT CURRENT_TIMESTAMP,
                category VARCHAR(100) DEFAULT 'General',
                tags VARCHAR(255),
                keywords VARCHAR(255),
                seo_title VARCHAR(255),
                seo_description TEXT,
                media JSON,
                status VARCHAR(50) DEFAULT 'published',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `;

        await connection.query(createTableQuery);

        // Asegurarse de que la columna status exista si la tabla ya fue creada previamente
        try {
            await connection.query("ALTER TABLE posts ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'published' AFTER media;");
        } catch (e) {
            // Algunos servidores MySQL no soportan IF NOT EXISTS en ALTER, ignoramos si ya existe
        }

        connection.release();

        return NextResponse.json({ 
            status: "success", 
            message: "Conexión exitosa y tabla 'posts' verificada." 
        });
    } catch (error: any) {
        return NextResponse.json({ 
            status: "error", 
            message: error.message 
        }, { status: 500 });
    }
}
