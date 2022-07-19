/** @format */

import axios from "axios";
import { ACCEPT_OFFER } from "../types";

let token = localStorage.getItem("token");

// acccept offer from transaction
export const acceptOffer = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${ACCEPT_OFFER}_LOADING` });
    const baseUrl = "https://nawar-api.herokuapp.com/api/v1/transactions/";
    let url = baseUrl + data;
    axios({
      method: "PUT",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: `${ACCEPT_OFFER}_FULFILLED`,
          // payload: response.data.data,
        });
        if (res.status === 200) {
          navigate(`/info-penawaran/${data}`);
        }
      })
      .catch((error) => {
        dispatch({
          type: `${ACCEPT_OFFER}_ERROR`,
          error: error.message,
        });
      });
  };
};
