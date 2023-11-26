import axios from "axios";
import baseURL from "../URL";

const URL = ""


export default async function CheckDupEmail(email) {
  
  await axios.get(URL, email)
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
    })
}