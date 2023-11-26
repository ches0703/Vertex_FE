import axios from "axios";
import Cookies from "js-cookie";
import baseURL from "../URL";

const URL = baseURL+"/video"


export default async function uploadVideoAPI(data) {
  
  console.log(data)

  const res = axios.post(URL, data)
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
    })

  return res

  // const res = await fetch({
  //   method: 'POST',
  //   url: URL,
  //   body: data,
  //   headers: {
  //     "Cookie": document.cookie,
  //   }
  // })

  // const res = await axios({
  //   method: 'post',
  //   url: URL,
  //   data,
  //   // withCredentials: true,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     'Access-Control-Expose-Headers': '*',
  //     'Access-Control-Allow-Credentials': true,
  //     'Content-Type': 'application/json',
  //     "Authorization": document.cookie,
  //   }
  // })

}