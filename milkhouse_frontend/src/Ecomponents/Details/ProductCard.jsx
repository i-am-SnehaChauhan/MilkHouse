// ProductCard.js

import React from "react";
import { Button, Divider, Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Image = styled("img")({
  // width: 'auto',
  height: 200,
  objectFit: "contain",
  borderRadius: "20px",
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 0px;
`;
const Card = styled("div")({
  backgroundColor: "#ffffff",
  /* border: '1px solid #e0e0e0', */
  padding: "20px",
  textAlign: "center",

  width: "100%",
});
const ProductCard = ({ product }) => {
  // Access product properties and render the card details
  return (
    <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
      <Box
        textAlign="left"
        style={{
          padding: "1px 1px",
          marginTop: "10px",
          width: "250px",
          border: "ridge",
        }}
      >
        <Card>
          <Image src={product.url} />
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            {product.title.shortTitle}
          </Text>
          <Text style={{ color: "green" }}>{product.discount}</Text>
          <Text style={{ color: "#A1824A", opacity: ".6" }}>
            {product.tagline}
          </Text>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
