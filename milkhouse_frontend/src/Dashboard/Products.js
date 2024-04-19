import React, { useState, useEffect } from 'react';
function ProductsTable() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchproducts();
  }, []);

  const fetchproducts = async () => {
    try {
      const response = await fetch('https://milk-house-azure.vercel.app/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setproducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div style={{display:"block",textAlign:"center",margin:"2rem"}}>
      <h1 style={{textAlign:"center", fontSize: "2.4rem"}}>My Products</h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount</th>
            {/* <th>Delivery Status</th> */}
          </tr>
          {products.map(product => (
            <tr key={product._id}>
              <td data-th="Product ID">{product._id}</td>
              <td data-th="Product Name">{product.title.shortTitle}</td>
              <td data-th="Price">{product.price.mrp}</td>
              <td data-th="Discount">{product.price.discount}</td>
              {/* <td data-th="Delivery Status">{product.delivery_status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
