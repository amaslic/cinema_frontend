import axios from 'axios';

export const movie_api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
	headers: {
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
});

