import { GET_PRODUCTDDETAILSELLER } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  isSuccess: false,
  error: null,
};

const productDetailSellerReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCTDDETAILSELLER}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCTDDETAILSELLER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isSuccess: true,
      };
    case `${GET_PRODUCTDDETAILSELLER}_ERROR`:
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

export default productDetailSellerReducer;