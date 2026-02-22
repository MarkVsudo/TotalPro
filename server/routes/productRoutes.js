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

function getSortQuery(sort) {
  switch (sort) {
    case "price_asc":
      return "ORDER BY price ASC";
    case "price_desc":
      return "ORDER BY price DESC";
    case "newest":
      return "ORDER BY manufactured_date DESC";
    case "most_popular":
    default:
      return "ORDER BY popularity DESC";
  }
}

router.get("/products", async (req, res) => {
  try {
    const {
      page,
      limit,
      sort = "most_popular",
      category,
      overallClass,
      brand,
      btu,
      roomVolume,
      color,
      coolingEnergyClass,
      heatingEnergyClass,
      priceMin,
      priceMax,
      search,
    } = req.query;

    const conditions = [];
    const values = [];

    if (category) {
      values.push(category);
      conditions.push(`c.category_value = $${values.length}`);
    }

    if (overallClass) {
      values.push(overallClass.split(","));
      conditions.push(`overall_class = ANY($${values.length})`);
    }

    if (brand) {
      values.push(brand.split(","));
      conditions.push(`make = ANY($${values.length})`);
    }

    if (btu) {
      values.push(btu.split(",").map(Number));
      conditions.push(`btu = ANY($${values.length})`);
    }

    if (roomVolume) {
      const [min, max] = roomVolume.split("-").map(Number);
      values.push(min, max);
      conditions.push(`
        p.room_area_min <= $${values.length} AND
        p.room_area_max >= $${values.length - 1}
      `);
    }

    if (color) {
      values.push(color.split(","));
      conditions.push(`color = ANY($${values.length})`);
    }

    if (coolingEnergyClass) {
      values.push(coolingEnergyClass.split(","));
      conditions.push(`cooling_energy_class = ANY($${values.length})`);
    }

    if (heatingEnergyClass) {
      values.push(heatingEnergyClass.split(","));
      conditions.push(`heating_energy_class = ANY($${values.length})`);
    }

    if (priceMin != null && priceMax != null) {
      const minIndex = values.length + 1;
      values.push(Number(priceMin));

      const maxIndex = values.length + 1;
      values.push(Number(priceMax));

      conditions.push(`p.price >= $${minIndex} AND p.price <= $${maxIndex}`);
    }

    if (search) {
      const terms = search
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const likeConditions = terms.map((term) => {
        values.push(`%${term}%`);
        return `product_name ILIKE $${values.length}`;
      });

      conditions.push(`(${likeConditions.join(" OR ")})`);
    }

    const whereQuery =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const sortQuery = getSortQuery(sort);

    const pageNum = Math.max(Number(page) || 1, 1);
    const limitNum = Math.min(Number(limit) || 12, 50);
    const offset = (pageNum - 1) * limitNum;

    const products = await db.any(
      `
        SELECT p.*, c.category_value
        FROM products p
        JOIN categories c ON p.category_id = c.category_id
        ${whereQuery}
        ${sortQuery}
        LIMIT $${values.length + 1}
        OFFSET $${values.length + 2}
      `,
      [...values, limitNum, offset],
    );

    const totalResult = await db.one(
      `
        SELECT COUNT(*) AS total
        FROM products p
        JOIN categories c ON p.category_id = c.category_id
        ${whereQuery}
      `,
      values,
    );

    const productImgs = await db.any("SELECT * FROM product_images");

    res.json({
      products,
      total: Number(totalResult.total),
      productImgs,
      page: pageNum,
      limit: limitNum,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || id.trim() === "") {
    return res.status(404).json({ message: "Invalid product ID" });
  }

  try {
    const product = await db.oneOrNone(
      `SELECT p.*, c.category_name
       FROM products p
       JOIN categories c ON p.category_id = c.category_id
       WHERE product_id = $1`,
      [id],
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productImgs = await db.any(
      "SELECT * FROM product_images WHERE product_id = $1",
      [id],
    );

    res.json({ product, productImgs });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
