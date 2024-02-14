import React, { useEffect, useState } from "react";
import { Box, Button, styled, Typography, Input } from "@mui/material";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import TotalView from "../Cart/TotalView";

const RequiredStar = styled(Typography)`
  color: red; /* Adjust the color of the star */
  margin-left: 3px; /* Add some spacing between the label text and the star */
`;
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
const TextInput = styled(Input)`
  margin: 7px;
  &:focus {
    border-color: brown; /* Change the border color to brown when focused */
    /* Add more focus styles as needed */
  }
  /* border: '1px solid #ccc';
    padding: '10px';
    borderRadius: '5px'; */
  /* onFocus:{(e) => e.target.style.borderColor = 'brown'}; */
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
const Fields = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  display: flex;
`;
const TotalAmount = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  border-top: 1px dashed #e0e0e0;
  padding: 20px 0;
  border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
  font-size: 16px;
`;
const Checkout = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});
  const { cartItems } = useSelector((state) => state.cart);
  
  const [errors, setErrors] = useState({});
  const { loading, product } = useSelector((state) => state.getProductDetails);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);
  const discount = product ? product.discount : 0;
  const price = product ? product.price : 0;

  const handleSubmit = async(e) => {
    e.preventDefault();

    const {email,name,city,address} = data;

    if (!email || !validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      setInvalid(true);
      return;
    }
    if (!name) {
      setMsg("Please enter your name.");
      setInvalid(true);
      return;
    }
   if (!city) {
      setMsg("Please enter your city.");
      setInvalid(true);
      return;
    }
   if (!address) {
      setMsg("Please enter your address.");
      setInvalid(true);
      return;
    }
    try {
      await MakePayment();
      // Optionally, you can perform any additional actions after successful form submission
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, handle any errors that occur during form submission
    } 
  };

  const setBack = () => {
    setInvalid(false);
    return;
  };
  if (invalid) {
    setTimeout(setBack, 5000);
  }
  const MakePayment = async () => {
    console.log("payment executed");
    const stripe = await loadStripe(
      "pk_test_51OjP9jSG8WEVyf0aeiqFoT54Ergz8GVOfLB5iOhTUOWRoshAKwt9eA0zpIer5c2uDPb5nDJxfcMeOY8PRIBUxeLO007wsYjRW3"
    );
    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://milkhouse.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
    
  };
  const showInvalid = (fieldName) => {
    return (
      <p style={{ color: 'red' }}>Please enter a valid {fieldName}.</p>
    );
  };
  return (
    <>
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography style={{ fontWeight: 600, fontSize: 18 }}>
              Billing Details
            </Typography>
          </Header>

          <h4 className="mb-3">Shipping Address</h4>
          <form
           onSubmit={handleSubmit}
            className="d-flex gap-15 flex-wrap justify-content-between"
          >
            <div className="flex-grow-1">
              <label>
                <b>
                  <Fields>
                    Full Name<RequiredStar>*</RequiredStar>
                  </Fields>
                </b>
              </label>
              <TextInput
              onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="First Name"
                className="form-control"
                required
              />
               {invalid && showInvalid('name')}
            </div>
            <div className="flex-grow-1">
              <label>
                <Fields>
                  Email<RequiredStar>*</RequiredStar>
                </Fields>
              </label>
              <TextInput
                type="email"
                placeholder="Email"
                className="form-control"
                // value={email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                aria-label="Email"
                required
              />
              {invalid && showInvalid('email')}
              {/* {invalid && <p style={{ color: 'red' }}>{msg}</p>} */}
            </div>
            <div className="w-100">
              <label>
                <Fields>
                  Address Details <RequiredStar>*</RequiredStar>
                </Fields>
              </label>
              <TextInput
                type="text"
                placeholder="Address"
                className="form-control"
              />
               {invalid && showInvalid('address')}
            </div>
            <div className="w-100">
              <TextInput
               onChange={(e) => setData({ ...data, address: e.target.value })}
                type="text"
                placeholder="Apartment, Suite ,etc"
                className="form-control"
              />
            </div>
            <div className="flex-grow-1">
              <TextInput
               onChange={(e) => setData({ ...data, city: e.target.value })}
                type="text"
                placeholder="City"
                className="form-control"
              />
              {invalid && showInvalid('city')}
            </div>
            <div className="flex-grow-1">
              <select
                name=""
                className="form-control form-select"
                id=""
                style={{ margin: "7px" }}
              >
                <option value="" selected disabled>
                  Select State
                </option>
              </select>
            </div>
            <div className="flex-grow-1">
              <TextInput
                type="text"
                placeholder="Zipcode"
                className="form-control"
              />
              {invalid && showInvalid("zipcode")}
            </div>
          </form>
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems} />
          <BottomWrapper>
            <StyledButton onClick={handleSubmit}variant="contained" type="submit">
              Place Order
            </StyledButton>
          </BottomWrapper>
          
        </Grid>
      </Component>
    </>
  );
};

export default Checkout;
