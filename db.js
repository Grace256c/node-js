const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nakiyembagrace256_db_user:kEGiyvREYSUMvUGv@cluster0.oigvsob.mongodb.net/")
        console.log("Your connection to db is successfull")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB