import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sales from '../components/Sales'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const Home = () => {
	const navigate = useNavigate();
	const products = useSelector((state) => state.product.products);
	const categories = useSelector((state) => state.product.categories);

	return (
		<div className="pb-12">
			<Sales />
			<div className="flex items-center justify-center px-4 py-2">
				<div className="flex w-full max-w-7xl items-center justify-between rounded-lg border-2 p-4 text-white">
					<h3>Categories</h3>
					<button className="ml-4 rounded-lg bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-transparent hover:text-white">
						all
					</button>
				</div>
			</div>
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:grid-cols-4">
				{categories.map((category) => (
					<CategoryCard 
						key={category.id} 
						category={category}
						onClick={() => navigate(`/categories/${category.name}`)}
					/>
				))}
			</div>
			<div className="mt-7 flex items-center justify-center px-4 py-2">
				<div className="flex w-full max-w-7xl items-center justify-between rounded-lg border-2 p-4 text-white">
					<h3>best sellers</h3>
					<button className="ml-4 rounded-lg bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-transparent hover:text-white">
						all
					</button>
				</div>
			</div>
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<Footer />
		</div>
	)
}

export default Home