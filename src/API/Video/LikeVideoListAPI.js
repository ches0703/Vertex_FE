import axios from "axios";

import baseURL from "../URL";
const LIKELIST_URL = baseURL + "/video/like/list";

async function getLikeVideoListAPI(data) {
  const res = await axios.get(LIKELIST_URL, {
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

async function deleteLikeVideoListAPI(data) {
  console.log(data);
  const res = await axios.delete(LIKELIST_URL, {
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

export {
  getLikeVideoListAPI,
  deleteLikeVideoListAPI
}