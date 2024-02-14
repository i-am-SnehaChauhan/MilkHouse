import React, { useEffect }  from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import TotalView from '../Cart/TotalView';
// import CartItem from './CartItem';  
// import TotalView from './TotalView';

const RequiredStar = styled(Typography)`
  color: red; /* Adjust the color of the star */
  margin-left: 3px; /* Add some spacing between the label text and the star */
`;
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
const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
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

const Heading = styled(Typography)`
    color: #878787;
`;
const Price = styled(Typography)`
    float: right;
`;
const Fields=styled(Typography)`
 font-size: 18px;
    font-weight: 600;
`
const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
  `
const Checkout = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cartItems } = useSelector(state => state.cart);
    // Use the correct slice name in the useSelector
    const { loading, product } = useSelector(state => state.getProductDetails);
    useEffect(() => {
        if (product && id !== product.id)
          dispatch(getProductDetails(id));
      }, [dispatch, id, product, loading]);
      const discount = product ? product.discount : 0;
      const price = product ? product.price : 0;
  
      
      const MakePayment= async() =>{
        const stripe = await loadStripe("pk_test_51OjP9jSG8WEVyf0aeiqFoT54Ergz8GVOfLB5iOhTUOWRoshAKwt9eA0zpIer5c2uDPb5nDJxfcMeOY8PRIBUxeLO007wsYjRW3");
        const body={
          products: cartItems
        }
        const headers={
            "Content-Type":"application/json"
        }
        const response=await fetch("https://milkhouse.onrender.com/api/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });
        const session=await response.json();
        const result= stripe.redirectToCheckout({
            sessionId:session.id
        });
        if(result.error){
            console.log(result.error);
        }
    }
  return (
    <>
     
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>Billing Details</Typography>
            </Header>
            {/* {cartItems.map(item => (
              <CartItem item={item} />
            ))
            } */}

              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
               
                <div className="flex-grow-1">
                    <label for="first name"><b><Fields>First Name</Fields><RequiredStar>*</RequiredStar></b></label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="flex-grow-1">
                <label for="first name"><Fields>Last Name</Fields><RequiredStar>*</RequiredStar></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="w-100">
                <label for="first name"><Fields>Address Details</Fields></label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1" >
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
                </form>
           
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
          <BottomWrapper>
              <StyledButton onClick={() => MakePayment()} variant="contained">Place Order</StyledButton>
            </BottomWrapper>
        </Component>
      
    </>
  )
}

export default Checkout;