import axios from "axios";

import baseURL from "../URL";
const LIKELIST_URL = baseURL + "/video/like/list";

export default async function getLikeVideoListAPI(email) {
    const res = await axios.get("http://localhost:8000/video/like/list", {
      params: email,
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
    })
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((e) => {
        console.log(e)
      })
    return res
  }