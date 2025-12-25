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
    const sortBy = req.query.sort;
    let sortQuery = "";
    switch (sortBy) {
      case "most_popular":
        sortQuery = "ORDER BY popularity DESC";
        break;
      case "newest":
        sortQuery = "ORDER BY manufactured_date DESC";
        break;
      case "price_asc":
        sortQuery = "ORDER BY price ASC";
        break;
      case "price_desc":
        sortQuery = "ORDER BY price DESC";
        break;
      default:
        sortQuery = "ORDER BY popularity DESC";
        break;
    }
    const products = await db.any(`SELECT * FROM products ${sortQuery}`);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/product", async (req, res) => {
  try {
    // const products = await db.any("SELECT * FROM products");
    // res.json(products);
    console.log(res.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
