import ControlledSpotify from "./ControlledSpotify";
import EpisodeMidia from "./EpisodeMidia";
import { BoldTitle, GridDiv, LightTitle, ParticipantContainer, ParticipantPhoto, Titles} from "./styles/componentStyles";

type ESectionProps = {
    id?: string|undefined;
    children?: JSX.Element[] | JSX.Element;
}
export function ParticipantCard(props: ESectionProps) {
    return (
        <ParticipantContainer>
             <ParticipantPhoto alt="Luiz Felipe in profile" src="../assets/image/placeholder.jpg"></ParticipantPhoto>
        <h3>Luiz Felipe</h3>
        <p>Professor de História</p>

        </ParticipantContainer>
       
    );
  }
  
  export default ParticipantCard;
  