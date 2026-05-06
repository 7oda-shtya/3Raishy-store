import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartItems: [],
	totalAmount: 0,
	totalQuantity: 0,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const item = action.payload;
			const existing = state.cartItems.find(i => i.id === item.id);
			if (existing) {
				existing.qty += item.qty || 1;
			} else {
				state.cartItems.push({ ...item, qty: item.qty || 1 });
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			state.cartItems = state.cartItems.filter(i => i.id !== id);
		},
		increaseQty: (state, action) => {
			const id = action.payload;
			const item = state.cartItems.find(i => i.id === id);
			if (item) item.qty += 1;
		},
		decreaseQty: (state, action) => {
			const id = action.payload;
			const item = state.cartItems.find(i => i.id === id);
			if (item) {
				item.qty -= 1;
				if (item.qty <= 0) {
					state.cartItems = state.cartItems.filter(i => i.id !== id);
				}
			}
		},
		clearCart: (state) => {
			state.cartItems = [];
			state.totalAmount = 0;
			state.totalQuantity = 0;
		},
		calculateTotals: (state) => {
			let total = 0;
			let qty = 0;
			state.cartItems.forEach(i => {
				total += (i.discountPrice ?? i.price) * (i.qty || 1);
				qty += i.qty || 1;
			});
			state.totalAmount = parseFloat(total.toFixed(2));
			state.totalQuantity = qty;
		}
	}
});
export const { addItem, removeItem, increaseQty, decreaseQty, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;