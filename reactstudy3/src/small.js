import { Component, React } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Small extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ztarr: [
				'太大了',
				'猜对了！',
				'太小了',
				'开始游戏',
				'输入的数据有误，请重新输入',
				'输入的数字超出范围，请重新输入',
			],
			now: 0,
		}
	}

	render() {
		return <h3>{this.state.ztarr[this.props.location.state.num]}</h3>
	}
}

Small.propTypes = {
	location: PropTypes.object,
}

export default withRouter(Small)
