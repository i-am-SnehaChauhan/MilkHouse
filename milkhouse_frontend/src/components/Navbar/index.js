import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon,Wrapper,Button} from './NavbarElements.js';
import { FaBars,FaRegWindowClose } from 'react-icons/fa';
import { NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,Item,NavPageLinks } from './NavbarElements.js';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { Button } from '../ButtonElements'

const glassStyle = {
  background: "rgba(40, 30, 30, 0.3)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  WebkitBackdropFilter: "blur(7.1px)", // Updated property name
  border: "1px solid rgba(40, 30, 30, 0.18)",
};



// Function to perform a search (you can customize this)


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
  const [searchValue, setSearchValue] = useState("");
  const [navbarBg] = useState(glassStyle);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleBlogsClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/blogs");
  };
  // const handleFeedbackClick = () => {
  //   setIsOpen(false); // Close the navbar
  //   navigate("/feedback");
  // };
  const onHover = () => {
    setHover(!hover)
}
  const handleHomeClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleAboutClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleServicesClick = () => {
    setIsOpen(false); // Close the navbar
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleDonationClick = () => {
    navigate("/donation");
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const performSearch = () => {
    // Redirect to a search results page or perform the search action here
    console.log("Performing search for:", searchValue);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
   
     <div class="main-content">
            <NavbarContainer>
            <NavLogo to="/">MilkDelights</NavLogo>
                <Nav>
                    <NavBtnLink></NavBtnLink>

                    <NavMenu isOpen={isOpen}>
                        {/* <!--Mobile Navigation Toggler--> */}
                        <MobileIcon onClick={handleToggle}>
                        {isOpen ? <FaRegWindowClose /> : <FaBars />}
                        {/* <Wrapper></Wrapper> */}
                        </MobileIcon>

                        {/* <!-- Main Menu --> */}
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <NavBtn>
                                <NavItem>
                                {/* <Item><NavLinks to="/">Home</NavLinks></Item> */}

<Item><NavLinks to="about" onClick={handleAboutClick}>About</NavLinks></Item>
<Item><NavLinks to="features"  onClick={handleServicesClick}>Services</NavLinks>
</Item>
<Item><NavLinks to="#" onClick={handleContactClick}>
                Contact{" "}
              </NavLinks>
              </Item>
<Item><NavLinks to="Feedback">Feedback</NavLinks></Item>
<Item><NavLinks to="#" onClick={handleDonationClick}>
                Donation
              </NavLinks></Item>
              <Button as={Link} to="/signin">Sign In</Button>
<Button as={Link} to="/signup">Sign Up</Button>
                                </NavItem>
                            </NavBtn>
                            </nav>
                        {/* <!-- Main Menu End--> */}
                                                {/* <button type="button" className="theme-btn search-toggler"><span className="stroke-gap-icon icon-Search"></span></button>  
                                                                       */}
                                                                       
                    	                    </NavMenu>
                </Nav>
                
            </NavbarContainer>
</div>
  );
};

export default Navbar;
