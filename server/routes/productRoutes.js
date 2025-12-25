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
      make,
      btu,
      roomAreaMin,
      roomAreaMax,
      color,
      coolingEnergyClass,
      heatingEnergyClass,
    } = req.query;

    const conditions = [];
    const values = [];

    if (category) {
      values.push(category);
      conditions.push(`category = $${values.length}`);
    }

    if (overallClass) {
      values.push(overallClass);
      conditions.push(`overall_class = $${values.length}`);
    }

    if (make) {
      values.push(make.split(","));
      conditions.push(`make = ANY($${values.length})`);
    }

    if (btu) {
      values.push(btu.split(",").map(Number));
      conditions.push(`btu = ANY($${values.length})`);
    }

    if (roomAreaMin) {
      values.push(Number(roomAreaMin));
      conditions.push(`room_area >= $${values.length}`);
    }

    if (roomAreaMax) {
      values.push(Number(roomAreaMax));
      conditions.push(`room_area <= $${values.length}`);
    }

    if (color) {
      values.push(color.split(","));
      conditions.push(`color = ANY($${values.length})`);
    }

    if (coolingEnergyClass) {
      values.push(coolingEnergyClass);
      conditions.push(`cooling_energy_class = $${values.length}`);
    }

    if (heatingEnergyClass) {
      values.push(heatingEnergyClass);
      conditions.push(`heating_energy_class = $${values.length}`);
    }

    const whereQuery =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const sortQuery = getSortQuery(sort);

    const products = await db.any(
      `
      SELECT *
      FROM products
      ${whereQuery}
      ${sortQuery}
      `,
      values
    );

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
