import React, { useState, useEffect } from "react";
import Loader from "../templates/Loader";
import { FaTrash } from 'react-icons/fa';
function ProductsTable() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchproducts();
  }, []);

  const fetchproducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://milk-house-azure.vercel.app/products"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setproducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

   const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://milk-house-azure.vercel.app/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      // Update the UI by removing the deleted product
      setproducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: "block", textAlign: "center", margin: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>My Products</h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Action</th>
            {/* <th>Delivery Status</th> */}
          </tr>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td data-th="S.No">{index + 1}</td>
              <td data-th="Product ID">{product.id}</td>
              <td data-th="Product Name">{product.title.shortTitle}</td>
              <td data-th="Price">{product.price.mrp}</td>
              <td data-th="Discount">{product.price.discount}</td>
              <td data-th="Actions">
                <button 
                  onClick={() => handleDelete(product._id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <FaTrash style={{ color: 'red' }} /> {/* Trash icon */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
