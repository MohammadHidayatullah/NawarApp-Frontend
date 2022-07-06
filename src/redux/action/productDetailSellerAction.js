import { GET_PRODUCTDDETAILSELLER } from "../types";
import axios from "axios";

export const getProductDetail = (productId) => {
    return (dispatch) => {
      dispatch({ type: `${GET_PRODUCTDDETAILSELLER}_LOADING` });
  
      axios({
        method: 'GET',
        url: `https://nawar-api.herokuapp.com/api/v1/products/${productId}`,
        // data,
      })
        .then((response) => {
          dispatch({
            type: `${GET_PRODUCTDDETAILSELLER}_FULFILLED`,
            payload: response.data.data.data,
          });
          console.log(response.data.data.data, 'data coba');

        })
        .catch((error) => {
          dispatch({
            type: `${GET_PRODUCTDDETAILSELLER}_ERROR`,
            error: error.message,
          });
        });
    };
};