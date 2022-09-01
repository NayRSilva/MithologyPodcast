import axios from 'axios';
import { baseURL } from './ApiProvider';
import { useQuery } from 'react-query';

export const getGlobalLinks = () => axios.get(`${baseURL}/links-globais`);

export const useGlobalLinks = () => useQuery('links-globais', getGlobalLinks);
