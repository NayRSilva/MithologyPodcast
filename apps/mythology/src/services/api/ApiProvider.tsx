import axios from 'axios';
import { useQuery } from 'react-query';

// const baseURL = 'http://localhost:1337/api/'
let baseURL = process.env.NX_BASE_API_URL as string;

const getFunction = (resource: string) => {
  if (!baseURL) baseURL = 'https://api.mitologianodiaadia.com.br/api/';
  console.log('NAHA', baseURL);
  return axios.get(baseURL + resource + '?populate=*');
};

const GetSingleAll = (resource: string, nameKey: string) => {
  return useQuery([nameKey], () => getFunction(resource));
};
const getEpisodesParticipants = () => {
  if (!baseURL) baseURL = 'https://api.mitologianodiaadia.com.br/api/';

  return axios.get(
    baseURL +
      'episodes?populate=%2A&populate[0]=Participante&populate[1]=Participante.imagem'
  );
};
const getEpisode = (id: string | undefined) => {
  if (!baseURL) baseURL = 'https://api.mitologianodiaadia.com.br/api/';

  return axios.get(baseURL + 'episodes/' + id + '?populate=%2A');
};

const useQueryEpisode = (name: string, id: string | undefined) => {
  return useQuery([name], () => getEpisode(id));
};
const GetEpisodesWithParticipants = () => {
  return useQuery(['episodes'], () => getEpisodesParticipants());
};

const getEmbed = (url: string) => {
  return axios.get('https://open.spotify.com/oembed?url=' + url);
};

const GetQueryOEmb = (url: string) => {
  return useQuery(['episodes'], () => getEmbed(url));
};

export const apiProvider = {
  GetSingleAll,
  GetQueryOEmb,
  GetEpisodesWithParticipants,
  useQueryEpisode,
};
