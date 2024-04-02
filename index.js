const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoute = require("./routes/product.route.js");
const Product = require("./models/product.model.js");
const app = express();

dotenv.config();
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@backenddb.hwokulu.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to db!");
    app.listen(3000, () => {
      console.log("Server is running on 3000");
    });
  })
  .catch(() => {
    console.log("failed connection to db");
  });
