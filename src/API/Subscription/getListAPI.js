import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/subscription/list";

/**
 * @description 사용자의 구독 리스트 받기
 * @param  data - userId
 */
export default async function getSubscribeListAPI(data) {
  const res = axios
    .get(URL, {
      params: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("subscription list : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
