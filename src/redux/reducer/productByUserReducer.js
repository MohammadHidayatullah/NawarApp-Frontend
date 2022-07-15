/** @format */

import { GET_PRODUCT_BY_USER } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    //get product by user daftarJual
    case `${GET_PRODUCT_BY_USER}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCT_BY_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${GET_PRODUCT_BY_USER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return state;
  }
};
