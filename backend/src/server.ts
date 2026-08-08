import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import { initializeDatabase } from "./config/database.init.js";

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await initializeDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize database:", error);

    process.exit(1);
  }
}

startServer();
