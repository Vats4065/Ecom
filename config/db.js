const mongoose = require('mongoose');

const data = async () => {
    try {
        await mongoose.connect("mongodb+srv://ecom:ecom@atlascluster.drlghii.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")
        console.log("connected")
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { data }