import axios from 'axios';
import { useQuery } from 'react-query';

// const baseURL = 'http://localhost:1337/api/'
let baseURL = process.env.NX_BASE_API_URL as string;

const useDefineUrl = () => {
  if (!baseURL) baseURL = 'https://api.mitologianodiaadia.com.br/api/';
};

const getUrl = (url: string) => {
  return axios.get(url);
};

const getFunction = (resource: string) => {
  console.log('NAHA', baseURL);
  const url = baseURL + resource + '?populate=*';

  return getUrl(url);
};

const GetSingleAll = (resource: string, nameKey: string) => {
  return useQuery([nameKey], () => getFunction(resource));
};
const getEpisodesParticipants = () => {
  const url =
    baseURL +
    'episodes?populate=%2A&populate[0]=Participante&populate[1]=Participante.imagem';
  return getUrl(url);
};
const getEpisode = (id: string | undefined) => {
  const url = baseURL + 'episodes/' + id + '?populate=%2A';
  return getUrl(url);
};

const useQueryEpisode = (name: string, id: string | undefined) => {
  return useQuery([name], () => getEpisode(id));
};

const getEpisodeWithParticipants = (id: string | undefined) => {
  const url =
    baseURL +
    'episodes/' +
    id +
    '?populate=%2A&populate[0]=audio&populate[1]=Participante.imagem&populate[2]=links';
  return getUrl(url);
};

const getEpisodeList = () => {
  const url = baseURL + 'episodes';
  return getUrl(url);
};

const getEpisodeListCover = () => {
  const url = baseURL + 'episodes?populate=%2A';
  return getUrl(url);
};

const useQueryEpisodeWithParticipants = (
  name: string,
  id: string | undefined
) => {
  return useQuery([name], () => getEpisodeWithParticipants(id));
};

const GetEpisodesWithParticipants = () => {
  return useQuery(['episodes'], () => getEpisodesParticipants());
};

const getEmbed = (url: string) => {
  const myurl = 'https://open.spotify.com/oembed?url=' + url;
  return getUrl(myurl);
};

const GetQueryOEmb = (url: string) => {
  return useQuery(['episodes'], () => getEmbed(url));
};

const LogoImage = () => {
  const url = baseURL + 'Logo?populate=%2A';
  return getUrl(url);
};

const useGetLogoImage = () => {
  return useQuery(['logoImg'], () => LogoImage());
};

const HomeWithImg = () => {
  return axios.get(
    baseURL + 'Home?populate=%2A&populate[0]=Home.sectionBackground'
  );
};

const GetHomeWithImg = () => {
  return useQuery(['bgImg'], () => HomeWithImg());
};

const useGetEpisodeList = () => {
  return useQuery(['episodeList'], () => getEpisodeList());
};

const useGetEpisodeListCover = () => {
  return useQuery(['episodeListCover'], () => getEpisodeListCover());
};
export const apiProvider = {
  GetSingleAll,
  GetQueryOEmb,
  GetEpisodesWithParticipants,
  useQueryEpisode,
  useDefineUrl,
  useQueryEpisodeWithParticipants,
  useGetLogoImage,
  GetHomeWithImg,
  useGetEpisodeList,
  useGetEpisodeListCover
};
