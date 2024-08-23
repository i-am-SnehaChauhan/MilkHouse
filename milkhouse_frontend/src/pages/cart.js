import React from "react";
import Cart from "../Ecomponents/Cart/Cart";
import Header from "../Ecomponents/Header/Header";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  if (height< 700px) {
    background-color: #f2f2f2;
  }
  height: auto;
  background-color: #f2f2f2;
`;

const CartPage = () => {
  return (
    <Container>
      <Header />
      <Cart />
    </Container>
  );
};

export default CartPage;
