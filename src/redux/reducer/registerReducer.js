import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";

const initialState = {
  dataAuth: [],
  input: [],
  isLoading: false,
  error: null,
};

const registernReducer = (state = initialState, action) => {
  const { type, payload, error, input } = action;
  switch (type) {
    case `LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${REGISTER_SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        input: input,
        dataAuth: payload,
      };
    case `${REGISTER_FAIL}`:
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

export default registernReducer;
