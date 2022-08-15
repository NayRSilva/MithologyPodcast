import ControlledSpotify from './ControlledSpotify';
import EpisodeMidia from './EpisodeMidia';
import { EpisodeAttributes } from './model/episodeAttributes';
import Markdown from 'markdown-to-jsx';

import {
  BoldTitle,
  EpisodeSummary,
  GridDiv,
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
  console.log('episode', props.episode);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let transcript = '';
  let description = '';
  const title = props.episode?.attributes.Titulo;

  description = description + props.episode?.attributes.Descricao;

  if (props.episode?.attributes.Transcricao !== undefined) {
    transcript = transcript + props.episode?.attributes.Transcricao;
  }

  return (
    <section>
      <Titles>
        <LightTitle>Episódio {props.id}</LightTitle>
        <BoldTitle>{title}</BoldTitle>
      </Titles>
      <EpisodeMidia id={props.id} episode={props.episode}></EpisodeMidia>
      {/* <ControlledSpotify url={"https://open.spotify.com/episode/57VCq44UEL9OPDmdvz4fte?si=0d39385dddec4216"}></ControlledSpotify> */}
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
