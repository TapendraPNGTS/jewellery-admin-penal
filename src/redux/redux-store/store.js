import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux-slice/user.slice";
import customizationReducer from "store/customizationReducer";
import daimondsReducer from "redux/redux-slice/daimonds.slice";
import markupsReducer from "redux/redux-slice/markups.slice";
import ordersReducer from "redux/redux-slice/orders.slice";
import shopTimeReducer from "redux/redux-slice/shopTime.slice";
import dashboardReducer from "redux/redux-slice/dashboard.slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    customization: customizationReducer,
    daimonds: daimondsReducer,
    markups: markupsReducer,
    orders: ordersReducer,
    shopTime: shopTimeReducer,
    dashBoard: dashboardReducer,
  },
});
