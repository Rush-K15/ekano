import { pool } from "./database.js";

export async function initializeDatabase() {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS documents (
            id UUID PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  console.log("Database initialized successfully");
}
