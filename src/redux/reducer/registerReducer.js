import { REGISTER } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  isSuccess: false,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${REGISTER}_LOADING`:
      return {
        ...state,
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isSuccess: true,
      };
    case `${REGISTER}_ERROR`:
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

export default registerReducer;