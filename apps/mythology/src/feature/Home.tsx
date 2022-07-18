import Banner from "../components/Banner";

  // Easiest way to declare a Function Component; return type is inferred.
  const Home = () => {

    return(
        <div style={exampleStyle}>
            <Banner>
                <h1 style={exampleStyle}>Im a Banner</h1>
                <h2>Welcome Home</h2>
            </Banner>
           

        </div>

    )


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