import { useParams } from 'react-router-dom';
import EpisodeSection from '../components/EpisodeSection';
// import ParticipantCard from '../components/ParticipantCard';
import ParticipantSection from '../components/ParticipantSection';
import { ColumnDiv } from '../components/styles/componentStyles';
import { apiProvider } from '../services/api/ApiProvider';

const Episode = () => {
  const { id } = useParams();
  const numberEp = 'Episode ' + id;
  const { isLoading, data, isError, error } =
    apiProvider.useQueryEpisodeWithParticipants(numberEp, id);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }
  const episode = data.data.data;
  const participants: Array<any | undefined> = episode?.attributes.Participante;

  return (
    <ColumnDiv>
      <EpisodeSection id={id} episode={episode}></EpisodeSection>

      <ParticipantSection participants={participants}></ParticipantSection>
    </ColumnDiv>
  );
};

export default Episode;
