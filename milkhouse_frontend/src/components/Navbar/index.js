import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements.js'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ="/">
                    Milkhouse
                </NavLogo>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;