import express from "express";
import nodemailer from 'nodemailer';
import {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  // submitProductForApproval,
  approveProduct,
  rejectProduct,
  submitForApproval
} from "../controller/product-controller.js";
import { signup } from "../controller/user-controller.js";
import { getOrders } from "../controller/order-controller.js";
import { createOrder, verifyOrder, addOrder } from "../controller/payment-controller.js";
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
// router.post("/addProduct", addProduct);
router.post("/submitForApproval", submitForApproval);
router.delete("/products/:id", deleteProduct);
router.post("/signup", signup);

// router.post("/submitProductForApproval", submitProductForApproval);
router.post("/admin/approveProduct/:id", approveProduct);
router.post("/admin/rejectProduct/:id", rejectProduct);


router.post("/api/create-checkout-session", async (req, res) => {
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
  console.log(req.body.toString());
  const productMetadata = Array.isArray(products)
    ? products.map((product) => ({
        id: product._id,
        title: product.title.shortTitle,
        quantity: product.quantity,
        mrp: product.price.mrp,
        image: [product.url],
      }))
    : [
        {
          id: products._id,
          title: products.title.shortTitle,
          quantity: products.quantity,
          mrp: products.price.mrp,
          image: [products.url],
        },
      ]; })

router.post("/create-order", createOrder);
router.post("/verify-order", verifyOrder);
router.post("/addorder", addOrder);


router.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;
  console.log(req.body);

  // Configure Nodemailer transport using SMTP details from the environment variables
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER, // Where you want to receive the emails
    subject: `New message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Mobile: ${mobile}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});


// router.post("/create-checkout-session", async (req, res) => {
//   const {
//     uid,
//     products,
//     customerEmail,
//     customerName,
//     customerCity,
//     customerState,
//     customerCode,
//     phoneNo,
//   } = JSON.parse(req.body.toString());
//   console.log(req.body.toString());
//   const productMetadata = Array.isArray(products)
//     ? products.map((product) => ({
//         id: product._id,
//         title: product.title.shortTitle,
//         quantity: product.quantity,
//         mrp: product.price.mrp,
//         image: [product.url],
//       }))
//     : [
//         {
//           id: products._id,
//           title: products.title.shortTitle,
//           quantity: products.quantity,
//           mrp: products.price.mrp,
//           image: [products.url],
//         },
//       ];


//   const customer = await stripeInstance.customers.create({
//     metadata: {
//       uid: uid,
//       name: customerName,
//       email: customerEmail,
//       c_city: customerCity,
//       c_state: customerState,
//       postalcode: customerCode,
//       phoneno: phoneNo,
//       cart: JSON.stringify(productMetadata),
//     },
//   });
//   const lineItems = Array.isArray(products)
//     ? products.map((product) => ({
//         price_data: {
//           currency: "INR",
//           product_data: {
//             name: product.title.shortTitle,
//             images: [product.url],
//           },
//           unit_amount: product.price.cost * 100,
//         },
//         quantity: product.quantity,
//       }))
//     : [
//         {
//           price_data: {
//             currency: "INR",
//             product_data: {
//               name: products.title.shortTitle,
//               images: [products.url],
//             },
//             unit_amount: products.price.cost * 100,
//           },
//           quantity: products.quantity,
//         },
//       ];

//   const session = await stripeInstance.checkout.sessions.create({
//     payment_method_types: ["card"],
//     customer: customer.id,
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "https://milk-house.vercel.app/success",
//     cancel_url: "https://milk-house.vercel.app/cancel",
//   });
//   console.log("session :", session);
//   res.json({ id: session.id });
// });

// const createOrder = async (customer, data) => {
//   const Items = JSON.parse(customer.metadata.cart);
//   const orderDetails = {
//     customerName: customer.metadata.name,
//     customerId: data.customer,
//     paymentIntentId: data.payment_intent,
//     products: Items,
//     subtotal: data.amount_subtotal/100,
//     total: data.amount_total/100,
//     shipping: {
//       address: {
//         city: customer.metadata.c_city,
//         state: customer.metadata.c_state,
//         postal_code: customer.metadata.postalcode,
//       },
//       email: data.customer_details.email,
//       name: data.customer_details.name,
//       phone: customer.metadata.phoneno,
//     },
//     payment_status: data.payment_status,
//   };
//   const newOrder = new Order(orderDetails);
//   try {
//     const savedOrder = await newOrder.save();
//     console.log("Processed Order:", savedOrder);
//     const db = admin.firestore();
//     const userRef = db.collection("users").doc(customer.metadata.uid);
//     console.log(userRef);
//     // Fetch the current document data
//     const doc = await userRef.get();
//     if (doc.exists) {
//       const data = doc.data();
//       const orders = data.orders || [];
//       orders.push(orderDetails);
//       await userRef.update({
//         orders: orders,
//       });
//     } else {
//       console.log("User document does not exist.");
//     }
//     console.log("Order saved in Firestore.");
//   } catch (err) {
//     console.log(err);
//   }
// };

// let endpointSecret;
// endpointSecret = process.env.WEBHOOK_SECRET;

// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   (req, res) => {
//     const sig = req.headers["stripe-signature"];

//     let data;
//     let eventType;
//     if (endpointSecret) {
//       let event;
//       try {
//         event = stripeInstance.webhooks.constructEvent(
//           req.body,
//           sig,
//           endpointSecret
//         );
//         console.log("webhook verified");
//       } catch (err) {
//         console.log(`Webhook Error: ${err.message}`);
//         res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//       }
//       data = event.data.object;
//       eventType = event.type;
//     } else {
//       data = req.body.data.object;
//       eventType = req.body.type;
//     }
//     console.log("data: ", data);
//     if (eventType === "checkout.session.completed") {
//       stripeInstance.customers
//         .retrieve(data.customer)
//         .then((customer) => {
//           console.log(customer);
//           console.log("data:", data);
//           createOrder(customer, data);
//         })
//         .catch((err) => console.log(err.message));
//     }

//     res.send().end();
//   }
// );

// router.get("/customers", async (req, res) => {
//   try {
//     const listUsersResult = await admin.auth().listUsers(1000); // Fetches up to 1000 users
//     const users = listUsersResult.users.map((userRecord) => {
//       return {
//         uid: userRecord.uid,
//         email: userRecord.email,
//         displayName: userRecord.displayName,
//       };
//     });
//     res.json(users);
//   } catch (error) {
//     res.status(500).send(`Error: ${error.message}`);
//   }
// });

export default router;
