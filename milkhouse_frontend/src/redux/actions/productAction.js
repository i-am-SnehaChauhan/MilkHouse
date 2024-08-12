import axios from 'axios';
import * as actionTypes from '../constants/productsConstant';
const URL = 'https://milk-house-azure.vercel.app';


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST }); // Dispatch loading action
        let response = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }
}

