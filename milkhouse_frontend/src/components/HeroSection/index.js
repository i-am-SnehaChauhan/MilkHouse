import React,{useState, useEffect} from 'react'
import Typed from "typed.js";
import { HeroContainer, ImageBg, HeroBg } from './HeroElements'
import Image from '../../image/hero.jpg'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const el = React.useRef(null);

  useEffect(() => {

    const typed = new Typed(el.current, {
      strings: ["All-in-one Management, All under One Roof"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
        <ImageBg src={Image} type='image/png' />
        </HeroBg>
        <HeroContent whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}>
            <HeroH1>
            <span ref={el} style={{ display: "inline-block" }} />
            </HeroH1>
            <HeroP>
                Sign up for a new account today.
            </HeroP>
            <HeroBtnWrapper>
                <Button as={Link} to="/dairy" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;