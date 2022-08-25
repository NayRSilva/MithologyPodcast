import HomeContent from '../components/HomeContent';
import ListEpisodeSection from '../components/ListEpisodeSection';
import Loader from '../components/Loader';

import { apiProvider } from '../services/api/ApiProvider';
import { MainDiv } from './styles/componentStyles';

// Easiest way to declare a Function Component; return type is inferred.
//little comment
let bgImg: string;
const Home = () => {
  const { isLoading, data } = apiProvider.GetHomeWithImg();
  if (isLoading) {
    return (
      <Loader></Loader>

    );
  } else if (data) {

 
    return (
      <HomeContent data={data}></HomeContent>
    )
  } else {
    return (
      <div>
        <h1>Hmmm</h1>
      </div>
    );
  }
};

const episodeDescription = {
  height: '100px', 
  overflowY: 'auto'
}

const bgImgContainer = {
  backgroundPosition: 'center',
  width: '100vw',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const episodeContainer = {
  width: '50%',
  height: '40%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  
};

const socialCollection ={
  display:'flex',
  justifyContent: 'center',
  margin:'30px 0px',

}
const episodeImg = {
  backgroundImage: "url('../assets/image/thumb_podcast.png')",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  height: '250px',
  width: '250px',
};

const episodeText = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  width:'50%',
};


export default Home;

//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;
