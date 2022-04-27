import { useState, useCallback } from 'react'

export default function useAuthModel() {
	const [usernum, setusernum] = useState('')
	const [userid, setuserid] = useState('')
	const [state, setstate] = useState('开始游戏')

	const nowusernum = useCallback((newdata) => {
		setusernum(newdata)
	}, [])

	const nowuserid = useCallback((newdata) => {
		setuserid(newdata)
	}, [])

	const nowstate = useCallback((newdata) => {
		setstate(newdata)
	}, [])

	return {
		usernum,
		userid,
		state,
		nowusernum,
		nowuserid,
		nowstate,
	}
}
