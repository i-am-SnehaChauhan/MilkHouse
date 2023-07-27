import React from 'react'
import { Box, Button, styled } from '@mui/material'
import { Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 1% 0 auto',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#000000',
    background: '#FF8E53',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));


const CustomButtons = () => {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate('/signin');
    }
    
  return (
    <Wrapper >
        <LoginButton variant="contained" onClick={loginPage}>Login</LoginButton>
        <Typography style={{marginTop: 7, width: 135, textAlign: 'center'}}>Become a Seller</Typography>
        <Typography style={{marginTop: 7}}>More</Typography>
        <Container>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
        </Container>
    </Wrapper>
  )
}

export default CustomButtons;