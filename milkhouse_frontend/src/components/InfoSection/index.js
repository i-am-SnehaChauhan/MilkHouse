import React from 'react'
import Icon1 from "../../image/svg-1.svg";
import Icon2 from "../../image/svg-2.svg";
import Icon3 from "../../image/svg-3.svg";
import { InfoContainer, InfoWrapper, InfoRow, Column, TextWrapper, TopLine, Heading, Subtitle,ServicesContainer,
  ServicesH1,
  ServicesWrapper1,
  ServicesWrapper2,
  ServicesCol,
  ServicesRow,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP, } from './InfoElements';
  const url =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690471828/milkhouse/kfwjcpdgayndphlure4j.png";
const url1 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472973/milkhouse/lqlhhvvryfd5hdvs7dij.png";
const url2 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472807/milkhouse/apqbx3euquv7rl8fwdc3.png";
const url3 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690473090/milkhouse/pnvx5ybehzvjwyr3syqq.png";
const Icon4 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690473256/milkhouse/hqhvzef2yeayc862wnsa.png";
const About = () => {
  return (
    <>
      <InfoContainer>
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
