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

router.get("/products", async (req, res) => {
  try {
    const products = await db.any("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
