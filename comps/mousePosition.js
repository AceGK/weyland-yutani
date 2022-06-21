import { useMousePosition } from "../hooks/useMousePosition";

export default function Home() {

  const position = useMousePosition();

  return (
      <p className="mouse-position">{position.x}:{position.y}</p>
  )
}
