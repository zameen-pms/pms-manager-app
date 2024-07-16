import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	content: null,
	isNavOpen: false,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setContent(state, action) {
			state.content = action.payload;
		},
		setIsNavOpen(state, action) {
			state.isNavOpen = action.payload;
		},
	},
});

export const { setContent, setIsNavOpen } = globalSlice.actions;

export const getContent = (state) => state.global.content;
export const getIsNavOpen = (state) => state.global.isNavOpen;

export default globalSlice.reducer;
