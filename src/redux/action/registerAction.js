import { REGISTER } from "../types";
import axios from "axios";
// import { Navigate } from "react-router-dom";

export const handleRegister = (data) => {
  // const navigate = useNavigate()
    return (dispatch) => {
      dispatch({ type: `${REGISTER}_LOADING` });
  
      axios({
        method: 'POST',
        url: 'https://nawar-api.herokuapp.com/api/v1/users/register',
        data,
      })
        .then(() => {
          dispatch({
            type: `${REGISTER}_FULFILLED`,
            // payload: response.data,
            
          });
          // Navigate("/login")
        })
        .catch((error) => {
          dispatch({
            type: `${REGISTER}_ERROR`,
            error: error.message,
          });
        });
    };
};

