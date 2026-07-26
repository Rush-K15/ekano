import type { Request, Response } from "express";

export function getHealth(
    _request: Request,
    response: Response
) {
    

    response.status(200).json({
        status: "OK",
        message: "Ekano API is running",
    });

   
}