import axios from 'axios';
import { baseURL } from './ApiProvider';
import { useQuery } from 'react-query';
import { Link } from '../../components/model/episodeAttributes';

export const getGlobalLinks = () =>
  axios
    .get(`${baseURL}links-globais?populate=*`)
    .then<Link[]>((data) => data?.data?.data?.attributes?.links);

export const useGlobalLinks = () =>
  useQuery(['links-globais', 'strapi'], getGlobalLinks);
