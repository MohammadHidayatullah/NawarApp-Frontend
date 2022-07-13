import { GET_PRODUCTDDETAILBUYER } from "../types";
import axios from "axios";

export const getProductDetail = (id) => {
    return (dispatch) => {
      dispatch({ type: `${GET_PRODUCTDDETAILBUYER}_LOADING` });
  
      axios({
        method: 'GET',
        url: `https://nawar-api.herokuapp.com/api/v1/products/${id}`,
        // data,
      })
        .then((response) => {
          dispatch({
            type: `${GET_PRODUCTDDETAILBUYER}_FULFILLED`,
            payload: response.data.data.data,
          });
          console.log(response.data.data.data, 'data coba');

        })
        .catch((error) => {
          dispatch({
            type: `${GET_PRODUCTDDETAILBUYER}_ERROR`,
            error: error.message,
          });
        });
    };
};