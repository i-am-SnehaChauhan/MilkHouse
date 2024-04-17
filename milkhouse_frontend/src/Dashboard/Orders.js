import React, { useState, useEffect } from 'react';
import { mainListItems, secondaryListItems } from './ListItems';
function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://milhhouse.onrender.com/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div style={{display:"block",textAlign:"center",margin:"2rem"}}>
      <h1 style={{textAlign:"center", fontSize: "2.4rem"}}>Orders Table</h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Products</th>
            <th>Total</th>
            <th>Delivery Status</th>
          </tr>
          {orders.map(order => (
            <tr key={order._id}>
              <td data-th="Order ID">{order._id}</td>
              <td data-th="Customer Name">{order.customerName}</td>
              <td data-th="Products"><ul>
                  {order.products.map(product => (
                    <li key={product._id}>{product.title} x {product.quantity}</li>
                  ))}
                </ul></td>
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
