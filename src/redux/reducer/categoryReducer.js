import { GET_CATEGORY } from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_CATEGORY}_LOADING`:
      return {
        ...state,
      };
    case `${GET_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_CATEGORY}_ERROR`:
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

export default categoryReducer;
