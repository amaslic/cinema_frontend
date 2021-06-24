import {useEffect, useState} from "react";
import { useAlert } from "react-alert";
import { api } from "../../services/service";
import { useStore } from "../../store/store";
import QRCode from "react-qr-code";
import DateTimePicker from 'react-datetime-picker';

export const Movie = (params) => {
	const {movie, videoId} = {
		...params
	};
	const { setLoader, token } = useStore( store => store );

	const alert = useAlert();
	const [time, setTime] = useState(new Date());
	const [seats, setSeats] = useState(0);
	const [price, setPrice] = useState(0);

	const date = new Date();
	const [title, setTitle] = useState(date.toLocaleDateString("en-US"));
	const [plot, setPlot] = useState(date.toLocaleDateString("en-US"));

	const defaultImg = 'https://cms-assets.tutsplus.com/uploads/users/107/posts/22956/image/cinema-poster-by-yuzach.jpg';

	useEffect(() => {
		setTitle(movie.Title);
		setPlot(movie.Plot);
	}, [movie]);

	const handleClick = async (e) => {

		e.preventDefault();
		setLoader();
		await api.post('/movie', {
			title: title,
			price: price,
			active: 1,
			tickets: seats,
			plot: plot,
			poster: movie.Poster !== 'N/A' && movie.Poster ? movie.Poster : defaultImg,
			actors: movie.Actors || 'N/A',
			director: movie.Director || 'N/A',
			writer: movie.Writer || 'N/A',
			production: movie.Production || 'N/A',
			genre: movie.Genre || 'N/A',
			imdb_rating: movie.imdbRating !== 'N/A' && movie.imdbRating  ? movie.imdbRating : 0,
			videoId: videoId
		},{
			headers:{
				'Authorization': `Bearer ${token}`
			}
		}).then(response => {
			console.log(response);
			alert.info (
				<div className='text-green-600 text-sm'>{response.data.message}!</div>
			)
			setLoader();
		}).catch( () => {
			setLoader();
			alert.error (
				<div className='text-red-600 text-sm'>Something went wrong!</div>
			)
		});

	}

	return (

		<div className="mt-12 mb-12">
			
			<div className="w-full md:w-2/3 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
				<QRCode value={`Movie: ${title}\nPrice: $10\nTickets: 2\n Name: Aleksandar`} className="m-auto" />
				<div className="w-full bg-gray-700  flex-row md:flex m-auto md:m-left">
				
					<img className="object-contain w-1/4 h-64 m-auto pt-10 md:pt-0"
						src={
							movie.Poster !== 'N/A' && movie.Poster ? movie.Poster : defaultImg
						}
						alt={
							movie.Title
						}/>


					<div className="flex-row ml-2 mt-8 w-full">
						<div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Duration:
							</span>
							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Runtime
							} </span>
						</div>
						{
						movie.Actors && <div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Actors:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Actors
							}</span>
						</div>
					}
						{
						movie.Director && <div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Director:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Director
							}</span>
						</div>
					}
						{
						movie.Production && <div className="max-w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Production:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Production
							}</span>

						</div>
					}
						{
						movie.Writer && <div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Writer:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Writer
							}</span>
						</div>
					}
						{
						movie.imdbRating && <div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								IMDB rating:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.imdbRating
							}</span>
						</div>
					}
						{
						movie.Genre && <div className="w-full pb-1">
							<span className="mx-2 font-semibold text-white">
								Genre:
							</span>

							<span className="mx-1 text-xs text-white pt-1">
								{
								movie.Genre
							}</span>
						</div>
					} </div>
				</div>


				<div className="p-6">
					<div className="flex items-center">
						<input type="text"
							onChange={
								(e) => setTitle(e.target.value)
							}
							value={title}
							className="pl-2 dark:border-gray-600 border border-gray-600 text-2xl font-semibold w-full dark:text-gray-300 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"/>
					</div>

					<div>
						<p className="mt-2 text-sm text-gray-600 dark:text-gray-400 w-full">
							<textarea onChange={
									(e) => setPlot(e.target.value)
								}
								className="w-full  dark:border-gray-600 border border-gray-600 outline-none h-36 p-4 text-xs resize-none "
								value={plot}></textarea>
						</p>
					</div>

					<div>

						<div className="mt-4 w-full flex">
							<div className=" items-center w-1/2 pr-2">
								<span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
									Ticket price:
								</span>
								<input type="number" placeholder="Ticket price"
									value={price}
									onChange={
										(e) => setPrice(e.target.value)
									}
									className="mx-1 text-xs pl-2 dark:border-gray-600 border border-gray-600 font-semibold w-16 dark:text-gray-300 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"/>
							</div>
							<div className=" items-center w-1/2">
								<span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
									Number of tickets:
								</span>
								<input type="number" placeholder="Number of tickets"
									value={seats}
									onChange={
										(e) => setSeats(e.target.value)
									}
									className="mx-1 text-xs pl-2 dark:border-gray-600 border border-gray-600 font-semibold w-16 dark:text-gray-300 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"/>
							</div>
						</div>
						<div className="mt-4 w-full flex">
							<div className="flex items-center w-1/2 ">
								<span className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
									Start time:
								</span>
								<DateTimePicker
									onChange={(value) => setTime(value)}
									value={time}
								/>
									
							</div>
						</div>
						<div className="mt-4 w-full flex">
							<button onClick={handleClick} className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200
																transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none w-full">Save Movie</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
