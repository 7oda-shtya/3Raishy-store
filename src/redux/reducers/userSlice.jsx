import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	items: [],
	totalAmount: 0,
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {}
});
export default userSlice.reducer;