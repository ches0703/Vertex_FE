import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/playlist";

/**
 * @description 구독한 사용자가 올린 비디오 목록 받기
 * @param  data - userId
 */
export default async function getPlaylistAPI(data) {
  const res = axios
    .get(URL, {
      params: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("playlist list : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
