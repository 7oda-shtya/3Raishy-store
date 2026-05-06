import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toggleLike } from '../redux/reducers/productSlice'
const ProductCard = ({ product }) => {
	const dispatch = useDispatch()
	return (
		<div style={{ backgroundColor: product.BGcolor }} className="group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-lg border-2">
			<div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden perspective-normal sm:h-[300px]">
				<img className="absolute delay-100 w-full h-full object-contain flex justify-center items-center group-hover:opacity-0  transition-opacity duration-500" src={product.imgs[0]} alt={product.name} />
				<img className="absolute delay-100 w-full h-full object-contain flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-z-100  transition-opacity duration-500" src={product.imgs[1]} alt={product.name} />
			</div>
			<div className="absolute right-2 overflow-hidden top-1 z-[1] group flex justify-center items-center flex-col gap-2">
				<button onClick={() => dispatch(toggleLike(product.id))} className={`relative ${product.liked ? 'text-red-700' : 'text-white'} hover:text-red-500 group-hover:right-0 group transition-all duration-300 -right-8` } > <FontAwesomeIcon icon={faHeart} /> <span className="sr-only">add to cart</span>  </button>
				<button className="relative text-white hover:text-green-500 group-hover:right-0 group transition-all duration-500 -right-8" > <FontAwesomeIcon icon={faCartShopping} /> <span className="sr-only">add to wishlist</span>  </button>
				<button className="relative text-white hover:text-blue-500 group-hover:right-0 group transition-all duration-700 -right-8" > <FontAwesomeIcon icon={faEye} /> <span className="sr-only">quick view</span>  </button>
			</div>
			<div className="absolute bottom-2 flex w-full items-center justify-center gap-3 bg-gray-300 text-black">
				{product.sizes.map((size) => (
						<span key={size}>{size}</span>
					))}
			</div>
			<div className="absolute -bottom-28 flex h-28 w-full flex-col gap-2 p-4 text-white">
				<h3 className="text-md break-words">{product.name}</h3>
				<span className="text-xl text-red-400 font-bold">${product.price.toFixed(2)}</span>
			</div>
		</div>
	)
}

export default ProductCard