/** @format */

import axios from "axios";
import { GET_PRODUCT_BY_USER_WISHLIST } from "../types";

let token = localStorage.getItem("token");

// get product by user wishlist
export const getProductByUserWishlist = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_USER_WISHLIST}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/wishlist",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_WISHLIST}_FULFILLED`,
          payload: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_USER_WISHLIST}_ERROR`,
          error: error.message,
        });
      });
  };
};
