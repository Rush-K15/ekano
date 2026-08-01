import dotenv from "dotenv";

dotenv.config();

console.log("Loaded env:", !!process.env.OPENROUTER_API_KEY);