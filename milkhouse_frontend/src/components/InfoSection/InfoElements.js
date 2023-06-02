import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;    
    height: 457px;
    background: ${({lightBg}) => (lightBg ? '#FFC107' : '#FFC107')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 257px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    margin-top: auto;
    padding: 0 24px;
 
`;


export const Heading = styled.h1`
    margin-top: 45px;
    font-size: 65px;
    font-weight: 600;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        margin-top: 25px;
        font-size: 22px;
    }

`;

export const Subtitle = styled.p`
    
    margin-bottom: 35px;
    font-size: 23px;
    color: #000;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;


