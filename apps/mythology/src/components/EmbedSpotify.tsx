import { apiProvider } from '../services/api/ApiProvider';

type SpotifyProps = {
  url: string;
};

export function EmbedSpotify(props: SpotifyProps) {
  const episodeUrl = props.url;
  const { isLoading, data } = apiProvider.GetQueryOEmb(episodeUrl);

  let dataEmb: any = null;

  if (isLoading) {
    return <h1>Loading HERE</h1>;
  } else {
    dataEmb = data.data;

    return <div dangerouslySetInnerHTML={{ __html: dataEmb.html }} />;
  }
}

export default EmbedSpotify;
