import React from 'react'
import Header from '../Ecomponents/Header/Header'
import DetailView from '../Ecomponents/Details/DetailView';
import {Box, styled} from '@mui/material';

const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const DetailViewPage = () => {
  return (
    <>
      <Header />
      <DetailView />
    </>
  )
}

export default DetailViewPage