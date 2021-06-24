import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';

let store = (set, get) => ({
	loader: false,
	setLoader: () => set(state => (state.loader = !state.loader)),
	token: '',
	setToken: (token) => set( ( state ) => { state.token = token  }),
	user: {},
	setUser : (user) => set( state => { 
		state.user = user;
	})
});

store = devtools(store);
store = persist(store, { name: 'cinema_app' });

export const useStore = create(store);