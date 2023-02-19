require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const product_route = require("./routes/products");

app.use("/api/products", product_route);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} listening on`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
