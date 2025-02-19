import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function Disclaimer() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Disclaimer
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights is an e-commerce application designed to provide a seamless online shopping experience for dairy products. While we strive to ensure the accuracy of the product descriptions, pricing, and availability, MilkDelights does not warrant that the information on the platform is always error-free, complete, or up-to-date.
                </Typography>
                <Typography variant="body1" paragraph>
                    Product images are for illustrative purposes only and may not precisely reflect the actual product. The colors, packaging, and design may vary due to manufacturer changes or display settings.
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights serves as a platform connecting customers with trusted dairy producers and vendors. The quality, freshness, and packaging of the dairy products listed are the responsibility of the respective sellers. Any disputes regarding product quality, delayed deliveries, or discrepancies in orders must be resolved directly with the vendor, although MilkDelights will assist in facilitating a fair resolution.
                </Typography>
                <Typography variant="body1" paragraph>
                    Prices, discounts, offers, and product availability are subject to change without prior notice, at the sole discretion of MilkDelights or the respective sellers. We reserve the right to cancel any order in case of unforeseen circumstances, technical issues, or inventory shortages.
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights does not guarantee uninterrupted access to the platform and shall not be held responsible for any technical glitches, server downtime, or force majeure events that may impact the shopping experience.
                </Typography>
                <Typography variant="body1" paragraph>
                    By using the MilkDelights application, customers agree to the terms of service and privacy policy outlined within the platform. We encourage users to verify product details, expiry dates, and storage instructions before making a purchase.
                </Typography>
                <Typography variant="body1" paragraph>
                    For any queries or support, please reach out to our customer service team.
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
