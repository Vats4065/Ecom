const jwt = require("jsonwebtoken");
const userModel = require("../model/user.schema");

const isAdmin = async (req, res, next) => {
    let token = req.headers.authorization.split(" ")[1];
    console.log("token===>>", token);

    if (token) {
        let decode = jwt.verify(token, "private-key")

        let findUser = await userModel.findById(decode.id);

        if (findUser.role == "admin") {
            req.user = findUser
            next();
        }
        else {
            return res.status(401).json({ message: "ONLY ADMIN HAVE RIGHTS TO ACCESS THESE PAGE" })
        }
    }
    else {
        return res.status(401).json({ message: "token not found" })
    }
}

module.exports = { isAdmin }