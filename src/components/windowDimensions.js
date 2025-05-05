import useWindowDimensions from '../hooks/useWindowDimensions';


const WindowDimensions = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
     {width}w : {height}h
    </div>
  );
}

export default WindowDimensions;

