import { apiProvider } from "../services/api/ApiProvider";

type SpotifyProps = {
    url: string;
}

export function EmbedSpotify(props:SpotifyProps) {
    const episodeUrl = props.url
    const{isLoading, data}  = apiProvider.GetQueryOEmb(episodeUrl)
    console.log("nay",data)
  
    let dataEmb:any = null;

    if(isLoading){
        console.log("LOOOOD")
        return(<h1>Loading HERE</h1>)
    }
    else{
        dataEmb = data.data

        console.log("Loaded", data)

    return (

        <div
            dangerouslySetInnerHTML={{__html: dataEmb.html}}
        />
    );
}
  }

   
  export default EmbedSpotify;
  