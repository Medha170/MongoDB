const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");


app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


app.listen(8087, () => {
  console.log("Server sarted at port 8087");
});
