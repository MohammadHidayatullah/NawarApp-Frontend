import axios from "axios";
import {
  GET_PRODUCT,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../types";

export const getProduct = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT}_LOADING` });

    axios({
      method: "GET",
      url: "https://nawar-api.herokuapp.com/api/v1/products/1",
    })
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const createProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_PRODUCT}_LOADING` });

    axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/products/create",
      data,
    })
      .then(() => {
        dispatch({
          type: `${CREATE_PRODUCT}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getProduct());
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_PRODUCT}_ERROR`,
          error: error.message,
        });
      });
  };
};

// export const editProduct = (id, data) => {
//   return (dispatch) => {
//     dispatch({ type: `${EDIT_PRODUCT}_LOADING` });

//     axios({
//       method: "PUT",
//       url: `http://localhost:3000/article/${id}`,
//       data,
//     })
//       .then(() => {
//         dispatch({
//           type: `${EDIT_PRODUCT}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getProduct());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${EDIT_PRODUCT}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };

// export const deleteProduct = (id) => {
//   return (dispatch) => {
//     dispatch({ type: `${DELETE_PRODUCT}_LOADING` });

//     axios({
//       method: "DELETE",
//       url: `http://localhost:3000/article/${id}`,
//     })
//       .then(() => {
//         dispatch({
//           type: `${DELETE_PRODUCT}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getProduct());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${DELETE_PRODUCT}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };
