import React, { useState, useEffect } from "react";
import Loader from "../templates/Loader";
function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://milk-house-azure.vercel.app/orders"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: "block", textAlign: "center", margin: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>Orders Table</h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Products</th>
            <th>Total</th>
            <th>Delivery Status</th>
          </tr>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td data-th="S.No">{index + 1}</td>
              <td data-th="Order ID">{order._id}</td>
              <td data-th="Customer Name">{order.customerName}</td>
              <td data-th="Products">
                <ul>
                  {order.products.map((product) => (
                    <li key={product._id}>
                      {product.title} x {product.quantity}
                    </li>
                  ))}
                </ul>
              </td>
              <td data-th="Total">{order.total}</td>
              <td data-th="Delivery Status">{order.delivery_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
