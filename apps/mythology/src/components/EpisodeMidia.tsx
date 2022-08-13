import ControlledSpotify from "./ControlledSpotify";
import EmbedSpotify from "./EmbedSpotify";
import { BoldTitle, ComponentDiv, EpisodeInfo, GridDiv, LightTitle, Titles} from "./styles/componentStyles";
import {ButtonGeneral, ComponentEpisodeDiv} from "./episodesStyle";
import YoutubeEmbed from "./YoutubeEmbed";

type EMidiaProps = {
    id: string|undefined;
    children?: JSX.Element[] | JSX.Element;
    episode?:any|undefined;
}
export function EpisodeMidia(props: EMidiaProps) {
    return (
      <>
      <EpisodeInfo>Escute via Youtube ou Spotify</EpisodeInfo>

        <YoutubeEmbed embedId="upUoEh6EA-Y"></YoutubeEmbed>      
        <ControlledSpotify url={"https://open.spotify.com/episode/57VCq44UEL9OPDmdvz4fte?si=0d39385dddec4216"}></ControlledSpotify>
        <ComponentEpisodeDiv>
        <EpisodeInfo style={leftInfo}>28 de Agosto</EpisodeInfo>
        <div style={rightButton}>
        <ButtonGeneral >Baixar</ButtonGeneral>
        </div>


        </ComponentEpisodeDiv>

        

      </>
    );
  }

  const leftInfo={
    width: '40%',

  }

  const rightButton={
    width: '60%',
    display:'flex',
    marginLeft:'10%',
    justifyContent:'flex-end'
  }

  
  export default EpisodeMidia;
  