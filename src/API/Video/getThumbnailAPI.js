import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/video/thumbnail"

async function getThumbnailAPI(thumbData) {
  // console.log("Get VideoThumb API Call")
  const res = await axios.get(URL, {
    params: thumbData,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      console.error(e)
      return false
    })
  return res
}

async function getYoutubeThumbnailAPI(youtubeId) {
  const tURL = 'https://img.youtube.com/vi/' + youtubeId.slice(32) + '/0.jpg'
  return tURL;
}

export {
  getThumbnailAPI,
  getYoutubeThumbnailAPI
}