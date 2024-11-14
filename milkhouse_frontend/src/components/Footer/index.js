import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import logo from "../../image/logo.png";
import { LocationOn, Phone, Mail, Twitter, Facebook, YouTube, LinkedIn, Email } from '@mui/icons-material';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  FooterLink,
  SocialLogo,
  WebsiteRights, 
} from "./FooterElements";
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          
            <FooterLinkItems>
  <FooterLinkTitle>Our Office</FooterLinkTitle>
  <FooterLinkItems>
  <ListItem>
      <ListItemIcon>
        <LocationOn style={{ marginRight: '0.5rem',color:' #f7bd00' }} />
      </ListItemIcon>
      <ListItemText primary="IGDTUW, Kashmere Gate, ND-India" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Phone style={{ marginRight: '0.5rem',color:' #f7bd00' }} />
      </ListItemIcon>
      <ListItemText primary="+012 345 67890" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Mail style={{ marginRight: '0.5rem',color:' #f7bd00' }} />
      </ListItemIcon>
      <ListItemText primary="milkdelights080@gmail.com" />
    </ListItem>
  </FooterLinkItems>
</FooterLinkItems>
            
           
<FooterLinkItems>
  <FooterLinkTitle>Quick Links</FooterLinkTitle>
  <FooterLinkItems>
  <ListItem>
      <FooterLink to="/contact">
        <ListItemText primary="Contact" />
      </FooterLink>
    </ListItem>
    <ListItem>
      <FooterLink onClick={handleClick}className="footer-link">
        <ListItemText primary="Services" />
      </FooterLink>
    </ListItem>
    {/* <ListItem>
      <FooterLink to="/develop" className="footer-link">
        <ListItemText primary="Destinations" />
      </FooterLink>
    </ListItem> */}
    <ListItem>
      <FooterLink to="/donate" className="footer-link">
        <ListItemText primary="Support and Donate" />
      </FooterLink>
    </ListItem>
  </FooterLinkItems>
</FooterLinkItems>
           
            <FooterLinkItems>
  <FooterLinkTitle>Business Hours</FooterLinkTitle>
  <FooterLinkItems>
    <ListItem>
      <ListItemText primary="Monday - Friday" />
    </ListItem>
    <ListItem>
      <ListItemText primary="10 AM - 5 PM" />
    </ListItem>
    {/* <ListItem>
      <ListItemText primary="Sunday" />
    </ListItem> */}
  </FooterLinkItems>
</FooterLinkItems>
           
          </FooterLinksWrapper>
        </FooterLinksContainer>
            <FooterLinkItems className="socials">
            <FooterLogo src={logo}/> <SocialLogo onClick={handleClick}>MilkDelights</SocialLogo>
            </FooterLinkItems>
            <WebsiteRights>
              MilkDelights © {new Date().getFullYear()}&nbsp;All rights reserved.
            </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;