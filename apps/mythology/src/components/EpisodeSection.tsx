import ControlledSpotify from "./ControlledSpotify";
import EpisodeMidia from "./EpisodeMidia";
import { BoldTitle, EpisodeSummary, GridDiv, LightTitle, LineDivisor, Titles} from "./styles/componentStyles";
import TranscriptionSection from "./TranscriptionSection";

type ESectionProps = {
    id: string|undefined;
    children?: JSX.Element[] | JSX.Element;
}

export function EpisodeSection(props: ESectionProps) {
    return (
      <section>
        <Titles>

          <LightTitle>
            Episódio {props.id}
          </LightTitle>
          <BoldTitle>A Era dos Deuses</BoldTitle>
        </Titles>
        <EpisodeMidia id={props.id}></EpisodeMidia>
        {/* <ControlledSpotify url={"https://open.spotify.com/episode/57VCq44UEL9OPDmdvz4fte?si=0d39385dddec4216"}></ControlledSpotify> */}
        {props.children}
        <EpisodeSummary>
        No episódio desta semana, buscamos entender os "Mitos de origem" ou "mitos de criação" na mitologia grega.
        </EpisodeSummary>
        <LineDivisor></LineDivisor>
        <TranscriptionSection></TranscriptionSection>
        <LineDivisor></LineDivisor>



      </section>
    );
  }
  
  export default EpisodeSection;
  