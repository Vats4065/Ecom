const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../model/user.schema");
const { productModel } = require("../model/product.schema");

const getsignup = (req, res) => {
    res.render('signup')
}
const signup = async (req, res) => {
    try {
        const { userName,
            email,
            password,
            role
        } = req.body;

        let user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "user already exist" });
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            else {
                let user = await userModel.create({
                    userName, email, password: hash, role
                });
                let token = jwt.sign({ id: user.id }, "private-key");
                return res.status(200).json({ token, user });
            }
        })
    } catch (err) {
        return res.status(200).json({ message: err.message });
    }
}

const getlogin = (req, res) => {
    res.render('login')
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await userModel.findOne({ email });
        // console.log(user)
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                if (result) {

                    let token = jwt.sign({ id: user.id }, "private-key");
                    return res.status(200).json({ token, user });
                }
                else {
                    return res.status(400).json({ message: "invalid password" });
                }
            })
        } else {
            return res.status(400).json({ message: "user not found" });
        }
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const allProducts = async (req, res) => {
    try {
        let allProduct = await productModel.find().populate("seller")

        return res.status(200).json({ allProduct })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}


module.exports = { getsignup, getlogin, signup, login, allProducts }