import Banner from '../components/Banner';
import ListEpisodeSection from '../components/ListEpisodeSection';
import { BoldTitle, SocialImg, SocialCollection } from '../components/styles/componentStyles';
import { apiProvider } from '../services/api/ApiProvider';
import { MainDiv } from './styles/componentStyles';

// Easiest way to declare a Function Component; return type is inferred.
//little comment
let bgImg: string;
const Home = () => {
  const { isLoading, data } = apiProvider.GetHomeWithImg();
  const episodeList = apiProvider.useGetEpisodeList();
  if (isLoading) {
    return (
      <div>
        <h1>Is Loading </h1>
      </div>
    );
  } else if (data) {
    console.log('é boy', data);
    const home = data.data.data.attributes.Home[0];
    bgImg =
      data.data.data.attributes.Home[0].sectionBackground.data.attributes.url;
    //url(${Background})
    const basehttp = 'https://'
    const fbUrl = basehttp+home.facebookUrl;
    const ttUrl = basehttp+home.tiktokUrl;
    const igUrl = basehttp+home.instagramUrl;
    const ytUrl = basehttp+home.youtubeUrl;



    let episodes = [];

    if (!episodeList.isLoading) episodes = episodeList.data.data.data;

    return (
      <MainDiv>
        <Banner>
          <div
            style={{
              width: '100vw',
              height: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',

              backgroundImage: bgImg
                ? `url('${bgImg}')`
                : '../assets/image/bg.png',
            }}
          >
            <div style={episodeContainer}>
              <div style={episodeImg}></div>
              <div style={episodeText}>
                <h1>{data.data.data.attributes.Home[0].Title}</h1>
                <h2>Welcome Home</h2>
              </div>
            </div>
          </div>
        </Banner>
        
        <ListEpisodeSection episodeList={episodes}></ListEpisodeSection>
        
        <section style={redesSociais}>
          {/* redes sociais */}
          <BoldTitle>Acompanhe nosso trabalho nas redes sociais</BoldTitle>
          <SocialCollection>
            
            <a href={ttUrl}>
              {/* <SocialMedia src="../assets/image/"></SocialMedia> */}
              <SocialImg src="../assets/image/icon_tiktok.png"></SocialImg>
            </a>
            <a href={ytUrl}>

              <SocialImg src="../assets/image/icon_youtube.png"></SocialImg>
              </a>
            <a href={fbUrl}>

              <SocialImg src="../assets/image/icon_facebook.png"></SocialImg>
              </a>
            <a href={igUrl}>
              
              <SocialImg src="../assets/image/icon_instagram.png"></SocialImg>
              </a>



          </SocialCollection>
        </section>
      </MainDiv>
    );
  } else {
    return (
      <div>
        <h1>Hmmm</h1>
      </div>
    );
  }
};

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
};

const redesSociais = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center' as 'center',
  flexDirection: 'column' as 'column',

  height: '200px',
};

export default Home;

//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;
