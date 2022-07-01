import {
  GET_PRODUCT,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
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

    // case `${EDIT_PRODUCT}_LOADING`:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case `${EDIT_PRODUCT}_FULFILLED`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case `${EDIT_PRODUCT}_ERROR`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: error,
    //   };

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
