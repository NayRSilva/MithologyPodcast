import EmbedSpotify from './EmbedSpotify';
import {
  BoldTitle,
  EpisodeInfo,
  GridDiv,
  LightTitle,
  Titles,
} from './styles/componentStyles';

type ControlProps = {
  id?: string | undefined;
  url: string;
  children?: JSX.Element[] | JSX.Element;
  episode?: any | undefined;
};



export function ControlledSpotify(props: ControlProps) {

  const generateLink = (linkUrl:string, type:string)=>{
  
    const index = props.url.search(type+'/') + (type+'/').length;
    const end = props.url.indexOf('?');
    const episodeId: string = props.url.substring(index, end);
    const link: string = 
    linkUrl +
    episodeId +
    '?utm_source=generator';

    return link;
  }


  let link : string;
  
  link= generateLink('https://open.spotify.com/embed/episode/', 'episode')
  


  if(props.url.includes("track")){
    link= generateLink('https://open.spotify.com/embed/track/', 'track')

  }

  if(props.url.includes("album")){
    link= generateLink('https://open.spotify.com/embed/album/', 'album')

  }

  return (
    <iframe
      title="spotify-frame"
      src={link}
      width="100%"
      height="180px"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
}
//https://open.spotify.com/episode/57VCq44UEL9OPDmdvz4fte?si=ad952e8105c4495d
export default ControlledSpotify;



{/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0WSpHK6tinGHU4gvP8fHih?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}