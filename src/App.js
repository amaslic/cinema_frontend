
import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom"

import './App.css';
import {Dashboard} from "./components/Dashboard";
import {Loader} from "./components/Loader";
import {Login} from "./components/Login";
import { MovieCmp } from "./components/MovieCmp";
import {Nav} from "./components/Nav";
import {Register} from "./components/Register";
import {Home} from "./components/user/Home";

import {useStore} from "./store/store";

const App = () => {
	const { loader, user, token } = useStore(state => state);

	useEffect( () => {
		if(loader){
			console.log("check user info");
			console.log(token)
		}
	}, [loader])

	return (
		<div> {
			loader && <Loader/>
		}

			<div className="flex-row w-full">

				<Router>
					<Nav/>

					<div className="mt-4">

						<Switch>
							<Route path="/register">
								<Register/>
							</Route>
							<Route path="/login">
								<Login/>
							</Route>
							<Route path="/dashboard">
								<Dashboard/>
							</Route>
							<Route exact path="/">
								<Home/>
							</Route>
							
							<Route path={`/movies/:id`}>
								<MovieCmp />
							</Route>

						</Switch>

					</div>
				</Router>
			</div>
		</div>
	);

}

export default App;
