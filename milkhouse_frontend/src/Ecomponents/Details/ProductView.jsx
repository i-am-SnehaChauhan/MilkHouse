// AllProductsView.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import ProductCard from './ProductCard'; // Assume you have a ProductCard component for individual products
import { Box, styled, Grid } from '@mui/material';

const Container = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 2fr))',
  gap: '20px',
  justifyContent: 'center',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(191px, 2fr))',
  },
}));
export const ProductView = () => {
  const dispatch = useDispatch();

  // Use the correct slice name in the useSelector
  const { loading, products } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products.length);
  const uniqueProducts = Array.from(new Set(products.map(product => product.id))).map(
    id => products.find(product => product.id === id)
  );
  return (
    <Container>
      {loading && <p>Loading...</p>}
      {uniqueProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductView;
