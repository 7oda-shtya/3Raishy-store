import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

const Search = () => {
	const navigate = useNavigate();
	const searchTerm = useSelector((state) => state.search.searchTerm);
	const products = useSelector((state) => state.product.products);
	const categories = useSelector((state) => state.product.categories);

	const filteredProducts = products.filter((product) => {
		const term = searchTerm.trim().toLowerCase();
		if (!term) return true;
		return [product.name, product.category, product.brand, ...(product.tags || [])]
			.filter(Boolean)
			.some((value) => String(value).toLowerCase().includes(term));
	});

	const filteredCategories = categories.filter((category) => {
		const term = searchTerm.trim().toLowerCase();
		if (!term) return true;
		return category.name.toLowerCase().includes(term);
	});

	return (
		<div className="min-h-screen pb-12">
			<div className="mx-auto max-w-7xl px-4 py-8">
				<h1 className="mb-2 text-4xl font-bold text-white">Search Results</h1>
				{searchTerm ? (
					<p className="mb-6 text-gray-300">
						Results for: <span className="font-semibold text-red-500">"{searchTerm}"</span>
					</p>
				) : (
					<p className="mb-6 text-gray-400">Enter a search term to get started</p>
				)}
			</div>

			{searchTerm && (
				<>
					{filteredCategories.length > 0 && (
						<div className="mx-auto max-w-7xl px-4 py-6">
							<h2 className="mb-4 text-2xl font-bold text-white">Categories</h2>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
								{filteredCategories.map((category) => (
									<CategoryCard 
										key={category.id} 
										category={category}
										onClick={() => navigate(`/categories/${category.name}`)}
									/>
								))}
							</div>
						</div>
					)}

					{filteredProducts.length > 0 && (
						<div className="mx-auto max-w-7xl px-4 py-6">
							<h2 className="mb-4 text-2xl font-bold text-white">Products</h2>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						</div>
					)}

					{filteredCategories.length === 0 && filteredProducts.length === 0 && (
						<div className="mx-auto max-w-7xl px-4 py-12 text-center">
							<p className="text-lg text-gray-400">No results found for "{searchTerm}"</p>
							<p className="mt-2 text-sm text-gray-500">Try searching with different keywords</p>
						</div>
					)}
				</>
			)}

			{!searchTerm && (
				<div className="mx-auto max-w-7xl px-4 py-12 text-center">
					<p className="text-gray-400">Use the search bar to find products and categories</p>
				</div>
			)}
		</div>
	)
}

export default Search
