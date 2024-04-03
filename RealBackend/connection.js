const mongoose = require("mongoose")

const connectDB = async () => {
  const connection = await mongoose.connect("mongodb://127.0.0.1:27017/form-data")
  if (connection) {
    console.log("DataBase Connected ✔");
  } else {
    console.log("DataBase Not Connected");
  }
}

module.exports = { connectDB }


