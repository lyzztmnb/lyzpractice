import React from 'react'
import { useModel } from 'umi'
import styles from '../index.less'

export default function SmallPage(props: any) {
	const intnum = Number(props.match.params.id)
	const { nownum } = useModel('useResult', (model) => ({ nownum: model.nownum }))
	let result = '开始游戏'
	function jisuan() {
		if (intnum === nownum) {
			result = '猜对了'
		} else if (intnum > nownum) {
			result = '太大了'
		} else {
			result = '太小了'
		}
	}
	jisuan()
	return (
		<div>
			<h1 className={styles.small}>{result}</h1>
		</div>
	)
}
