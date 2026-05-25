import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Liked = () => {
	const products = useSelector((state) => state.product.products);
	const searchTerm = useSelector((state) => state.search.searchTerm);
	const likedProducts = products.filter((product) => {
		if (!product.liked) return false;
		const term = searchTerm.trim().toLowerCase();
		if (!term) return true;
		return [product.name, product.category, product.brand, ...(product.tags || [])]
			.filter(Boolean)
			.some((value) => String(value).toLowerCase().includes(term));
	});

	return (
		<div className="min-h-screen flex flex-col">
			<div>
				<h1 className="flex h-[130px] w-full cursor-default items-center justify-center bg-white/20 text-4xl text-red-700">Liked Products</h1>
				<div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{likedProducts.length > 0 ? (
						likedProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						<p className="text-center text-gray-500 col-span-full">No liked products found.</p>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Liked