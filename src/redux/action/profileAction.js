import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  GET_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  DELETE_PROFILE,
} from "../types";

let token = localStorage.getItem("token");

export const getProfile = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PROFILE}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/users/profile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response.data.data, "<= Ini ACTION Profile Data");
        dispatch({
          type: `${GET_PROFILE}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PROFILE}_ERROR`,
          error: error.message,
        });
      });
  };
};

// export const createProfile = (data) => {
//   return (dispatch) => {
//     dispatch({ type: `${CREATE_PROFILE}_LOADING` });

//     axios({
//       method: "POST",
//       url: "http://localhost:3000/article",
//       data,
//     })
//       .then(() => {
//         dispatch({
//           type: `${CREATE_PROFILE}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getProfile());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${CREATE_PROFILE}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };

export const editProfile = (data, navigate) => {
  return (dispatch) => {
    dispatch({ type: `${EDIT_PROFILE}_LOADING` });
    // console.log(data, "<= Data edit profile");
    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/users/profile`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: `${EDIT_PROFILE}_FULFILLED`,
          // payload: response.data,
        });
        // dispatch(getProfile());
        if (res.status === 200) {
          navigate("/daftar-jual");
        }
      })
      .catch((error) => {
        dispatch({
          type: `${EDIT_PROFILE}_ERROR`,
          error: error.message,
        });
      });
  };
};

// export const deleteProfile = (id) => {
//   return (dispatch) => {
//     dispatch({ type: `${DELETE_PROFILE}_LOADING` });

//     axios({
//       method: "DELETE",
//       url: `http://localhost:3000/article/${id}`,
//     })
//       .then(() => {
//         dispatch({
//           type: `${DELETE_PROFILE}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getProfile());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${DELETE_PROFILE}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };
