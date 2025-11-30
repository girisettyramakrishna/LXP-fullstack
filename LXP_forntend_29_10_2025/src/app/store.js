import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice"; 
import authReducer from "../features/authSlice";
import instructorReducer from '../features/instructorSlice';
const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    instructor: instructorReducer,
  },
});

export default store;
