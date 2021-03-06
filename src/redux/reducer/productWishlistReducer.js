/** @format */

import { ADD_WISHLIST, GET_PRODUCT_BY_USER_WISHLIST } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const productWishlistReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    // get product by user wishlist
    case `${GET_PRODUCT_BY_USER_WISHLIST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_PRODUCT_BY_USER_WISHLIST}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_BY_USER_WISHLIST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${ADD_WISHLIST}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${ADD_WISHLIST}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${ADD_WISHLIST}_ERROR`:
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

export default productWishlistReducer;
