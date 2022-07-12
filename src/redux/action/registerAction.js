import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

export const register = (nama, email, password, navigate) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/users/register",
      data: { name: nama, email: email, password: password },
    });

    if (res.status === 200) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          data: res.data.data,
          errorMessage: false,
        },
      });
      localStorage.setItem("token", res.data.data.token);
      navigate("/");
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: {
        data: false,
        errorMessage: err,
      },
    });
  }
};

// export const logout = () => (dispatch) => {
//   Cookies.remove("token");
// };
