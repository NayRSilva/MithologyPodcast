import EpisodeMidia from './EpisodeMidia';
import { EpisodeAttributes } from './model/episodeAttributes';
import Markdown from 'markdown-to-jsx';

import {
  BoldTitle,
  EpisodeSummary,
  LightTitle,
  LineDivisor,
  Titles,
} from './styles/componentStyles';
import TranscriptionSection from './TranscriptionSection';

type Episode = {
  id: string;
  attributes: EpisodeAttributes;
};
type ESectionProps = {
  id: string | undefined;
  episode: Episode | undefined;
  children?: JSX.Element[] | JSX.Element;
};

export function EpisodeSection(props: ESectionProps) {
  let transcript = '';
  let description = '';
  const title = props.episode?.attributes.Titulo;
  const numero = props.episode?.attributes.NumeroEpisodio

  description = description + props.episode?.attributes.Descricao;

  if (props.episode?.attributes.Transcricao !== undefined) {
    transcript = transcript + props.episode?.attributes.Transcricao;
  }

  return (
    <section>
      <Titles>
        <LightTitle>Episódio {numero}</LightTitle>
        <BoldTitle>{title}</BoldTitle>
      </Titles>
      <EpisodeMidia id={props.id} episode={props.episode}></EpisodeMidia>
      {props.children}
      <EpisodeSummary>
        <Markdown>{description}</Markdown>
      </EpisodeSummary>
      <LineDivisor></LineDivisor>
      <TranscriptionSection text={transcript}></TranscriptionSection>
      <LineDivisor></LineDivisor>
    </section>
  );
}

export default EpisodeSection;
