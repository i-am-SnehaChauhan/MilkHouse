import React from 'react'
import {Container, Containertitle, FeaturesCard,FeaturesIcon, FeaturesH2, FeaturesP, FeaturesWrapper } from './FeatureElements'
import Icon1 from "../../image/e-caatle.jpg";
import Icon2 from "../../image/modern-dairy.jpg";
import Icon3 from "../../image/home-delivery.jpg";
import Icon4 from "../../image/dairy-products.jpg";
import Icon5 from "../../image/a2-milk.jpg";
import Icon6 from "../../image/fodder.jpg";

const Features = () => {
  return (
    <Container>
        <Containertitle>
            Features
        </Containertitle>


        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon2} />
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
                <FeaturesIcon src={Icon3} />
                <FeaturesH2>
                <b>Home Delivery Services</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>


        </FeaturesWrapper>

        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon4} />
                <FeaturesH2>
                <b>Best Quality Products</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon5} />
                <FeaturesH2>
                <b>Healthy A-two Milk</b>
                </FeaturesH2>
                <FeaturesP>
                
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon6} />
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