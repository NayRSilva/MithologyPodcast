import { Navigate, useParams } from 'react-router-dom';
import EpisodeSection, {
  type Episode as TEpisode,
} from '../components/EpisodeSection';
// import ParticipantCard from '../components/ParticipantCard';
import ParticipantSection from '../components/ParticipantSection';
import { ColumnDiv } from '../components/styles/componentStyles';
import { apiProvider } from '../services/api/ApiProvider';
import Loader from '../components/Loader';
import ExternalLinks from '../components/ExternalLinks';

const Episode = () => {
  const { id } = useParams();
  const numberEp = 'Episode ' + id;
  const { isLoading, data, isError, error } =
    apiProvider.useQueryEpisodeWithParticipants(numberEp, id);

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (isError) {
    console.error(error);
    return <Navigate to="/" replace />;
  }

  const episode: TEpisode = data.data.data;
  if (!episode) return <Navigate to="/" replace />;

  const links = episode.attributes.links;
  const participants = episode.attributes.Participantes;

  return (
    <ColumnDiv>
      <EpisodeSection id={id} episode={episode} />

      {/* {participants && participants.length > 0 && (
        <ParticipantSection participants={participants} />
      )} */}

      {links && links.length > 0 && <ExternalLinks links={links} />}
    </ColumnDiv>
  );
};

export default Episode;
