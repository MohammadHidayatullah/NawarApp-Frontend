/** @format */

import { ACCEPT_OFFER, COMPLETE_OFFER, REJECT_OFFER } from "../types";
import { CREATE_TRANSACTION } from "../types";

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
        error: error,
        isLoading: false,
      };

      // complete offer from transaction
    case `${COMPLETE_OFFER}_LOADING`:
      return {
        ...state,
      };
    case `${COMPLETE_OFFER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${COMPLETE_OFFER}_ERROR`:
      return {
        ...state,
        error: error,
        isLoading: false,
      };
    
      // reject offer from transaction
    case `${REJECT_OFFER}_LOADING`:
      return {
        ...state,
      };
    case `${REJECT_OFFER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${REJECT_OFFER}_ERROR`:
      return {
        ...state,
        error: error,
        isLoading: false,
      };

    // create transaction from transaction
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
