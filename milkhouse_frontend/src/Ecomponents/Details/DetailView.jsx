import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, styled, Grid } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';
import Header from '../Header/Header';
import Loader from '../../templates/Loader';
const Component = styled(Box)`
   background : #F2F2F2; 
`;

const Container = styled(Grid)(({ theme }) => ({
  background : "#FFFFFF",
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    margin: '0px',
  }
}));

const RightContainer = styled(Grid)(({ theme }) => ({
   marginTop: '155px',
   [theme.breakpoints.down('md')]: {
    margin: '20px',
  }
}));


const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Use the correct slice name in the useSelector
  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <>
    
    <Component>
    <Header/>
    {loading && <Loader/>}
      <div   style={{"display":"flex", "flexWrap":"wrap", "justifyContent":"space-between"}}>
      {
         product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
      </div>
    </Component>
    </>
  );
};

export default DetailView;
