import axios from "axios"
import baseURL from "../URL";
const URL = baseURL + "/video/watch"

export default async function getVideoAPI(data) {
  console.log("Get Video API Call", data)
  const res = await axios.get(URL, {
    params: data,
    headers: {
      'ngrok-skip-browser-warning': '69420',
    },
  })
    .then((res) => {
      console.log("getVideo Res : ",res)
      return res
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  return res
}

// export default async function getVideoAPI(data) {
//   const res = await axios.get(URL, {
//     params: data,
//     responseType: 'blob',
//     headers: {
//       'ngrok-skip-browser-warning': '69420',
//     },
//   })
//     .then((res) => {
//       return res
//     })
//     .catch((e) => {
//       console.error(e)
//       return null
//     })
//   return res


