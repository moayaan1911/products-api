const mongoose = require("mongoose"); // Import mongoose

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi", "amazon"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productsSchema);
