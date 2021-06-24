import React from 'react';

import { Link } from 'react-router-dom';

export const Movie = ({
	...props
}) => {
	const movie = props.movie;
	return (
		
			<div className="flex items-center justify-between w-72 overflow-hidden mb-6 md:mb-16 ">
				<div className="w-full max-w-sm mx-auto shadow-md overflow-hidden">
					<div className="flex items-end justify-end w-full bg-cover h-96" 
						style={{backgroundImage: `url(${movie.poster})`}}>
						<Link to={`/movies/${movie.id}`} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						</Link>
					</div>
					<div className="px-5 py-3 bg-white border-2 border-blue-600 border-t-0">
						<h3 className="text-gray-700 uppercase font-bold">{movie.title}</h3>
						<span className="text-gray-500 mt-2">Price: $ {movie.price}</span>
					</div>
				</div>
			</div>
		 
	)
}
