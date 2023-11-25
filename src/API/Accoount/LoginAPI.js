import axios from "axios";

const URL = "https://careful-horribly-ladybird.ngrok-free.app/auth/login/local"

export default async function LoginAPI(data) {
  const res = await axios.post(URL, data,)
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}