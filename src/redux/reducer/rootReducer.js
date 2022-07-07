/** @format */

import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import provinceReducer from "./provinceReducer";
import cityReducer from "./cityReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  profile: profileReducer,
  product: productReducer,
  province: provinceReducer,
  city: cityReducer,
});
