const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  massage: {
    type: String,
    required: true
  }
}, {timestamps: true})


const UserModel = mongoose.model("formUser", UserScheme)

module.exports = { UserModel }