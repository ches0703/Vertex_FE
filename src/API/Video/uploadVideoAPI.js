import axios from "axios";
import Cookies from "js-cookie";

// const URL = "https://careful-horribly-ladybird.ngrok-free.app/video"
const URL = "https://careful-horribly-ladybird.ngrok-free.app/video"


export default async function uploadVideoAPI(data) {
  //data.video = Blob(data.video)

  // console.log(data)
  console.log(document.cookie);

  for (let key of data.keys()) {
    console.log(key);
  }
  for (let value of data.values()) {
    console.log(value);
  }
  

  const res = await fetch({
    method: 'post',
    url: URL,
    body: data,
    headers: {
      //'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      "Cookie": document.cookie,
    }
  })

  // const res = await axios({
  //   method: 'post',
  //   url: URL,
  //   data,
  //   // withCredentials: true,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     'Access-Control-Expose-Headers': '*',
  //     'Access-Control-Allow-Credentials': true,
      // 'Content-Type': 'application/json',
  //     "Authorization": document.cookie,
  //   }
  // })

  return res;
}