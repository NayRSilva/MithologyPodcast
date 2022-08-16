import { url } from "inspector";
import Banner from "../components/Banner";
import EmbedSpotify from "../components/EmbedSpotify";
import { apiProvider } from "../services/api/ApiProvider";
import { MainDiv } from "./styles/componentStyles";


  // Easiest way to declare a Function Component; return type is inferred.
  //little comment
  const Home = () => {

    const{isLoading, data} = apiProvider.GetSingleAll('home', 'home-info');
    
    if(isLoading){
      
      
      return(<div><h1>Is Loading </h1>

      </div>)
    }
    else if(data){
    console.log("é boy", data);
      
      
      return(

        <MainDiv>        
          <Banner>
            <div style={bgImgContainer}>
              <div style={episodeContainer} >
                <div style={episodeImg}></div>
                <div style={episodeText}>
                  <h1>{data.data.data.attributes.Home[0].Title}</h1>
                  <h2>Welcome Home</h2>
                </div>
              </div>
            </div>
          </Banner>
          {/* <EmbedSpotify url='http://open.spotify.com/episode/2n3OY4hdwQJUj7KpSWn4yX?si=3b9fcda587524a26'></EmbedSpotify> */}
          <div style={episodesList} >
            {/* episodios */}
          </div>
          <div style={redesSociais} >
            {/* redes sociais */}
          </div>

        </MainDiv>

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

  const bgImgContainer={
    backgroundImage: "url('../assets/image/bg.png')",
    width: "100vw",
    height: "100%",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center' 
  }

  const episodeContainer={
    width: '70%',
    height: '40%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }

  const episodeImg={
    backgroundImage: "url('../assets/image/thumb_podcast.png')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }

  const episodeText={
    display: 'flex',
    flexDirection: 'column' as 'column'
  }

  const episodesList={
    height: '200px',
    backgroundColor: "red"
  }

  const redesSociais={
    height: '200px',
    backgroundColor: 'green'
  }

  export default Home;


  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;