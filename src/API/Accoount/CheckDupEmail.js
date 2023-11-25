import axios from "axios";

const URL = ""

export default async function CheckDupEmail(email) {
  console.log("CheckDupEmail API Start : ", email)
  await axios.get(URL, email)
    .then((data) => {
      console.log("in API", email)
      return data
    })
    .catch((e) => {
      console.error(e)
    })
}