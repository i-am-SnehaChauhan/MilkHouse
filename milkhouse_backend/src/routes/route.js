import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
} from "../controller/product-controller.js";
import { signup } from "../controller/user-controller.js";
import { getOrders } from "../controller/order-controller.js";
import env from "dotenv";
import Order from "../model/orderSchema.js";
const router = express.Router();
import stripe from "stripe";
import admin from "../firebaseAdmin.js";
env.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET);

router.get("/products", getProducts);
router.get("/orders", getOrders);
router.get("/product/:id", getProductById);
router.post("/addProduct", addProduct);
router.delete("/products/:id", deleteProduct);
router.post("/signup", signup);
router.post("/api/create-checkout-session", async (req, res) => {
  const {
    products,
    customerEmail,
    customerName,
    customerCity,
    customerState,
    customerCode,
    phoneNo,
  } = JSON.parse(req.body.toString());
  console.log(req.body.toString());
  const productMetadata = products.map((product) => ({
    id: product._id,
    title: product.title.shortTitle,
    quantity: product.quantity,
    mrp: product.price.mrp,
  }));
  const customer = await stripeInstance.customers.create({
    metadata: {
      name: customerName,
      email: customerEmail,
      c_city: customerCity,
      c_state: customerState,
      postalcode: customerCode,
      phoneno: phoneNo,
      cart: JSON.stringify(productMetadata),
    },
  });
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: product.title.shortTitle,
        images: [product.url],
      },
      unit_amount: product.price.cost * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    customer: customer.id,
    line_items: lineItems,
    mode: "payment",
    success_url: "https://milk-house.vercel.app/success",
    cancel_url: "https://milk-house.vercel.app/cancel",
  });
  console.log("session :", session);
  res.json({ id: session.id });
});

const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
    customerName: customer.metadata.name,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: Items,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: {
      address: {
        city: customer.metadata.c_city,
        state: customer.metadata.c_state,
        postal_code: customer.metadata.postalcode,
      },
      email: data.customer_details.email,
      name: data.customer_details.name,
      phone: customer.metadata.phoneno,
      // Add other shipping details as needed
    },
    payment_status: data.payment_status,
  });
  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

let endpointSecret;
endpointSecret = process.env.WEBHOOK_SECRET;

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];

    let data;
    let eventType;
    if (endpointSecret) {
      let event;
      try {
        event = stripeInstance.webhooks.constructEvent(
          req.body,
          sig,
          endpointSecret
        );
        console.log("webhook verified");
      } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;

      // console.log("eventtype: ",eventType);
    }
    console.log("data: ", data);
    // console.log("body: ",req.body);

    //   // Handle the event
    if (eventType === "checkout.session.completed") {
      stripeInstance.customers
        .retrieve(data.customer)
        .then((customer) => {
          console.log(customer);
          console.log("data:", data);
          createOrder(customer, data);
        })
        .catch((err) => console.log(err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  }
);

router.get("/customers", async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers(1000); // Fetches up to 1000 users
    const users = listUsersResult.users.map((userRecord) => {
      return {
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        // add other fields you want to show
      };
    });
    res.json(users);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

export default router;
