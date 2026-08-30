import type { CookieOptions } from "express";

import { env } from "./env.js";

const isProduction = env.nodeEnv === "production";

export const authCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
};
