import axios from "axios";

import baseURL from "../URL";
const URL = baseURL + "/community/list"

export default async function getCommunityPostList(data) {
  const response = await axios.get(URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    }
  })
    .then((res) => {
      console.log("getPostListAPI : ",res)
      return res
    })
    .catch((e) => {
      console.error(e)
    })
  return response;
}
