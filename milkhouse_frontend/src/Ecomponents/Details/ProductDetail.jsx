import React from 'react'
import { Box, Typography ,  Table, TableBody, TableRow, TableCell,} from '@mui/material';
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

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ProductDetail = ({product}) => {

    const assured = 'https://res.cloudinary.com/dx0dgujbj/image/upload/c_thumb,w_1024,h_300,g_auto/v1690433349/Products/ASSURED-logo_tfge0s.jpg';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    // const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

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
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Special Price </span>Get extra 10% upto ₹50 on 10kg(price inclusive of discount) T&C
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer </span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer </span>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Bank Offer </span>10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                    <span style={{ color: '#388E3C' }}><StyledBadge/>Combo Offer </span>Buy 2 items save 5%;Buy 3 or more save 10%
                </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    {/* <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow> */}
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>

        </>
    )
}

export default ProductDetail;