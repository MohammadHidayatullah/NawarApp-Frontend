import axios from "axios";
import { GET_ALL_CITY } from "../types";
// let token = localStorage.getItem("token");

export const getAllCity = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_ALL_CITY}_LOADING` });

    axios({
      method: "GET",
      url: `https://nawar-api.herokuapp.com/api/v1/users/provinces/${id}`,
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: `${GET_ALL_CITY}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_ALL_CITY}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const getCity = (id) => {
  return (dispatch) => {
    dispatch({ type: `${GET_ALL_CITY}_LOADING` });

    axios({
      method: "GET",
      url: `https://nawar-api.herokuapp.com/api/v1/users/provinces/${id}`,
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: `${GET_ALL_CITY}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_ALL_CITY}_ERROR`,
          error: error.message,
        });
      });
  };
};
