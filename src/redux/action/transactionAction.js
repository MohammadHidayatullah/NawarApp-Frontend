/** @format */

import axios from "axios";
import { ACCEPT_OFFER, COMPLETE_OFFER, REJECT_OFFER } from "../types";

let token = localStorage.getItem("token");

// acccept offer from transaction
export const acceptOffer = (transactionId) => {
  return (dispatch) => {
    dispatch({ type: `${ACCEPT_OFFER}_LOADING` });
    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/transactions/accept/${transactionId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${ACCEPT_OFFER}_FULFILLED`,
          // payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${ACCEPT_OFFER}_ERROR`,
          error: error.message,
        });
      });
  };
};

// complete offer from transaction
export const completeOffer = (transactionId) => {
  return (dispatch) => {
    dispatch({ type: `${COMPLETE_OFFER}_LOADING` });
    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/transactions/complete/${transactionId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${COMPLETE_OFFER}_FULFILLED`,
          // payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${COMPLETE_OFFER}_ERROR`,
          error: error.message,
        });
      });
  }
}


// reject offer from transaction
export const rejectOffer = (transactionId) => {
  return (dispatch) => {
    dispatch({ type: `${REJECT_OFFER}_LOADING` });
    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/transactions/reject/${transactionId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${REJECT_OFFER}_FULFILLED`,
          // payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${REJECT_OFFER}_ERROR`,
          error: error.message,
        });
      });
  }
}