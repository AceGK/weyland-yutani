import { getMaxScroll, useWindowScrollPositions } from "../hooks/useScrollPosition";

export default function scrollPosition() {

	const { scrollX, scrollY } = useWindowScrollPositions()
	
	const { scrollMaxY } = getMaxScroll()

	return (
		<>{scrollY} : {scrollMaxY}</>
	)
}
