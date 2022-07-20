/** @format */

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router";
import { CREATE_TRANSACTION } from "../types";

let token = localStorage.getItem("token");
// const navigate = useNavigate;

// create product to database
export const createTranscation = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_TRANSACTION}_LOADING` });

    axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/transactions/create",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({
          type: `${CREATE_TRANSACTION}_FULFILLED`,
          // // payload: response.data,
        });
        // dispatch(navigate("/daftar-jual"));
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_TRANSACTION}_ERROR`,
          error: error.message,
        });
      });
  };
};
