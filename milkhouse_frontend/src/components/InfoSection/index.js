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
products directly from our farm.</TextWrapper>
</Subtitle>
        <ServicesP>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Serves Dual Purpose</ServicesH1>
                  <ServicesH2>
                  A unified platform that simplifies dairy shopping for customers while providing dairy owners with tools to manage and grow their business.
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
                  <ServicesH1>Customer Support</ServicesH1>
                  <ServicesH2>
                  Dedicated support for customer inquiries and feedback.
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon3}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>E- Shopping</ServicesH1>
                  <ServicesH2>
                  Buy our fresh products directly from our dairy and Experience health benefits.
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
