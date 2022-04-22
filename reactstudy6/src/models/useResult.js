import { useState, useCallback } from 'react'

export default function useResult() {
	const [intnum, setint] = useState(null)
	const [nownum, setnow] = useState(Math.floor(Math.random() * 100) + 1)

	const setinput = useCallback((newdata) => {
		setint(newdata)
	}, [])
	const setnum = useCallback((newdata) => {
		setnow(newdata)
	}, [])

	return {
		intnum,
		nownum,
		setinput,
		setnum,
	}
}
