import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/community"

export default async function deletePostAPI(data) {
  const res = await axios.delete(URL,{
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.log(e)
      return false
    })
  return res
}