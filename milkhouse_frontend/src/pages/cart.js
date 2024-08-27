import React from "react";
import Cart from "../Ecomponents/Cart/Cart";
import Header from "../Ecomponents/Header/Header";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: auto;
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
