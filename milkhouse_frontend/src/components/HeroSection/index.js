import React,{useState, useEffect} from 'react'
import Typed from "typed.js";
import { Container } from "@mui/system";
import {
  Box,
  Divider,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { HeroContainer, ImageBg, HeroBg } from './HeroElements'
import Image from '../../image/homebg.jpg'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import { Link } from 'react-router-dom'
// import image from '../../image/bg.jpg'
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  // const el = React.useRef(null);

  // useEffect(() => {

  //   const typed = new Typed(el.current, {
  //     strings: ["Welcome to MilkDelights"],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     loop: true,
  //     showCursor: false,
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  const onHover = () => {
      setHover(!hover)
  }
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
  return (
    // <HeroContainer>
    //     <HeroBg>
    //     <ImageBg src={Image} type='image/png' />
    //     </HeroBg>
    //     <HeroContent whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    //     transition={{ duration: 0.8 }}>
    //         <HeroH1>
    //         <span ref={el} style={{ display: "inline-block" }} />
    //         </HeroH1>
    //         <HeroP>
    //             Sign up for a new account today.
    //         </HeroP>
    //         <HeroBtnWrapper>
    //             <Button as={Link} to="/dairy" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
    //                 Get Started {hover ? <ArrowForward /> : <ArrowRight />}
    //             </Button>
    //         </HeroBtnWrapper>
    //     </HeroContent>
    // </HeroContainer>
    <>
    <Container maxWidth="xl" sx={{ background: 'linear-gradient(45deg, #000000 30%, #FF8E53 90%)'}}>
                <Grid container alignItems="center">
                    <Grid
                        item
                        xs={12}
                        md={6}
                        py={5}
                        sx={{ backgroundColor: "transparent",maxHeight:"100vh" }}
                        
                        
                    >
                        <HeroContainer >
                            <HeroContent>
                            <HeroH1>WELCOME TO </HeroH1>
                                <HeroH1>MILKDELIGHTS</HeroH1>
                                <HeroP>
                                    Pure Milk, Pure Delight: Savor the Freshness!
                                </HeroP>
                                {/* {LeftSubSectionJSX} */}
                                <HeroBtnWrapper>
                <Button as={Link} to="/dairy" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                     Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                 </Button>
            </HeroBtnWrapper>
                            
                            </HeroContent>
                        </HeroContainer>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ backgroundColor: "transparent" ,maxHeight:"100vh"}}>
                        {RightSubSectionJSX}
                      
                    </Grid>
                </Grid>
            </Container>
    </>
  )
}

export default HeroSection;