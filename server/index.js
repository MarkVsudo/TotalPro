import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailerRoutes from './routes/mailerRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
  
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.use('/api/mailer', mailerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
