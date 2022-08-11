import ControlledSpotify from "./ControlledSpotify";
import EpisodeMidia from "./EpisodeMidia";
import { ProfessorCargo, ProfessorName } from "./episodesStyle";
import { BoldTitle, GridDiv, LightTitle, ParticipantContainer, ParticipantPhoto, Titles} from "./styles/componentStyles";

type ESectionProps = {
    id?: string|undefined;
    children?: JSX.Element[] | JSX.Element;
}
export function ParticipantCard(props: ESectionProps) {
    return (
        <ParticipantContainer>
             <ParticipantPhoto alt="Luiz Felipe in profile" src="../assets/image/placeholder.jpg"></ParticipantPhoto>
        <ProfessorName>Luiz Felipe</ProfessorName>
        <ProfessorCargo>Professor de História</ProfessorCargo>

        </ParticipantContainer>
       
    );
  }
  
  export default ParticipantCard;
  