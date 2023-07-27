import { Box, Button, styled } from '@mui/material';
import React from 'react'
import {ShoppingCart as Cart} from '@mui/icons-material'
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`

const Image = styled('img')({
    padding: '15px',
    width: '95%',
    border:'1px solid #f0f0f0'

});

const StyledButton = styled(Button)`
    width: 48.5%;
    height: 50px;
    border-radius: 2px;

`

export const ActionItem = ({product}) => {
  return (
    <LeftContainer>
      <Box style={{padding: '15px 20px'}}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
        <StyledButton variant='contained' style={{marginRight: 10, background: '#ff9f00'}}><Cart/>Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem;