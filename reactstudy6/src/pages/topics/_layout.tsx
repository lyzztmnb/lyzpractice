import React from 'react'
// import { Link } from 'umi'
import { useModel } from 'umi'
import { Button, Space, Input } from 'antd'
import styles from '../index.less'

// 如果有约定路由的话，这个文件就是作为上层的那个文件夹的名字的index
export default function TopicsPage(
	props: { history: { go: (arg0: number) => void, push:(str: string) => void }, children:{} },
) {
	// 通过插件设置当前的数据
	const { setdangqian } = useModel('useResult', (model) => ({ setdangqian: model.setdangqian }))
	// 输入的数据
	let num = 0
	// 返回上一页
	function goback() {
		props.history.go(-1)
	}
	// 实时更改
	function handleChange(e: { target: { value: any } }) {
		num = Number(e.target.value)
	}
	// 进行对比，加载那个数字的结果
	function contrast() {
		props.history.push(`/topics/${num}`)
	}
	// 重设随机数
	function reset() {
		setdangqian(Math.floor(Math.random() * 100) + 1)
	}

	const { Search } = Input

	return (
		<div>
			<h1 className={styles.topics}>Page topics</h1>
			<Button type='primary' onClick={goback}>Goback</Button>
			<Button type='primary' onClick={reset} style={{ marginLeft: 20 }}>重置</Button>
			<br />
			<Space direction="vertical">
				<Search
					enterButton="对比"
					placeholder="请输入1-100的数字"
					onSearch={contrast}
					onChange={handleChange}
					style={{ width: 304, marginTop: 20 }} />
			</Space>
			{ props.children }
		</div>
	)
}
