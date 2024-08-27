import React, { useEffect, useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import Loader from "../../templates/Loader";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const unsubscribe = onSnapshot(userRef, (doc) => {
        if (doc.exists()) {
          setCartItems(doc.data().cart || []);
        }
        setLoading(false); 
      });

      return () => unsubscribe();
    } else{
      setLoading(false); 
    }
  }, []);

  const buyNow = async () => {
    navigate("/checkout", { state: { cartItems } });
  };

  if (loading) {
    return <Loader />;
  }
  
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <BottomWrapper>
              <StyledButton onClick={buyNow} variant="contained">
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView items={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
