import Banner from "../components/Banner";
import { apiProvider } from "../services/api/ApiProvider";


  // Easiest way to declare a Function Component; return type is inferred.
  //little comment
  const Home = () => {

    const{isLoading, data} = apiProvider.getSingleAll('home', 'home-info');
    
    if(isLoading){
      return(<div>Is Loading</div>)
    }
    else if(data){
      console.log("nay", data)
      return(

        <div style={exampleStyle}>
            <Banner>
                <h1 style={exampleStyle}>{data.data.data.attributes.Home[0].Title}</h1>
                <h2>Welcome Home</h2>
            </Banner>
           

        </div>

    )
    }
    return(<h1>Hmmm</h1>)
    


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