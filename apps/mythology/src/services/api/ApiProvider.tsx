
import axios from 'axios'; 
import {useQuery} from 'react-query'


const baseURL = 'api.mitologianodiaadia.com.br/api/'

const getFunction = (resource:string)=>{
    return axios.get(baseURL+ resource+'?populate=*')
  }

const GetSingleAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunction(resource))
}

const getEpisodesParticipants = ()=>{
  return axios.get(baseURL+ 'episodes?populate=%2A&populate[0]=Participante&populate[1]=Participante.imagem')
}

const GetEpisodeWithParticipants=()=>{
  return useQuery(['episodes'], ()=> getEpisodesParticipants())
}

const getEmbed= (url:string)=>{
  return axios.get('https://open.spotify.com/oembed?url='+url)
}

const GetQueryOEmb= (url:string)=>{
  return useQuery(['episodes'], ()=> getEmbed(url))
}

const baseURLalt = 'api.mitologianodiaadia.com.br/api/';

const LogoImage= ()=>{
  return axios.get(baseURL + 'Logo?populate=%2A')
}

const GetLogoImage = () => {
  return useQuery(['logoIMG'], ()=> LogoImage())
}

export const apiProvider = { 
  GetSingleAll,
  GetQueryOEmb,
  GetEpisodeWithParticipants,
  GetLogoImage
};