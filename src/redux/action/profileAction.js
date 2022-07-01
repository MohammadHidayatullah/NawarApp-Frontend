import axios from "axios";
import {
  GET_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  DELETE_PROFILE,
} from "../types";

export const getProfile = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PROFILE}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/users/profile",
    })
      .then((response) => {
        dispatch({
          type: `${GET_PROFILE}_FULFILLED`,
          payload: response.data,
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

export const editProfile = (id, data) => {
  return (dispatch) => {
    dispatch({ type: `${EDIT_PROFILE}_LOADING` });

    axios({
      method: "PUT",
      url: `https://nawar-api.herokuapp.com/api/v1/users/profile`,
      data,
    })
      .then(() => {
        dispatch({
          type: `${EDIT_PROFILE}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getProfile());
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
