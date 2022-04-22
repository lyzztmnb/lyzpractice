import React from 'react'
import { Link } from 'umi'
import styles from './index.less'

export default function IndexPage() {
	return (
		<div>
			<h1 className={styles.index}>Page index</h1>
			<Link to="/home">home Page</Link><br></br>
			<Link to="/center">center Page</Link><br />
			<Link to="/topics">topics Page</Link>
		</div>
	)
}
