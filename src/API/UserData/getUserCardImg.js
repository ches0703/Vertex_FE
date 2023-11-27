import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/user/channel/image"

export default async function getUserCardImgAPI(email) {
  const res = await axios.get(URL, {
    params: email,
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