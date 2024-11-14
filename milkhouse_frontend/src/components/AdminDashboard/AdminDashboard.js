import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Button } from "@mui/material";

const AdminDashboard = () => {
  const [pendingProducts, setPendingProducts] = useState([]);

  useEffect(() => {
    const fetchPendingProducts = async () => {
      try {
        const response = await axios.get("/pendingProducts");
        setPendingProducts(response.data);
        console.log("Pending products:", response.data);
      } catch (error) {
        console.error("Error fetching pending products:", error);
      }
    };
    fetchPendingProducts();
  }, []);

  const handleApprove = async (productId) => {
    try {
      await axios.post(`/admin/approveProduct/${productId}`);
      setPendingProducts(prev => prev.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error approving product:", error);
    }
  };

  const handleReject = async (productId) => {
    try {
      await axios.post(`https://localhost:2000/admin/rejectProduct/${productId}`);
      setPendingProducts(prev => prev.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error rejecting product:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {pendingProducts.map(product => (
        <div key={product._id}>
          <p>{product.title.shortTitle}</p>
          <Button onClick={() => handleApprove(product._id)} color="primary" variant="contained">Approve</Button>
          <Button onClick={() => handleReject(product._id)} color="secondary" variant="contained">Reject</Button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
