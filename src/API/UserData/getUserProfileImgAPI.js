import axios from "axios";
import baseURL from "../URL";

const URL = baseURL+"/user/profile/image"

export default async function getUserProfileImgAPI(email) {
  // console.log("Get User Profile API Call", email)
  if(email.email){
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
        return false
      })
    return res
  } else {
    return null
  }

}