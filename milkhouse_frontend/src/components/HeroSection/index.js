import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import { Container } from "@mui/system";
import { Box, Divider, Grid, Icon, Paper, Stack, Typography,} from "@mui/material";
import { HeroContainer, ImageBg, HeroBg } from "./HeroElements";
import Image from "../../image/homebg.jpg";
import {
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
// import image from '../../image/bg.jpg'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const RightSubSectionJSX = (
    // Hero Image
    <img
      src={Image}
      alt="hero_image"
      style={{
        width: "95%",
      }}
    />
  );

  const { t } = useTranslation();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ background: "linear-gradient(45deg, #000000 30%, #FF8E53 90%)" }}
      >
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            py={5}
            sx={{ backgroundColor: "transparent", maxHeight: "100vh" }}
          >
            <HeroContainer>
              <HeroContent>
                <HeroP>
                  {t('welcome')}
                </HeroP>
                {/* {LeftSubSectionJSX} */}
                <HeroBtnWrapper>
                  <Button
                    as={Link}
                    to="/dairy"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </HeroBtnWrapper>
              </HeroContent>
            </HeroContainer>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ backgroundColor: "transparent", maxHeight: "100vh" }}
          >
            {RightSubSectionJSX}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroSection;
