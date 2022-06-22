import useWindowDimensions from '../hooks/useWindowDimensions';


const WindowDimensions = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
     {width} : {height}
    </div>
  );
}

export default WindowDimensions;

