import React from 'react'
import {
	Form,
	Input,
	Button,
} from 'antd'
import { useModel } from 'umi'
import 'antd/dist/antd.css'
import './index.css'

const Parse = require('parse')

Parse.serverURL = 'http://localhost:1337/parse'
Parse.initialize('newapp', 'admin') // 传入APPID和JavaScript key即可

function Login(props: { history: string[] }) {
	const { nowusernum } = useModel('useAuthModel', (model) => ({ nowusernum: model.nowusernum }))
	const { nowuserid } = useModel('useAuthModel', (model) => ({ nowuserid: model.nowuserid }))
	const GameScore = Parse.Object.extend('user')
	const query = new Parse.Query(GameScore)

	function onFinish(values: { username: any; password: any }) {
		const thisname = values.username
		const thispass = values.password
		query.equalTo('playname', thisname)
		query.equalTo('password', thispass)
		query.find().then(
			(results: string | any[]) => {
				// 当账号不存在，就创建新的账号
				if (results.length === 0) {
					// console.log('账号不存在，即将创建账号')
					const anynum = Math.floor(Math.random() * 100) + 1
					const gameScore = new GameScore()
					gameScore.set('num', anynum)
					gameScore.set('playname', thisname)
					gameScore.set('password', thispass)
					gameScore.save().then(
						(res: any) => {
							nowusernum(anynum)
							nowuserid(res.id)
							props.history.push('/App')
						},
						(error: { message: any }) => {
							console.log(`Failed to create new object, with error code: ${error.message}`)
						},
					)
				} else {
					// 当账号存在时，获取该账号的数据
					nowusernum(results[0].attributes.num)
					nowuserid(results[0].id)
					props.history.push('/App')
				}
			},
			(error: any) => {
				console.log(error)
			},
		)
	}

	function onFinishFailed(errorInfo: any) {
		console.log('Failed:', errorInfo)
	}

	return (
		<div className='bigbox'>
			<Form
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login
