import axios from "axios";
import Cookies from "js-cookie";

export const authLogin = (email, password, navigate) => async (dispatch) => {
  let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
  try {
    dispatch({ type: `LOADING` });
    console.log(email, password);
    await axios
      .post(`https://nawar-api.herokuapp.com/api/v1/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch({
          type: `LOGIN`,
          payload: res.data,
        });
        Cookies.set("token", res.data.token, { expires: inOneHours });
        console.log(res);
        navigate("/");
      });
  } catch (err) {
    dispatch({
      type: `ERROR`,
      error: err.message,
    });
  }
};

export const authRegister =
  (name, email, password, navigate) => async (dispatch) => {
    try {
      dispatch({ type: `LOADING` });
      console.log(email, password);
      await axios
        .post(`https://nawar-api.herokuapp.com/api/v1/users/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          dispatch({
            type: `REGISTER`,
            payload: res.data,
          });
          navigate("/login");
        });
    } catch (err) {
      dispatch({
        type: `ERROR`,
        error: err.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  Cookies.remove("token");
};
