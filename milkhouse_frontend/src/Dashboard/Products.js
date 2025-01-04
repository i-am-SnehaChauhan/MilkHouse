import React, { useState, useEffect } from "react";
import Loader from "../templates/Loader";
import { FaTrash, FaTimes, FaEdit } from "react-icons/fa";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

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

  const handleEdit = async (updatedProduct) => {
    try {
      const response = await fetch(
        `http://localhost:2000/product/${updatedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({  // Need to stringify the body
            title: {
              shortTitle: updatedProduct.title.shortTitle,
            },
            price: {
              mrp: updatedProduct.price.mrp,
              discount: updatedProduct.price.discount,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      // Update the products list with the edited product
      setProducts(
        products.map((p) =>
          p._id === updatedProduct._id ? updatedProduct : p
        )
      );
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const openEditModal = (product) => {
    setEditingProduct({ ...product });
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingProduct(null);
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
                <td data-th="Product Name">{product.title?.shortTitle || ""}</td>
                <td data-th="Price">{product.price?.mrp || ""}</td>
                <td data-th="Discount">{product.price?.discount || ""}</td>
                <td data-th="Actions">
                  <button
                    onClick={() => openEditModal(product)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    <FaEdit style={{ color: "blue" }} />
                  </button>
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

        {showEditModal && editingProduct && (
          <div style={confirmationStyles.overlay}>
            <div style={confirmationStyles.popup}>
              <div style={confirmationStyles.header}>
                <FaTimes
                  style={confirmationStyles.closeIcon}
                  onClick={closeEditModal}
                />
              </div>
              <h3 style={{ marginBottom: "20px" }}>Edit Product</h3>
              <div style={{ textAlign: "left" }}>
                <div style={editModalStyles.inputGroup}>
                  <label>Product Name:</label>
                  <input
                    type="text"
                    value={editingProduct.title.shortTitle}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: { ...editingProduct.title, shortTitle: e.target.value },
                      })
                    }
                  />
                </div>
                <div style={editModalStyles.inputGroup}>
                  <label>Price:</label>
                  <input
                    type="number"
                    value={editingProduct.price.mrp}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: { ...editingProduct.price, mrp: e.target.value },
                      })
                    }
                  />
                </div>
                <div style={editModalStyles.inputGroup}>
                  <label>Discount:</label>
                  <input
                    type="text"
                    value={editingProduct.price.discount}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: { ...editingProduct.price, discount: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div style={confirmationStyles.actions}>
                <button
                  onClick={() => handleEdit(editingProduct)}
                  style={editModalStyles.buttonSave}
                >
                  Save Changes
                </button>
                <button
                  onClick={closeEditModal}
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

const editModalStyles = {
  inputGroup: {
    marginBottom: "15px",
  },
  buttonSave: {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    flex: 1,
    marginRight: "10px",
  },
};

export default ProductsTable;
