import React, { useState } from "react";
import { Grid, Box, Button, styled, Typography } from "@mui/material";
import Styled from "styled-components";
import axios from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  margin-bottom: 3rem;
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

const TextInput = Styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: block;
  background: #f8f9fa;
  font-weight: 400;
  font-size: 1rem;
  font-family:'Roboto';
  line-height: 1rem;
  color: black;
  margin-bottom: 1rem;
  outline: none;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgb(133 44 2);
  }
`;

const AddProducts = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [data, setData] = useState({
    id: "",
    image: null,
    title: { shortTitle: "", longTitle: "" },
    price: { mrp: "", cost: "", discount: "" },
    quantity: "",
    description: "",
    tagline: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setData((prevData) => {
      const newData = { ...prevData };

      if (name === "image" && files && files.length > 0) {
        newData[name] = files[0];
      } else {
        const keys = name.split(".");
        if (keys.length > 1) {
          newData[keys[0]] = {
            ...newData[keys[0]],
            [keys[1]]: value,
          };
        } else {
          newData[name] = value;
        }
      }
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
  
    const requiredFields = [
      data.id,
      data.image,
      data.title.shortTitle,
      data.title.longTitle,
      data.price.mrp,
      data.price.cost,
      data.price.discount,
      data.quantity,
      data.description,
      data.tagline,
    ];
  
    const allFieldsFilled = requiredFields.every(
      (field) => field && (typeof field !== "string" || field.trim() !== "")
    );
  
    if (!allFieldsFilled) {
      setIsButtonDisabled(false);
      toast.error("Please fill out all required fields.");
      return;
    }
  
    const formDataForBackend = new FormData();
    formDataForBackend.append("id", data.id);
    formDataForBackend.append("image", data.image); // Ensure this is a valid file object
  
    // Flatten the nested objects into FormData
    formDataForBackend.append("titleShortTitle", data.title.shortTitle);
    formDataForBackend.append("titleLongTitle", data.title.longTitle);
    formDataForBackend.append("priceMrp", data.price.mrp);
    formDataForBackend.append("priceCost", data.price.cost);
    formDataForBackend.append("priceDiscount", data.price.discount);
    formDataForBackend.append("quantity", data.quantity);
    formDataForBackend.append("description", data.description);
    formDataForBackend.append("tagline", data.tagline);
  
    try {
      const response = await axios.post(
        "/submitForApproval",
        formDataForBackend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setIsButtonDisabled(false);
      toast.success("Product submitted for approval!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      setIsButtonDisabled(false);
      toast.error("Error submitting product for approval. Please try again.");
    }
  };
  
  
  
  

  return (
    <Component container>
      <Header>
        <Typography style={{ fontWeight: 600, fontSize: 25 }}>
          Add Product
        </Typography>
      </Header>

      <form
        onSubmit={handleSubmit}
        className="d-flex gap-15 flex-wrap justify-content-between"
      >
        <div className="w-50">
          <label>
            <b>Product ID<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Product ID"
            name="id"
            value={data.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Product Image<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="file"
            name="image"
            label="image"
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Short Title<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Short Title"
            name="title.shortTitle"
            value={data.title.shortTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Long Title<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Long Title"
            name="title.longTitle"
            value={data.title.longTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>MRP<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="number"
            placeholder="MRP"
            name="price.mrp"
            value={data.price.mrp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Cost<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="number"
            placeholder="Cost"
            name="price.cost"
            value={data.price.cost}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Price Discount<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Price Discount"
            name="price.discount"
            value={data.price.discount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Quantity<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-100">
          <label>
            <b>Description<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Description"
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-50">
          <label>
            <b>Tagline<span style={{ color: 'red' }}>*</span></b>
          </label>
          <TextInput
            type="text"
            placeholder="Tagline"
            name="tagline"
            value={data.tagline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
          <StyledButton
            onClick={handleSubmit}
            variant="contained"
            type="submit"
            disabled={isButtonDisabled}
          >
            Send for approval
          </StyledButton>
        </div>
      </form>
      <ToastContainer />
    </Component>
  );
};

export default AddProducts;
