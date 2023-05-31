import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SidebarBtnWrap} from './SidebarElements.js'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon> 
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to = "services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to = "contactus" onClick={toggle}>
                    Contact Us
                </SidebarLink>
                <SidebarLink to = "signin" onClick={toggle}>
                    Sign In
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to = "/signup">
                    Sign Up
                </SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
         
                
  )
}

export default Sidebar