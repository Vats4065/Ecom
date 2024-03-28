const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    price: Number,
    title: String,
    description: String,
    category: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId, ref: "user",
    }

})

const productModel = mongoose.model("product", productSchema)

module.exports = { productModel }