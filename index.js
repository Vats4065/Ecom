const express = require("express")
const { data } = require("./config/db")
const { userRoute } = require("./routes/user.routes")
const { productRoute } = require("./routes/product.routes")
const adminRoute = require("./routes/admin.routes")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/admin", adminRoute)

app.listen(8080, () => {
    data()
    console.log("listning on 8080")
})