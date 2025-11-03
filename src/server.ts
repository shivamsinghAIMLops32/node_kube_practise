import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/v1/health", (req, res) => {
  res.send("Hey from server and I am healthy!");
});

app.get("/api/v1/welcome", (req, res) => {
  res.send("Welcome to our API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
