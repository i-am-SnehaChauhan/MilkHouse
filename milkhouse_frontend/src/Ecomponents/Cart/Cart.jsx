import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';  
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0'
  }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 15
  }
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
  const { cartItems } = useSelector(state => state.cart);
  const navigate = useNavigate(); 
  const buyNow = async () => {
    // let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com' });
    // var information = {
    //   action: 'https://securegw-stage.paytm.in/order/process',
    //   params: response
    // }
    navigate('/checkout');
    // post(information);
  }

  return (
    <>
      {cartItems.length ?
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems?.length})</Typography>
            </Header>
            {cartItems.map(item => (
              <CartItem item={item} />
            ))
            }
            <BottomWrapper>
              <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component> : <EmptyCart />
      }
    </>
  )
}

export default Cart;