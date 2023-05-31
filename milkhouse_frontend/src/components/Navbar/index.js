import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon}from './NavbarElements.js'
import {FaBars} from 'react-icons/fa'
import {NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements.js'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ="/"> Milkhouse</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = "home">About</NavLinks>
                    </NavItem>
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
                        <NavLinks to = "signin">Sign In</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = "/signun">Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;