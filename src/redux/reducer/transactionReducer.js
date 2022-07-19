/** @format */

import { ACCEPT_OFFER } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    // accept offer from transaction
    case `${ACCEPT_OFFER}_LOADING`:
      return {
        ...state,
      };
    case `${ACCEPT_OFFER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${ACCEPT_OFFER}_ERROR`:
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