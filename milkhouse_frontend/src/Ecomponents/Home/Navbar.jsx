import React from 'react';
import {Box, Typography, styled} from '@mui/material'
import {navData} from '../../constants/data'

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 40px 130px 0px 130px;
  
`
const Container = styled(Box)`
  padding : 12px 8px;
  text-align: center;
`

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`
const Navbar = () => {
  return (
    <Component>
      {navData.map((data) => (  
        <Container>
          <img src={data.url} alt="logo" style={{width: 74, height: 74}}/> 
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>

  )
}

export default Navbar