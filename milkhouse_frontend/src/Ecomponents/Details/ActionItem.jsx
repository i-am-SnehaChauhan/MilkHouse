import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart } from "@mui/icons-material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { getProductDetails } from "../../redux/actions/productAction";
import { auth } from "../../firebase";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginTop: "50px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
    marginTop: "122px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "95%",
  border: "1px solid #f0f0f0",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "45%",
  height: "50px",
  borderRadius: "2",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

export const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    if (auth.currentUser) {
      navigate("/cart");
    } else {
      navigate("/signin");
    }
  };

  const buyNow = () => {
    dispatch(getProductDetails(id));
    if (auth.currentUser) {
      navigate("/checkout");
    } else {
      navigate("/signin");
    }
  };

  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px" }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => buyNow()}
        style={{ background: "#fb541b" }}
      >
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
