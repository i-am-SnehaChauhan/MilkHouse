import React from 'react'
import Icon1 from "../../image/svg-1.svg";
import Icon2 from "../../image/svg-2.svg";
import Icon3 from "../../image/svg-3.svg";
import { InfoContainer, InfoWrapper, InfoRow, Column, TextWrapper, TopLine, Heading, Subtitle,ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP, } from './InfoElements';
const About = () => {
  return (
    <>
      <InfoContainer id="aboutSection">
        <InfoWrapper>
          <Subtitle>
                <Heading>Welcome to MilkHouse Farm</Heading>
                <TextWrapper>MilkHouse is pleased to welcome you. Here you will find a variety of healthy and fresh dairy
products that our farmers and cows proudly made on our farm.</TextWrapper>
</Subtitle>
        <ServicesP>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>E-Cattle Cart</ServicesH1>
                  <ServicesH2>
                  Manage your livestock effectively which provides you all info at one place.
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
              <ServicesIcon
              src={Icon2}>
                </ServicesIcon>

                <InfoRow>
                  <ServicesH1>Milk Testing</ServicesH1>
                  <ServicesH2>
                  Get your milk tested with the latest technologies and monitor from anywhere.
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon3}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Shopping</ServicesH1>
                  <ServicesH2>
                  Buy our fresh products directly from our dairy and Experience Health Benifits.
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
          </ServicesP>
          </InfoWrapper> 
      </InfoContainer>
    </>
  )
}

export default About;
