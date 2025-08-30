import { Router } from "express";
import db from "../config/dbConfig.js";

const router = Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await db.any("SELECT * FROM categories");
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/brands", async (req, res) => {
  try {
    const brands = await db.any("SELECT * FROM brands");
    res.json(brands);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
