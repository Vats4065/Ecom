const { productModel } = require("../model/product.schema")

const addProduct = async (req, res) => {
    try {

        const { title, description, price, category } = req.body;

        let addProducts = await productModel.create({
            title,
            description,
            price,
            category,
            seller: req.user.id,
        })

        return res.status(200).json({ addProducts })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


module.exports = { addProduct }