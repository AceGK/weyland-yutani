import { useEffect, useState } from 'react';

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

interface MaxScroll {
  scrollMaxY: number;
}

// get current scroll position
export const useWindowScrollPositions = (): ScrollPosition => {
  const [scrollPosition, setPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        scrollX: window.scrollX,
        scrollY: Math.round(window.scrollY),
      });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

// get max scroll Y value
export const getMaxScroll = (): MaxScroll => {
  const [maxScroll, setMaxScroll] = useState<MaxScroll>({ scrollMaxY: 0 });

  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll({
        scrollMaxY:
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight,
      });
    };

    updateMaxScroll();
  }, []);

  return maxScroll;
};
