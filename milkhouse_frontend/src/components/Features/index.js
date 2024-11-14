import React from "react";
import {
  Container,
  Containertitle,
  FeaturesCard,
  FeaturesIcon,
  FeaturesH2,
  FeaturesP,
  FeaturesWrapper,
} from "./FeatureElements";
import Icon1 from "../../image/e-caatle.jpg";
import Icon2 from "../../image/modern-dairy.jpg";
import Icon3 from "../../image/home-delivery.jpg";
import Icon4 from "../../image/dairy-products.jpg";
import Icon5 from "../../image/a2-milk.jpg";
import Icon6 from "../../image/fodder.jpg";

const Features = () => {
  return (
    <Container id="featureSection">
        <Containertitle>
            Features
        </Containertitle>
      <div className="row">
      <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon1} />
            </FeaturesCard>
            <FeaturesH2>Modern dairy</FeaturesH2>
            <div className="text">
            By providing a comprehensive range of services, our platform aims to streamline operations, enhance productivity, and drive sustainable growth for farmers and stakeholders.
            </div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon2} />
            </FeaturesCard>
            <FeaturesH2>Customer Support</FeaturesH2>
            <div className="text">
            Dedicated support for customer inquiries and feedback.

            </div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon3} />
            </FeaturesCard>
            <FeaturesH2>Home Delivery Services</FeaturesH2>
            <div className="text">
            We understand the importance of timely delivery, and our dedicated team ensures that your cart reaches you promptly.
            </div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon4} />
            </FeaturesCard>
            <FeaturesH2>Best Quality Products</FeaturesH2>
            <div className="text">
            Our dairy products are carefully crafted using premium ingredients and state-of-the-art production techniques.  
            </div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon5} />
            </FeaturesCard>
            <FeaturesH2>Healthy A2 Milk</FeaturesH2>
            <div className="text">
            Nurture your well-being with A-2 milk—wholesome, easy to digest, and packed with natural benefits for a healthier lifestyle.
            </div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon6} />
            </FeaturesCard>
            <FeaturesH2>Connecting Customers and Dairy Owners</FeaturesH2>
            <div className="text">
            A unified platform that simplifies dairy shopping for customers while providing dairy owners with tools to manage and grow their business.
            </div>
          </FeaturesP>
        </div>
      </div>
    </Container>
  );
};

export default Features;
