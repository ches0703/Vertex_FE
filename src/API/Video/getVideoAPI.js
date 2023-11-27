import axios from "axios"
import baseURL from "../URL";
const URL = baseURL + "/video/watch"

export default async function getVideoAPI(data) {
  const res = await axios.get(URL, {
    params: data,
    responseType: 'blob',
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}

