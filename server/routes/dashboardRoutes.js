import { Router } from "express";
import db from "../config/dbConfig.js";

const router = Router();

router.post("/add-product", async (req, res) => {
  const {
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
    manufactured_date,
    popularity,
    slug,
    description,
  } = req.body;

  try {
    const product = await db.one(
      `
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
    manufactured_date,
    popularity,
    slug,
    description
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
    $(manufactured_date),
    $(popularity),
    $(slug),
    $(description)
  )
  RETURNING product_id
  `,
      {
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
        spec: JSON.stringify(spec), // stringify JSON
        discount: discount ?? 0,
        manufactured_date: manufactured_date ?? null,
        popularity: popularity ?? 0,
        slug: slug ?? null,
        description,
      },
    );

    res.json({ id: product.product_id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// POST /api/dashboard/add-product-images
router.post("/add-product-images", async (req, res) => {
  try {
    const { productId, images } = req.body;

    // Build the VALUES part dynamically
    const values = images
      .map(
        (img, index) =>
          `($<productId>, $<publicId${index}>, $<position${index}>, $<isMain${index}>)`,
      )
      .join(", ");

    // Create the parameters object
    const params = { productId };
    images.forEach((img, index) => {
      params[`publicId${index}`] = img.publicId;
      params[`position${index}`] = img.position;
      params[`isMain${index}`] = img.isMain;
    });

    const query = `
      INSERT INTO product_images (product_id, public_id, position, is_main)
      VALUES ${values}
    `;

    await db.none(query, params);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert product images" });
  }
});

export default router;
