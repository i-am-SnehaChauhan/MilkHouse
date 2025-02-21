import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import ContactPage from "./pages/contact";
import DairyPage from "./pages/dairy";
import { PrivacyPolicy } from "./pages/policy";
import { TermsAndConditions } from "./pages/terms";
import { RefundPolicy } from "./pages/refund";
import { Disclaimer } from "./pages/disclaimer";
import { GrievanceRedressal } from "./pages/grievance";
import { ShippingPolicy } from "./pages/shipping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailViewPage from "./pages/detailview";
import CartPage from "./pages/cart";
import ProductsPage from "./pages/products";
import CheckoutPage from "./pages/checkout";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./pages/404";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import OrderPage from "./pages/order";
import ProductPage from "./pages/productstable";
import Addproduct from "./pages/addproduct";
import CustomerList from "./pages/customers";
import Profile from "./pages/profile";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms" element={<TermsAndConditions/>} />
        <Route exact path="/refund-and-cancellation" element={<RefundPolicy/>} />
        <Route exact path="/shipping-and-delivery" element={<ShippingPolicy/>} />
        <Route exact path="/disclaimer" element={<Disclaimer/>} />
        <Route exact path="/grievance-redressal" element={<GrievanceRedressal/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dairy" element={<DairyPage />} />
        <Route path="/dairy/product/:id" element={<DetailViewPage />} />
        <Route
          path="/dairy/products/product/:id"
          element={<DetailViewPage />}
        />
        <Route path="/dairy/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/orders" element={<OrderPage />} />
        <Route path="/dashboard/products" element={<ProductPage />} />
        <Route path="/dashboard/add-products" element={<Addproduct />} />
        <Route path="/dashboard/customers" element={<CustomerList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
