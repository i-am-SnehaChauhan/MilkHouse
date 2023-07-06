import React from 'react'
import Header from '../Ecomponents/Header/Header'
import Home from '../Ecomponents/Home/Home'

import {Box} from '@mui/material'
const dairy = () => {
  return (
    <div>
      <Header />
      <Box style={{marginTop: 0}} >
        <Home />
      </Box>
    </div>
  )
}

export default dairy;
