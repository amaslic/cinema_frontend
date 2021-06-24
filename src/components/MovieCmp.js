import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/service';
import { useStore } from '../store/store';
import { Video } from './Video';

export const MovieCmp = (  ) => {
	const { id } = useParams();
	const { setLoader, token } = useStore( store => store );

	const [ movie, setMovie ] = useState([]);


	useEffect( () => {
		setLoader();
		const fetchData = async () => {
			await api( `/movie/${id}`, {
				method: 'get',
				/*headers: {
					'Authorization': `Bearer ${token}`
				}*/
			}).then( response => {
				console.log(response.data.movie);
				setMovie(response.data.movie);
				setLoader();
			}).catch( () => {
				setLoader();
				//history.push('/');
			});
		}
		fetchData();
	}, [])

	return (
		<div>
				<Video videoId={movie.videoId} videName={movie.title} />
				<p>
					{movie.title}
				</p>
				<p>
					{movie.plot}
				</p>
				<p>
					{movie.genre}
				</p>
				<p>
					{movie.actors}
				</p>
		</div>
	)
}
