import React, { Component } from 'react'
import {
	Route,
	Link,
	withRouter,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Small from './small'

class Topics extends Component {
	constructor(props) {
		super(props)
		this.state = {
			num: Math.floor(Math.random() * 100) + 1,
			inputnum: '',
			list: [],
		}
		this.handleChange = this.handleChange.bind(this)
		this.contrast = this.contrast.bind(this)
		this.reset = this.reset.bind(this)
	}

	handleChange(e) {
		this.setState({ inputnum: e.target.value })
	}

	contrast() {
		const inputnum = parseInt(this.state.inputnum, 10)
		const { num } = this.state
		let shuzi = 0
		if (Number.isNaN(inputnum)) {
			shuzi = 4
		} else if (inputnum < 1 || inputnum > 101) {
			shuzi = 5
		} else if (inputnum < num) {
			shuzi = 2
		} else if (inputnum === num) {
			shuzi = 1
		} else {
			shuzi = 0
		}
		this.setState({
			list: [...this.state.list, { path: this.state.inputnum, num: shuzi }],
		})
		this.props.history.push(`/topics/${this.state.inputnum}`, { num: shuzi })
		this.setState({ inputnum: '' })
	}

	reset() {
		this.setState({
			inputnum: '',
			num: Math.floor(Math.random() * 100) + 1,
		})
	}

	render() {
		const listarr = this.state.list.map((el, index) => <li key={index}><Link to={{ pathname: `/topics/${el.path}`, state: { num: el.num } }} >{el.path}</Link></li>)
		return (
			<div className='gamebox'>
				<h3>猜数字小游戏</h3>
				<ul>
					{listarr}
				</ul>
				<div className='smallbox'>
					<input onChange={this.handleChange} value={this.state.inputnum} />
					<button onClick={this.contrast}>对比</button>
					<button onClick={this.reset}>重置</button>
				</div>
				<Route path={'/topics/:num'} >
					<Small />
				</Route>
			</div >
		)
	}
}

Topics.propTypes = {
	history: PropTypes.object,
}

export default withRouter(Topics)
