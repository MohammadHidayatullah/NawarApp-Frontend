/** @format */

import {
  GET_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
  CREATE_PRODUCT,
  DRAFT_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_ID,
} from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCT}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCT}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${GET_PRODUCT_BY_CATEGORY}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCT_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_BY_CATEGORY}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${CREATE_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_PRODUCT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${DRAFT_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${DRAFT_PRODUCT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${DRAFT_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${GET_PRODUCT_ID}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCT_ID}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_ID}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${EDIT_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${EDIT_PRODUCT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${EDIT_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    // case `${DELETE_PRODUCT}_LOADING`:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case `${DELETE_PRODUCT}_FULFILLED`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case `${DELETE_PRODUCT}_ERROR`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: error,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
