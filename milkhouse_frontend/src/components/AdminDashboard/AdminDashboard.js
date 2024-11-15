import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Product approved successfully!");
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
    <div className="p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        {pendingProducts.map(product => (
          <div key={product?._id} className="bg-white p-2 flex flex-col gap-15">
            <p className="text-lg font-medium">Title : {product?.title?.shortTitle}</p>
            <p className="text-lg font-medium">Description : {product?.description}</p>
            <p className="text-lg font-medium">MRP : {product?.price?.mrp}</p>
            <div className="flex gap-4 ">
              <Button
                onClick={() => handleApprove(product._id)}
                color="primary"
                variant="contained"
                className="mr-2"
              >
                Approve
              </Button>
              <Button
                onClick={() => handleReject(product._id)}
                color="secondary"
                variant="contained"
                // className="w-full"
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default AdminDashboard;
