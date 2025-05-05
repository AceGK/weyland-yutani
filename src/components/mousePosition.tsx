import React from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const MousePosition: React.FC = () => {
  const position = useMousePosition();

  return (
    <>
      {position.x}x : {position.y}y
    </>
  );
};

export default MousePosition;