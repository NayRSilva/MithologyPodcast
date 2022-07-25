
import axios from 'axios'; 
import {useQuery} from 'react-query'


const baseURL = 'http://localhost:1337/api/'

const getFunction = (resource:string)=>{
    return axios.get(baseURL+ resource+'?populate=*')
  
  }

const getSingleAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunction(resource))


}

export const apiProvider = { 
   getSingleAll
  };