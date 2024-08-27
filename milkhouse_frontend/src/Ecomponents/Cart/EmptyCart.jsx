import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)`
  width: 80%;
  margin: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 70px;
`;

const Image = styled("img")({
  width: "100%",
  maxWidth: 500,
  height: "auto",
  marginBottom: 20,
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Image src={imgurl} alt="Empty Cart" />
      <Typography>Your cart is empty!</Typography>
      <Typography component="span">Add items to it now.</Typography>
    </Component>
  );
};

export default EmptyCart;
