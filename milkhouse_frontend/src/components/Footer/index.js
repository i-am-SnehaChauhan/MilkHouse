import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle,FooterText, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, FooterForm, Footerinput} from './FooterElements';
const Footer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
            <SocialLogo onClick={handleClick}>
              MilkHouse
            </SocialLogo>
                <FooterLinkItems className='about'>
                       <FooterLink to="/signin">About Us</FooterLink>
                       <FooterLink to="/signin">Contact Us</FooterLink>
                       <FooterLink to="/signin">Our Farmers</FooterLink>
                       <FooterLink to="/signin">Services</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems className='contact'>
                       <FooterLink to="/contact">Our Blog</FooterLink>
                       <FooterLink to="/">Our Gallery</FooterLink>
                       <FooterLink to="/">Products</FooterLink>
                       <FooterLink to="/">Shop</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>NewsLetter</FooterLinkTitle>
                    <FooterText>Get latest updates and offers.</FooterText>
                    <FooterForm className="form-group">
                        <Footerinput placeholder="Enter your Email"
								type="email"
								id="email"
								require />
                    </FooterForm>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                
            <FooterLinkItems className='socials' >
              <FooterLink className="icons youtube" style={{ backgroundColor:"#FF0000"}}><FaYoutube style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons twitter" style={{ backgroundColor:"#1DA1F2"}}><FaTwitter style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons linkdn" style={{ backgroundColor:"#0077B5"}}><FaLinkedin style={{ fontSize: '22px'}}/> </FooterLink>
              <FooterLink className="icons insta" style={{ backgroundColor:"#E4405F"}} ><FaInstagram style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons fb" style={{ backgroundColor:"#1877F2"}}><FaFacebook style={{ fontSize: '22px'}}  /> </FooterLink>
            <FooterLink className="icons github" style={{ backgroundColor:"black"}} ><FaGithub style={{ fontSize: '26px'}}  /> </FooterLink>

            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>MilkHouse © {new Date().getFullYear()}&nbsp;All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
