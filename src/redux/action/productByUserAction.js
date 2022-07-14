/** @format */

import axios from "axios";
import { GET_PRODUCT_BY_USER } from "../types";

// get product filter by user from database
export const getProductByUser = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_USER}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products/user",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER}_FULFILLED`,
          payload: response.data.list.data,
        });
        console.log(response.data.list.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER}_ERROR`,
          error: error.message,
        });
      });
  };
};
