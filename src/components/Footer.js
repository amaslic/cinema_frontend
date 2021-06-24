import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
	return (

		<div className="container items-center max-w-full mt-16">
			<footer className="text-gray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
				<div className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
					<nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-6 text-base nprd">
						<Link to="/" className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Pricing</Link>
						<Link to="/" className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Contact</Link>
						<Link to="/" className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Services</Link>
						<Link to="/" className="px-4 py-1 mr-1 text-gray-500 transition duration-500 ease-in-out transform rounded-md text-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ">Now</Link>
					</nav>
					<span className="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0">
						<span className="mr-2 text-gray-500 hover:text-blue-500">
							<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</span>
						<span className="mr-2 text-gray-500 hover:text-blue-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<circle cx="12" cy="12" r="9"></circle>
								<path d="M9 3.6c5 6 7 10.5 7.5 16.2"></path>
								<path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path>
								<path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path>
							</svg>
						</span>
						<span className="text-gray-500 hover:text-blue-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
							</svg>
						</span>
					</span>
				</div>
				<div className="max-w-full flex mx-auto justify-center mt-4 border-t rounded-b-lg bg-blueGray-100">
					<div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
						<p className="mx-auto text-sm text-center text-black sm:text-left ">
							© 2021
						</p>
					</div>
				</div>
			</footer>
		</div>

	)
}
