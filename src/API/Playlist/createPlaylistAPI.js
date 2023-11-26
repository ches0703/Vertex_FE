import axios from "axios";
import baseURL from "../URL";
const URL = baseURL + "/playlist";

/**
 * @description 사용자의 플레이 리스트 생성
 * @param  data - listName,userId,isPrivate
 */
export default async function createPlaylistAPI(data) {
  const res = axios
    .post(URL, {
      body: data,
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log("create playlist : ", res);
      return res;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
  return res;
}
