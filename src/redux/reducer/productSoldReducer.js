/** @format */

import { GET_PRODUCT_BY_USER_SOLD } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const productSoldReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    // get product by user wishlist
    case `${GET_PRODUCT_BY_USER_SOLD}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_PRODUCT_BY_USER_SOLD}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_BY_USER_SOLD}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productSoldReducer;
