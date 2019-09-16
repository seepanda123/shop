import axios from 'axios';


let base = "http://jx.xuzhixiang.top/ap/api";


export const POST = (url, params) => {
  return axios.post(`${base}${url}`,params).then(res=>res.data)
}
export const GET = (url, params) => {
  return axios(`${base}${url}`,{params:params}).then(res=>res.data)
}