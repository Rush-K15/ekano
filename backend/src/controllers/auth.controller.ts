import type { Request, Response } from "express";

import type { LoginRequest } from "../types/auth.types.js";

import * as authService from "../services/auth.service.js";
import { generateAccessToken } from "../utils/jwt.js";
import { authCookieOptions } from "../config/cookie.js";

export async function login(
  request: Request<{}, {}, LoginRequest>,
  response: Response,
) {
  const { email, password } = request.body;

  const user = await authService.login(email, password);

  if (!user) {
    return response.status(401).json({
      message: "Invalid email or password",
    });
  }

  const accessToken = generateAccessToken(user.id);

  response.cookie("accessToken", accessToken, {
    ...authCookieOptions,
    maxAge: 24 * 60 * 60 * 1000,
  });

  return response.status(200).json(user);
}

export async function logout(_request: Request, response: Response) {
  response.clearCookie("accessToken", authCookieOptions);

  return response.status(200).json({
    message: "Logged out successfully.",
  });
}
