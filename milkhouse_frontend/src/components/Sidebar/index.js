import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SidebarBtnWrap} from './SidebarElements.js'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about">
                    About
                </SidebarLink>
                <SidebarLink to = "services">
                    Services
                </SidebarLink>
                <SidebarLink to = "contactus">
                    Contact Us
                </SidebarLink>
                <SidebarLink to = "signin">
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