import axios from 'axios';
import * as actionTypes from '../constants/productsConstant';
const URL = 'http://localhost:2000';


export const getProducts = () => async (dispatch) => {
    try {
      let response = await axios.get(`${URL}/products`);
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST, payload: response.data});
        let response = await axios.get(`${URL}/products/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}

