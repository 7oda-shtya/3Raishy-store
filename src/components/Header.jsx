import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm, setSearchTerm } from '../redux/reducers/SearchSlice';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => state.search.searchTerm);
	const products = useSelector((state) => state.product.products);
	const categories = useSelector((state) => state.product.categories);
	const [isShrunk, setIsShrunk] = useState(false);
	const [showHints, setShowHints] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsShrunk(window.scrollY > 40);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleSearchEnter = (e) => {
		if (e.key === 'Enter' && searchTerm.trim()) {
			navigate('/search');
			setShowHints(false);
		}
	};

	const handleSearchClick = () => {
		if (searchTerm.trim()) {
			navigate('/search');
			setShowHints(false);
		}
	};

	// Filter hints for products and categories
	const hintProducts = products.filter((product) => {
		const term = searchTerm.trim().toLowerCase();
		if (!term) return false;
		return [product.name, product.category, product.brand, ...(product.tags || [])]
			.filter(Boolean)
			.some((value) => String(value).toLowerCase().includes(term));
	}).slice(0, 3);

	const hintCategories = categories.filter((category) => {
		const term = searchTerm.trim().toLowerCase();
		if (!term) return false;
		return category.name.toLowerCase().includes(term);
	}).slice(0, 3);

	return (
		<>
			<div className={`text-white fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-black/80 backdrop-blur-sm transition-all duration-300 ${isShrunk ? 'shadow-lg' : ''}`}>
				<div className={`mx-auto flex max-w-7xl flex-col gap-3 px-4 transition-all duration-300 lg:flex-row lg:items-center lg:justify-between py-4`}>
					<div className={`flex items-center justify-between gap-4 ${isShrunk ? 'hidden' : 'opacity-100'}`}>
						<img className={`w-32 cursor-pointer object-contain transition-all duration-300 ${isShrunk ? 'h-9' : 'h-12'}`} src="/images/logo.png" alt="Logo" onClick={() => navigate('/')} />
						<div className={`flex gap-3 text-xl lg:hidden ${isShrunk ? 'scale-90' : 'scale-100'} origin-right transition-transform duration-300`}>
							<button onClick={() => navigate('/liked')} className="transition-colors hover:text-red-500" title="Liked Items">
								<FontAwesomeIcon icon={faHeart} />
							</button>
							<button onClick={() => navigate('/cart')} className="transition-colors hover:text-green-500" title="Shopping Cart">
								<FontAwesomeIcon icon={faShoppingCart} />
							</button>
							<button onClick={() => navigate('/account/login')} className="transition-colors hover:text-blue-500" title="Account">
								<FontAwesomeIcon icon={faUser} />
							</button>
						</div>
					</div>

					<div className="flex w-full flex-col gap-3 lg:max-w-xl">
						<div className={`relative flex items-center rounded-full border border-white/15 bg-white/5 px-3 transition-all duration-300 ${isShrunk ? 'py-1.5' : 'py-2'}`}>
							<input
								className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
								type="text"
								placeholder="Search products, tags, or categories"
								value={searchTerm}
								onChange={(e) => dispatch(setSearchTerm(e.target.value))}
								onKeyPress={handleSearchEnter}
								onFocus={() => setShowHints(true)}
								onBlur={() => setTimeout(() => setShowHints(false), 200)}
							/>
							{searchTerm ? (
								<>
									<button
										className="ml-2 text-gray-400 transition-colors hover:text-white"
										onClick={handleSearchClick}
										title="Search"
									>
										<FontAwesomeIcon icon={faSearch} />
									</button>
									<button className="ml-2 text-xs text-gray-300 hover:text-white" onClick={() => dispatch(clearSearchTerm())}>
										Clear
									</button>
								</>
							) : (
								<FontAwesomeIcon icon={faSearch} className="text-gray-400" />
							)}

							{/* Hints Dropdown */}
							{showHints && searchTerm && (hintCategories.length > 0 || hintProducts.length > 0) && (
								<div className="absolute top-full left-0 right-0 mt-2 w-full max-w-xl rounded-lg border border-white/15 bg-black/95 shadow-lg overflow-hidden z-50">
									{hintCategories.length > 0 && (
										<div>
											<div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Categories</div>
											{hintCategories.map((category) => (
												<button
													key={category.id}
													onClick={() => {
														navigate(`/categories/${category.name}`);
														setShowHints(false);
													}}
													className="w-full px-4 py-2 text-left text-sm text-gray-200 transition-colors hover:bg-red-500 hover:text-white"
												>
													{category.name}
												</button>
											))}
										</div>
									)}

									{hintProducts.length > 0 && (
										<div className={hintCategories.length > 0 ? 'border-t border-white/10' : ''}>
											<div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Products</div>
											{hintProducts.map((product) => (
												<button
													key={product.id}
													onClick={() => {
														navigate('/search');
														setShowHints(false);
													}}
													className="w-full px-4 py-2 text-left text-sm text-gray-200 transition-colors hover:bg-red-500 hover:text-white"
												>
													{product.name}
												</button>
											))}
										</div>
									)}
								</div>
							)}
						</div>

						<div className={`flex flex-wrap items-center gap-4 text-sm text-gray-200 transition-all duration-300 lg:justify-center ${isShrunk ? 'hidden' : 'opacity-100'}`}>
							<button className="transition-colors hover:text-red-500" onClick={() => navigate('/')}>Home</button>
							<div className="group relative p-1">
								<button className="flex items-center gap-2 transition-colors group-hover:text-red-500">
									Categories
									<FontAwesomeIcon icon={faCaretDown} className="transition-transform group-hover:rotate-180" />
								</button>
								<div className="absolute left-0 top-8 hidden w-48 overflow-hidden rounded-md bg-black/95 py-2 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2">
									<button className="block w-full px-4 py-2 text-left transition-colors hover:bg-red-500 hover:text-white" onClick={() => navigate('/')}>
										All Products
									</button>
									<button className="block w-full px-4 py-2 text-left transition-colors hover:bg-red-500 hover:text-white" onClick={() => navigate('/')}>
										Sale Items
									</button>
									<button className="block w-full px-4 py-2 text-left transition-colors hover:bg-red-500 hover:text-white" onClick={() => navigate('/')}>
										New Arrivals
									</button>
								</div>
							</div>
							<div className="group relative p-1">
								<button className="flex items-center gap-2 transition-colors hover:text-red-500">
									Contact Us
									<FontAwesomeIcon icon={faCaretDown} className="transition-transform group-hover:rotate-180" />
								</button>
								<div className="absolute left-0 top-8 hidden overflow-hidden rounded-md bg-black/95 p-3 shadow-lg group-hover:block lg:left-1/2 lg:-translate-x-1/2">
									<div className="flex gap-4">
										<button type="button" aria-label="Facebook" className="rounded-full p-1 text-lg transition-colors hover:bg-blue-500 hover:text-white">
											<FontAwesomeIcon icon={faFacebook} />
										</button>
										<button type="button" aria-label="WhatsApp" className="rounded-full p-1 text-lg transition-colors hover:bg-green-400 hover:text-white">
											<FontAwesomeIcon icon={faWhatsapp} />
										</button>
										<button type="button" aria-label="Instagram" className="rounded-full p-1 text-lg transition-colors hover:bg-purple-700 hover:text-white">
											<FontAwesomeIcon icon={faInstagram} />
										</button>
										<button type="button" aria-label="LinkedIn" className="rounded-full p-1 text-lg transition-colors hover:bg-blue-700 hover:text-white">
											<FontAwesomeIcon icon={faLinkedin} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={`hidden items-center gap-6 text-xl transition-all duration-300 lg:flex ${isShrunk ? 'scale-90' : 'scale-100'} origin-right`}>
						<button onClick={() => navigate('/liked')} className="relative transition-colors hover:text-red-500" title="Liked Items">
							<FontAwesomeIcon icon={faHeart} />
						</button>
						<button onClick={() => navigate('/cart')} className="relative transition-colors hover:text-green-500" title="Shopping Cart">
							<FontAwesomeIcon icon={faShoppingCart} />
						</button>
						<button onClick={() => navigate('/account/login')} className="transition-colors hover:text-blue-500" title="Account">
							<FontAwesomeIcon icon={faUser} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header