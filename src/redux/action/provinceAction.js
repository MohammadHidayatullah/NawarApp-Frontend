import axios from "axios";
import { GET_ALL_PROVINCE } from "../types";
// let token = localStorage.getItem("token");

export const getAllProvince = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_ALL_PROVINCE}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/users/provinces",
    })
      .then((response) => {
        console.log(response.data.data, "CEK RESPONSE PROVINSI ACTION COKKK");
        dispatch({
          type: `${GET_ALL_PROVINCE}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_ALL_PROVINCE}_ERROR`,
          error: error.message,
        });
      });
  };
};

// export const getProvince = () => {
//   return (dispatch) => {
//     dispatch({ type: `${GET_PROVINCE}_LOADING` });

//     axios({
//       method: "GET",
//       url: "https://nawar-api.herokuapp.com/api/v1/users/provinces",
//     })
//       .then((response) => {
//         dispatch({
//           type: `${GET_PROVINCE}_FULFILLED`,
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${GET_PROVINCE}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };
