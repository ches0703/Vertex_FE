import axios from "axios"
import baseURL from "../URL";
const URL = baseURL + "/video/channel/list"

export default async function(data) {
  const res = axios.get(URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}