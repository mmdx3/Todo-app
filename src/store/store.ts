import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: RootReducer,
});

export type AppDispatch = typeof store.dispatch ;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()



export default store;
