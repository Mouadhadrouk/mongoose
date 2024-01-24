const mongoose = require("mongoose");

const connectDB = async ()=> {
try {
    await mongoose.connect('mongodb+srv://moad:222222@check-mongoose.ljho2cf.mongodb.net/Persons');
    console.log("Database connected ...")
} catch (error) {
    console.log(error)
}
}

module.exports = connectDB