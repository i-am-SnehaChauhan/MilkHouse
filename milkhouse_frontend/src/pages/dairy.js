import React from 'react'
import Header from '../Ecomponents/Header/Header'
import Home from '../Ecomponents/Home/Home'
import {Box} from '@mui/material'
import Footer from '../../src/components/Footer/index'
const dairy = () => {
  return (
    <div>
      <Header />
      <Box style={{marginTop: 0}} >
        <Home />
      </Box>
      <Footer/>
    </div>
  )
}

export default dairy;
