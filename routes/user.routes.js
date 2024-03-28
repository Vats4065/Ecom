const { Router } = require("express");
const { signup, login, getsignup, getlogin, allProducts } = require("../controller/user.controller");

const userRoute = Router()

userRoute.get("/getsignup", getsignup)

userRoute.get("/getlogin", getlogin)

userRoute.post("/signup", signup);

userRoute.post("/login", login)

userRoute.get("/allProducts", allProducts)


module.exports = { userRoute }