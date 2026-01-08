import { Router } from "express";
import db from "../config/dbConfig.js";

const router = Router();

router.post("/add-product", async (req, res) => {
  const {} = req.body;

  try {
    const insertProduct = `
  INSERT INTO products (
    category_id,
    product_code,
    product_name,
    price,
    overall_class,
    make,
    btu,
    room_area_min,
    room_area_max,
    color,
    cooling_energy_class,
    heating_energy_class,
    spec,
    discount,
    image_url,
    manufactured_date,
    popularity,
    slug
  )
  VALUES (
    $(category_id),
    $(product_code),
    $(product_name),
    $(price),
    $(overall_class),
    $(make),
    $(btu),
    $(room_area_min),
    $(room_area_max),
    $(color),
    $(cooling_energy_class),
    $(heating_energy_class),
    $(spec),
    $(discount),
    $(image_url),
    $(manufactured_date),
    $(popularity),
    $(slug)
  )
`;

    const product = await db.none(insertProduct, []);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
