import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function RefundPolicy() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                Order Cancellation and Return Policy
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                Order Cancellation
                </Typography>
                <Typography variant="body1" paragraph>

                - Customers can cancel their orders before the shipment process begins. <br/>
                - To request a cancellation, contact our customer support at milkdelights080@gmail.com with your order details. <br/>
                - If the order has already been dispatched, cancellation requests will not be accepted. <br/>

                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Return Policy
                </Typography>
                <Typography variant="body1" paragraph>
                - Due to the perishable nature of dairy products, returns are only accepted in cases where: <br/>
                &nbsp;&nbsp;&nbsp;- The product is damaged during transit. <br/>
                &nbsp;&nbsp;&nbsp;- The wrong product has been delivered. <br/>
                &nbsp;&nbsp;&nbsp;- The product is expired at the time of delivery. <br/>
                - Customers must report any such issues within 24 hours of delivery with supporting images. <br/>
                - Once the return request is approved, the product must be returned in its original packaging. 
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Refund Policy
                </Typography>
                <Typography variant="body1" paragraph>
                - If a refund request is approved, the amount will be processed within 7-10 business days to the original payment method. <br/>
                - Refunds will only be granted under the following circumstances: <br/>
                &nbsp;&nbsp;&nbsp;- Canceled orders before shipment. <br/>
                &nbsp;&nbsp;&nbsp;- Approved returns due to damaged, incorrect, or expired products. <br/>
                &nbsp;&nbsp;&nbsp;- Failed transactions where the amount was deducted but the order was not confirmed. <br/>
                - MilkDelights reserves the right to deny refund requests that do not meet the conditions mentioned. <br/>
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                   Exchange Policy
                </Typography>
                <Typography variant="body1" paragraph>
                We do not offer exchanges for any products. However, customers may request a refund or replacement for eligible items as per the return policy.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                For any refund, cancellation, or return-related queries, please reach out to us at<br/>
                    MilkDelights Support Team Email: milkdelights080@gmail.com <br/>
                    Phone: +91 9958614380
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
