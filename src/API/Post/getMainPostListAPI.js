import axios from "axios";

import baseURL from "../URL";
const HOME_URL = baseURL + ""
const NEW_URL = baseURL + "/community/list/new"
const SUB_URL = baseURL + ""


async function getNewestPostListAPI() {
  const res = await axios.get(NEW_URL, {
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}