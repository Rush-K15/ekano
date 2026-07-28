import type { Request, Response } from "express";

import type { LoginRequest } from "../types/auth.types.js";

import * as authService from "../services/auth.service.js";

export async function login(
    request: Request<{}, {}, LoginRequest>,
    response: Response
) {
    const { email, password } = request.body;

    const user = await authService.login(
        email,
        password
    );

    response.status(200).json(user);
}