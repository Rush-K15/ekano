import dotenv from "dotenv";

dotenv.config();

export const env = {
  openRouterApiKey: process.env.OPENROUTER_API_KEY!,
  databaseUrl: process.env.DATABASE_URL!,
  jwtSecret: process.env.JWT_SECRET!,
  frontendUrl: process.env.FRONTEND_URL ?? "http://localhost:3000",
  nodeEnv: process.env.NODE_ENV ?? "development",
};
