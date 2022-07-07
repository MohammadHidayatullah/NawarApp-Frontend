/** @format */

import { combineReducers } from "redux";
import infoProdukSellerReducer from './productDetailSellerReducer';
import productReducer from "./productReducer";

export default combineReducers({
    product: productReducer,
    productDetailSeller: infoProdukSellerReducer,
});
