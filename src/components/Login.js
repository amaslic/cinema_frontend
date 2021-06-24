import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useStore } from '../store/store';
import { api } from '../services/service';
import { useHistory } from 'react-router-dom';

export const Login = () => {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setToken, setUser, setLoader } = useStore(state => state);
	const alert = useAlert();
	
	const handleLogin = (e) => {
		setLoader();
		e.preventDefault();
		api.post('/login', {
				email: email,
				password: password
		}).then( response => {
			setLoader();
			history.push('/');
			const { name, email, isAdmin } = { ...response.data.user };
			setUser({ name, email, isAdmin });
			setToken(response.data.token);
		}).catch(() => {
			setLoader();
			return(alert.error (
				<div className='text-red-600 text-sm'>Something went wrong!</div>
			))
		});
	}

	return (
		<div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
			<div className="px-6 py-4">
				<h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Cinema</h2>

				<h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

				<p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

				<div className="w-full mt-4">
					<label className="text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
					<input required
						onChange={
							(e) => setEmail(e.target.value)
						}
						className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						type="email"
						placeholder="Email Address"
						aria-label="Email Address"/>
				</div>

				<div className="w-full mt-4">
					<label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
					<input required
						onChange={
							(e) => setPassword(e.target.value)
						}
						className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						type="password"
						placeholder="Password"
						aria-label="Password"/>
				</div>

				<div className="flex items-center justify-between mt-4">
					<button onClick={handleLogin}
						className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
						type="button">
						Login
					</button>
				</div>
			</div>

			<div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
				<span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account?
				</span>

				<Link to="/register" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Register</Link>
			</div>
		</div>
	)
}
