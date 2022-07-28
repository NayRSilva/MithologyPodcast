import Banner from "../components/Banner";
import { apiProvider } from "../services/api/ApiProvider";


  // Easiest way to declare a Function Component; return type is inferred.
  const Home = () => {

    const{isLoading, data} = apiProvider.getSingleAll('home', 'home-info');
    // const response = apiProvider.getQueryOEmb()
    
    if(isLoading){
    // const dataEmb = response.data.data

      return(<div>Is Loading

{/* <div
      dangerouslySetInnerHTML={{__html: dataEmb.html}}
    /> */}
    <iframe title="teste" src="https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?si=5HKdWdyqQbaMxwRlBC-7JA" width="100%" height="232" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

      </div>)
    }
    else if(data){
      // console.log("nay",response)
      return(

        <div style={exampleStyle}>
            <Banner>
                {/* <h1 style={exampleStyle}>{data.data.data.attributes.Home[0].Title}</h1> */}
                <h2>Welcome Home</h2>
            </Banner>
           

        </div>

    )
    }
    else{
    // console.log("uhum,", response)
    // const dataEmb = response.data.data
    return(
    <div>
      <h1>Hmmm</h1>
      {/* <div
      dangerouslySetInnerHTML={{__html: dataEmb.html}}
    /> */}

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