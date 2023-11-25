import axios from "axios";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/login/local"

export default async function LoginAPI(data) {
  const res = await axios.post(URL, data)
    .then((data) => {
      console.log("In API data : ", data)
      return data
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}