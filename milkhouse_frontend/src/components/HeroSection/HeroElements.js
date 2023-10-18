import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

`


export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    /* object-fit: cover; */
    background: #232a34;
`;

export const HeroContent = motion(styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
   
          
    `);

export const HeroH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-bottom: 34px;
    font-size: 3.6rem;
    line-height: 1.2;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

export const HeroP = styled.h2`
    font-size: 2.4rem;
    font-weight: 600;
    color: #000;
    text-align: center; 
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`;

