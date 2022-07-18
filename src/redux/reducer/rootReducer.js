/** @format */

import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import provinceReducer from "./provinceReducer";
import cityReducer from "./cityReducer";
import registernReducer from "./registerReducer";
import categoryReducer from "./categoryReducer";
import notificationReducer from "./notificationReducer";
import notificationIdReducer from "./notificationReducerId";

export default combineReducers({
  auth: authReducer,
  registern: registernReducer,
  profile: profileReducer,
  product: productReducer,
  province: provinceReducer,
  city: cityReducer,
  category: categoryReducer,
  notification: notificationReducer,
  notificationId: notificationIdReducer,
});
