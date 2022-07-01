/** @format */

import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
});
