import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mailerRoutes from "./routes/mailerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import cloudinaryRoutes from "./routes/cloudinaryRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import db from "./config/dbConfig.js";
dotenv.config();

const app = express();
app.set("trust proxy", 1);

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://totalpro.bg",
  "https://www.totalpro.bg",
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.use("/api/mailer", mailerRoutes);

app.use("/api", productRoutes);

app.use("/api", orderRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/cloudinary", cloudinaryRoutes);

app.use("/api/checkout", checkoutRoutes);

app.get("/health", (req, res) => res.status(200).send("OK"));

app.get("/api/db-test", async (req, res) => {
  try {
    const row = await db.one("select now() as now");
    res.json(row);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
