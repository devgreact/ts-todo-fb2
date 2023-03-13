import { configureStore } from "@reduxjs/toolkit";
import {todoSliceReducer} from "./todoSlice";

const store = configureStore({ reducer: todoSliceReducer });
export default store;
