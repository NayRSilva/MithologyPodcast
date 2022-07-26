
import axios from 'axios'; 
import {useQuery} from 'react-query'


const baseURL = 'http://localhost:1337/api/'

const getFunction = (resource:string)=>{
  return axios.get(baseURL+ resource+'?populate=*')
}

const getFunctionCollections = (resource:string) => {
  return axios.get(baseURL+ resource)
}

const getSingleAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunction(resource))
}

const getCollectionsAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunctionCollections(resource))
}

export const apiProvider = { 
  getSingleAll,
  getCollectionsAll
};
