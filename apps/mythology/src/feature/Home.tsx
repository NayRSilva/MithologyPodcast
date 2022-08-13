import Banner from "../components/Banner";
import EmbedSpotify from "../components/EmbedSpotify";
import { apiProvider } from "../services/api/ApiProvider";


  // Easiest way to declare a Function Component; return type is inferred.
  //little comment
  const Home = () => {

    const{isLoading, data} = apiProvider.GetSingleAll('home', 'home-info');

    if(isLoading){
   
      
      return(<div><h1>Is Loading </h1>

      </div>)
    }
    else if(data){
    
      
      return(

        <div style={exampleStyle}>
        
        
            <Banner>
                {/* <h1 style={exampleStyle}>{data.data.data.attributes.Home[0].Title}</h1> */}
                <h2>Welcome Home</h2>
            </Banner>
      <EmbedSpotify url='http://open.spotify.com/episode/2n3OY4hdwQJUj7KpSWn4yX?si=3b9fcda587524a26'></EmbedSpotify>
           

        </div>

    )
    }
    else{
   
     return(
         <div>
           <h1>Hmmm</h1>
           <EmbedSpotify url='http://open.spotify.com/episode/2n3OY4hdwQJUj7KpSWn4yX?si=3b9fcda587524a26'></EmbedSpotify> 

         </div>
    )
  }
    


  }

  const exampleStyle={
    width: '100%',
    display:'flex'
  }

  export default Home;


  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;