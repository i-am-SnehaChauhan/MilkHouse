import React from 'react'
import { HeroContainer, ImageBg, HeroBg } from './HeroElements'
import Image from '../../image/hero.jpg'

const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
        <ImageBg src={Image} type='image/png' />
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;