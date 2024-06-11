import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	content: null,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setContent(state, action) {
			state.content = action.payload;
		},
	},
});

export const { setContent } = globalSlice.actions;

export const getContent = (state) => state.global.content;

export default globalSlice.reducer;
