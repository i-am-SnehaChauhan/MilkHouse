// ProductCard.js

import React from 'react';
import { Button, Divider, Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Image = styled('img')({
    // width: 'auto',
    height: 200
})
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
    
`
const Card=styled('div')({
backgroundColor: '#ffffff',
  /* border: '1px solid #e0e0e0', */
  padding: '20px',
  textAlign: 'center',

  width:'100%'
})
const ProductCard = ({ product }) => {
  // Access product properties and render the card details
  return (
    <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
            <Box textAlign="center" style={{ padding: '25px 15px', marginTop: '70px', width: '200px' }}>
                <Card>
                    <Image src={product.url} />
                    <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                    <Text style={{ color: 'green' }}>{product.discount}</Text>
                    <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                </Card>
            </Box>
        </Link>
  );
};

export default ProductCard;
