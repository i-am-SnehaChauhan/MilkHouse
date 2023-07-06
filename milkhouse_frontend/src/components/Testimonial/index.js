import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import {
  Wrapper,
  Container,
  ContainerSlider,
  AvatarComponent,
  AvatarTitle,
  AvatarChar,
  AvatarContent,
  AvatarHeading,
} from "./TestimonialCSS";

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerSlider>
          <Slider
            autoplay={true}
            autoplaySpeed={3000}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
            <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
          </Slider>
        </ContainerSlider>
      </Container>
    </Wrapper>
  );
};

const Card = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>What our Client says ___</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem
        tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec
        turpis vel, semper malesuada ante. Idac bibendum scelerisque non non
        purus. Suspendisse varius nibh non aliquet.
      </AvatarContent>

      <AvatarChar>
        <AvatarTitle>PAULA WILSON</AvatarTitle>, Dairy Analyst
      </AvatarChar>
    </AvatarComponent>
  );
};

export default Testimonial;
