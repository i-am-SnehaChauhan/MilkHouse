import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import {getProducts} from '../../redux/actions/productAction'
import {useDispatch, useSelector} from 'react-redux';

const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const Home = () => {
   
  useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
         <Component>
            <Banner />
        </Component> 
        <Navbar />
        
        
        
       
        
    </>
  )
}

export default Home;