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
      sort = "most_popular",
      category,
      overallClass,
      brand,
      btu,
      roomVolume,
      color,
      coolingEnergyClass,
      heatingEnergyClass,
    } = req.query;

    const conditions = [];
    const values = [];

    if (category) {
      values.push(category);
      conditions.push(`c.category_name = $${values.length}`);
    }

    if (overallClass) {
      const overallClassArray = overallClass.split(",");
      values.push(overallClassArray);
      conditions.push(`overall_class = ANY($${values.length})`);
      console.log(overallClassArray);
    }

    if (brand) {
      const brandArray = brand.split(",");
      values.push(brandArray);
      conditions.push(`make = ANY($${values.length})`);
    }

    if (btu) {
      const btuArray = btu.split(",").map(Number);
      values.push(btuArray);
      conditions.push(`btu = ANY($${values.length})`);
    }

    if (roomVolume) {
      const [min, max] = roomVolume.split("-").map(Number);

      values.push(min);
      values.push(max);

      conditions.push(`
    p.room_area_min <= $${values.length} AND
    p.room_area_max >= $${values.length - 1}
  `);
    }

    if (color) {
      const colorArray = color.split(",");
      values.push(colorArray);
      conditions.push(`color = ANY($${values.length})`);
    }

    if (coolingEnergyClass) {
      const coolingEnergyClassArray = coolingEnergyClass.split(",");
      values.push(coolingEnergyClassArray);
      conditions.push(`cooling_energy_class = ANY($${values.length})`);
    }

    if (heatingEnergyClass) {
      const heatingEnergyClassArray = heatingEnergyClass.split(",");
      values.push(heatingEnergyClassArray);
      conditions.push(`heating_energy_class = ANY($${values.length})`);
    }

    const whereQuery =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const sortQuery = getSortQuery(sort);

    const products = await db.any(
      `
        SELECT p.*, c.category_name
        FROM products p
        JOIN categories c ON p.category_id = c.category_id
        ${whereQuery}
        ${sortQuery}

      `,
      values
    );

    console.log(`     SELECT p.*, c.category_name
        FROM products p
        JOIN categories c ON p.category_id = c.category_id
        ${whereQuery}
        ${sortQuery}`);

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
