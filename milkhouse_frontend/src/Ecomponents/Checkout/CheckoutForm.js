import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Box, Button, styled, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import TotalView from "../Cart/TotalView";
// import env from 'dotenv';
// env.config();
// require('dotenv').config();

const statesIndia = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
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
  margin-bottom: 3rem;
  /* background: #fff; */
`;
const StyledSelect = Styled.select({
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f8f9fa",
  color: "black",
  outline: "none",
  fontFamily: "Roboto",
});
const TextInput = Styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  display:block;
  background: #f8f9fa;
  font-weight: 400;
  font-size: 1rem;
  font-family:'Roboto';
  line-height: 1rem;
  color: Black;
  margin-bottom: 1rem;
  outline: none;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
   
  }

  &:focus {

    border: 1px solid rgb(133 44 2);
  }

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
  const [selectedState, setSelectedState] = useState("");
  const handleChange = (event) => {
    setSelectedState(event.target.value); // Update the selected state when the user selects an option
  };
  const { id } = useParams();
  const [invalid, setInvalid] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPayment(true);
    const { email, name, city, address, code, phone } = data;
    const errors = {};

    if (!email || !validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!name) {
      errors.name = "Please enter your name.";
    }
    if (!city) {
      errors.city = "Please enter your city.";
    }
    if (!address) {
      errors.address = "Please enter your address.";
    }
    if (!code) {
      errors.code = "Please enter your Postal Code.";
    }
    if (!phone) {
      errors.phone = "Please enter your Mobile Number.";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      setInvalid(true);
      setLoadingPayment(false);
      return;
    }

    try {
      await MakePayment();
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoadingPayment(false); // Reset loading state when payment process is complete
    }
  };

  const setBack = () => {
    setInvalid(false);
    return;
  };
  if (invalid) {
    setTimeout(setBack, 7000);
  }
  const MakePayment = async () => {
    console.log("payment executed");
    const stripe = await loadStripe(
      // "pk_test_51OkLbxSDZIOeZTA8ipwbbaBAzbsFZf3EXJDgd3zy0gbrG5ck9eUIcJHj4DrG8WOwkQ6edbOyMmgsn2mrapGp5y2700fQGx7acg"
      process.env.REACT_APP_STRIPE_KEY
    );
    const body = {
      products: cartItems,
      customerEmail: data.email,
      customerName: data.name,
      customerCity: data.city,
      customerCode: data.code,
      customerState: selectedState,
      phoneNo: data.phone,
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
    if (invalid && errors[fieldName]) {
      return (
        <p key={fieldName} style={{ color: "red" }}>
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  return (
    <>
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography style={{ fontWeight: 600, fontSize: 25 }}>
              Shipping Details
            </Typography>
          </Header>

          {/* <h4 className="mb-3">Shipping Address</h4> */}
          <form
            onSubmit={handleSubmit}
            className="d-flex gap-15 flex-wrap justify-content-between"
          >
            <div className="w-50">
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
                placeholder="Full Name"
                required
              />
              {invalid && showInvalid("name")}
            </div>
            <div className="w-50">
              <label>
                <Fields>
                  Email<RequiredStar>*</RequiredStar>
                </Fields>
              </label>
              <TextInput
                type="email"
                placeholder="Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                aria-label="Email"
                required
              />
              {invalid && showInvalid("email")}
              {/* {invalid && <p style={{ color: 'red' }}>{msg}</p>} */}
            </div>
            <div className="w-50">
              <label>
                <Fields>
                  Phone Number<RequiredStar>*</RequiredStar>
                </Fields>
              </label>
              <TextInput
                type="integer"
                placeholder="(+91)"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                aria-label="Mobile"
                required
              />
              {invalid && showInvalid("phone")}
              {/* {invalid && <p style={{ color: 'red' }}>{msg}</p>} */}
            </div>
            <div className="w-100">
              <label>
                <Fields>
                  Shipping Address <RequiredStar>*</RequiredStar>
                </Fields>
              </label>
              <TextInput type="text" placeholder="Address" />
              {invalid && showInvalid("address")}
            </div>
            <div className="w-100">
              <TextInput
                onChange={(e) => setData({ ...data, address: e.target.value })}
                type="text"
                placeholder="Apartment, Suite ,etc"
              />
            </div>
            <div className="flex-grow-1">
              <TextInput
                onChange={(e) => setData({ ...data, city: e.target.value })}
                type="text"
                placeholder="City"
              />
              {invalid && showInvalid("city")}
            </div>
            <div className="flex-grow-1">
              <StyledSelect
                name=""
                id=""
                value={selectedState}
                onChange={handleChange}
                // style={{ margin: "7px" }}
              >
                <option value="" disabled>
                  Select State
                </option>
                {statesIndia.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </StyledSelect>
            </div>
            <div className="flex-grow-1">
              <TextInput
                onChange={(e) => setData({ ...data, code: e.target.value })}
                type="text"
                placeholder="Postal code"
              />
              {invalid && showInvalid("code")}
            </div>
          </form>
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems} />
          <BottomWrapper>
            <StyledButton
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              disabled={loadingPayment}
            >
              {loadingPayment ? "Processing..." : "Place Order"}
            </StyledButton>
          </BottomWrapper>
        </Grid>
      </Component>
    </>
  );
};

export default Checkout;
