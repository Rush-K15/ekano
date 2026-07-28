import jwt from "jsonwebtoken";

const JWT_SECRET =
    process.env.JWT_SECRET || "super-secret-key";

export function generateAccessToken(userId: string) {
    return jwt.sign(
        {
            userId,
        },
        JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
}