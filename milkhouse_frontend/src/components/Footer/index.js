import React from 'react'
import { Container, Grid, Typography, Button, TextField } from '@mui/material';
import { LocationOn, Phone, Mail, Twitter, Facebook, YouTube, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="container-fluid bg-light footer mt-5 py-5" style={{backgroundColor:"#ede1d7"}}>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={3} md={6}>
            <Typography variant="h5" className="text-black mb-4">Our Office</Typography>
            <Typography variant="body2" className="mb-2"><LocationOn className="me-3" />123 Street, New York, USA</Typography>
            <Typography variant="body2" className="mb-2"><Phone className="me-3" />+012 345 67890</Typography>
            <Typography variant="body2" className="mb-2"><Mail className="me-3" />info@example.com</Typography>
            <div className="d-flex pt-3">
              <Button className="btn-square btn-secondary rounded-circle me-2" href=""><Twitter /></Button>
              <Button className="btn-square btn-secondary rounded-circle me-2" href=""><Facebook /></Button>
              <Button className="btn-square btn-secondary rounded-circle me-2" href=""><YouTube /></Button>
              <Button className="btn-square btn-secondary rounded-circle me-2" href=""><LinkedIn /></Button>
            </div>
          </Grid>
          <Grid item lg={3} md={6} container direction="column">
            
            <Typography variant="h5" className="text-black mb-4">Quick Links</Typography>
            <Button className="btn-link" href="/signin">About Us</Button>
            <Button className="btn-link" href="/contact">Contact Us</Button>
            <Button className="btn-link" href="">Our Services</Button>
            <Button className="btn-link" href="">Terms &amp; Condition</Button>
            <Button className="btn-link" href="">Support</Button>
          </Grid>
          <Grid item lg={3} md={6}>
            <Typography variant="h5" className="text-black mb-4">Business Hours</Typography>
            <Typography variant="body1" className="mb-1">Monday - Friday</Typography>
            <Typography variant="body2">09:00 am - 07:00 pm</Typography>
            <Typography variant="body1" className="mb-1">Saturday</Typography>
            <Typography variant="body2">09:00 am - 12:00 pm</Typography>
            <Typography variant="body1" className="mb-1">Sunday</Typography>
            <Typography variant="body2">Closed</Typography>
          </Grid>
          <Grid item lg={3} md={6}>
            <Typography variant="h5" className="text-black mb-4">Newsletter</Typography>
            <Typography variant="body2">Subscribe to our daily newsletter.</Typography>
            <div className="position-relative w-100">
              <TextField className="form-control bg-transparent w-100 py-3 ps-4 pe-5" variant="outlined" placeholder="Your email" />
              <Button type="button" className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"><Email />SignUp</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
