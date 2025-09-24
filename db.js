const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Your connection to db is successfull")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB