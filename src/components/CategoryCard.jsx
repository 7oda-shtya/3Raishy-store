import React from 'react'

const CategoryCard = ({ category, onClick }) => {
	return (
		<div 
			onClick={onClick}
			className="group relative flex min-h-[220px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border-2 sm:min-h-[240px] cursor-pointer transition-transform hover:scale-105"
		>
			<div className="inset-0 z-[1] flex justify-center items-center">
				<img className="group-hover:drop-shadow-led-medium transition-all duration-500 group-hover:scale-150 w-[80%] object-contain" src={category.img} alt={category.name} />
			</div>
			<button className="absolute bottom-4 z-[10] rounded-lg bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white">
				{category.name}
			</button>
		</div>
	)
}

export default CategoryCard