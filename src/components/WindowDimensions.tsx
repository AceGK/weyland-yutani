import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

const WindowDimensions: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      {width}w : {height}h
    </div>
  );
};

export default WindowDimensions;