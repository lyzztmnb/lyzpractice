import { useState, useCallback } from 'react'

export default function useResult() {
	const [intnum, setint] = useState(null)
	const [nownum, setnow] = useState(Math.floor(Math.random() * 100) + 1)

	const setshuru = useCallback((newdata) => {
		setint(newdata)
	}, [])
	const setdangqian = useCallback((newdata) => {
		setnow(newdata)
	}, [])

	return {
		intnum,
		nownum,
		setshuru,
		setdangqian,
	}
}
