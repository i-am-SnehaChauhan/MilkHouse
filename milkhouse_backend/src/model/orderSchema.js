import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  customerName: { type: String },
  customerId: { type: String },
  paymentIntentId: { type: String },
  products: [
    {
      id: { type: String },
      title: { type: String },
      quantity: { type: Number },
      mrp: { type: Number },
    },
  ],
  subtotal: { type: Number, required: true },
  total: { type: Number, required: true },
  shipping: { type: Object, required: true },
  // delivery_status: { type: String, default: "pending" },
  payment_status: { type: String, required: true },
}, 
{ timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;
