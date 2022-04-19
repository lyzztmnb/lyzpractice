import { Component, React } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Small extends Component {
	constructor(props) {
		super(props)
		this.state = {
			results: '',
		}
	}

	componentDidMount() {
		if (this.props.match.params.num === 'start') {
			this.setState({ results: '开始游戏' })
		} else {
			const inputnum = parseInt(this.props.match.params.num, 10)
			const { num } = this.props.location.state
			if (Number.isNaN(inputnum)) {
				this.setState({ results: '输入数据有误，请重新输入' })
			} else if (inputnum < 1 || inputnum > 101) {
				this.setState({ results: '输入的数字超出范围' })
			} else if (inputnum < num) {
				this.setState({ results: '太小了' })
			} else if (inputnum === num) {
				this.setState({ results: '猜对啦！' })
			} else {
				this.setState({ results: '太大了' })
			}
		}
	}

	render() {
		return <h3>{this.state.results}</h3>
	}
}

Small.propTypes = {
	location: PropTypes.object,
	match: PropTypes.object,
}

export default withRouter(Small)
