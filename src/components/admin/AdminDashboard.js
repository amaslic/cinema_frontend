
import React, { useState } from 'react'
import { useStore } from '../../store/store';
import { Movie } from './Movie';
import { movie_api } from '../../services/service';
import { Video } from '../Video';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AdminDashboard = () => {

	const { loader, setLoader } = useStore( (store) => store );
	const [query, setQuery] = useState('');
	const [movie, setMovie] = useState([]);
	const [videoId, setVideoId] = useState(null);
	
	const handleSearch = async (e) => {
		setLoader();
		setMovie([]);
		setVideoId(null);
		e.preventDefault();
		await movie_api({
			method: "get",
			params: {
				t: query,
				plot: 'full'
			}
		}).then( response => {
			setMovie(response.data);
			
			fetchYoutubeId();

		}).catch( () => setLoader());
		
	}

	const fetchYoutubeId = async () => {
		await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=${query}%20movie%20trailer&key=AIzaSyAokmJYveJBxvs7-OzOPB8kvqEp0vh3R4k`)
			.then( response => {
				setVideoId(response.data.items[0].id.videoId);
				setLoader();
			});
	}

	return (
		<div className="mx-5">
			<div className="flex flex-col w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
				<div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
					<div className="px-6 py-6 md:px-8 md:py-0">
						<h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Search for <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Movie</span> </h2>
						
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
							Search for movie from imdb database.
							Later on you can add more information about movie in your cinema (showing date, price, number of seats etc)
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
					<form>
						<div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row">
							<input onChange={(e) => setQuery(e.target.value) } value={query} className="px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" placeholder="Enter movie title" aria-label="Enter movie title" />
							
							<button disabled={query.length < 1 ? true : false } onClick={handleSearch} className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Search</button>
						</div>
					</form>
				</div>
			</div>
			{

				!loader &&
				<div>
					{ videoId && <Video videoId={videoId} videoName={query} /> }
					{
						movie.Title &&
						<Movie movie={movie} videoId={videoId} />
					}
				</div>
			}
		</div>
	)
}
