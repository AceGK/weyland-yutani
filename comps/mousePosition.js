import { useMousePosition } from "../hooks/useMousePosition";

export default function mousePosition() {

  const position = useMousePosition();

  return (
      <>
      {position.x} : {position.y}
      </>
  )
}
