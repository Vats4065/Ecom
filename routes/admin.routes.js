const { Router } = require("express")
const { addProduct } = require("../controller/admin.controller")
const { isAdmin } = require("../middleware/auth.middleware")
const adminRoute = Router()

adminRoute.post("/addProduct", isAdmin, addProduct)

module.exports = adminRoute