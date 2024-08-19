import React, { useEffect, useState } from "react";
import Loader from "../templates/Loader";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the customers data from the backend
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://milk-house-azure.vercel.app/customers"
        );
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ display: "block", textAlign: "center", margin: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>
        Customers List
      </h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
          </tr>
          {customers.map((customer, index) => (
            <tr key={customer.uid}>
              <td data-th="S.No">{index + 1}</td>
              <td data-th="Customer ID">{customer.uid}</td>
              <td data-th="Customer Name"></td>
              <td data-th="Email">{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
