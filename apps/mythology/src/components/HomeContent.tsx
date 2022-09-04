import { MainDiv } from './styles/componentStyles';
import ListEpisodeSection from '../components/ListEpisodeSection';
import Loader from '../components/Loader';
import {
  BoldTitle,
  SocialImg,
  SocialCollection,
  EpisodeContainer,
  LightTitle,
} from '../components/styles/componentStyles';
import { apiProvider } from '../services/api/ApiProvider';
import { useGlobalLinks } from '../services/api/globalLinks';
import ExternalLinks from './ExternalLinks';
import styled from 'styled-components';

const LinksBox = styled.div`
  margin: 0.8rem 2.4rem;
  max-width: 40rem;
  width: 95%;

  > * {
    margin: auto;
  }
`;

type ContentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export function HomeContent(props: ContentProps) {
  const dataH = props.data;
  const { isLoading, data, isError, error } = apiProvider.useGetEpisodeListCover();
  const { data: linksData, status } = useGlobalLinks();
  console.log('OI', linksData, status);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }
  const episodeList = data;
  const home = dataH.data.data.attributes.Home[0];
  let bgImg =""
  if(dataH.data.data.attributes.Home[0].sectionBackground.data) bgImg= dataH.data.data.attributes.Home[0].sectionBackground.data.attributes.url;
  //url(${Background})
  const basehttp = 'https://';
  const fbUrl = ('' + home.facebookUrl).includes('http')
    ? '' + home.facebookUrl
    : basehttp + home.facebookUrl;
  const ttUrl = ('' + home.tiktokUrl).includes('http')
    ? '' + home.tiktokUrl
    : basehttp + home.tiktokUrl;
  const igUrl = ('' + home.instagramUrl).includes('http')
    ? '' + home.instagramUrl
    : basehttp + home.instagramUrl;
  const ytUrl = ('' + home.youtubeUrl).includes('http')
    ? '' + home.youtubeUrl
    : basehttp + home.youtubeUrl;
  const episodes = episodeList.data.data.sort((a, b) => {
    if (!a.attributes.NumeroEpisodio) {
      a.attributes.NumeroEpisodio = 0;
    }
    if (!b.attributes.NumeroEpisodio) {
      b.attributes.NumeroEpisodio = 0;
    }

    if (
      parseInt(a.attributes.NumeroEpisodio) <
      parseInt(b.attributes.NumeroEpisodio)
    )
      return 1;

    return -1;
  });
  const episodesLength = episodes.length;
  const lastEpisode = episodes[0];
  let coverImg="";
  console.log(lastEpisode)
  if( lastEpisode.attributes.Capa.data) coverImg= lastEpisode.attributes.Capa.data.attributes.url;


  console.log('linksDaata', linksData);
  return (
    <MainDiv style={fix}>
      {/* <Banner> */}
      <section
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

          backgroundImage: (bgImg && bgImg!=="") ? `url('${bgImg}')` :`url('../assets/image/bg.png')` ,
        }}
        className="bannerSize"
      >
        <EpisodeContainer>
          <a
            href={'episode/' + episodesLength}
            style={{ textDecoration: 'none' }}
          >
            <div className="ButtonHomeMobile">Escutar agora</div>
          </a>
          <div style={{
                backgroundImage: (coverImg && coverImg!=="")? `url('${coverImg}')`
                :  `url('../assets/image/thumb_podcast.png')`,
                
              }} className='EpImg'></div>
          <div style={episodeText}>
            <LightTitle>Episódio {(lastEpisode.attributes.NumeroEpisodio)}</LightTitle>
            {lastEpisode.attributes.Titulo &&
            <h2>{lastEpisode.attributes.Titulo}</h2>
            }
            <br></br>
            <div className="EpisodeDescription">
              {lastEpisode.attributes.Descricao&&
              <p>{lastEpisode.attributes.Descricao}</p>
            }
            </div>
            <a
              href={'/episode/' + lastEpisode.id}
              style={{ textDecoration: 'none' }}
            >
              <div className="ButtonHome">Escutar agora</div>
            </a>
          </div>
        </EpisodeContainer>
      </section>
      {/* </Banner> */}

      <ListEpisodeSection episodeList={episodes}></ListEpisodeSection>

      <LinksBox>
        {linksData && linksData.length > 0 && (
          <ExternalLinks links={linksData} />
        )}
      </LinksBox>

      <section className="redesSociais">
        {/* redes sociais */}
        <BoldTitle>Acompanhe nosso trabalho nas redes sociais</BoldTitle>
        <SocialCollection>
          {home.tiktokUrl &&
          <a href={ ttUrl}>
            {/* <SocialMedia src="../assets/image/"></SocialMedia> */}
            <SocialImg alt="Logo do tiktok" src="../assets/image/icon_tiktok.png"></SocialImg>
          </a>}
            {home.youtubeUrl &&
          <a href={ytUrl}>
            <SocialImg alt="Logo do Youtube" src="../assets/image/icon_youtube.png"></SocialImg>
          </a>
}
          {
          home.facebookUrl&&
          <a href={fbUrl}>
            <SocialImg alt="Logo do facebook"src="../assets/image/icon_facebook.png"></SocialImg>
          </a>
          }
          {home.instagramUrl &&
          <a href={igUrl}>
            <SocialImg alt="Logo do instagram" src="../assets/image/icon_instagram.png"></SocialImg>
          </a>
          }
        </SocialCollection>
      </section>
    </MainDiv>
  );
}

// const episodeDescription = {
//   height: '100px',
//   overflowY: 'auto',
// };

// const bgImgContainer = {
//   backgroundPosition: 'center',
//   width: '100vw',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
// };

// const episodeContainer = {
//   width: '50%',
//   height: '40%',
//   display: 'flex',
//   justifyContent: 'space-evenly',
//   alignItems: 'center',
// };

// const socialCollection = {
//   display: 'flex',
//   justifyContent: 'center',
//   margin: '30px 0px',
// };
// const episodeImg = {
//   backgroundImage: "url('../assets/image/thumb_podcast.png')",
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'top',
//   height: '250px',
//   width: '250px',
// };

const episodeText = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
} as const;

const fix = {
  display: 'flex',
  flexDirection: 'column',
} as const;

export default HomeContent;
