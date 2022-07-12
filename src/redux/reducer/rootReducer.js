/** @format */

import { combineReducers } from "redux";
import infoProdukSellerReducer from './productDetailSellerReducer';
import infoProdukBuyerReducer from './productDetailBuyerReducer';
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import provinceReducer from "./provinceReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
    productDetailSeller: infoProdukSellerReducer,
    productDetailBuyer: infoProdukBuyerReducer,
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
  province: provinceReducer,
  city: cityReducer,
});
