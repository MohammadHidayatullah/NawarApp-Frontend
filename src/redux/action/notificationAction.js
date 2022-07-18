/** @format */

import axios from "axios";
import { GET_NOTIFICATION_SELLER } from "../types";

let token = localStorage.getItem("token");

// get notificatiionSeller from database
export const getNotificationSeller = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_NOTIFICATION_SELLER}_LOADING` });
    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/notifications/seller",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: `${GET_NOTIFICATION_SELLER}_FULFILLED`,
          payload: response.data.data,
        });
        console.log(response.data.data);
      })
      .catch((error) => {
        dispatch({
          type: `${GET_NOTIFICATION_SELLER}_ERROR`,
          error: error.message,
        });
      });
  };
};
