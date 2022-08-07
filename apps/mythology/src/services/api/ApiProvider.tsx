
import axios from 'axios'; 
import {useQuery} from 'react-query'


const baseURL = 'http://localhost:1337/api/'

const getFunction = (resource:string)=>{
    return axios.get(baseURL+ resource+'?populate=*')
  
  }

const GetSingleAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunction(resource))


}

const getEmbed= (url:string)=>{
  return axios.get('https://open.spotify.com/oembed?url='+url)
}

const GetQueryOEmb= (url:string)=>{
  return useQuery(['episodes'], ()=> getEmbed(url))

}

export const apiProvider = { 
   GetSingleAll,
   GetQueryOEmb
  };