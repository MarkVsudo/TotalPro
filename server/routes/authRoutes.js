import { Router } from "express";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    console.log("Data:", req.body);

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/dashboard", authenticate, requireAdmin, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

export default router;
