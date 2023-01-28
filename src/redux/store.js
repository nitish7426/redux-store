import { configureStore } from "@reduxjs/toolkit";
import { createElement } from "react";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import cartReducer from "./cartSlice";

// const store = createStore(rootReducer);
const store = configureStore({ reducer: { cart: cartReducer } });

export default store;
