import ControlledSpotify from './ControlledSpotify';
import { EpisodeInfo } from './styles/componentStyles';
import { ComponentEpisodeDiv } from './episodesStyle';
import YoutubeEmbed from './YoutubeEmbed';
import { EpisodeAttributes } from './model/episodeAttributes';
import ButtonDownload from './ButtonDownload';

type Episode = {
  id: string;
  attributes: EpisodeAttributes;
};

type EMidiaProps = {
  id: string | undefined;
  children?: JSX.Element[] | JSX.Element;
  episode: Episode | undefined;
};
const getYoutubeId = (url: string) => {
  const index = url.lastIndexOf('/');

  return url.substring(index + 1);
};

export function EpisodeMidia(props: EMidiaProps) {
  const strapiYoutube = props.episode?.attributes.youtube;
  const strapiSpotify = props.episode?.attributes.spotify;
  const strapiAudio = props.episode?.attributes.audio?.data;

  //string to avoid undefined
  let urlSpotify = '';
  let urlYoutube = '';
  let downloadUrl = '';
  let id = '';
  id = id + props.id;
  urlYoutube = urlYoutube + strapiYoutube;
  urlSpotify = urlSpotify + strapiSpotify;
  downloadUrl = downloadUrl + strapiAudio?.attributes?.url;
  //defining consts
  const ytId = getYoutubeId(urlYoutube);
  const date = new Date(props.episode?.attributes?.createdAt);
  const option = {
    day: '2-digit',
    year: 'numeric',

    month: 'long',
  } as const;

  return (
    <>
      <EpisodeInfo>Escute via Youtube ou Spotify</EpisodeInfo>


      {strapiSpotify && (
        <ControlledSpotify url={urlSpotify}></ControlledSpotify>
      )}
      {strapiYoutube && <YoutubeEmbed embedId={ytId}></YoutubeEmbed>}
      <ComponentEpisodeDiv>
        <EpisodeInfo style={leftInfo}>
          {date.toLocaleDateString('pt-br', option)}
        </EpisodeInfo>
        <div style={rightButton}>
          {strapiAudio && (
            <ButtonDownload downloadUrl={downloadUrl} idEp={id} />
          )}
        </div>
      </ComponentEpisodeDiv>
    </>
  );
}

const leftInfo = {
  width: '40%',
};

const rightButton = {
  width: '60%',
  display: 'flex',
  marginLeft: '10%',
  justifyContent: 'flex-end',
};

export default EpisodeMidia;
