import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

export const authLogin = (email, password, navigate) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/auth/login",
      data: { email: email, password: password },
    });

    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
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
      type: LOGIN_FAIL,
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
