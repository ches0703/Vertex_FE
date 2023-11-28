import axios from "axios";

import baseURL from "../URL";
const HOME_URL = baseURL + "/video/home"
const NEW_URL = baseURL + "/video/newest"

async function getHomeVideoListAPI(data) {
  const res = await axios.get(HOME_URL, {
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
    })
  return res
}

async function getNewestVideoListAPI(data) {
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