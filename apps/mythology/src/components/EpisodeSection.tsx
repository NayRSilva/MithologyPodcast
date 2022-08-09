import ControlledSpotify from "./ControlledSpotify";
import EpisodeMidia from "./EpisodeMidia";
import { BoldTitle, GridDiv, LightTitle, Titles} from "./styles/componentStyles";

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


      </section>
    );
  }
  
  export default EpisodeSection;
  