import { GET_ALL_CITY } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const cityReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_ALL_CITY}_LOADING`:
      return {
        ...state,
      };
    case `${GET_ALL_CITY}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_ALL_CITY}_ERROR`:
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

export default cityReducer;
