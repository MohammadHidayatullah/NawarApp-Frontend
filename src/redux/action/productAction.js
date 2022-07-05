/** @format */

import axios from "axios";
import { GET_PRODUCT, GET_PRODUCT_BY_CATEGORY } from "../types";

// get all product from database
export const getProduct = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products",
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT}_FULFILLED`,
          payload: response.data.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT}_ERROR`,
          error: error.message,
        });
      });
  };
};

// get product filter by category from database
export const getProductByCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_CATEGORY}_LOADING` });
    const baseUrl = "https://nawar-api.herokuapp.com/api/v1/products/filter/";
    let url = baseUrl + data;
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_CATEGORY}_FULFILLED`,
          payload: response.data.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_CATEGORY}_ERROR`,
          error: error.message,
        });
      });
  };
};
