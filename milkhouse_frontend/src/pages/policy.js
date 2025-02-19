import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
export function PrivacyPolicy() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Thank you for choosing MilkDelights
                </Typography>
                <Typography variant="body1" paragraph>
                    Your trusted e-commerce platform for dairy products. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use the MilkDelights mobile application and website.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    1. Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                    When you use MilkDelights, we may collect the following types of information:
                </Typography>
                <Typography variant="body1" paragraph>
                    a) Personal Information: Name, email address, phone number, delivery address, and payment information. Account credentials such as username and password.
                </Typography>
                <Typography variant="body1" paragraph>
                    b) Transaction Information: Details about the products you purchase, order history, and payment status.
                </Typography>
                <Typography variant="body1" paragraph>
                    c) Device and Usage Information: Information about your device (such as IP address, device type, and operating system). Browsing activity, app interactions, and preferences.
                </Typography>
                <Typography variant="body1" paragraph>
                    d) Location Information: With your consent, we may collect precise geolocation data to improve delivery services.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    2. How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights uses the information we collect to:
                </Typography>
                <Typography variant="body1" paragraph>
                    - Process and fulfill your orders, including delivery and payment verification. <br/>
                    - Communicate with you regarding your orders, promotions, and support inquiries. <br/>
                    - Improve our application, services, and user experience. <br/>
                    - Prevent fraudulent activities and ensure secure transactions.<br/> 
                    - Comply with legal obligations and enforce our terms of service.<br/>
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    3. Sharing Your Information
                </Typography>
                <Typography variant="body1" paragraph>
                    We do not sell or rent your personal information to third parties. However, we may share your information with:
                </Typography>
                <Typography variant="body1" paragraph>
                    Service Providers: Third-party vendors who help us with payment processing, order fulfillment, and app analytics.<br/>
                    Logistics Partners: To facilitate timely and accurate delivery of your orders. <br/>
                    Legal Authorities: If required by law, court orders, or to protect our legal rights.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    4. Data Security
                </Typography>
                <Typography variant="body1" paragraph>
                    We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    5. Your Rights and Choices
                </Typography>
                <Typography variant="body1" paragraph>
                    You have the right to: Access, update, or delete your personal information through your account settings. Opt-out of marketing communications by following the unsubscribe instructions in our emails. Request a copy of the personal data we hold about you.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    6. Cookies and Tracking Technologies
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights may use cookies and similar technologies to enhance your browsing experience, remember your preferences, and gather usage data. You can manage your cookie preferences through your device settings.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    7. Third-Party Links
                </Typography>
                <Typography variant="body1" paragraph>
                    Our application may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    8. Children's Privacy
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights does not knowingly collect personal information from children under the age of 13. If we become aware that we have collected data from a child without parental consent, we will take immediate steps to delete such information.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    9. Changes to This Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be communicated through the app or via email. Your continued use of MilkDelights after such changes constitutes your acceptance of the new Privacy Policy.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    10. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at: <br/>
                    MilkDelights Support Team Email: milkdelights080@gmail.com <br/>
                    Phone: +91 9958614380
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
