import React, { useEffect, useState }  from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon}from './NavbarElements.js'
import {FaBars} from 'react-icons/fa'
import {NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements.js'

const glassStyle = {
    background: "rgba(40, 30, 30, 0.3)",
    // borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(7.1px)",
    webkitBackdropFilter: "blur(7.1px)",
    border: "1px solid rgba(40, 30, 30, 0.18);"
  }

const Navbar = ({toggle}) => {
      const [navbarBg, setNavbarBg] = useState(glassStyle);



  return (
    <>
        <Nav style={navbarBg}>
            <NavbarContainer>
                <NavLogo to ="/"> Milkhouse</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = "about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "contactus">Contact Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "Feedback">Feedback</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    <NavBtnLink to = "/signup">Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;