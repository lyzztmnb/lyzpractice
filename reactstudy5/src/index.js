import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
	const [results, changeresults] = useState('开始游戏')
	const [inputnum, changeinputnum] = useState(0)
	const [num, changenum] = useState(Math.floor(Math.random() * 100) + 1)

	function handleChange(e) {
		if (Number.isNaN(parseInt(e.target.value, 10))) {
			changeresults('输入数据有误，请重新输入')
		}
		changeinputnum(parseInt(e.target.value, 10))
	}

	function reset() {
		changenum(Math.floor(Math.random() * 100) + 1)
		changeresults('开始游戏')
	}

	function contrast() {
		if (inputnum < 1 || inputnum > 101) {
			changeresults('超出数据范围，请重新输入')
		} else if (inputnum > num) {
			changeresults('太大了')
		} else if (inputnum === num) {
			changeresults('猜对了')
		} else if (inputnum < num) {
			changeresults('太小了')
		}
	}

	return (
		<div className="gamebox">
			<h3>猜数字小游戏</h3>
			<div className="smallbox">
				<span>{results}</span>
				<input onChange={handleChange} />
				<button onClick={contrast}>对比</button>
				<button onClick={reset}>重置</button>
			</div>
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
