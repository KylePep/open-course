import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || "http:localhost:8080"
}));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/test-db", async (req, res) => {
  const courses = await db.course.findMany();
  res.json(courses)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});