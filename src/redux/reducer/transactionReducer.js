import { CREATE_TRANSACTION } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case `${CREATE_TRANSACTION}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_TRANSACTION}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_TRANSACTION}_ERROR`:
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

export default transactionReducer;
