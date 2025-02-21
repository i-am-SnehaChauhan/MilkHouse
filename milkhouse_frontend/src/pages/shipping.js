import React from 'react';
import { Container, Typography, Paper, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link as RouterLink } from 'react-router-dom';

export function ShippingPolicy() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                Shipping and Delivery Policy
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                Delivery Locations
                </Typography>
                <Typography variant="body1" paragraph>

                MilkDelights currently delivers to selected locations. To check if we deliver to your area, please enter your address at checkout. We are constantly expanding our delivery network, so stay tuned for updates.

                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                Delivery Timeframe
                </Typography>
                <Typography variant="body1" paragraph>
                &nbsp;- Orders placed before 4:00 PM will be processed and dispatched on the same day. <br/>

                &nbsp;- Standard delivery time is between 6 to 24 hours, depending on your location. <br/>

                &nbsp;- Delivery times may vary based on factors such as order volume, weather conditions, and unforeseen circumstances.
                {/* - Due to the perishable nature of dairy products, returns are only accepted in cases where: <br/>
                &nbsp;&nbsp;&nbsp;- The product is damaged during transit. <br/>
                &nbsp;&nbsp;&nbsp;- The wrong product has been delivered. <br/>
                &nbsp;&nbsp;&nbsp;- The product is expired at the time of delivery. <br/>
                - Customers must report any such issues within 24 hours of delivery with supporting images. <br/>
                - Once the return request is approved, the product must be returned in its original packaging.  */}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Order Tracking
                </Typography>
                <Typography variant="body1" paragraph>
                Once your order has been dispatched, you will receive a tracking link via email or SMS. You can use this link to check the real-time status of your delivery.
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                   Delivery Process
                </Typography>
                <Typography variant="body1" paragraph>
                - Our delivery agents will contact you upon arrival at the delivery location. <br/>

- If you are unavailable, your delivery can be cancelled. <br/>

{/* - Orders that cannot be delivered after multiple attempts may be canceled. */}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                Handling of Perishable Goods
                </Typography>
                <Typography variant="body1" paragraph>
                Since dairy products are perishable, we ensure that they are transported in temperature-controlled conditions. <br/>

Please ensure someone is available to receive the delivery to avoid spoilage.

We are not responsible for the deterioration of products due to unattended deliveries.
<Typography variant="h5" sx={{ mt: 4 }}>
Delayed or Failed Deliveries
                </Typography>
                <Typography variant="body1" paragraph>
                - In the event of a delay due to unforeseen circumstances, we will notify you promptly. <br/>

- If we fail to deliver due to reasons within our control, you may be eligible for a refund or rescheduled delivery. <br/>

- If the delay is caused due to incorrect address details provided by you, additional charges may apply for redelivery.
                </Typography>
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                Returns and Refunds
                </Typography>
                <Typography variant="body1" paragraph>
                Please refer to our <Link component={RouterLink} to="/refund-and-cancellation">Refund and Cancellation Policy</Link> for information on returns and refunds.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                For any queries regarding shipping and delivery, please reach out to us at<br/>
                    MilkDelights Support Team Email: milkdelights080@gmail.com <br/>
                    Phone: +91 9958614380
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
