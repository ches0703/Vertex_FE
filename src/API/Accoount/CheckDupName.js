import axios from "axios";

const URL = "https://rooster-master-mayfly.ngrok-free.app/auth/check/name"

export default async function CheckDupName(name) {
  console.log("CheckDupName API Start : ", name)
  await axios.get(URL, name)
    .then((data) => {
      console.log("in API", data)
      return data
    })
    .catch((e) => {
      console.error(e)
    })
}