const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin1234@cluster0.7cv72pt.mongodb.net/simpledb?retryWrites=true&w=majority"
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("connnection error with mongodb");
  }
};
module.exports = connectDB;
