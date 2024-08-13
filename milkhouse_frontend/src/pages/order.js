import React from "react";
import Layout from "../Dashboard/Layout";
import OrdersTable from "../Dashboard/Orders";
const OrderPage = () => {
  return (
    <Layout>
      <OrdersTable />
    </Layout>
  );
};

export default OrderPage;
