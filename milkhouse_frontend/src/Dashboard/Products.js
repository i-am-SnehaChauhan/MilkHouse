import React, { useState, useEffect } from "react";
import Loader from "../templates/Loader";
import { FaTrash, FaTimes } from "react-icons/fa";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://milk-house-azure.vercel.app/products"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!productToDelete) return;

    try {
      const response = await fetch(
        `https://milk-house-azure.vercel.app/products/${productToDelete}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      // Update the UI by removing the deleted product
      setProducts(
        products.filter((product) => product._id !== productToDelete)
      );
      setShowConfirmation(false); // Close the confirmation dialog
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const confirmDelete = (id) => {
    setProductToDelete(id);
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setProductToDelete(null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>My Products</h1>
      <div style={{ display: "block", textAlign: "center", margin: "2rem" }}>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>S.No</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
            </tr>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td data-th="S.No">{index + 1}</td>
                <td data-th="Product ID">{product._id}</td>
                <td data-th="Product Name">{product.title.shortTitle}</td>
                <td data-th="Price">{product.price.mrp}</td>
                <td data-th="Discount">{product.price.discount}</td>
                <td data-th="Actions">
                  <button
                    onClick={() => confirmDelete(product._id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FaTrash style={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showConfirmation && (
          <div style={confirmationStyles.overlay}>
            <div style={confirmationStyles.popup}>
              <div style={confirmationStyles.header}>
            <FaTimes 
                style={confirmationStyles.closeIcon}
                onClick={closeConfirmation}
              />
              </div>
              <h3 style={confirmationStyles.warning}>
                Are you sure to delte this product?<br/> This action can't be undone.
              </h3>
              <div style={confirmationStyles.details}>
                <span style={confirmationStyles.label}>Product ID:</span>{" "}
                {productToDelete}
              </div>
              <div style={confirmationStyles.actions}>
                <button
                  onClick={handleDelete}
                  style={confirmationStyles.buttonDelete}
                >
                  Delete
                </button>
                <button
                  onClick={closeConfirmation}
                  style={confirmationStyles.buttonCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Styles for the confirmation popup
const confirmationStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
  },
  header: {
    display:'flex',
    justifyContent: "flex-end",
    padding: "10px",
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  warning: {
    fontSize: "1rem",
    color: "red",
    marginBottom: "20px",
  },
  details: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  buttonDelete: {
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    flex: 1,
    marginRight: "10px",
  },
  buttonCancel: {
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    flex: 1,
  },

};

export default ProductsTable;
