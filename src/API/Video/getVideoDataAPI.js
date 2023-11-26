import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/video/data";

export default async function getVideoDataAPI(videoId) {
    const res = axios.get(URL, {
      params: videoId,
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