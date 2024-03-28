const express = require('express');
const { home } = require('../controller/product.controller');
const productRoute = express()

productRoute.get("/home", home)

module.exports = { productRoute }