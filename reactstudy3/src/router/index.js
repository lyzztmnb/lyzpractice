import React from 'react'
import Other from '../other'
import Home from '../home'
import Topics from '../topics'
import Small from '../small'

// function router() {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route path='/home' element={<Home></Home>}></Route>
// 				<Route path='/other' element={<Other></Other>}></Route>
// 				<Route path='/topics' element={<Topics></Topics>}>
// 					<Route path='/topics/:num' element={<Small></Small>}></Route>
// 				</Route>
// 			</Routes>
// 		</Router>
// 	)
// }
const routes = [
	{
		path: '/home',
		element: <Home></Home>,
	},
	{
		path: '/other',
		element: <Other></Other>,
	},
	{
		path: '/topics',
		element: <Topics></Topics>,
		children: [
			{
				path: '/:num',
				element: <Small></Small>,
			},
		],
	},
]

export default routes
