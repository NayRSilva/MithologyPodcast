import Banner from "../components/Banner";
import { CommonDiv } from "../components/styles/componentStyles";

  // Easiest way to declare a Function Component; return type is inferred.
  const Episode = () => {

    return(

            <CommonDiv>
                <div>
                <h1 style={exampleStyle}>Episode</h1>
                <h3>I'm an Episode</h3>


                </div>
            </CommonDiv>
            
    )


  }

  const exampleStyle={
    width: '100%',
    display:'flex',
    textAlign:'center' as const
  }

  export default Episode;


  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;