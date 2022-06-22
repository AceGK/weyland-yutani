import { useMousePosition } from "../hooks/useMousePosition";

export default function mousePosition() {

  const position = useMousePosition();

  return (
      <p className="mouse-position">{position.x}:{position.y}</p>
  )
}
