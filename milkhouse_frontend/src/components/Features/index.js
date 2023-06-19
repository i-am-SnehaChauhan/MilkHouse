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
                By providing a comprehensive range of services, our platform aims to streamline operations, enhance productivity, and drive sustainable growth for farmers and stakeholders.
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>
                <b>E-Cattle Cart</b>
                </FeaturesH2>
                <FeaturesP>
                Cattle Cart ensures the well-being of dairy animals while streamlining record-keeping and enhancing operational efficiency.

                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon3} />
                <FeaturesH2>
                <b>Home Delivery Services</b>
                </FeaturesH2>
                <FeaturesP>
                We understand the importance of timely delivery, and our dedicated team ensures that your cart reaches you promptly.
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
                Our dairy products are carefully crafted using premium ingredients and state-of-the-art production techniques.  
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon5} />
                <FeaturesH2>
                <b>Healthy A-two Milk</b>
                </FeaturesH2>
                <FeaturesP>
                Nurture your well-being with our A-2 milk, a wholesome and naturally healthier choice that offers enhanced digestibility and potential benefits and nourishing lifestyle.
                </FeaturesP>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesIcon src={Icon6} />
                <FeaturesH2>
                <b>Nutritious Fooder</b>
                </FeaturesH2>
                <FeaturesP>
                Nourished livestock with our high-quality and nutritionally dense fodder and carefully selected ingredients and meticulous production process result in a well-balanced feed.
                </FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>
    </Container>
  )
}

export default Features