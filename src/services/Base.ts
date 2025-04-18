import axios from 'axios'

export const WebbaseUrl = axios.create({
   baseURL:"http://104.236.199.131:4100/api",
   headers:{
    "Content-Type":"application/json",
   }
})