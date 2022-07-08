/** @format */

import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import provinceReducer from "./provinceReducer";
import cityReducer from "./cityReducer";
import registernReducer from "./registerReducer";

export default combineReducers({
  auth: authReducer,
  registern: registernReducer,
  profile: profileReducer,
  product: productReducer,
  province: provinceReducer,
  city: cityReducer,
});
