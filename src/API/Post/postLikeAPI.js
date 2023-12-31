import axios from "axios"

import baseURL from "../URL"

const LIKE_URL = baseURL+"/community/like"
const LIKE_CHECK_URL = baseURL+"/community/like/check"

async function postLikeAPI(data) {
  // console.log("post like start", data)
  const res = axios.post(LIKE_URL, data,{
    // params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      // console.log("POST like api :", res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}

// Like Check
async function postLikeCheckAPI(data) {
  // console.log("post like check start", data)
  const res = axios.get(LIKE_CHECK_URL,  {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      // console.log("POST like Check api :", res)
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