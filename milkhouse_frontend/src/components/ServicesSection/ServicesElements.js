import styled from "styled-components";

export const ServicesContainer = styled.div`
    
    height: 900px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background: #8EF0A0;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ServicesWrapper1 = styled.div`
    max-width: 1300px;
    height: 225px;
    margin-top: 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 100px;
    padding: 0 50px;
    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const ServicesWrapper2 = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 549px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const ServicesCol = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    //width: 100%;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 450px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    transition: all 0.2s ease-in-out;
    transform: translateY(-50%);
    &:hover{
        transform: translateY(-40%);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`;

export const ServicesIcon = styled.img`
    margin-top: 1px;
    height: auto;
    width: auto;
    margin-bottom: 10px;

`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

`;

export const ServicesH2 = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
`;

export const ServicesP = styled.p`
   font-size: 1.4rem;
   line-height: 1.6;
   margin-bottom: 20px;
   text-align: center; 
   font-family: 'Open Sans', sans-serif;
`;





