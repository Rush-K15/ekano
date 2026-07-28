import express from "express";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

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

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);

export default app;