import express from "express";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import chatRoutes from "./routes/chat.routes.js";

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

export default app;