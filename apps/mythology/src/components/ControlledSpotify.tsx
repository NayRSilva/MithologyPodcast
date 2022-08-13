import EmbedSpotify from "./EmbedSpotify";
import { BoldTitle, EpisodeInfo, GridDiv, LightTitle, Titles} from "./styles/componentStyles";

type ControlProps = {
    id?: string|undefined;
    url:string;
    children?: JSX.Element[] | JSX.Element;
    episode?:any|undefined;
}

export function ControlledSpotify(props:ControlProps) {
    const e= ("episode/").length

    console.log("Bay",e)
    const index = props.url.search("episode/") + ("episode/").length
    const end = props.url.indexOf('?')
    const episodeId:string = props.url.substring(index, end);
    const link:string = "https://open.spotify.com/embed/episode/"+episodeId+"?utm_source=generator"
    console.log(link)
    return (
      <iframe title="spotify-frame" src={link} width="100%" height="180px" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        

    );
  }
  //https://open.spotify.com/episode/57VCq44UEL9OPDmdvz4fte?si=ad952e8105c4495d
  export default ControlledSpotify;
  