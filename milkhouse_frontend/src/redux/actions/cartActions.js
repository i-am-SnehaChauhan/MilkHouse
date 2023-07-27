import axios from 'axios';
import * as actionTypes from '../constants/cartConstant';

const URL = 'http://localhost:2000';

export const addToCart = (id, quantity) => async(dispatch) => {
   try{
      await axios.get(`${URL}/product/${id}`);
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {
                    ...Data,
                    quantity
                },
            });
    }

    catch(error){
        dispatch({
            type: actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        })
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    
}