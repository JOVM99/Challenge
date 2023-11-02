//Connection with the mongoDb database
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jovm99:gQXkzz4PYaxEFeUh@cluster0.wnsxwhs.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not connected");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
