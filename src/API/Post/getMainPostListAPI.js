import axios from "axios";

import baseURL from "../URL";
const HOME_URL = baseURL + "/community/list/new"
const NEW_URL = baseURL + "/community/list/new"
const SUB_URL = baseURL + ""

async function getMainPostListAPI(data) {
  const res = await axios.get(NEW_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.log(e)
      return false
    })
  return res
}


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
      return false
    })
  return res
}


export {
  getMainPostListAPI,
  getNewestPostListAPI
}