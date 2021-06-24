import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { api } from '../services/service';
import { useStore } from '../store/store';
import { useHistory } from 'react-router-dom';

export const Register = () => {
	const history = useHistory();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	const { setLoader } = useStore(state => state);
	const alert = useAlert();

	const handleRegister = async (e) => {
		setLoader();
		e.preventDefault();

		if (password !== passwordRepeat) {
			setLoader();
			return(alert.info (
				<div className='text-blue-400 text-sm'>Passwords need to match!</div>
			));
			
		}
		

		await api.post('/register', {
			name: name,
			email: email,
			password: password
		}).then( () => {
			setLoader();
			
			history.push('/login');
		}).catch((error) => {
			setLoader();
			if (error.response) {
				const {name, email, password} = {
					...error.response.data.errors
				};
				return(alert.info (
					<div className='text-red-600 text-sm'>
						{
						name ? name[0] : ''
					}
						<br/> {
						email ? email[0] : ''
					}
						<br/> {
						password ? password[0] : ''
					} </div>
				))
			} else if (error.request) {
				return(alert.info (
					<div className='text-red-600 text-sm'>There is error in request to server.</div>
				))
			} else {
				return(alert.info (
					<div className='text-red-600 text-sm'>Something went wrong!</div>
				))
			}

		});
	}

	return (
		<div className="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
			<div className="px-6 py-4">
				<h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Cinema</h2>
				<h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome</h3>

				<p className="mt-1 text-center text-gray-500 dark:text-gray-400">Create account</p>

				<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
					<div>
						<label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
						<input placeholder="Username" required
							onChange={
								(e) => setName(e.target.value)
							}
							type="text"
							className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
					</div>

					<div>
						<label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
						<input placeholder="Email" required
							onChange={
								(e) => setEmail(e.target.value)
							}
							type="email"
							className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
					</div>

					<div>
						<label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
						<input required
							onChange={
								(e) => setPassword(e.target.value)
							}
							type="password"
							className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
					</div>

					<div>
						<label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
						<input required
							onChange={
								(e) => setPasswordRepeat(e.target.value)
							}
							type="password"
							className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
					</div>
				</div>

				<div className="flex justify-end mt-6">
					<button onClick={handleRegister}
						className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
				</div>
			</div>
			<div className="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
				<span className="text-sm text-gray-600 dark:text-gray-200">Already have an account?
				</span>

				<Link to="/login" className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Login</Link>

			</div>
		</div>

	)
}
