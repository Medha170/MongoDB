const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
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

// get route

app.get('/api/products', async (req, res) => {
    const allProducts = await productModel.find({isInStock : true});
    return res.status(200).json(allProducts);
});

// get by id

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
});

// update by id

app.put('/api/products/:id', async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
});

// delete by id

app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    return res.json(deletedProduct);
});



app.listen(8087, () => {
  console.log("Server sarted at port 8087");
});
