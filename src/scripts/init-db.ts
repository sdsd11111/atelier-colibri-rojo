import pool from "../lib/db";

async function initDB() {
    console.log("Iniciando verificación de conexión...");
    try {
        const connection = await pool.getConnection();
        console.log("✅ Conexión exitosa a la base de datos.");

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS posts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                excerpt TEXT,
                content LONGTEXT,
                author VARCHAR(100) DEFAULT 'Atelier Colibrí Rojo',
                date DATETIME DEFAULT CURRENT_USER,
                category VARCHAR(100) DEFAULT 'General',
                tags VARCHAR(255),
                keywords VARCHAR(255),
                seo_title VARCHAR(255),
                seo_description TEXT,
                media JSON,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `;

        await connection.query(createTableQuery);
        console.log("✅ Tabla 'posts' verificada/creada correctamente.");

        connection.release();
        process.exit(0);
    } catch (error: any) {
        console.error("❌ Error conectando a la base de datos:");
        console.error(error.message);
        process.exit(1);
    }
}

initDB();
