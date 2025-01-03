import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import logo from "../../image/logo.png";
import { LocationOn, Phone, Mail } from '@mui/icons-material';
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

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* Our Office Section */}
            <FooterLinkItems>
              <FooterLinkTitle>{t('sections.ourOffice')}</FooterLinkTitle>
              <FooterLinkItems>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn style={{ marginRight: '0.5rem', color: '#f7bd00' }} />
                  </ListItemIcon>
                  <ListItemText primary={t('content.address')} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone style={{ marginRight: '0.5rem', color: '#f7bd00' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${t('content.phone')}: ${t('content.phoneNumber')}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Mail style={{ marginRight: '0.5rem', color: '#f7bd00' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${t('content.email')}: ${t('content.emailAddress')}`}
                  />
                </ListItem>
              </FooterLinkItems>
            </FooterLinkItems>

            {/* Quick Links Section */}
            <FooterLinkItems>
              <FooterLinkTitle>{t('sections.quickLinks')}</FooterLinkTitle>
              <FooterLinkItems>
                <ListItem>
                  <FooterLink to="/contact">
                    <ListItemText primary={t('content.contact')} />
                  </FooterLink>
                </ListItem>
                <ListItem>
                  <FooterLink onClick={handleClick} className="footer-link">
                    <ListItemText primary={t('content.services')} />
                  </FooterLink>
                </ListItem>
                <ListItem>
                  <FooterLink to="/donate" className="footer-link">
                    <ListItemText primary={t('content.supportAndDonate')} />
                  </FooterLink>
                </ListItem>
              </FooterLinkItems>
            </FooterLinkItems>

            {/* Business Hours Section */}
            <FooterLinkItems>
              <FooterLinkTitle>{t('sections.businessHours')}</FooterLinkTitle>
              <FooterLinkItems>
                <ListItem>
                  <ListItemText primary={t('content.mondayToFriday')} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={t('content.timing')} />
                </ListItem>
              </FooterLinkItems>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        {/* Socials and Rights */}
        <FooterLinkItems className="socials">
          <FooterLogo src={logo} />
          <SocialLogo onClick={handleClick}>{t('content.brandName')}</SocialLogo>
        </FooterLinkItems>
        <WebsiteRights>
          {t('footer.rights')}
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
