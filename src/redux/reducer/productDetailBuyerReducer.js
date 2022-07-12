import { GET_PRODUCTDDETAILBUYER } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  isSuccess: false,
  error: null,
};

const productDetailBuyerReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCTDDETAILBUYER}_LOADING`:
      return {
        ...state,
      };
    case `${GET_PRODUCTDDETAILBUYER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isSuccess: true,
      };
    case `${GET_PRODUCTDDETAILBUYER}_ERROR`:
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

export default productDetailBuyerReducer;