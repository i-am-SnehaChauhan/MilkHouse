import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const Home = () => {
  return (
    <>
        <Navbar />
        <Component>
            <Banner />
        </Component> 
        
        
       
        
    </>
  )
}

export default Home;