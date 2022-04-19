import './index.css'
import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter as Router,
	BrowserRouter,
	Switch,
	Route,
	Link,
	// useHistory,
} from 'react-router-dom'
import Home from './home'
import Other from './other'
import Topics from './topics'

function Main() {
	return (
		<Router >
			<div className='luyou'>
				<ul>
					<li><Link to="/home">home</Link></li>
					<li><Link to="/other">other</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/other">
						<Other></Other>
					</Route>
					<Route path="/topics">
						<Topics></Topics>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>,
	document.getElementById('root'),
)
