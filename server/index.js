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

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
