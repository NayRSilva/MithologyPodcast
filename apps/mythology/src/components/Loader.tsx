

export function Loader() {
  return (
    <div style={baseDiv}>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>

    </div>
  );
}

export default Loader;


const baseDiv = {
    width:'100%',

    height: '200px',
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
  };