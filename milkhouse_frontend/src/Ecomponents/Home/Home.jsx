import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import { Box, styled } from '@mui/material';
import {getProducts} from '../../redux/actions/productAction'
import {useDispatch, useSelector} from 'react-redux';

const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const Home = () => {
   
  const {products} = useSelector((state) => state.getProducts);

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
        <Component>
        <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                />
        </Component>
        
        
        
       
        
    </>
  )
}

export default Home;