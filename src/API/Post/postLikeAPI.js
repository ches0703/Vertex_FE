import axios from "axios"

import baseURL from "../URL"

const LIKE_URL = baseURL+"/community/like"
const LIKE_CHECK_URL = baseURL+"/community/like/check"

async function postLikeAPI(data) {
  const res = axios.post(LIKE_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("POST like api :", res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}

async function postLikeCheckAPI(data) {
  const res = axios.get(LIKE_CHECK_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      
      console.log("POST like Check api :", res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}

export{
  postLikeAPI,
  postLikeCheckAPI
}