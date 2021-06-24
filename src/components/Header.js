import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
	return (

		<section className="text-gray-700">
			<div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
				<div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
					<img className="object-cover object-center rounded" alt="hero" loading="lazy" src="https://radiobobar.com/wp-content/uploads/2020/06/drive-in.jpg"/>
				</div>
				<div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
					<h2 className="mb-1 text-xs font-medium tracking-widest text-black title-font">
						Drive In - Cinema
					</h2>
					<h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
						First drive in cinema in your town.</h1>
					<p className="mb-8 text-base leading-relaxed text-left text-gray-700 ">
						You want to watch your favourite movie under the sky and the stars.
						This is right place for you. Reserve tickets, show QR code at the entrance and enjoy the show.
					</p>
					<div className="flex flex-col justify-left lg:flex-row">
						<p className="mt-2 text-sm text-left text-gray-600 md:ml-6 md:mt-0">
							<br className="hidden lg:block"/>
							<Link to="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
								How it works
								<svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
								</svg>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>

	)
}
