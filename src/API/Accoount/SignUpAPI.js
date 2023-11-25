import axios from "axios";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/signup/local"

export default async function SignUpAPI(data) {
  const res = await axios.post(URL, data)
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}
