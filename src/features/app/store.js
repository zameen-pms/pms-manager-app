import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import globalReducer from "./globalSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		global: globalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
