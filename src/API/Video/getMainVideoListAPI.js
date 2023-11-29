import axios from "axios";

import baseURL from "../URL";
const HOME_URL = baseURL + "/video/home"
const NEW_URL = baseURL + "/video/newest"
const SUB_URL = baseURL + "/subscription/contents"

const REC_URL = baseURL + '/video/recommend'

async function getHomeVideoListAPI(data) {
  console.log("Hone API data : ", data)
  const res = await axios.get(HOME_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("Hone API res : ", res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}

async function getRecommendedListAPI(data) {
  console.log('Recommend API data : ', data)
  const res = await axios.get(REC_URL, {
    params: { history: data },
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      // console.log(res.data)
      // res = String(res.data).replace(/'/g, '"')
      // console.log("Recommend API res : ", JSON.parse(res))
      // return res
      return res.data
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}

async function getNewestVideoListAPI(data) {
  console.log("New API data : ", data)
  const res = await axios.get(NEW_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("New API res : ", res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}

async function getSubscribeVideoListAPI(data) {
  console.log("Sub API data : ", data)
  const res = await axios.get(SUB_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("Sub API res : ", res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}

export {
  getHomeVideoListAPI,
  getNewestVideoListAPI,
  getSubscribeVideoListAPI,
  getRecommendedListAPI
}