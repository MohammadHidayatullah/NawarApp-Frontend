import axios from "axios";
import { GET_NOTIFICATION_BUYER } from "../types";

let token = localStorage.getItem("token");

// get notificationBuyer from database
export const getNotificationBuyer = () => {
    return (dispatch) => {
      dispatch({ type: `${GET_NOTIFICATION_BUYER}_LOADING` });
      axios({
        method: "GET",
        url: "https://nawar-api.herokuapp.com/api/v1/notifications/buyer",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          dispatch({
            type: `${GET_NOTIFICATION_BUYER}_FULFILLED`,
            payload: response.data,
          });
          console.log("buyer notif", response.data);
        })
        .catch((error) => {
          dispatch({
            type: `${GET_NOTIFICATION_BUYER}_ERROR`,
            error: error.message,
          });
        });
    };
  };
  