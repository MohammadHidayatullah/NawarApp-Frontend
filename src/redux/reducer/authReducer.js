import { LOGIN } from "../types";

const initialState = {
  dataAuth: [],
  input: [],
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload, error, input } = action;
  switch (type) {
    case `LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${LOGIN}`:
      return {
        ...state,
        isLoading: false,
        input: input,
        dataAuth: payload,
      };
    // case `${REGISTER}`:
    //     return{
    //         ...state,
    //         isLoading: false,
    //         dataAuth: payload,
    //     };
    case `ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
