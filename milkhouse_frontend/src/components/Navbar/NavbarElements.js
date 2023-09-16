import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: relative;
    background: #403126;
    z-index:1000;
    ::before{
      position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: #362920;
    }
`;
export const Wrapper=styled.div`
    opacity: 1;
    z-index: 99901;
    visibility: visible;
    position:fixed;
    animation-name: slideInDown;
    animation-duration: 1.25s;

    @keyframes slideInDown{
      0% {
    transform: translate3d(0,-100%,0);
    visibility: visible;
      }
      100% {
    transform: translate3d(0,0,0);
      }
    }
   
`;
export const NavbarContainer = styled.div`
 position: static;
    max-width: 100%;
    padding: 0px 15px;
    margin: 0 auto;
`;

export const NavLogo = styled(LinkR)`
 background-color: rgb(237, 225, 215);
  color: #362920;
  font-size: 3rem;
  display: flex;
  align-items: center;
  /* font-family: "Roboto", sans-serif; */
  font-weight: bold;
  padding: 1rem;
  z-index: 10;
  ${"" /* text-decoration: none; */}
  text-align: center; /* Center the NavLogo on small screens */

  &:hover {
    /* mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #f7bd00 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-size: 200%;
    animation: shine 3s infinite; */
    color: #f7bd00;
    cursor: pointer;
  }

  @keyframes shine {
    from {
      mask-position: 150%;
    }

    to {
      mask-position: -50%;
    }
  }
`;

export const NavPageLinks = styled(LinkR)`
  /* color: #ffffff; */
  /* font-family: Arial, Helvetica, sans-serif; */
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    width: 0%;
    height: 5%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #28b86b;
    transition: all 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #01bf71;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const MobileIcon = styled.div`
  position: relative;
    width: 50px;
    height: 50px;
    line-height: 44px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 20px;
    cursor: pointer;
    border-radius: 50%;
    float: right;
    margin: 8px 0;
    margin-left: 15px;
    display: none;

  @media screen and (max-width: 1139px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: -66px;
    transition: .5s;
  @media screen and (max-width: 1139px) {
    justify-content: space-between;
    padding-right: 30px;
  }
`;

export const NavItem = styled.ul`
  position: relative;
    margin: 0px;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const NavLinks = styled(LinkS)`
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    width: 0%;
    height: 5%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #f7bd00;
    
    transition: all 0.3s ease-in;
  }

  &:hover::after {
    width: 100%;
    color:#f7bd00;
  }

  &:hover {
    color: #f7bd00;
  }

  &.active {
    border-bottom: 3px solid #f7bd00;
  }
`;

export const NavBtn = styled.ul`
      padding: 0px;
    display: block !important;

  /* @media screen and (max-width: 768px) {
    display: none;
    margin-top: 0px;
    margin-right: 45px;
  } */
`;

export const NavBtnLink = styled.div`
  /* border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  } */
  position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    border: 1px dashed #5e513c;
`;

export const Item=styled.li`
  position: relative;
    padding: 15px 30px;
   transition: all 300ms ease;
   
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    opacity: 1;
   transition: all 300ms ease;
   & :hover{
    color: #f7bd00;
   }
   ::before{
    position: absolute;
    content: '';
    height: 35px;
    width: 2px;
    background-color: #4d3c2e;
    border-right: 1px solid #271e17;
    top: 16px;
    right: 0;
    box-sizing: border-box;
   }
   @media screen and (max-width: 1069px) {
    display: none;
    margin-top: 0px;
    margin-right: 45px;
  }
`;
 export const Button=styled.button`
 align-items: center;
  appearance: none;
  padding: 12px 28px;
  background-image: radial-gradient(100% 100% at 100% 0px, #FFB300 0px, #41170a 100%);
  border: 0;
  margin:auto;
  font-size: 17px;
    line-height: 30px;
    font-weight: 600;
    text-transform: uppercase;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "Playfair Display",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  /* padding-left: 16px;
  padding-right: 16px; */
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;

  &:hover{
    box-shadow: rgba(58, 65, 111, 0.5) 0px 4px 8px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, #da880f 0px -3px 0px inset;
  transform: translateY(-2px);
  color:#fff;
  }
  &:focus{
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  @media screen and (max-width: 1069px) {
    display: none;
    margin-top: 0px;
    margin-right: 45px;
  }
 `;


  
