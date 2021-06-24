import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStore } from '../store/store'; 

export const Nav = () => {
	const { token, setToken, user, setUser } = useStore(state => state);
	
	const [menu, setMenu] = useState(true);

	const history = useHistory();

	const handleLogout = (e) => {
		e.preventDefault();
		setToken(null);
		setUser({});
		history.push('/');
	}

	return (
		<nav className="shadow bg-gray-700 ">
				<div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
					<div className="flex items-center justify-between">
						<div>
							<Link className="text-xl font-bold text-white  md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Drive In - Cinema</Link>
						</div>
						
						<div className="flex md:hidden">
							<button onClick={(e) => setMenu(!menu)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
								<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
									<path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
								</svg>
							</button>
						</div>
					</div>
					<div className="hidden md:block text-white items-center ">
							<div className="flex flex-row mx-6">
								<div>
									<Link className="my-1 text-sm font-medium  hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/">Home</Link>
								</div>
								{

									!token &&
									<div>
										<Link className="my-1 text-sm font-medium   hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/register">Register</Link>
										<Link className="my-1 text-sm font-medium  hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/login">Login</Link>
									</div>
								}
								{
									token &&
									<div>
										<Link className="my-1 text-sm font-medium  hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/dashboard">Dashboard</Link>
										<button className="my-1 text-sm font-medium   hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" onClick={handleLogout}>Logout</button>

										{user.name}
										
									</div>
								}
								
							</div>
						</div>
					{
						menu &&
						<div className="items-center flex md:hidden text-white">
							<div className="flex flex-col ">
								<Link className="my-1 text-sm font-medium   hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/">Home</Link>
								{
									!token &&
									<>
										<Link className="my-1 text-sm font-medium   hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/register">Register</Link>
										<Link className="my-1 text-sm font-medium   hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/login">Login</Link>
									</>
								}
								{
									token &&
									<>
										
										<Link className="my-1 text-sm font-medium  hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" to="/dashboard">Dashboard</Link>
										<button className="my-1 text-sm font-medium text-left md:text-center  hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" onClick={handleLogout}>Logout</button>
										{user.name}
									
									</>

								}
							</div>
						</div>
					}
				</div>
			</nav>
	)
}
