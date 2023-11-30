import axios from "axios";
import baseURL from "../URL";
const URL = baseURL+"/video/recommend/side"

export async function recommendVideoAPI(data){
  const res = await axios.get(URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("REC API res : ", res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}