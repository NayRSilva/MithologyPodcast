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

export type Episode = {
  id: string;
  attributes: EpisodeAttributes;
};
type ESectionProps = {
  id: string | undefined;
  episode: Episode | undefined;
  children?: JSX.Element[] | JSX.Element;
};

export function EpisodeSection({ episode, id }: ESectionProps) {
  let transcript = '';
  let description = '';
  const title = episode?.attributes.Titulo;
  const numero = episode?.attributes.NumeroEpisodio;

  description = description + episode?.attributes.Descricao;

  if (episode?.attributes.Transcricao !== undefined) {
    transcript = transcript + episode?.attributes.Transcricao;
  }

  return (
    <section>
      <Titles>
        <LightTitle>Episódio {numero}</LightTitle>
        <BoldTitle>{title}</BoldTitle>
      </Titles>
      <EpisodeMidia id={id} episode={episode}></EpisodeMidia>

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
