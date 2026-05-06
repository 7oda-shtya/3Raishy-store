import { createSlice } from "@reduxjs/toolkit";

const products = [
	{
		id: 1,
		name: "Linen Blend Shirt",
		imgs: ["/images/linen-shirt-1.png", "/images/linen-shirt-2.png"],
		BGcolor: "transparent",
		category: "summer",
		liked: false,
		likedCount: 0,
		likedAt: null,
		details: "Premium breathable linen blend shirt, perfect for hot summer days. Features a relaxed fit and button-down collar.",
		price: 29.99,
		stock: 15,
		sizes: ["S", "M", "L", "XL"],
		colors: ["White", "Beige", "Sky Blue"],
		rating: 4.5,
		reviewsCount: 120,
		isNew: true,
		discountPrice: null,
		isFeatured: false,
		brand: "UrbanVision",
		tags: ["summer", "casual", "linen"],
		specs: {
			material: "70% Linen, 30% Cotton",
			fit: "Relaxed Fit",
			weight: "200g"
		},

	},
	{
		id: 2,
		name: "Performance Tech Tee",
		imgs: ["/images/gym-tee-1.png", "/images/gym-tee-2.png"],
		BGcolor: "transparent",
		category: "Gym",
		liked: false,
		likedCount: 0,
		likedAt: null,
		details: "Moisture-wicking fabric designed for high-intensity workouts. Keeps you dry and comfortable with ergonomic seams.",
		price: 39.99,
		stock: 8,
		sizes: ["M", "L", "XL"],
		colors: ["Black", "Dark Grey", "Electric Blue"],
		rating: 4.8,
		reviewsCount: 85,
		isNew: true,
		discountPrice: 34.99,
		isFeatured: false,
		brand: "UrbanVision",
		tags: ["summer", "casual", "linen"], // للبحث المتقدم
		specs: {
			material: "70% Linen, 30% Cotton",
			fit: "Relaxed Fit",
			weight: "200g"
		},

	},
	{
		id: 3,
		name: "Essential Oversized Hoodie",
		imgs: ["/images/hoodie-1.png", "/images/hoodie-2.png"],
		BGcolor: "#0900",
		category: "tops",
		liked: false,
		likedCount: 0,
		likedAt: null,
		details: "Soft cotton-fleece blend hoodie with a modern oversized silhouette. Perfect for layering in any season.",
		price: 49.99,
		stock: 25,
		sizes: ["S", "M", "L"],
		colors: ["Jet Black", "Heather Grey"],
		rating: 4.2,
		reviewsCount: 40,
		isNew: false,
		discountPrice: null,
		isFeatured: true,
		brand: "UrbanVision",
		tags: ["summer", "casual", "linen"], // للبحث المتقدم
		specs: {
			material: "70% Linen, 30% Cotton",
			fit: "Relaxed Fit",
			weight: "200g"
		},

	},
	{
		id: 4,
		name: "Polarized Retro Sunglasses",
		imgs: ["/images/sunglasses-1.png", "/images/sunglasses-2.png"],
		BGcolor: "#0090",
		category: "accessories",
		liked: false,
		likedCount: 0,
		likedAt: null,
		details: "Classic retro design with UV400 protection and polarized lenses to reduce glare.",
		price: 19.99,
		stock: 50,
		sizes: ["One Size"],
		colors: ["Black/Gold", "Tortoise"],
		rating: 4.7,
		reviewsCount: 210,
		isNew: true,
		discountPrice: null,
		isFeatured: false,
		brand: "UrbanVision",
		tags: ["summer", "casual", "linen"], // للبحث المتقدم
		specs: {
			material: "70% Linen, 30% Cotton",
			fit: "Relaxed Fit",
			weight: "200g"
		},

	}
];

const categories = [
	{ name: "summer", id: 1, img: "/images/summer.png" },
	{ name: "Gym", id: 2, img: "/images/gym.png" },
	{ name: "tops", id: 3, img: "/images/t-shirt.png" },
	{ name: "accessories", id: 4, img: "/images/accessories.png" },
];
const initialState = {
	products,
	categories,
	loading: false,
	error: null,
};
const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setCategories: (state, action) => {
			state.categories = action.payload;
		},
		toggleLike: (state, action) => {
			const productId = action.payload;
			const product = state.products.find((p) => p.id === productId);
			if (product) {
				product.liked = !product.liked;
				product.likedCount += product.liked ? 1 : -1;
				product.likedAt = product.liked ? new Date().toISOString() : null;
			}
		}
	}
});
export const { setProducts, setCategories, toggleLike } = productSlice.actions;
export default productSlice.reducer;