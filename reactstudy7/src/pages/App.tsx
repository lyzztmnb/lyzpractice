import React, { useEffect } from 'react'
// import {
// 	withRouter,
// } from 'react-router-dom'
import {
	InputNumber,
	Button,
} from 'antd'
import { useModel } from 'umi'

const Parse = require('parse')

Parse.serverURL = 'http://localhost:1337/parse'
Parse.initialize('guess-number', 'admin')

function App(props: { history: string[] }) {
	const { usernum, nowusernum } = useModel('useAuthModel', (model) => ({ usernum: model.usernum, nowusernum: model.nowusernum }))
	const { state, nowstate } = useModel('useAuthModel', (model) => ({ state: model.state, nowstate: model.nowstate }))
	const { userid } = useModel('useAuthModel', (model) => ({ userid: model.userid }))

	const User = Parse.Object.extend('_User')
	const user = new User()
	let innum = 0

	function handleChange(value: any) {
		innum = value
	}

	function reset() {
		const newnum = Math.floor(Math.random() * 100) + 1
		user.set('id', userid)
		user.save().then(
			() => {
				user.set('num', newnum)
				nowusernum(newnum)
				nowstate('开始游戏')
				return user.save()
			},
			(error: { message: any }) => {
				console.log(`Failed to create new object, with error code: ${error.message}`)
			},
		)
	}

	function contrast() {
		if (innum > usernum) {
			nowstate('太大了')
		} else if (innum === usernum) {
			nowstate('猜对了')
			const newnum = Math.floor(Math.random() * 100) + 1
			user.set('id', userid)
			user.save().then(
				() => {
					nowusernum(newnum)
					user.set('num', newnum)
					return user.save()
				},
				(error: { message: any }) => {
					console.log(`Failed to create new object, with error code: ${error.message}`)
				},
			)
		} else if (innum < usernum) {
			nowstate('太小了')
		}
	}

	useEffect(() => {
		if (usernum === '' || userid === '') {
			props.history.push('/')
		}
	}, [])

	return (
		<div className="gamebox">
			<h2>猜数字小游戏</h2>
			<div className="smallbox">
				<span>{state}</span>
				<InputNumber min={1} max={100} onChange={handleChange} className='inputbox' />
				<Button type="primary" onClick={contrast} className='marginleft'>对比</Button>
				<Button onClick={reset} className='marginleft'>重置</Button>
			</div>
		</div>
	)
}

export default App
