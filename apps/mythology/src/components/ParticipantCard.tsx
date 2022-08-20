import { ProfessorCargo, ProfessorName } from './episodesStyle';
import {
  ParticipantContainer,
  ParticipantPhoto,
} from './styles/componentStyles';

type ESectionProps = {
  id?: string | undefined;
  participant: any;
};
export function ParticipantCard(props: ESectionProps) {
  const name = props.participant.Titulo;
  let imgSrc = props.participant.imagem.data.attributes.url;
  if (!imgSrc) imgSrc = '../assets/image/placeholder.jpg';
  return (
    <ParticipantContainer>
      <ParticipantPhoto
        alt={'Participante' + name + ' in profile'}
        src={imgSrc}
      ></ParticipantPhoto>
      <ProfessorName>{name}</ProfessorName>
      <ProfessorCargo>{props.participant.Descricao}</ProfessorCargo>
    </ParticipantContainer>
  );
}

export default ParticipantCard;
