import React from 'react'
const Sales = () => {
	return (
		<div className="relative min-h-[72vh] overflow-hidden text-white lg:min-h-screen">
			<img className="absolute inset-0 z-[1] h-full w-full object-cover" src={"/images/hero.jpg"} alt="Home Background" />
			<div className="absolute inset-0 z-[3] bg-black bg-opacity-50 backdrop-blur-sm"></div>
			<div className="relative z-[10] mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 px-4 py-12 sm:px-8 lg:min-h-screen lg:flex-row lg:px-12">
				<div className="z-[10] flex max-w-xl flex-col justify-center gap-4 text-center lg:text-left">

					<h2 className="dancing-script-bold text-4xl sm:text-5xl lg:text-[60px]">sparing / summer season</h2>
					<div className="flex items-center justify-center lg:justify-start">
						<div className="flex flex-col">
							<span>up</span>
							<span>to</span>
						</div>
						<p className="text-[44px] font-bold text-red-500 sm:text-[60px]">50 % OFF </p>
					</div>
					<div className="mt-2 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
						<span>starting at</span>
						<span className="text-2xl font-bold text-orange-500">$19.99</span>
						<button className="rounded-lg bg-white px-5 py-3 text-black transition-transform duration-300 hover:scale-105">Shop Now</button>
					</div>
				</div>
				<img className="drop-shadow-led-strong w-full max-w-[320px] sm:max-w-[400px]" src="/images/linen-shirt-1.png" alt="" />
			</div>
		</div>
	)
}

export default Sales