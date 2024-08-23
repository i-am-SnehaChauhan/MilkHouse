import React, { useEffect, useState } from "react";
import Loader from "../templates/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const customerData = querySnapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));
        setCustomers(customerData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers: ", error);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <h1 style={{ textAlign: "center", fontSize: "2.4rem" }}>
    Customers List
  </h1>
    <div style={{ display: "block", textAlign: "center", margin: "2rem" }}>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>S.No</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {customers.map((customer, index) => (
            <tr key={customer.uid}>
              <td data-th="S.No">{index + 1}</td>
              <td data-th="Customer ID">{customer.uid}</td>
              <td data-th="Customer Name">{customer.name}</td>
              <td data-th="Email">{customer.email}</td>
              <td data-th="Phone">{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Customers;
