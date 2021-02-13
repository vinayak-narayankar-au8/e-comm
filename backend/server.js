import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

app.get("/health", (req, res) => {
  res.send("Health Okay");
});

app.get("/e-com/products", (req, res) => {
  res.json(products);
});

app.get("/e-com/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });
  res.json(product);
});

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on url http://localhost:${PORT} `
      .yellow.underline.bold
  )
);
