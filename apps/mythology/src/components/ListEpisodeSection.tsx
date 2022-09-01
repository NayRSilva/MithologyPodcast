import SliderEpisode from './SliderEpisodes';
import { FloatTitle } from './styles/componentStyles';

type ListEpisodeProps = {
  episodeList: Array<any>;
  children?: JSX.Element[] | JSX.Element;
};

export function ListEpisodeSection(props: ListEpisodeProps) {
  // const { isLoading, data } = apiProvider.useGetEpisodeList();
  // if (isLoading) {
  //   return <h1>is loading</h1>;
  // }
  const episodes = props.episodeList;

  // console.log('reversed', episodes);
  return (
    <section style={epSection}>
      <FloatTitle>Todos os Episódios</FloatTitle>

      <SliderEpisode episodes={episodes}></SliderEpisode>
    </section>
  );
}

export default ListEpisodeSection;

const epSection = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'center',
  textAlign: 'center' as 'center',
  width: '100%',
  minHeight: '500px',
};
