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
Parse.initialize('guess-number', 'admin') // 传入APPID和JavaScript key即可

function Login(props: { history: string[] }) {
	const { nowusernum } = useModel('useAuthModel', (model) => ({ nowusernum: model.nowusernum }))
	const { nowuserid } = useModel('useAuthModel', (model) => ({ nowuserid: model.nowuserid }))

	function onFinishFailed(errorInfo: any) {
		console.log('Failed:', errorInfo)
	}

	function onFinish(values: { username: any; password: any }) {
		const thisname = values.username
		const thispass = values.password
		const GameScore = Parse.Object.extend('_User')
		const query = new Parse.Query(GameScore)
		// 检索用户名是否存在
		query.equalTo('username', thisname)
		query.find().then(
			(success:any) => {
				if (success.length === 0) {
					// 账号不存在，注册账号
					const user = new Parse.User()
					user.set('username', thisname)
					user.set('password', thispass)
					user.set('num', Math.floor(Math.random() * 100) + 1)
					user.signUp().then(
						(res: any) => {
							// 注册成功
							nowusernum(res.attributes.num)
							nowuserid(res.id)
							props.history.push('/App')
						},
						(error: { code: string; message: string }) => {
							console.log(`Error: ${error.code} ${error.message}`)
						},
					)
				} else {
					// 账号存在，登录账号
					Parse.User.logIn(thisname, thispass).then(
						(res:any) => {
							if (res.code === 101) {
								console.log('密码错误重新登录')
							} else {
								console.log('登录成功')
								nowusernum(res.attributes.num)
								nowuserid(res.id)
								props.history.push('/App')
							}
						},
						(err:any) => {
							console.log(err)
						},
					)
				}
			},
			(error:any) => {
				console.log(error)
			},
		)
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
