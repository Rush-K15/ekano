import { pool } from "./database.js";

export async function initializeDatabase() {
  await pool.query("SELECT 1");

  console.log("Database connection successful");
}
