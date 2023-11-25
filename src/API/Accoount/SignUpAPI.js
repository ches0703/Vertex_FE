import axios from "axios";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/signup/local"

export default async function SignUpAPI(data) {
  const res = await axios.post(URL, data)
    .then((data) => {
      return data
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}
