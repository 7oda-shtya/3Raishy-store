import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import cartReducer from './reducers/cartSlice';
import productReducer from './reducers/productSlice';
import searchReducer from './reducers/SearchSlice';


const store = configureStore({
  reducer: {
		user: userReducer,
		cart: cartReducer,
		product: productReducer,
		search: searchReducer,
	}
});

export default store;