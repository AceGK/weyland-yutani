import { useMousePosition } from "../hooks/useMousePosition";

export default function MousePosition() {

  const position = useMousePosition();

  return (
      <>
      {position.x}x : {position.y}y
      </>
  )
}
