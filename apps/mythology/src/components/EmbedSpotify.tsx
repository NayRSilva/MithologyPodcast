import { apiProvider } from "../services/api/ApiProvider";

type SpotifyProps = {
    url: string;
}

export function EmbedSpotify(props:SpotifyProps) {
    const episodeUrl = props.url
    const response = apiProvider.GetQueryOEmb(episodeUrl)
    const dataEmb = response.data


    return (

        <div
            dangerouslySetInnerHTML={{__html: dataEmb.data.html}}
        />
    );
  }
  
  export default EmbedSpotify;
  