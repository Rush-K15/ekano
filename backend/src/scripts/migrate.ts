import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { pool } from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrationsDirectory = path.resolve(__dirname, "../../migrations");

async function runMigrations() {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS schema_migrations (
            version TEXT PRIMARY KEY,
            applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

  const files = (await readdir(migrationsDirectory))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const alreadyApplied = await pool.query(
      `
            SELECT version
            FROM schema_migrations
            WHERE version = $1
            `,
      [file],
    );

    if (alreadyApplied.rows.length > 0) {
      console.log(`Skipping ${file}`);
      continue;
    }

    console.log(`Running ${file}`);

    const migrationPath = path.join(migrationsDirectory, file);

    const sql = await readFile(migrationPath, "utf-8");

    await pool.query("BEGIN");

    try {
      await pool.query(sql);

      await pool.query(
        `
                INSERT INTO schema_migrations (version)
                VALUES ($1)
                `,
        [file],
      );

      await pool.query("COMMIT");

      console.log(`Applied ${file}`);
    } catch (error) {
      await pool.query("ROLLBACK");
      throw error;
    }
  }

  console.log("Migrations complete.");
}

runMigrations()
  .catch((error) => {
    console.error("Migration failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
  });
