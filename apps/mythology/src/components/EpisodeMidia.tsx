import ControlledSpotify from './ControlledSpotify';
import EmbedSpotify from './EmbedSpotify';
import {
  BoldTitle,
  ComponentDiv,
  EpisodeInfo,
  GridDiv,
  LightTitle,
  Titles,
} from './styles/componentStyles';
import { ButtonGeneral, ComponentEpisodeDiv } from './episodesStyle';
import YoutubeEmbed from './YoutubeEmbed';
import { EpisodeAttributes } from './model/episodeAttributes';

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
  let urlSpotify = '';
  let urlYoutube = '';
  urlYoutube = urlYoutube + props.episode?.attributes.youtube;
  urlSpotify = urlSpotify + props.episode?.attributes.spotify;
  const ytId = getYoutubeId(urlYoutube);
  const date = new Date(props.episode?.attributes.createdAt);
  const option = {
    day: '2-digit',
    year: 'numeric',

    month: 'long',
  } as const;
  console.log('Spoti:', date.toLocaleDateString('pt-br', option));
  return (
    <>
      <EpisodeInfo>Escute via Youtube ou Spotify</EpisodeInfo>

      <YoutubeEmbed embedId={ytId}></YoutubeEmbed>
      <ControlledSpotify url={urlSpotify}></ControlledSpotify>
      <ComponentEpisodeDiv>
        <EpisodeInfo style={leftInfo}>
          {date.toLocaleDateString('pt-br', option)}
        </EpisodeInfo>
        <div style={rightButton}>
          <ButtonGeneral>Baixar</ButtonGeneral>
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
