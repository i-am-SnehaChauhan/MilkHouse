import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
  image: String,
  title: {
    shortTitle: String,
    longTitle: String,
  },
  price: {
    mrp: Number,
    cost: Number,
    discount: String,
  },
  quantity: Number,
  description: String,
  tagline: String,
  status: {
    type: String,
    default: "Pending", // Default status when submitted
    enum: ["Pending", "Approved", "Rejected"],
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
