import React from 'react'
import { Box, Typography } from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';
import styled from '@emotion/styled';

const SmallText =styled(Box)`
    font-size: 14px;
    &>p{
        margin-top: 10px;
        font-size: 14px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;

`;

const ProductDetail = ({product}) => {

    const assured = 'https://res.cloudinary.com/dx0dgujbj/image/upload/c_thumb,w_1024,h_300,g_auto/v1690433349/Products/ASSURED-logo_tfge0s.jpg';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={assured} alt='' style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}/kg</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}/kg</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount}</Box>
            </Typography>
            <Typography style={{ marginTop: 20, fontSize: 14, fontWeight: 600 }}>Available Offers</Typography>
            <SmallText>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Special Price</span>Get extra 10% upto ₹50 on 10kg(price inclusive of discount) T&C
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer</span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer</span>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer</span>10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Combo Offer</span>Buy 2 items save 5%;Buy 3 or more save 10%
                </Typography>
            </SmallText>

        </>
    )
}

export default ProductDetail;