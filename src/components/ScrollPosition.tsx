import React from "react";
import { getMaxScroll, useWindowScrollPositions } from "../hooks/useScrollPosition";

const ScrollPosition: React.FC = () => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const { scrollMaxY } = getMaxScroll();

  return (
    <>
      {scrollY} : {scrollMaxY}
    </>
  );
};

export default ScrollPosition;