import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { signup } from "../controller/user-controller.js";
const router = express.Router();
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/signup", signup);
router.post("/api/create-checkout-session", async (req, res) => {
  console.log(req.body);
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: product.title.shortTitle,
        // images:[product.imgdata]
      },
      unit_amount: product.price.cost * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://milk-house.vercel.app/success",
    cancel_url: "https://milk-house.vercel.app/cancel",
  });
  res.setHeader("Access-Control-Allow-Origin", "https://milk-house.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.json({ id: session.id });
});

export default router;
