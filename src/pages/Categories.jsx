import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Categories = () => {
	const { categoryName } = useParams();
	const products = useSelector((state) => state.product.products);
	const categories = useSelector((state) => state.product.categories);

	// Get category details
	const category = categories.find((cat) => cat.name === categoryName);

	// Filter products by category
	const categoryProducts = products.filter((product) => product.category === categoryName);

	return (
		<div className="min-h-screen flex flex-col">
			<div>
				<div className="bg-white/5 border-b border-white/10 px-4 py-12">
					<div className="mx-auto max-w-7xl">
						{category && (
							<div className="mb-4 flex items-center gap-4">
								<img src={category.img} alt={category.name} className="h-16 w-16 object-contain rounded-lg" />
								<div>
									<h1 className="text-4xl font-bold text-white">{category.name}</h1>
									<p className="mt-2 text-gray-400">
										Showing <span className="font-semibold text-red-500">{categoryProducts.length}</span> products in this category
									</p>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className="mx-auto max-w-7xl px-4 py-8">
					{categoryProducts.length > 0 ? (
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
							{categoryProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					) : (
						<div className="py-12 text-center">
							<p className="text-lg text-gray-400">No products found in this category.</p>
							<p className="mt-2 text-sm text-gray-500">Please check back later for updates.</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Categories