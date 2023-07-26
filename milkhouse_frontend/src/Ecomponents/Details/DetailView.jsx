import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Typography, styled, Grid } from '@mui/material';
import ActionItem from './ActionItem';

const Component = styled(Box)`
   background : #F2F2F2;
   margin-top: 55px;  
`;

const Container = styled(Grid)`
    background : #FFFFFF;
    display: flex;
`;

const RightContainer = styled(Grid)`
   margin-top: 55px;
`;


const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Use the correct slice name in the useSelector
  const { loading, product } = useSelector(state => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log(product);

  return (
    <Component>
      {
         product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>
                 8 Ratings & 1 Reviews
                 <Box component="span"><img src={""} alt=''/></Box>
              </Typography>
          </RightContainer>
        </Container>
      }
    </Component>
  );
};

export default DetailView;
