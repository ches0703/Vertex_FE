import axios from "axios"

import baseURL from "../URL"

const LIKE_URL = baseURL+"/video/like"
const LIKE_CHECK_URL = baseURL+"/video/like/check"

async function videoLikeAPI(data) {
  const res = axios.post(LIKE_URL, data,{
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}

async function videoLikeCheck(data) {
  const res = axios.get(LIKE_CHECK_URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}


export {
  videoLikeAPI,
  videoLikeCheck
}