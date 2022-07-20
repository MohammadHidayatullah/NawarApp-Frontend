/** @format */

import { GET_NOTIFICATION_SELLER_BY_ID } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const notificationIdReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_NOTIFICATION_SELLER_BY_ID}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_NOTIFICATION_SELLER_BY_ID}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_NOTIFICATION_SELLER_BY_ID}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return state;
  }
};
export default notificationIdReducer;
