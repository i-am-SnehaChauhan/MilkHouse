import React from 'react'
import { Box, Button, styled } from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    align-items: center;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
    }

    
`
const Container = styled(Box)`
    display: flex;
    align-items: center;
`
const LoginButton = styled(Button)`
    background-color: #fff;
    color: #000;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 35px;
    &:hover {
        background-color: #FF8E53;
    
    }
`


const CustomButtons = () => {
  return (
    <Wrapper>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>
        <Container>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Container>
    </Wrapper>
  )
}

export default CustomButtons;