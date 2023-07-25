import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import QRCode from 'qrcode.react';

import donateImage from '../../assets/donation.jpg';// Import the image from the assets folder

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(7), // Limit the container width for better readability
  marginTop: '50px', // Center the container horizontally
}));

const Heading = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  marginTop : '80px',
  alignText: 'center',
});

const SubHeading = styled(Typography)({
  fontSize: '1.2rem',
  marginBottom: '2rem',
});

const DonateButton = styled(Button)({
  fontSize: '1.2rem',
  padding: '0.8rem 2rem',
  alignItems: 'center', 
});

const Content = styled(Box)({
  textAlign: 'left', // Align content to the left
  marginBottom: '2rem',
});

const QRCodeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  marginBottom: theme.spacing(13),
}));

const LeftSection = styled(Box)({
  flex: 1,
   
});

const RightSection = styled(Box)({
  flex: 1,
});

const DonationPage = () => {
  // Dummy QR code data (you can replace this with real data)
  const qrCodeData = 'YourQRCodeDataHere';

  return (
    <>
    <Box style={{textAlign: 'center'}}>
    <Heading>Donate to Dairy</Heading>
    </Box>
    <Container>
      <LeftSection>
        <img src={donateImage} alt="Donate" style={{ width: '100%', marginBottom: '2rem', borderRadius: '8px' }} />
        <SubHeading>
          Your generous donation will support dairy farmers and help maintain the highest quality dairy products.
        </SubHeading>
        
        <Content>
          {/* More Content */}
          {/* Add more paragraphs or content as needed */}
        </Content>
      </LeftSection>
      <RightSection>
        <QRCodeContainer>
          {/* Display the fake QR code */}
          <QRCode value={qrCodeData} size={400} />
        </QRCodeContainer>
      </RightSection>
    </Container>
    </>
  );
};

export default DonationPage;
