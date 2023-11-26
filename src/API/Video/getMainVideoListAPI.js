import axios from "axios";

import baseURL from "../URL";
const HOME_URL = baseURL+"/video/home"
const NEW_URL = baseURL+"/video/home"
const SUB_URL = baseURL+""

async function getHomeVideoListAPI() {
  const res = await axios.get(URL, {
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

async function getNewestVideoListAPI() {
  const res = await axios.get(NEW_URL, {
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("in api res", res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}

async function getSubscribeVideoListAPI() {
  const res = await axios.get()
}

export {
  getHomeVideoListAPI,
  getNewestVideoListAPI,
  getSubscribeVideoListAPI
}