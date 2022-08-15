import { useParams } from 'react-router-dom';
import EpisodeSection from '../components/EpisodeSection';
import ParticipantCard from '../components/ParticipantCard';
import ParticipantSection from '../components/ParticipantSection';
import { ColumnDiv } from '../components/styles/componentStyles';
import { apiProvider } from '../services/api/ApiProvider';

// Easiest way to declare a Function Component; return type is inferred.
const Episode = () => {
  const { id } = useParams();
  const numberEp = 'Episode ' + id;
  const { isLoading, data, isError, error } = apiProvider.useQueryEpisode(
    numberEp,
    id
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }
  const episode = data.data.data;
  const participants: Array<any | undefined> =
    episode?.attributes.Participantes;
  console.log('nay>>>');
  return (
    <ColumnDiv>
      <EpisodeSection id={id} episode={episode}></EpisodeSection>

      <ParticipantSection participants={participants}></ParticipantSection>
    </ColumnDiv>
  );
};

const exampleStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export default Episode;

//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;
