import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/community/image"

export default async function getPostImage(postData) {
  const res = axios.get(URL, {
    params: postData,
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