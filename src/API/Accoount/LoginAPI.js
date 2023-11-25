import axios from "axios";
import { setToken } from "../Cookie";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/login/local"

export default async function LoginAPI(data) {
  const res = await axios.post(URL, data,)
    .then((res) => {
      setToken(res.data.session)
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res



}