import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/user/profile/image"

export default async function getUserProfileImgAPI(email) {
  console.log("Get User Profile API Call")
  const res = await axios.get(URL, {
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}