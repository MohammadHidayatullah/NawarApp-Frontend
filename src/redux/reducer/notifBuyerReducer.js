/** @format */

import { GET_NOTIFICATION_BUYER } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const notifBuyerReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_NOTIFICATION_BUYER}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_NOTIFICATION_BUYER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_NOTIFICATION_BUYER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return state;
  }
};

export default notifBuyerReducer;
