import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #C9D2FE;
`;
export const Container = styled.div`
    display: flex;
    height: max-content;
    padding:50px;
    justify-content: center;
    background-color: #ffffffc7;
`;

export const ContainerSlider = styled.div`
    width : 65%;
`;

export const AvatarHeading = styled.p`
    font-size: 35px;
    color: black;
    font-weight: 500;
    font-style: italic;
`

export const AvatarComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: black;
   
`

export const AvatarTitle= styled.span`
    font-weight: 500;
    color: green;

`;

export const AvatarChar = styled.p`
    font-style: italic;
    ${'' /* margin-top: 10px; */}
`
export const AvatarContent = styled.p`

`
