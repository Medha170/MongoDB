const productModel = require('../Models/product');

exports.CreateProduct = async (req, res) => {
    const body = req.body;

    const product = productModel.create({
        product_name : body.product_name,
        product_price : body.product_price,
        isInStock : body.isInStock,
        category : body.category
    });

    console.log(product);
    
    return res.status(201).json({message : "Product Created"});
}

exports.getAllProducts = async (req, res) => {
    const allProducts = await productModel.find({isInStock : true});
    return res.status(200).json(allProducts);
}

exports.getById = async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
}

exports.updateProduct = async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    return res.json(deletedProduct);
}