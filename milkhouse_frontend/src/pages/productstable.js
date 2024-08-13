import * as React from "react";
import Layout from "../Dashboard/Layout";
import ProductsTable from "../Dashboard/Products";
const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProductsTable />
      </Layout>
    </>
  );
};
export default ProductPage;
