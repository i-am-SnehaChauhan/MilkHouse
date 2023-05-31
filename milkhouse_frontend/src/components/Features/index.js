import React from 'react'
import {Container, Containertitle, FeaturesCard,FeaturesIcon, FeaturesH2, FeaturesP, FeaturesWrapper } from './FeatureElements'
import Icon1 from "../../image/dairy.png";

const Features = () => {
  return (
    <Container>
        <Containertitle>
            Features
        </Containertitle>


        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>Modern dairy</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>E-Cattle Cart</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>Home Delivery Services</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>


        </FeaturesWrapper>

        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>Best Quality Products</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>Healthy A-two Milk</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>Nutritious Fooder</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>
    </Container>
  )
}

export default Features