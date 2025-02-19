import React from 'react';
import { Container, Typography, Paper, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function GrievanceRedressal() {
    return (
        <>
        <Navbar/>
        <Container component="main" maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Grievance Redressal Mechanism
                </Typography>
                <Typography variant="body1" paragraph>
                    MilkDelights is duty bound to provide fair treatment to our Consumer and Consumer grievances.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    What does "Grievance" mean?
                </Typography>
                <Typography variant="body1" paragraph>
                    Grievance means any issue related to the product/service which has been availed by the consumer from the MilkDelights Platform and the consumer is seeking resolution for the same.
                </Typography>
                <Typography variant="body1" paragraph>
                    In case of any query or complaint, the Consumer can approach us and reach out to us through the 'Contact' tab available on the navbar of this page.
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Journey:
                </Typography>
                <Typography variant="body1" paragraph>
                    1. Click on 'Contact' tab.<br />
                    2. It will open to MilkDelights Contact Support.<br />
                    3. Enter yoir details and type the issue you are facing in the message box.<br />
                    4. Submit.
                    5. Our team replies within 24-48 hours of the raised request.
                </Typography>
                <Typography variant="body1" paragraph>
                    If your query/complaint is not resolved and needs to be escalated: You can directly call us our support number mentioned in the Contact page i.e 9958614380. 24x7 with timimgs from 10am to 5pm.
                </Typography>
                {/* <Typography variant="h5" sx={{ mt: 4 }}>
                    Here are the details for Grievance Officer:
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Mr. Shremanth M</strong><br />
                    Designation: Senior Manager<br />
                    Flipkart Internet Pvt Ltd Block B (Begonia),<br />
                    8th Floor Embassy Tech Village,<br />
                    Outer Ring Road, Devarabeesanahalli Village,<br />
                    Varthur Hobli, Bengaluru East Taluk,<br />
                    Bengaluru District, Karnataka : 560103, India<br />
                    Contact no.: 044-45614700
                </Typography>
                <Typography variant="h5" sx={{ mt: 4 }}>
                    Our 'Grievance Redressal Mechanism' is as follows:
                </Typography>
                <Typography variant="body1" paragraph>
                    Upon the receipt of a Consumer Grievance on the channels specified above:<br />
                    - The Consumer shall receive an acknowledgment for its grievance within 48 (Forty-Eight) hours through email OR phone call or SMS.<br />
                    - The Consumer shall receive a system-generated "Unique ID" to track the grievance status.<br />
                    - "Consumer Care" and "Grievance Officer" shall take all the best endeavors to resolve the grievance as expeditiously within the timeline as prescribed in the applicable laws.
                </Typography> */}
                <Typography variant="body1" paragraph>
                    A Grievance will be considered as closed and disposed-off in any of the following instances, namely:<br />
                    - When the consumer is communicated by Consumer Care / Grievance Officer / any other person associated with the website and offers solutions to its grievance.
                </Typography>
                <Typography variant="body1" paragraph>
                    For more details, please visit our <Link component={RouterLink} to="/terms">Terms & Conditions</Link>.
                </Typography>
            </Paper>
        </Container>
        <Footer/>
        </>
    );
}
