import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { num: Math.floor(Math.random() * 100) + 1, results: '输入数字开始游戏', inputnum: '' }
		this.handleChange = this.handleChange.bind(this)
		this.contrast = this.contrast.bind(this)
		this.reset = this.reset.bind(this)
	}

	render() {
		return (
			<div className="gamebox">
				<h3>猜数字小游戏</h3>
				<div className="smallbox">
					<span>{this.state.results}</span>
					<input onChange={this.handleChange} value={this.state.inputnum} />
					<button onClick={this.contrast}>对比</button>
					<button onClick={this.reset}>重置</button>
				</div>
			</div>
		)
	}

	handleChange(e) {
		this.setState({ inputnum: e.target.value })
	}

	contrast() {
		const inputnum = parseInt(this.state.inputnum, 10)
		const { num } = this.state
		if (Number.isNaN(inputnum)) {
			this.setState({ results: '输入数据有误，请重新输入' })
			return
		}
		if (inputnum < 1 || inputnum > 101) {
			this.setState({ results: '输入的数字超出范围' })
			return
		}
		if (inputnum < num) {
			this.setState({ results: '太小了' })
		} else if (inputnum === num) {
			this.setState({ results: '猜对啦！' })
		} else {
			this.setState({ results: '太大了' })
		}
	}

	reset() {
		this.setState({
			results: '输入数字开始游戏',
			inputnum: '',
			num: Math.floor(Math.random() * 100) + 1,
		})
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
