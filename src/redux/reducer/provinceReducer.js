import { GET_ALL_PROVINCE } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const provinceReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_ALL_PROVINCE}_LOADING`:
      return {
        ...state,
      };
    case `${GET_ALL_PROVINCE}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_ALL_PROVINCE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    // case `${GET_PROVINCE}_LOADING`:
    //   return {
    //     ...state,
    //   };
    // case `${GET_PROVINCE}_FULFILLED`:
    //   return {
    //     ...state,
    //     data: payload,
    //     isLoading: false,
    //   };
    // case `${GET_PROVINCE}_ERROR`:
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

export default provinceReducer;
