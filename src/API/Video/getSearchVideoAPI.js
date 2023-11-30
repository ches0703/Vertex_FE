import axios, { Axios } from "axios";

import baseURL from "../URL";

const URL = baseURL+"/video/search"

export default async function getSearchVideoAPI(data) {
  console.log("Search API data : ",data)
  const res = await axios.get(URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
  .then((res) => {
    console.log("Search API res : ",res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
  return res
}