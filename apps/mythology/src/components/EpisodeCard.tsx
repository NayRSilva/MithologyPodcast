import { Link } from 'react-router-dom';
import {
  BolderEpLink,
  BoldTitle,
  EpisodeCardDiv,
  LightTitle,
  TranscriptionBox,
  UndersCoreEpLink,
} from './styles/componentStyles';

type EpisodeCardProps = {
  children?: JSX.Element[] | JSX.Element;
  episode?: any;
  id: string;
};

export function EpisodeCard(props: EpisodeCardProps) {
  const ep = props.episode;
  console.log("novo nay", props.episode)
  return (
    <EpisodeCardDiv key={"episodeCard"+props.id}>
      <UndersCoreEpLink to={'/episode/' + ep.id}>
        Episódio {ep.attributes.NumeroEpisodio}
      </UndersCoreEpLink>

      <BolderEpLink to={'/episode/' + ep.id}>
        {ep.attributes.Titulo}
      </BolderEpLink>

      <TranscriptionBox>
        <p>{ep.attributes.Descricao}</p>
      </TranscriptionBox>
    </EpisodeCardDiv>
  );
}

export default EpisodeCard;

const underlineTitle = {
  textDecoration: 'underline',
  textUnderlineOffset: '10px',
};

const episodeTitle = {
  marginTop: '20%',
  marginBottom: '5%',
};
