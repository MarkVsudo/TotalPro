import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/dbConfig.js";
import { authenticate, requireAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/dashboard", authenticate, requireAdmin, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

export default router;
