import { combineReducers } from "@reduxjs/toolkit";
import navbarReducer from "@/features/navbar/navbarSlice";
import userReducer from "@/features/user/userSlice";
import modalReducer from "@/features/modals/modalsSlice";
const rootReducer = combineReducers({
  navbar: navbarReducer,
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
