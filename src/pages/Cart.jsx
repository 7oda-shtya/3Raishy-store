import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeItem, clearCart, calculateTotals } from '../redux/reducers/cartSlice'
import ProductCard from '../components/ProductCard';

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(s => s.cart);
	const products = useSelector(s => s.product.products);
	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);

	const cartItemsLength = cart.cartItems.length;
	const cartQtyKey = cart.cartItems.map(i => i.qty).join(',');

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItemsLength, cartQtyKey, dispatch]);

	const applyCoupon = () => {
		if (coupon.trim().toLowerCase() === 'save10') setDiscount(0.1);
		else if (coupon.trim().toLowerCase() === 'freeship') setDiscount(10);
		else setDiscount(0);
	}

	const subtotal = cart.totalAmount || 0;
	const discountAmount = +(subtotal * discount).toFixed(2);
	const shipping = subtotal > 100 ? 0 : (subtotal === 0 ? 0 : 6.99);
	const total = +(subtotal - discountAmount + shipping).toFixed(2);

	const recommended = products.filter(p => !cart.cartItems.find(ci => ci.id === p.id)).slice(0,3);

	return (
		<div className="min-h-screen bg-transparent text-white py-8 px-4 md:px-12">
			<header className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
				<h1 className="text-3xl font-extrabold text-white">Your Cart</h1>
				<div className="text-sm text-gray-400">{cart.totalQuantity || 0} items • ${cart.totalAmount || 0}</div>
			</header>

			<main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
				<section className="lg:col-span-2">
					<div className="bg-white/20 rounded-lg shadow p-6">
						{cart.cartItems.length === 0 ? (
							<div className="text-center py-16">
								<h2 className="text-2xl font-semibold">Your cart is feeling lonely</h2>
								<p className="text-green-300 mt-2">Add items from the shop to see them here.</p>
							</div>
						) : (
							<ul className="divide-y">
								{cart.cartItems.map(item => (
									<li key={item.id} className="flex items-center gap-4 py-4">
										<img src={item.imgs?.[0] || '/images/placeholder.png'} alt={item.name} className="w-28 h-28 object-contain rounded-lg bg-gray-100 p-2" />
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<h3 className="font-semibold text-gray-800">{item.name}</h3>
												<button onClick={() => dispatch(removeItem(item.id))} className="text-red-500 hover:underline text-sm">Remove</button>
											</div>
											<p className="text-sm text-gray-500 mt-1">{item.details?.slice(0,80)}</p>
											<div className="mt-3 flex items-center justify-between">
												<div className="flex items-center space-x-2">
													<button onClick={() => dispatch(decreaseQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">-</button>
													<div className="px-3 py-1 bg-gray-100 rounded">{item.qty}</div>
													<button onClick={() => dispatch(increaseQty(item.id))} className="px-2 py-1 bg-gray-200 rounded">+</button>
												</div>
												<div className="text-lg font-semibold">${((item.discountPrice ?? item.price) * item.qty).toFixed(2)}</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>

					<div className="mt-6 bg-white/20 rounded-lg shadow p-6 flex items-center justify-between">
						<div>
							<h4 className="font-semibold">Got a promo?</h4>
							<p className="text-sm text-green-300">Try `save10` for 10% off</p>
						</div>
						<div className="flex items-center gap-2">
							<input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Coupon code" className="px-3 py-2 border rounded w-44" />
							<button onClick={applyCoupon} className="px-4 py-2 bg-indigo-600 text-white rounded">Apply</button>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
						<button onClick={() => dispatch(clearCart())} className="w-full py-3 bg-red-50 text-red-600 border border-red-100 rounded">Clear Cart</button>
						<button className="w-full py-3 bg-green-600 text-white rounded">Proceed to Checkout</button>
					</div>

					<div className="mt-8">
						<h3 className="text-lg font-semibold mb-3">Recommended for you</h3>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
							{recommended.map(r => (
								<ProductCard key={r.id} product={r} />
							))}
						</div>
					</div>
				</section>

				<aside className="lg:col-span-1">
					<div className="sticky top-24 bg-white/20 rounded-lg shadow p-6">
						<h4 className="text-lg font-semibold">Order Summary</h4>
						<div className="mt-4 space-y-2">
							<div className="flex justify-between text-sm text-gray-400"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
							<div className="flex justify-between text-sm text-gray-400"><span>Discount</span><span>-${discountAmount.toFixed(2)}</span></div>
							<div className="flex justify-between text-sm text-gray-400"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
							<div className="border-t pt-3 flex justify-between items-center"><span className="font-semibold">Total</span><span className="text-xl font-bold">${total.toFixed(2)}</span></div>
						</div>

						<div className="mt-6">
							<label className="block text-sm text-gray-400">Estimated delivery</label>
							<div className="mt-2 text-sm text-gray-400">2–5 business days</div>
						</div>

						<button className="mt-6 w-full py-3 bg-indigo-600 text-white rounded">Pay ${total.toFixed(2)}</button>
					</div>
				</aside>
			</main>
		</div>
	)
}

export default Cart