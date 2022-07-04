import axios from "axios";
import Cookies from "js-cookie";

export const authLogin = (email, password, navigate) => async (dispatch) => {
  // let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
  let token = localStorage.getItem("token");
  try {
    dispatch({ type: `LOADING` });
    let res = await axios({
      method: "POST",
      url: "https://nawar-api.herokuapp.com/api/v1/auth/login",
      data: { email: email, password: password },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status === 200) {
      // Cookies.set("token", res.data.data.token, { expires: inOneHours });
      localStorage.setItem("token", res.data.data.token);
      navigate("/");
    }
    // .then((res) => {
    //   dispatch({
    //     type: `LOGIN`,
    //     payload: res.data,
    //   });
    //   Cookies.set("token", res.data.token, { expires: inOneHours });
    //   console.log(res);
    //   navigate("/");
    // });
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
