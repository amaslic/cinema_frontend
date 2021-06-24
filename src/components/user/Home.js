import React, { useEffect, useState } from 'react'
import { api } from '../../services/service'
import { useStore } from '../../store/store'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Movie } from './Movie'

export const Home = () => {

	const { setLoader } = useStore( store => store);
	const [ movies, setMovies ] = useState([]);


	useEffect(  ()  => {
		setLoader();
		const fetchData = async () => {
			await api.get('/movies').then( response => {
				setMovies(response.data.movies);
				setLoader();
			}).catch( () => setLoader());
		}
		fetchData();
		
	}, [setLoader]);
	
	return (
		<div>
			<Header />
			<div className="w-full md:w-2/3 mx-auto  flex justify-around flex-wrap">
				{
					movies.map( movie => {
						return (	
							<Movie key={movie.id} movie={movie} />
						)
						
					})
				}
			</div>
			<Footer />
		</div>
	)
}
