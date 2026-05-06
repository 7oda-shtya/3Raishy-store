import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className="mt-16 border-t border-white/10 bg-black/50 text-white">
			<div className="mx-auto max-w-7xl px-4 py-12">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* About */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-red-500">About Us</h3>
						<p className="text-sm text-gray-400">
							We provide the best products and services to enhance your shopping experience. Quality and customer satisfaction are our priorities.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-red-500">Quick Links</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<button onClick={() => navigate('/')} className="transition-colors hover:text-white">
									Home
								</button>
							</li>
							<li>
								<button onClick={() => navigate('/search')} className="transition-colors hover:text-white">
									Search
								</button>
							</li>
							<li>
								<button onClick={() => navigate('/liked')} className="transition-colors hover:text-white">
									Liked Products
								</button>
							</li>
							<li>
								<button onClick={() => navigate('/cart')} className="transition-colors hover:text-white">
									Shopping Cart
								</button>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-red-500">Support</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="mailto:support@3raishy.com" className="transition-colors hover:text-white">
									mahmoudelrhman@gmail.com
								</a>
							</li>
							<li>
								<a href="tel:+201234567890" className="transition-colors hover:text-white">
									+20 1064042179
								</a>
							</li>
							
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h3 className="mb-4 text-lg font-bold text-red-500">Follow Us</h3>
						<div className="flex gap-4">
							<button type="button" aria-label="Facebook" className="rounded-full bg-white/10 p-3 text-lg transition-colors hover:bg-blue-500 hover:text-white">
								<FontAwesomeIcon icon={faFacebook} />
							</button>
							<button type="button" aria-label="Twitter" className="rounded-full bg-white/10 p-3 text-lg transition-colors hover:bg-blue-300 hover:text-white">
								<FontAwesomeIcon icon={faTwitter} />
							</button>
							<button type="button" aria-label="Instagram" className="rounded-full bg-white/10 p-3 text-lg transition-colors hover:bg-purple-700 hover:text-white">
								<FontAwesomeIcon icon={faInstagram} />
							</button>
							<button type="button" aria-label="LinkedIn" className="rounded-full bg-white/10 p-3 text-lg transition-colors hover:bg-blue-700 hover:text-white">
								<FontAwesomeIcon icon={faLinkedin} />
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
					<p className="mb-2">&copy; 2026 3Raishy Store. All rights reserved.</p>
					<div className="flex justify-center gap-6">
						<button type="button" className="transition-colors hover:text-white">
							Privacy Policy
						</button>
						<button type="button" className="transition-colors hover:text-white">
							Terms & Conditions
						</button>
						<button type="button" className="transition-colors hover:text-white">
							Shipping Info
						</button>
						<button type="button" className="transition-colors hover:text-white">
							Returns
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
