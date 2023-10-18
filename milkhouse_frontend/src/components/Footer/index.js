import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMobile,
  FaMailBulk
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LocationOn, Phone, Mail, Twitter, Facebook, YouTube, LinkedIn, Email } from '@mui/icons-material';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkTitleHr,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
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
  <List>
    <ListItem>
      <ListItemIcon>
        <LocationOn style={{ marginRight: '0.5rem' }} />
      </ListItemIcon>
      <ListItemText primary="IGDTUW, Kashmere Gate, ND-India" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Phone style={{ marginRight: '0.5rem' }} />
      </ListItemIcon>
      <ListItemText primary="+012 345 67890" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Mail style={{ marginRight: '0.5rem' }} />
      </ListItemIcon>
      <ListItemText primary="agrotechiam354@gmail.com" />
    </ListItem>
  </List>
</FooterLinkItems>
            
           
              <FooterLinkItems >
            
                  <FooterLinkTitle>Quick Links</FooterLinkTitle>
                

            
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/">Services</FooterLink>
                <FooterLink to="/develop">Destinations</FooterLink>
                <FooterLink to="/donate">Support and Donate</FooterLink>
              </FooterLinkItems>
           
            <FooterLinkItems>
  <FooterLinkTitle>Business Hours</FooterLinkTitle>
  <List>
    <ListItem>
      <ListItemText primary="Monday - Friday" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Saturday" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Sunday" />
    </ListItem>
  </List>
</FooterLinkItems>
           
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <FooterLinkItems className="socials">
              {/* Social media icons */}
            </FooterLinkItems>
            <SocialLogo onClick={handleClick}>MilkDelights</SocialLogo>
            <WebsiteRights>
              MilkDelights © {new Date().getFullYear()}&nbsp;All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;