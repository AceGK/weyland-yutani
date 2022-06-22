import { useWindowScrollPositions } from "../hooks/useScrollPosition";

export default function scrollPosition() {

	const { scrollX, scrollY } = useWindowScrollPositions()

	return (
		<p className="scroll-position">{scrollY}</p>
	)
}
