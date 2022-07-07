import {
  GET_PROFILE,
  CREATE_PROFILE,
  EDIT_PROFILE,
  DELETE_PROFILE,
} from "../types";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PROFILE}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PROFILE}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PROFILE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    // case `${CREATE_PROFILE}_LOADING`:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case `${CREATE_PROFILE}_FULFILLED`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case `${CREATE_PROFILE}_ERROR`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: error,
    //   };

    case `${EDIT_PROFILE}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${EDIT_PROFILE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${EDIT_PROFILE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
      
    // case `${DELETE_PROFILE}_LOADING`:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case `${DELETE_PROFILE}_FULFILLED`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // case `${DELETE_PROFILE}_ERROR`:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: error,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default profileReducer;
