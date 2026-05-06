import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faQuestion } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute inset-0 h-[69%] flex flex-col justify-center items-center bg-white/20 text-white px-4 py-4 max-w-md m-auto rounded-lg">
			<div className="w-full text-black flex justify-between items-center ">
				<button className="rounded-full transtion-all duration-300 hover:bg-white/90 bg-white/30 w-12 h-12 flex justify-center items-center" onClick={() => navigate('/account')}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button className="rounded-full transtion-all duration-300 hover:bg-white/90 bg-white/30 w-12 h-12 flex justify-center items-center" onClick={() => navigate('/account/help')}>
					<FontAwesomeIcon icon={faQuestion} />
				</button>
			</div>
			<div className="text-center">
				<h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
				<p className="text-gray-300">Sign in to access smart, personalized travel plans made for you.</p>
			</div>
			<div className="w-full max-w-md">
				<div className="flex flex-col mb-4 items-start gap-1">
					<label className="">Email</label>
					<input className="bg-transparent w-full p-2 rounded-lg text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
					type="email" 
					placeholder="Enter your email" />
				</div>
				<div className="flex flex-col mb-4 items-start gap-1">
					<label className="text-gray-300">Password</label>
					<input className="bg-transparent w-full p-2 rounded-lg text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter your password" />
				</div>
			</div>
			<div className="w-full max-w-md">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center">
						<input className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" type="checkbox" id="remember" />
						<label className="ml-2 text-gray-300" htmlFor="remember">Remember me</label>
					</div>
					<div className="text-blue-500 hover:underline cursor-pointer">Forget Password?</div>
				</div>
			</div>
			<button className="bg-blue-600 w-full hover:bg-blue-800 transition-all duration-200 text-white font-bold py-2 px-4 rounded-[19px]">Login</button>
			<span className="text-gray-300 py-3">or continue with</span>
			<div className="flex gap-4 mb-3">
				<button className="bg-white hover:bg-white/80 transtion-all duration-300 text-white w-12 font-bold rounded-full"><img src="./images/google.png" alt="" /></button>
				<button className="bg-white hover:bg-white/80 transtion-all duration-300 text-white w-12 font-bold rounded-full"><img src="./images/facebook.png" alt="" /></button>
			</div>
			<div className="text-gray-300">
				<span className="text-gray-300">Don't have an account?</span>
				<button className="text-blue-500 hover:underline cursor-pointer ml-1 "
				onClick={() => navigate('/account/signup')}
				>
					Sign Up
				</button>
			</div>
		</div>
	)
}

export default Login