import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../templates/Loader';
import MidSlide from './MidSlide';

const Component = styled(Box)`
   padding: 7px 7px;
   background-color: #f2f2f2;
`
const Home = () => {

  const { loading,products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, loading])

  return (
    <>
      <Component>
        <Banner />
      </Component>
      <Navbar />
      <Component>
      {loading && <Loader/>}
        <MidSlide
          products={products}
          title='Deal of the Day'
          timer={true}
        />
        <Slide
          products={products}
          title='Suggested Items'
          timer={false}
        />
        <Slide
          products={products}
          title='Top Selection'
          timer={false}
        />
        <Slide
          products={products}
          title='Recommended Items'
          timer={false}
        />
      </Component>





    </>
  )
}

export default Home;