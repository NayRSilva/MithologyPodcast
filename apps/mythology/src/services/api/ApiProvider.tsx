
import axios from 'axios'; 
import {useQuery} from 'react-query'


const baseURL = 'http://localhost:1337/api/'

const getFunction = (resource:string)=>{
    return axios.get(baseURL+ resource+'?populate=*')
  
  }

const getSingleAll = (resource:string, nameKey:string) => {
  return useQuery([nameKey], ()=> getFunction(resource))


}

const getEmbed= ()=>{
  return axios.get('https://open.spotify.com/oembed?url=http://open.spotify.com/track/298gs9ATwr2rD9tGYJKlQR')
}

const getQueryOEmb= ()=>{
  return useQuery(['episodes'], ()=> getEmbed())

}

export const apiProvider = { 
   getSingleAll,
   getQueryOEmb
  };