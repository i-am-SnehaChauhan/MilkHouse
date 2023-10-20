import React from 'react'
import Header from '../Ecomponents/Header/Header'
import ProductView from '../Ecomponents/Details/ProductView';
import {Box, styled} from '@mui/material';
import Footer from '../components/Footer';
const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const ProductsPage= () => {
  return (
    <>
      <Header />
      <ProductView />
      <Footer/>
    </>
  )
}

export default ProductsPage