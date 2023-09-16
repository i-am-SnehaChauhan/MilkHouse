import styled from "styled-components";

export const ServicesContainer = styled.div`
   padding: 300px 0 70px;
    margin-top: -230px;
    background-image: url(http://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/bg-1.jpg);
    background-size: cover;
`;

export const ServicesWrapper1 = styled.div`
   margin-top: 20px;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    margin: 0px 0px 15px;
    color: #595959;
`;
export const ServicesWrapper2 = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
    box-sizing: border-box;
    display: block;
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

export const ServicesRow = styled.div`
   display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    
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
   position: relative;
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;

`;

export const ServicesH2 = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
`;

export const ServicesP = styled.p`
      position: relative;
    margin-bottom: 50px;
`;





