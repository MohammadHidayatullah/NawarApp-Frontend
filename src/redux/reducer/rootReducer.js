/** @format */

import { combineReducers } from "redux";
import infoProdukSellerReducer from './productDetailSellerReducer';

export default combineReducers({
    productDetailSeller: infoProdukSellerReducer,
});
