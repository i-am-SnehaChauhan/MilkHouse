import Razorpay from "razorpay";
import admin from "../firebaseAdmin.js";
import Order from "../model/orderSchema.js";
import crypto from "crypto";
import env from "dotenv";
env.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const addOrder = async (req, res) => {
  const {
    uid,
    products,
    customerEmail,
    customerName,
    customerCity,
    customerState,
    customerCode,
    phoneNo,
  } = JSON.parse(req.body.toString());

  const productMetadata = Array.isArray(products)
    ? products.map((product) => ({
        id: product._id,
        title: product.title.shortTitle,
        quantity: product.quantity,
        mrp: product.price.mrp,
        cost: product.price.cost,
        image: [product.url],
      }))
    : [
        {
          id: products._id,
          title: products.title.shortTitle,
          quantity: products.quantity,
          mrp: products.price.mrp,
          cost: products.price.cost,
          image: [products.url],
        },
      ];

  const amount = Array.isArray(products)
    ? products.reduce((sum, product) => sum + product.price.cost, 0)
    : products.price.cost;

    const orderDetails = {
      customerName,
      customerId: uid,
      products: productMetadata,
      total: amount + 40,
      shipping: {
        address: {
          city: customerCity,
          state: customerState,
          postal_code: customerCode,
        },
        email: customerEmail,
        phone: phoneNo,
      },
    };
  
    try {
      const newOrder = new Order(orderDetails);
      const savedOrder = await newOrder.save();
  
      const db = admin.firestore();
      const userRef = db.collection("users").doc(uid);
  
      const doc = await userRef.get();
      if (doc.exists) {
        const data = doc.data();
        const orders = data.orders || [];
        orders.push(orderDetails);
        await userRef.update({ orders });
      } else {
        console.log("User document does not exist.");
      }
  
      res.status(200).json(savedOrder);
    } catch (err) {
      console.log("Database save error:", err);
      res.status(500).json({ message: "Failed to save order" });
    }
}
export const createOrder = async (req, res) => {
  // console.log(process.env.RAZORPAY_KEY_ID);
  const { amount } = JSON.parse(req.body.toString());
  let order;
  try {
    order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    return res.status(500).json({ message: "Failed to create Razorpay order" });
  }
  res.status(200).json(order);
  
};

export const verifyOrder = async (req, res) => {
  const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
    const keySecret = process.env.RAZORPAY_SECRET;

    const sig = crypto
      .createHmac("sha256", keySecret)
      .update(razorpayOrderId + "|" + razorpayPaymentId)
      .digest("hex");
    return sig;
  };

  const { orderId, razorpayPaymentId, razorpaySignature } = JSON.parse(req.body.toString());

  const signature = generatedSignature(orderId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    console.log(razorpaySignature);
    console.log(signature);
    console.log(orderId);
    console.log(razorpayPaymentId);
    return res
      .status(400)
      .json({ message: "payment verification failed", isOk: false });
  }

  // Probably some database calls here to update order or add premium status to user
  return res
    .status(200)
    .json({ message: "payment verified successfully", isOk: true });
};
