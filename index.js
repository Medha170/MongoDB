const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://medha17074:SMxgtmIdkvl2SNIM@cluster0.zfvp6pp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

// ProductSchema

const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

const productModel = mongoose.model('products', productSchema); // products is the collection name

// Create a new product

app.post('/api/products', async (req, res) => {
    const body = req.body;

    const product = productModel.create({
        product_name : body.product_name,
        product_price : body.product_price,
        isInStock : body.isInStock,
        category : body.category
    });

    console.log(product);
    
    return res.status(201).json({message : "Product Created"});
});



app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});
