import { combineReducers } from "@reduxjs/toolkit";
import TodoSlice from "./slice/TodoSlice";

const RootReducer = combineReducers({
    todos : TodoSlice
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer