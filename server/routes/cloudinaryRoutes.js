import { Router } from "express";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/cloudinary-signature", (req, res) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "Products";

  const signature = cloudinary.v2.utils.api_sign_request(
    { timestamp, folder },
    process.env.CLOUDINARY_API_SECRET
  );

  res.json({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    timestamp,
    signature,
    folder,
  });
});

export default router;
