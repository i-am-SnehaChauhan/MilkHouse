import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();  // Initialize translation hook

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
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
              heading={t("testimonial.heading")}
              content={t("testimonial.sampleContent")}
              name={t("testimonial.name")}
              position={t("testimonial.position")}
            />
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
              heading={t("testimonial.heading")}
              content={t("testimonial.sampleContent")}
              name={t("testimonial.name")}
              position={t("testimonial.position")}
            />
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
              heading={t("testimonial.heading")}
              content={t("testimonial.sampleContent")}
              name={t("testimonial.name")}
              position={t("testimonial.position")}
            />
          </Slider>
        </ContainerSlider>
      </Container>
    </Wrapper>
  );
};

const Card = ({ img, heading, content, name, position }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>{heading}</AvatarHeading>
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
      <AvatarContent>{content}</AvatarContent>
      <AvatarChar>
        <AvatarTitle>{name}</AvatarTitle>, {position}
      </AvatarChar>
    </AvatarComponent>
  );
};

export default Testimonial;
