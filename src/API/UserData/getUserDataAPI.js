import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/user/profile"

export default async function getUserDataAPI(email) {
  const res = await axios.get(URL, {
    params: email,
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