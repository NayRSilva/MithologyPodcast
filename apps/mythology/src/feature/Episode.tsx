import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import EpisodeSection from "../components/EpisodeSection";
import GridContainer from "../components/GridContainer";
import { ColumnDiv, CommonDiv } from "../components/styles/componentStyles";

  // Easiest way to declare a Function Component; return type is inferred.
  const Episode = () => {
    const { id } = useParams();

    return(

            <ColumnDiv>
               <div style={exampleStyle}>
                test
               </div>

               <EpisodeSection id={id}></EpisodeSection>
      
               <div style={exampleStyle}>
                test
               </div>
            
            </ColumnDiv>
            
    )


  }

  const exampleStyle={
    width: '100%',
    display:'flex',
    justifyContent:'center'
  }

  export default Episode;


  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;