import { useWindowScrollPositions } from "../hooks/useScrollPosition";

export default function scrollPosition() {

	const { scrollX, scrollY } = useWindowScrollPositions()

	return (
		<>{scrollY}</>
	)
}
