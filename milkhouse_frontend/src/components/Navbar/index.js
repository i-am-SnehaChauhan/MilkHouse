import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon } from './NavbarElements.js';
import { FaBars } from 'react-icons/fa';
import { NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements.js';
import { useNavigate } from "react-router-dom";

const glassStyle = {
  background: "rgba(40, 30, 30, 0.3)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  WebkitBackdropFilter: "blur(7.1px)", // Updated property name
  border: "1px solid rgba(40, 30, 30, 0.18)",
};


const Navbar = ({ toggle }) => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  const [navbarBg] = useState(glassStyle);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Nav style={navbarBg}>
        <NavbarContainer>
          <NavLogo to="/">MilkHouse</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="features">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleContactClick}>
                Contact{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Feedback">Feedback</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            {/* <div id="google_translate_element"></div> */}
          </NavBtn>
         
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
